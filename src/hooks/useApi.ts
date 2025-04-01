
import { useQuery, useMutation, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { apiClient } from "@/services/apiClient";
import { MenuCategory, MenuItem } from "@/data/americanDishes";
import { toast } from "sonner";

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

  return {
    login: loginMutation,
    register: registerMutation,
  };
};

// Hook for tracking order status
export const useOrderStatus = (orderId: string | null) => {
  return useQuery({
    queryKey: ["order", orderId, "status"],
    queryFn: () => {
      if (!orderId) throw new Error("Order ID is required");
      return apiClient.getOrderStatus(orderId);
    },
    enabled: !!orderId,
    refetchInterval: 10000, // Poll every 10 seconds for updates
  });
};
