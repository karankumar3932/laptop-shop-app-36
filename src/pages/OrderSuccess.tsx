import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, Package, Truck, MapPin, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartItem } from "@/hooks/useCart";

interface OrderData {
  items: CartItem[];
  total: number;
  orderId: string;
  orderDate: string;
}

const OrderSuccess = () => {
  const [order, setOrder] = useState<OrderData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("lastOrder");
    if (!stored) {
      navigate("/products");
      return;
    }
    setOrder(JSON.parse(stored));
  }, [navigate]);

  if (!order) return null;

  const orderDate = new Date(order.orderDate);
  const estimatedShipping = new Date(orderDate);
  estimatedShipping.setDate(estimatedShipping.getDate() + 2);
  const estimatedDelivery = new Date(orderDate);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={0} />
      <div className="container py-10">
        {/* Success Banner */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/20">
            <CheckCircle className="h-12 w-12 text-success" />
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">Order Placed Successfully! 🎉</h1>
          <p className="mt-2 text-muted-foreground">
            Thank you for your purchase! Your order <span className="font-semibold text-primary">#{order.orderId}</span> has been confirmed.
          </p>
        </div>

        {/* Delivery Timeline */}
        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">Delivery Timeline</h2>
          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Package className="h-5 w-5" />
                </div>
                <div className="mt-1 h-full w-0.5 bg-primary/30" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Order Confirmed</p>
                <p className="text-sm text-muted-foreground">{formatDate(orderDate)}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/20 text-warning">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="mt-1 h-full w-0.5 bg-primary/30" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Estimated Shipping</p>
                <p className="text-sm text-muted-foreground">{formatDate(estimatedShipping)}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/20 text-success">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground">Estimated Delivery</p>
                <p className="text-sm text-muted-foreground">{formatDate(estimatedDelivery)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="mx-auto mt-6 max-w-2xl rounded-lg border border-border bg-card p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" /> Order Summary
          </h2>
          <div className="mt-4 divide-y divide-border">
            {order.items.map(({ laptop, quantity }) => (
              <div key={laptop.id} className="flex items-center gap-4 py-4">
                <img src={laptop.image} alt={laptop.name} className="h-16 w-16 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground">{laptop.name}</h3>
                  <p className="text-sm text-muted-foreground">{laptop.brand} · Qty: {quantity}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Delivery by <span className="font-medium text-success">{formatDate(estimatedDelivery)}</span>
                  </p>
                </div>
                <span className="font-heading font-bold text-foreground">₹{(laptop.price * quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-border pt-4 flex justify-between font-heading text-lg font-bold text-foreground">
            <span>Total Paid</span>
            <span>₹{order.total.toLocaleString()}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-8 flex max-w-2xl justify-center gap-4">
          <Link to="/products" className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
            Continue Shopping
          </Link>
          <Link to="/" className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:bg-secondary">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
