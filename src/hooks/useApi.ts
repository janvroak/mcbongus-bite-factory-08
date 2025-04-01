
import { useQuery, useMutation, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { apiClient } from "@/services/apiClient";
import { MenuCategory, MenuItem } from "@/data/americanDishes";
import { toast } from "sonner";
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

// Hook for restaurant menu data
export const useRestaurantMenu = (restaurantId: string) => {
  return useQuery({
    queryKey: ["restaurant", restaurantId, "menu"],
    queryFn: () => apiClient.getRestaurantCategories(restaurantId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Hook for getting a specific menu item
export const useMenuItem = (restaurantId: string, itemId: string) => {
  return useQuery({
    queryKey: ["restaurant", restaurantId, "item", itemId],
    queryFn: () => apiClient.getMenuItem(restaurantId, itemId),
    enabled: !!itemId,
  });
};

// Hook for placing an order
export const usePlaceOrder = () => {
  return useMutation({
    mutationFn: (orderData: any) => {
      return apiClient.placeOrder(orderData);
    },
    onSuccess: (data) => {
      toast.success(`Order placed successfully! Order ID: ${data.orderId}`, {
        description: `Estimated delivery time: ${data.estimatedDeliveryTime}`,
      });
    },
    onError: (error: Error) => {
      toast.error("Failed to place order", { 
        description: error.message 
      });
    },
  });
};

// Hook for user authentication
export const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return apiClient.login(email, password);
    },
    onSuccess: () => {
      toast.success("Login successful!");
    },
    onError: (error: Error) => {
      toast.error("Login failed", { description: error.message });
    },
  });

  const registerMutation = useMutation({
    mutationFn: ({ email, password, name }: { email: string; password: string; name: string }) => {
      return apiClient.register(email, password, name);
    },
    onSuccess: () => {
      toast.success("Registration successful!");
    },
    onError: (error: Error) => {
      toast.error("Registration failed", { description: error.message });
    },
  });

  // Get current user info using Supabase
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Get the current session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
        }
      } catch (error) {
        console.error('Error getting auth session:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initAuth();
    
    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    login: loginMutation,
    register: registerMutation,
    user,
    isLoading,
    logout: async () => {
      await supabase.auth.signOut();
      toast.success("You have been logged out");
    },
    isAuthenticated: !!user,
  };
};

// Hook for tracking order status
export const useOrderStatus = (orderId: string | null) => {
  // Basic status query
  const statusQuery = useQuery({
    queryKey: ["order", orderId, "status"],
    queryFn: () => {
      if (!orderId) throw new Error("Order ID is required");
      return apiClient.getOrderStatus(orderId);
    },
    enabled: !!orderId,
    refetchInterval: 10000, // Poll every 10 seconds for updates
  });

  // Real-time status using WebSockets
  const [realtimeStatus, setRealtimeStatus] = useState<any>(null);
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    if (!orderId) return;
    
    let socket: WebSocket | null = null;
    
    const connectWebSocket = async () => {
      try {
        // Get the current session for auth
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          console.log("No auth session for WebSocket");
          return;
        }

        // Create WebSocket connection
        socket = apiClient.createOrderTrackingSocket(orderId, session.access_token);

        socket.onopen = () => {
          setSocketConnected(true);
          console.log("WebSocket connected");
          
          // Send initial tracking request
          socket.send(JSON.stringify({
            action: "track",
            orderId,
            token: session.access_token
          }));
        };

        socket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.type === "status_update" || data.type === "initial_status") {
              setRealtimeStatus(data);
            } else if (data.error) {
              console.error("WebSocket error:", data.error, data.message);
            }
          } catch (e) {
            console.error("Error parsing WebSocket message:", e);
          }
        };

        socket.onclose = () => {
          setSocketConnected(false);
          console.log("WebSocket disconnected");
        };

        socket.onerror = (error) => {
          console.error("WebSocket error:", error);
          setSocketConnected(false);
        };

      } catch (error) {
        console.error("Error setting up WebSocket:", error);
      }
    };

    connectWebSocket();

    // Cleanup
    return () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, [orderId]);

  // Combine REST and WebSocket data
  const status = realtimeStatus?.status || statusQuery.data?.status;
  const currentLocation = realtimeStatus?.location || statusQuery.data?.currentLocation;

  return {
    ...statusQuery,
    status,
    currentLocation,
    realtimeStatus,
    isRealtime: socketConnected && !!realtimeStatus,
  };
};
