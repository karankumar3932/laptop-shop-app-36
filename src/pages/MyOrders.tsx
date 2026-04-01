import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Package, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/hooks/useCart";

interface OrderWithItems {
  id: string;
  order_id: string;
  total: number;
  status: string;
  created_at: string;
  order_items: {
    laptop_name: string;
    laptop_brand: string;
    laptop_image: string;
    laptop_price: number;
    quantity: number;
  }[];
}

const MyOrders = () => {
  const { user } = useAuth();
  const { cartCount } = useCart();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchOrders = async () => {
      const { data } = await supabase
        .from("orders")
        .select("*, order_items(*)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      setOrders((data as OrderWithItems[]) || []);
      setLoading(false);
    };
    fetchOrders();
  }, [user]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  const getDeliveryDate = (d: string) => {
    const date = new Date(d);
    date.setDate(date.getDate() + 5);
    return formatDate(date.toISOString());
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <div className="container py-10">
        <h1 className="font-heading text-3xl font-bold text-foreground">My Orders</h1>

        {loading ? (
          <p className="mt-8 text-muted-foreground">Loading orders...</p>
        ) : orders.length === 0 ? (
          <div className="mt-16 flex flex-col items-center text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 text-lg text-muted-foreground">No orders yet</p>
            <Link to="/products" className="mt-6 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground">
              Browse Laptops
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="rounded-lg border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-heading font-semibold text-foreground">#{order.order_id}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Ordered: {formatDate(order.created_at)}</span>
                    <span className="rounded-full bg-success/20 px-3 py-0.5 text-xs font-medium text-success capitalize">
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="mt-4 divide-y divide-border">
                  {order.order_items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3">
                      <img src={item.laptop_image} alt={item.laptop_name} className="h-14 w-14 rounded-md object-cover" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.laptop_name}</p>
                        <p className="text-xs text-muted-foreground">{item.laptop_brand} · Qty: {item.quantity}</p>
                        <p className="text-xs text-muted-foreground">
                          Delivery by <span className="font-medium text-success">{getDeliveryDate(order.created_at)}</span>
                        </p>
                      </div>
                      <span className="font-heading font-bold text-foreground">₹{(item.laptop_price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 border-t border-border pt-3 flex justify-between font-heading font-bold text-foreground">
                  <span>Total</span>
                  <span>₹{Number(order.total).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyOrders;
