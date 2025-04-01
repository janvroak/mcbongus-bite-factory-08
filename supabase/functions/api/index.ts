
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

    // Get the authorization header from the request
    const authHeader = req.headers.get('Authorization');

    // URL for routing
    const url = new URL(req.url);
    const path = url.pathname.split('/api/')[1];

    // Response object
    let responseBody = { status: "error", message: "Endpoint not found" };
    let status = 404;

    // Route handling
    if (path === "health") {
      responseBody = { status: "success", message: "API is healthy" };
      status = 200;
    } 
    // Add more routes as needed

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
