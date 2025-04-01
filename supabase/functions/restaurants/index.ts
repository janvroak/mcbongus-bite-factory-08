
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
    // Create a Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get authorization if present
    const authHeader = req.headers.get('Authorization');
    let adminMode = false;
    
    // Check if admin based on auth header and role
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error } = await supabase.auth.getUser(token);
      
      if (!error && user) {
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .single();
          
        if (roles?.role === 'admin') {
          adminMode = true;
        }
      }
    }

    // Request URL
    const url = new URL(req.url);
    const pathParts = url.pathname.split('/restaurants/');
    const restaurantId = pathParts.length > 1 ? pathParts[1] : null;
    
    // Handle request based on method
    let responseBody;
    let status;

    switch (req.method) {
      case "GET":
        if (restaurantId) {
          // Get single restaurant
          const { data, error } = await supabase
            .from('restaurants')
            .select('*')
            .eq('id', restaurantId)
            .single();
          
          if (error) {
            responseBody = { status: "error", message: "Restaurant not found" };
            status = 404;
          } else {
            responseBody = { status: "success", data };
            status = 200;
          }
        } else {
          // Get all restaurants
          const { data, error } = await supabase
            .from('restaurants')
            .select('*');
          
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
        // Create new restaurant - only for admins
        if (!adminMode) {
          responseBody = { status: "error", message: "Unauthorized" };
          status = 403;
        } else {
          const restaurantData = await req.json();
          const { data, error } = await supabase
            .from('restaurants')
            .insert(restaurantData)
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
        // Update restaurant - only for admins
        if (!adminMode || !restaurantId) {
          responseBody = { status: "error", message: "Unauthorized or missing ID" };
          status = !adminMode ? 403 : 400;
        } else {
          const restaurantData = await req.json();
          const { data, error } = await supabase
            .from('restaurants')
            .update(restaurantData)
            .eq('id', restaurantId)
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
        // Delete restaurant - only for admins
        if (!adminMode || !restaurantId) {
          responseBody = { status: "error", message: "Unauthorized or missing ID" };
          status = !adminMode ? 403 : 400;
        } else {
          const { error } = await supabase
            .from('restaurants')
            .delete()
            .eq('id', restaurantId);
          
          if (error) {
            responseBody = { status: "error", message: error.message };
            status = 400;
          } else {
            responseBody = { status: "success", message: "Restaurant deleted" };
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
