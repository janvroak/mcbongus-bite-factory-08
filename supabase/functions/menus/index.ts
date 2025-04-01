
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
    
    // Auth check for protected operations
    const authHeader = req.headers.get('Authorization');
    let adminMode = false;
    let restaurantOwnerId = null;
    
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error } = await supabase.auth.getUser(token);
      
      if (!error && user) {
        // Check if admin
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .single();
          
        if (roles?.role === 'admin') {
          adminMode = true;
        }
        
        // Check if restaurant owner
        const { data: restaurant } = await supabase
          .from('restaurants')
          .select('id')
          .eq('owner_id', user.id)
          .single();
          
        if (restaurant) {
          restaurantOwnerId = restaurant.id;
        }
      }
    }

    // URL parsing
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/menus/');
    const menuId = pathParts.length > 1 ? pathParts[1] : null;
    const restaurantId = url.searchParams.get('restaurantId');
    
    let responseBody;
    let status;

    switch (req.method) {
      case "GET":
        if (menuId) {
          // Get specific menu item
          const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('id', menuId)
            .single();
          
          if (error) {
            responseBody = { status: "error", message: "Menu item not found" };
            status = 404;
          } else {
            responseBody = { status: "success", data };
            status = 200;
          }
        } else if (restaurantId) {
          // Get all menu items for a restaurant
          const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('restaurant_id', restaurantId);
          
          if (error) {
            responseBody = { status: "error", message: error.message };
            status = 500;
          } else {
            // Group by category
            const categorized = data.reduce((acc, item) => {
              if (!acc[item.category]) {
                acc[item.category] = [];
              }
              acc[item.category].push(item);
              return acc;
            }, {});
            
            const menuCategories = Object.keys(categorized).map(name => ({
              name,
              items: categorized[name]
            }));
            
            responseBody = { status: "success", data: menuCategories };
            status = 200;
          }
        } else {
          responseBody = { status: "error", message: "Restaurant ID required" };
          status = 400;
        }
        break;
        
      case "POST":
        // Create menu item - admin or restaurant owner
        if (!adminMode && (!restaurantOwnerId || restaurantId !== restaurantOwnerId)) {
          responseBody = { status: "error", message: "Unauthorized" };
          status = 403;
        } else {
          const menuData = await req.json();
          const { data, error } = await supabase
            .from('menu_items')
            .insert(menuData)
            .select()
            .single();
          
          if (error) {
            responseBody = { status: "error", message: error.message };
            status = 400;
          } else {
            responseBody = { status: "success", data };
            status = 201;
          }
        }
        break;
        
      case "PUT":
      case "PATCH":
        // Update menu item
        if (!menuId || (!adminMode && (!restaurantOwnerId || restaurantId !== restaurantOwnerId))) {
          responseBody = { status: "error", message: "Unauthorized or missing ID" };
          status = !menuId ? 400 : 403;
        } else {
          const menuData = await req.json();
          const { data, error } = await supabase
            .from('menu_items')
            .update(menuData)
            .eq('id', menuId)
            .select()
            .single();
          
          if (error) {
            responseBody = { status: "error", message: error.message };
            status = 400;
          } else {
            responseBody = { status: "success", data };
            status = 200;
          }
        }
        break;
        
      case "DELETE":
        // Delete menu item
        if (!menuId || (!adminMode && (!restaurantOwnerId || restaurantId !== restaurantOwnerId))) {
          responseBody = { status: "error", message: "Unauthorized or missing ID" };
          status = !menuId ? 400 : 403;
        } else {
          const { error } = await supabase
            .from('menu_items')
            .delete()
            .eq('id', menuId);
          
          if (error) {
            responseBody = { status: "error", message: error.message };
            status = 400;
          } else {
            responseBody = { status: "success", message: "Menu item deleted" };
            status = 200;
          }
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
