
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

serve(async (req) => {
  // This is a WebSocket endpoint
  const { socket, response } = Deno.upgradeWebSocket(req);
  
  // Connection to track which order this socket is watching
  let trackingOrderId = null;
  let userId = null;
  
  socket.onopen = () => {
    console.log("WebSocket connection established");
  };
  
  socket.onmessage = async (event) => {
    try {
      const data = JSON.parse(event.data);
      
      // Command to start tracking an order
      if (data.action === "track" && data.orderId && data.token) {
        trackingOrderId = data.orderId;
        
        // Create Supabase client
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        // Validate the user token
        const { data: userData, error: authError } = await supabase.auth.getUser(data.token);
        
        if (authError) {
          socket.send(JSON.stringify({
            error: "Authentication error",
            message: "Invalid token"
          }));
          return;
        }
        
        userId = userData.user?.id;
        
        // Check if the user can access this order
        const { data: order, error: orderError } = await supabase
          .from('orders')
          .select('*, restaurant:restaurants(*)')
          .eq('id', trackingOrderId)
          .single();
          
        if (orderError || !order) {
          socket.send(JSON.stringify({
            error: "Order not found",
            message: "The specified order does not exist"
          }));
          return;
        }
        
        // Check if the user owns this order or has permission
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', userId);
          
        const isAdmin = roles?.some(r => r.role === 'admin');
        const isRestaurantOwner = order.restaurant && roles?.some(r => r.role === 'restaurant_owner');
        
        if (order.user_id !== userId && !isAdmin && !isRestaurantOwner) {
          socket.send(JSON.stringify({
            error: "Unauthorized",
            message: "You don't have permission to track this order"
          }));
          return;
        }
        
        // Subscribe to order status updates
        const orderStatusChannel = supabase
          .channel(`order-${trackingOrderId}`)
          .on('postgres_changes', { 
            event: 'INSERT',
            schema: 'public',
            table: 'order_status_updates',
            filter: `order_id=eq.${trackingOrderId}`
          }, (payload) => {
            socket.send(JSON.stringify({
              type: "status_update",
              status: payload.new.status,
              timestamp: payload.new.updated_at,
              location: payload.new.location
            }));
          })
          .subscribe();
          
        // Send the initial status
        socket.send(JSON.stringify({
          type: "initial_status",
          status: order.status,
          orderId: order.id,
          restaurant: order.restaurant?.name,
          items: order.items,
          timestamp: order.updated_at || order.created_at
        }));
      }
    } catch (error) {
      socket.send(JSON.stringify({
        error: "Error processing message",
        message: error.message
      }));
    }
  };
  
  socket.onclose = () => {
    console.log(`WebSocket closed for order ${trackingOrderId}`);
    // Clean up any subscriptions here if needed
  };
  
  return response;
});
