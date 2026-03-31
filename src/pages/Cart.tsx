import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useCart();

  const handleCheckout = () => {
    toast.success("Order placed successfully! 🎉");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <div className="container py-10">
        <h1 className="font-heading text-3xl font-bold text-foreground">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="mt-16 flex flex-col items-center text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 text-lg text-muted-foreground">Your cart is empty</p>
            <Link to="/products" className="mt-6 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground">
              Browse Laptops
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {items.map(({ laptop, quantity }) => (
                <div key={laptop.id} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                  <img src={laptop.image} alt={laptop.name} className="h-24 w-24 rounded-md object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{laptop.name}</h3>
                      <p className="text-sm text-muted-foreground">{laptop.brand}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(laptop.id, quantity - 1)} className="rounded border border-border p-1 text-muted-foreground hover:text-foreground">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-foreground">{quantity}</span>
                        <button onClick={() => updateQuantity(laptop.id, quantity + 1)} className="rounded border border-border p-1 text-muted-foreground hover:text-foreground">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-heading font-bold text-foreground">₹{(laptop.price * quantity).toLocaleString()}</span>
                      <button onClick={() => removeFromCart(laptop.id)} className="text-destructive hover:text-destructive/80">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-card p-6 h-fit">
              <h3 className="font-heading text-lg font-semibold text-foreground">Order Summary</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-heading font-bold text-foreground text-base">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <button onClick={handleCheckout} className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90 glow-cyan">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
