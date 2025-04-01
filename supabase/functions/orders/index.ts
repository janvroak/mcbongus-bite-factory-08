
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Auth check - orders require authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ status: "error", message: "Authentication required" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 }
      );
    }
    
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ status: "error", message: "Invalid authentication" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 }
      );
    }
    
    // Check if admin or restaurant owner
    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id);
    
    const isAdmin = roles?.some(r => r.role === 'admin');
    const isRestaurantOwner = roles?.some(r => r.role === 'restaurant_owner');

    // URL parsing
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/orders/');
    const orderId = pathParts.length > 1 ? pathParts[1] : null;
    
    let responseBody;
    let status;

    switch (req.method) {
      case "GET":
        if (orderId) {
          // Get specific order - the user must be the order owner, an admin, or the restaurant owner
          const { data: order, error } = await supabase
            .from('orders')
            .select('*, restaurant:restaurants(*)')
            .eq('id', orderId)
            .single();
          
          if (error) {
            responseBody = { status: "error", message: "Order not found" };
            status = 404;
          } else if (order.user_id === user.id || isAdmin || 
                    (isRestaurantOwner && await isOwnerOfRestaurant(supabase, user.id, order.restaurant_id))) {
            responseBody = { status: "success", data: order };
            status = 200;
          } else {
            responseBody = { status: "error", message: "Unauthorized" };
            status = 403;
          }
        } else {
          // Get all orders based on role
          let query = supabase.from('orders').select('*, restaurant:restaurants(*)');
          
          if (!isAdmin) {
            if (isRestaurantOwner) {
              // Get restaurant IDs owned by this user
              const { data: ownedRestaurants } = await supabase
                .from('restaurants')
                .select('id')
                .eq('owner_id', user.id);
                
              if (ownedRestaurants && ownedRestaurants.length > 0) {
                const restaurantIds = ownedRestaurants.map(r => r.id);
                query = query.in('restaurant_id', restaurantIds);
              } else {
                // No restaurants, return empty list
                responseBody = { status: "success", data: [] };
                status = 200;
                break;
              }
            } else {
              // Regular user only sees their own orders
              query = query.eq('user_id', user.id);
            }
          }
          
          const { data, error } = await query;
          
          if (error) {
            responseBody = { status: "error", message: error.message };
            status = 500;
          } else {
            responseBody = { status: "success", data };
            status = 200;
          }
        }
        break;
        
      case "POST":
        // Create new order - any authenticated user
        const orderData = await req.json();
        
        // Add the user ID
        orderData.user_id = user.id;
        
        // Add default status if not provided
        if (!orderData.status) {
          orderData.status = 'pending';
        }
        
        // Add timestamp
        orderData.created_at = new Date().toISOString();
        
        const { data, error } = await supabase
          .from('orders')
          .insert(orderData)
          .select()
          .single();
        
        if (error) {
          responseBody = { status: "error", message: error.message };
          status = 400;
        } else {
          // Broadcast order status update via realtime
          await supabase
            .from('order_status_updates')
            .insert({
              order_id: data.id,
              status: data.status,
              updated_at: new Date().toISOString()
            });
            
          responseBody = { 
            status: "success", 
            data,
            orderId: data.id,
            estimatedDeliveryTime: "30-45 minutes" 
          };
          status = 201;
        }
        break;
        
      case "PUT":
      case "PATCH":
        // Update order - owner, admin, or restaurant owner
        if (!orderId) {
          responseBody = { status: "error", message: "Order ID required" };
          status = 400;
          break;
        }
        
        // Check if user can update this order
        const { data: orderToUpdate, error: orderError } = await supabase
          .from('orders')
          .select('*')
          .eq('id', orderId)
          .single();
          
        if (orderError) {
          responseBody = { status: "error", message: "Order not found" };
          status = 404;
          break;
        }
        
        // Only certain status changes are allowed for customer
        // Restaurant owners and admins have more privileges
        const updateData = await req.json();
        
        // Regular users can only cancel their own orders
        if (orderToUpdate.user_id === user.id && 
            !isAdmin && 
            !isRestaurantOwner &&
            updateData.status && 
            updateData.status !== 'cancelled') {
          responseBody = { status: "error", message: "You can only cancel your order" };
          status = 403;
          break;
        }
        
        // Restaurant owners can only update orders for their restaurants
        if (isRestaurantOwner && 
            !isAdmin && 
            !await isOwnerOfRestaurant(supabase, user.id, orderToUpdate.restaurant_id)) {
          responseBody = { status: "error", message: "Not authorized for this restaurant" };
          status = 403;
          break;
        }
        
        // Proceed with update
        const { data: updatedOrder, error: updateError } = await supabase
          .from('orders')
          .update(updateData)
          .eq('id', orderId)
          .select()
          .single();
          
        if (updateError) {
          responseBody = { status: "error", message: updateError.message };
          status = 400;
        } else {
          // Broadcast status update via realtime
          if (updateData.status) {
            await supabase
              .from('order_status_updates')
              .insert({
                order_id: orderId,
                status: updateData.status,
                updated_at: new Date().toISOString()
              });
          }
          
          responseBody = { status: "success", data: updatedOrder };
          status = 200;
        }
        break;
        
      default:
        responseBody = { status: "error", message: "Method not allowed" };
        status = 405;
    }

    return new Response(JSON.stringify(responseBody), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

// Helper function to check if user is owner of a restaurant
async function isOwnerOfRestaurant(supabase, userId, restaurantId) {
  const { data } = await supabase
    .from('restaurants')
    .select('id')
    .eq('id', restaurantId)
    .eq('owner_id', userId)
    .single();
    
  return !!data;
}
