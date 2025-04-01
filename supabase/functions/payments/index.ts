
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { corsHeaders } from "../_shared/cors.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2023-10-16" });
    
    // Authentication required
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
    
    // URL parsing for routing
    const url = new URL(req.url);
    const path = url.pathname.split('/payments/')[1];
    
    let responseBody;
    let status;
    
    // Process based on endpoint
    switch(path) {
      case "create-payment-intent":
        // Create a payment intent for an order
        if (req.method !== "POST") {
          responseBody = { status: "error", message: "Method not allowed" };
          status = 405;
          break;
        }
        
        const { amount, orderId, currency = "inr" } = await req.json();
        
        if (!amount || !orderId) {
          responseBody = { status: "error", message: "Amount and order ID are required" };
          status = 400;
          break;
        }
        
        // Verify the order belongs to this user
        const { data: order, error: orderError } = await supabase
          .from('orders')
          .select('*')
          .eq('id', orderId)
          .eq('user_id', user.id)
          .single();
          
        if (orderError || !order) {
          responseBody = { status: "error", message: "Order not found or unauthorized" };
          status = orderError ? 404 : 403;
          break;
        }
        
        // Create a payment intent
        try {
          const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents/paise
            currency,
            metadata: {
              orderId,
              userId: user.id
            }
          });
          
          // Update order with payment intent ID
          await supabase
            .from('orders')
            .update({ payment_intent_id: paymentIntent.id })
            .eq('id', orderId);
          
          responseBody = {
            status: "success",
            clientSecret: paymentIntent.client_secret
          };
          status = 200;
        } catch (stripeError) {
          responseBody = { status: "error", message: stripeError.message };
          status = 400;
        }
        break;
        
      case "payment-webhook":
        // Process webhook from Stripe
        // Note: In production, this would verify the signature
        const signature = req.headers.get("stripe-signature");
        
        try {
          const body = await req.text();
          const event = stripe.webhooks.constructEvent(
            body,
            signature || "",
            Deno.env.get("STRIPE_WEBHOOK_SECRET") || ""
          );
          
          // Handle the event
          switch (event.type) {
            case "payment_intent.succeeded":
              const paymentIntent = event.data.object;
              
              // Update order status
              if (paymentIntent.metadata?.orderId) {
                await supabase
                  .from('orders')
                  .update({ 
                    status: 'paid',
                    payment_status: 'completed',
                    updated_at: new Date().toISOString()
                  })
                  .eq('id', paymentIntent.metadata.orderId);
                  
                // Broadcast status update
                await supabase
                  .from('order_status_updates')
                  .insert({
                    order_id: paymentIntent.metadata.orderId,
                    status: 'paid',
                    updated_at: new Date().toISOString()
                  });
              }
              break;
              
            case "payment_intent.payment_failed":
              const failedPaymentIntent = event.data.object;
              
              // Update order status
              if (failedPaymentIntent.metadata?.orderId) {
                await supabase
                  .from('orders')
                  .update({ 
                    payment_status: 'failed',
                    updated_at: new Date().toISOString()
                  })
                  .eq('id', failedPaymentIntent.metadata.orderId);
              }
              break;
          }
          
          responseBody = { status: "success", received: true };
          status = 200;
        } catch (webhookError) {
          responseBody = { status: "error", message: webhookError.message };
          status = 400;
        }
        break;
        
      default:
        responseBody = { status: "error", message: "Endpoint not found" };
        status = 404;
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
