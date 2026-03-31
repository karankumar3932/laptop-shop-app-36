import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Cpu, HardDrive, Monitor, Battery, MemoryStick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { laptops } from "@/data/laptops";
import { useCart } from "@/hooks/useCart";

const specIcons = [
  { key: "processor", icon: Cpu, label: "Processor" },
  { key: "ram", icon: MemoryStick, label: "RAM" },
  { key: "storage", icon: HardDrive, label: "Storage" },
  { key: "display", icon: Monitor, label: "Display" },
  { key: "battery", icon: Battery, label: "Battery" },
] as const;

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartCount } = useCart();
  const laptop = laptops.find((l) => l.id === id);

  if (!laptop) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar cartCount={cartCount} />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">Product not found</h1>
          <Link to="/products" className="mt-4 inline-block text-primary hover:underline">Browse laptops</Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <div className="container py-8">
        <Link to="/products" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Laptops
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <img src={laptop.image} alt={laptop.name} width={512} height={512} className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-sm font-medium text-primary">{laptop.brand}</p>
            <h1 className="mt-1 font-heading text-3xl font-bold text-foreground">{laptop.name}</h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(laptop.rating) ? "fill-warning text-warning" : "text-muted-foreground"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{laptop.rating} ({laptop.reviews} reviews)</span>
            </div>

            <div className="mt-6">
              <span className="font-heading text-3xl font-bold text-foreground">₹{laptop.price.toLocaleString()}</span>
              <span className="ml-3 text-lg text-muted-foreground line-through">₹{laptop.originalPrice.toLocaleString()}</span>
              <span className="ml-3 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">{discount}% off</span>
            </div>

            <div className="mt-8">
              <h3 className="font-heading text-lg font-semibold text-foreground">Specifications</h3>
              <div className="mt-4 grid gap-3">
                {specIcons.map(({ key, icon: Icon, label }) => (
                  <div key={key} className="flex items-center gap-3 rounded-md border border-border bg-secondary/50 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{laptop.specs[key]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(laptop)}
              disabled={!laptop.inStock}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed glow-cyan"
            >
              <ShoppingCart className="h-5 w-5" />
              {laptop.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
