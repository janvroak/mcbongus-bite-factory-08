
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  restaurantName: string;
}

interface CartState {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      
      addItem: (newItem) => set((state) => {
        // Check if item already exists in cart
        const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
        
        if (existingItemIndex >= 0) {
          // Update quantity if item already exists
          const updatedItems = [...state.cartItems];
          updatedItems[existingItemIndex].quantity += 1;
          return { cartItems: updatedItems };
        } else {
          // Add new item with quantity 1
          return { cartItems: [...state.cartItems, { ...newItem, quantity: 1 }] };
        }
      }),
      
      updateItemQuantity: (id, quantity) => set((state) => {
        if (quantity < 1) {
          // Remove item if quantity is less than 1
          return { cartItems: state.cartItems.filter(item => item.id !== id) };
        }
        
        // Update quantity
        const updatedItems = state.cartItems.map(item => 
          item.id === id ? { ...item, quantity } : item
        );
        
        return { cartItems: updatedItems };
      }),
      
      removeItem: (id) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== id)
      })),
      
      clearCart: () => set({ cartItems: [] })
    }),
    {
      name: 'cart-storage',
    }
  )
);
