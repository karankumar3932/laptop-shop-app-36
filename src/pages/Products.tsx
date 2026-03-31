import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaptopCard from "@/components/LaptopCard";
import { laptops, categories } from "@/data/laptops";
import { useCart } from "@/hooks/useCart";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart, cartCount } = useCart();

  const filtered = activeCategory === "All" ? laptops : laptops.filter((l) => l.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <div className="container py-10">
        <h1 className="font-heading text-3xl font-bold text-foreground">All Laptops</h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((laptop) => (
            <LaptopCard key={laptop.id} laptop={laptop} onAddToCart={addToCart} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No laptops found in this category.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
