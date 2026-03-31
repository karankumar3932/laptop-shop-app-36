import { ArrowRight, Shield, Truck, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-laptop.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaptopCard from "@/components/LaptopCard";
import { laptops } from "@/data/laptops";
import { useCart } from "@/hooks/useCart";

const features = [
  { icon: Truck, title: "Free Delivery", desc: "On orders above ₹50,000" },
  { icon: Shield, title: "1 Year Warranty", desc: "Official brand warranty" },
  { icon: RotateCcw, title: "Easy Returns", desc: "7-day return policy" },
];

const Index = () => {
  const { addToCart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Laptop hero" width={1280} height={720} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative container flex min-h-[70vh] flex-col items-center justify-center text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in">
            Find Your Perfect<br /><span className="text-gradient">Laptop</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Premium laptops for every need — gaming, business, creativity, and beyond. Best prices guaranteed.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Shop Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Laptops */}
      <section className="container py-16">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-foreground">Featured Laptops</h2>
          <Link to="/products" className="flex items-center gap-1 text-sm text-primary hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {laptops.slice(0, 3).map((laptop) => (
            <LaptopCard key={laptop.id} laptop={laptop} onAddToCart={addToCart} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
