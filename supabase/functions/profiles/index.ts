
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Service Role Key
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const authClient = createClient(supabaseUrl, supabaseAnonKey);

    // Get the authorization header from the request
    const authHeader = req.headers.get('Authorization');

    if (!authHeader) {
      throw new Error('Missing Authorization header');
    }

    // Verify and get user from the token
    const { data: { user }, error: authError } = await authClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (authError || !user) {
      throw new Error('Invalid authentication token');
    }

    // URL for routing
    const url = new URL(req.url);
    const path = url.pathname.split('/profiles/')[1];
    const method = req.method;

    // Response object
    let responseBody = {};
    let status = 200;

    // Route handling
    if (!path && method === "GET") {
      // Get current user profile
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      responseBody = { profile: data };
    } 
    else if (method === "PUT" || method === "PATCH") {
      // Update profile
      const profileData = await req.json();

      // Remove sensitive fields that shouldn't be updated
      const { id, created_at, ...safeProfileData } = profileData;

      const { data, error } = await supabase
        .from('profiles')
        .update(safeProfileData)
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;
      responseBody = { profile: data };
    }
    else {
      return new Response(
        JSON.stringify({ error: "Endpoint not found" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
      );
    }

    return new Response(
      JSON.stringify(responseBody),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
