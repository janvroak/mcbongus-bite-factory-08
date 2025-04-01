
import { getAmericanMenuCategories, getMenuItemById, MenuCategory, MenuItem } from "@/data/americanDishes";

// API Client for handling backend requests
class ApiClient {
  // Authentication
  async login(email: string, password: string): Promise<{ token: string; userId: string }> {
    // Simulate API call to backend
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demonstration purposes only - in a real app, this would validate against a backend
        if (email && password) {
          resolve({
            token: "sample-jwt-token-would-be-here",
            userId: "user-123",
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 500);
    });
  }

  async register(email: string, password: string, name: string): Promise<{ token: string; userId: string }> {
    // Simulate API call for registration
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && name) {
          resolve({
            token: "sample-jwt-token-for-new-user",
            userId: "new-user-456",
          });
        } else {
          reject(new Error("Missing required fields"));
        }
      }, 500);
    });
  }

  // Restaurant and Menu APIs
  async getRestaurantCategories(restaurantId: string): Promise<MenuCategory[]> {
    return getAmericanMenuCategories(restaurantId);
  }

  async getMenuItem(restaurantId: string, itemId: string): Promise<MenuItem | null> {
    return getMenuItemById(restaurantId, itemId);
  }

  // Order APIs
  async placeOrder(order: any): Promise<{ orderId: string; estimatedDeliveryTime: string }> {
    // Simulate API call to place an order
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          orderId: `order-${Math.floor(Math.random() * 100000)}`,
          estimatedDeliveryTime: "30-45 minutes",
        });
      }, 800);
    });
  }

  async getOrderStatus(orderId: string): Promise<{ status: string; currentLocation?: { lat: number; lng: number } }> {
    // Simulate API call to get order status
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

// Create a singleton instance
export const apiClient = new ApiClient();
