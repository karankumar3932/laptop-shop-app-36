import { useState, useCallback } from "react";
import { Laptop } from "@/data/laptops";
import { toast } from "sonner";

export interface CartItem {
  laptop: Laptop;
  quantity: number;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  const save = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const addToCart = useCallback((laptop: Laptop) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.laptop.id === laptop.id);
      const updated = existing
        ? prev.map((i) => i.laptop.id === laptop.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { laptop, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updated));
      toast.success(`${laptop.name} added to cart`);
      return updated;
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => {
      const updated = prev.filter((i) => i.laptop.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => {
      const updated = prev.map((i) => i.laptop.id === id ? { ...i, quantity: qty } : i);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => save([]), []);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = items.reduce((sum, i) => sum + i.laptop.price * i.quantity, 0);

  return { items, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal };
};
