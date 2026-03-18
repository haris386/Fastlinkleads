import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      // ✅ ADD TO CART (global logic)
      addToCart: (product) => {
        const items = get().items;
        const existing = items.find(item => item.id === product.id);

        if (existing) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          });
        }
      },

      // ❌ REMOVE
      removeFromCart: (id) => {
        set({
          items: get().items.filter(item => item.id !== id),
        });
      },

      // 🔄 UPDATE (manual input)
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) return;

        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      // ➕ INCREMENT
      increment: (id) => {
        set({
          items: get().items.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

      // ➖ DECREMENT
      decrement: (id) => {
        set({
          items: get().items.map(item =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);