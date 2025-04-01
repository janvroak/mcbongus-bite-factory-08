
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
    
    // Admin-only endpoints require strict authorization
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
    
    // Verify admin role
    const { data: roles, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id);
      
    const isAdmin = roles?.some(r => r.role === 'admin');
    
    if (roleError || !isAdmin) {
      return new Response(
        JSON.stringify({ status: "error", message: "Administrator access required" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 403 }
      );
    }
    
    // URL parsing for routing
    const url = new URL(req.url);
    const path = url.pathname.split('/admin/')[1];
    
    let responseBody;
    let status;
    
    // Process based on endpoint
    switch(path) {
      case "dashboard":
        // Get dashboard statistics
        const stats = await getDashboardStats(supabase);
        responseBody = { status: "success", data: stats };
        status = 200;
        break;
        
      case "users":
        // User management
        switch (req.method) {
          case "GET":
            const { data: users, error: usersError } = await supabase
              .from('profiles')
              .select(`
                *,
                roles:user_roles(role)
              `);
              
            if (usersError) {
              responseBody = { status: "error", message: usersError.message };
              status = 500;
            } else {
              responseBody = { status: "success", data: users };
              status = 200;
            }
            break;
            
          case "POST":
            const { email, password, role, ...profileData } = await req.json();
            
            // Create the user
            const { data: createdUser, error: createError } = await supabase.auth.admin.createUser({
              email,
              password,
              email_confirm: true
            });
            
            if (createError) {
              responseBody = { status: "error", message: createError.message };
              status = 400;
              break;
            }
            
            // Create profile
            await supabase
              .from('profiles')
              .insert({
                id: createdUser.user.id,
                ...profileData
              });
              
            // Assign role if specified
            if (role) {
              await supabase
                .from('user_roles')
                .insert({
                  user_id: createdUser.user.id,
                  role
                });
            }
            
            responseBody = { 
              status: "success", 
              message: "User created successfully",
              data: createdUser.user
            };
            status = 201;
            break;
            
          default:
            responseBody = { status: "error", message: "Method not allowed" };
            status = 405;
        }
        break;
        
      case "restaurants":
        // Restaurant management (already handled by restaurants endpoint)
        return new Response(
          JSON.stringify({ status: "error", message: "Use /restaurants endpoint" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
        
      case "reports":
        // Generate reports
        const reportType = url.searchParams.get('type');
        const from = url.searchParams.get('from');
        const to = url.searchParams.get('to');
        
        if (!reportType) {
          responseBody = { status: "error", message: "Report type required" };
          status = 400;
          break;
        }
        
        const report = await generateReport(supabase, reportType, from, to);
        responseBody = { status: "success", data: report };
        status = 200;
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

// Helper function to get dashboard statistics
async function getDashboardStats(supabase) {
  // Get user count
  const { count: userCount } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true });
    
  // Get restaurant count
  const { count: restaurantCount } = await supabase
    .from('restaurants')
    .select('*', { count: 'exact', head: true });
    
  // Get order count and revenue
  const { data: orders } = await supabase
    .from('orders')
    .select('total_amount, created_at, status');
    
  // Calculate total revenue and recent orders
  let totalRevenue = 0;
  let recentOrders = 0;
  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  orders?.forEach(order => {
    if (order.status !== 'cancelled') {
      totalRevenue += order.total_amount || 0;
      
      if (new Date(order.created_at) >= lastWeek) {
        recentOrders++;
      }
    }
  });
  
  return {
    userCount: userCount || 0,
    restaurantCount: restaurantCount || 0,
    orderCount: orders?.length || 0,
    totalRevenue,
    recentOrders
  };
}

// Helper function to generate reports
async function generateReport(supabase, reportType, fromDate, toDate) {
  const from = fromDate ? new Date(fromDate) : new Date(0);
  const to = toDate ? new Date(toDate) : new Date();
  
  switch (reportType) {
    case 'sales':
      const { data: salesData } = await supabase
        .from('orders')
        .select(`
          id, 
          created_at, 
          total_amount, 
          status,
          restaurant:restaurants(name)
        `)
        .gte('created_at', from.toISOString())
        .lte('created_at', to.toISOString())
        .order('created_at', { ascending: false });
        
      // Group by date
      const dailySales = salesData?.reduce((acc, order) => {
        const date = order.created_at.split('T')[0];
        if (!acc[date]) {
          acc[date] = { date, total: 0, count: 0 };
        }
        if (order.status !== 'cancelled') {
          acc[date].total += order.total_amount || 0;
          acc[date].count++;
        }
        return acc;
      }, {});
      
      return {
        type: 'sales',
        fromDate: from.toISOString(),
        toDate: to.toISOString(),
        totalSales: salesData?.reduce(
          (sum, order) => sum + (order.status !== 'cancelled' ? (order.total_amount || 0) : 0), 
          0
        ),
        orderCount: salesData?.filter(o => o.status !== 'cancelled').length || 0,
        dailySummary: Object.values(dailySales || {}),
        data: salesData
      };
      
    case 'restaurants':
      const { data: restaurantData } = await supabase
        .from('restaurants')
        .select(`
          id, 
          name,
          orders:orders(id, created_at, total_amount, status)
        `);
        
      // Calculate metrics for each restaurant
      const restaurantMetrics = restaurantData?.map(restaurant => {
        const validOrders = (restaurant.orders || [])
          .filter(o => o.status !== 'cancelled' && 
            new Date(o.created_at) >= from &&
            new Date(o.created_at) <= to);
            
        const totalRevenue = validOrders.reduce(
          (sum, order) => sum + (order.total_amount || 0), 
          0
        );
        
        return {
          id: restaurant.id,
          name: restaurant.name,
          orderCount: validOrders.length,
          revenue: totalRevenue
        };
      });
      
      return {
        type: 'restaurants',
        fromDate: from.toISOString(),
        toDate: to.toISOString(),
        data: restaurantMetrics
      };
      
    default:
      return { error: "Invalid report type" };
  }
}
