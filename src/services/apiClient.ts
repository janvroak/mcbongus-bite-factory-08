
import { supabase } from "@/integrations/supabase/client";
import { getAmericanMenuCategories, getMenuItemById, MenuCategory, MenuItem } from "@/data/americanDishes";

// API Client for handling backend requests
class ApiClient {
  // Authentication
  async login(email: string, password: string): Promise<{ token: string; userId: string }> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw new Error(error.message);

    return {
      token: data.session?.access_token || '',
      userId: data.user?.id || '',
    };
  }

  async register(email: string, password: string, name: string): Promise<{ token: string; userId: string }> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: `${window.location.origin}/login`,
      }
    });

    if (error) throw new Error(error.message);

    // If we have a session, this means email confirmation is disabled
    // and the user is already logged in
    if (data.session) {
      return {
        token: data.session.access_token || '',
        userId: data.user?.id || '',
      };
    }
    
    // If no session but user exists, this means email confirmation is required
    // We'll return what we can, but this should not happen if email confirmation is disabled
    return {
      token: '',
      userId: data.user?.id || '',
    };
  }

  // Restaurant and Menu APIs
  async getRestaurantCategories(restaurantId: string): Promise<MenuCategory[]> {
    try {
      // First, check if we have a real backend available
      const { data, error } = await supabase.functions.invoke('menus', {
        body: { restaurantId },
      });

      if (!error && data) {
        return data;
      }
    } catch (e) {
      console.log("Falling back to mock data for menus");
    }
    
    // Fall back to mock data
    return getAmericanMenuCategories(restaurantId);
  }

  async getMenuItem(restaurantId: string, itemId: string): Promise<MenuItem | null> {
    try {
      const { data, error } = await supabase.functions.invoke(`menus/${itemId}`, {
        body: { restaurantId },
      });

      if (!error && data) {
        return data;
      }
    } catch (e) {
      console.log("Falling back to mock data for menu item");
    }
    
    // Fall back to mock data
    return getMenuItemById(restaurantId, itemId);
  }

  // Order APIs
  async placeOrder(order: any): Promise<{ orderId: string; estimatedDeliveryTime: string }> {
    try {
      const { data, error } = await supabase.functions.invoke('orders', {
        body: order,
      });

      if (error) throw new Error(error.message);

      return {
        orderId: data.orderId,
        estimatedDeliveryTime: data.estimatedDeliveryTime,
      };
    } catch (e) {
      console.log("Error placing order, using fallback:", e);
      
      // Fall back to mock response
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            orderId: `order-${Math.floor(Math.random() * 100000)}`,
            estimatedDeliveryTime: "30-45 minutes",
          });
        }, 800);
      });
    }
  }

  async getOrderStatus(orderId: string): Promise<{ status: string; currentLocation?: { lat: number; lng: number } }> {
    try {
      const { data, error } = await supabase.functions.invoke(`orders/${orderId}`);

      if (error) throw new Error(error.message);

      return {
        status: data.status,
        currentLocation: data.current_location,
      };
    } catch (e) {
      console.log("Error getting order status, using fallback:", e);
      
      // Fall back to mock response
      return new Promise((resolve) => {
        setTimeout(() => {
          const statuses = ["preparing", "ready", "out-for-delivery", "delivered"];
          const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
          
          resolve({
            status: randomStatus,
            currentLocation: randomStatus === "out-for-delivery" 
              ? { lat: 15.4589, lng: 75.0078 } 
              : undefined,
          });
        }, 400);
      });
    }
  }

  // Create WebSocket connection for real-time order tracking
  createOrderTrackingSocket(orderId: string, token: string) {
    try {
      return new WebSocket(`${window.location.protocol.replace('http', 'ws')}//${window.location.host}/functions/v1/order-tracking`);
    } catch (e) {
      console.error("Error creating WebSocket:", e);
      throw e;
    }
  }
}

// Create a singleton instance
export const apiClient = new ApiClient();
