import { Star, ShoppingCart } from "lucide-react";
import { Laptop } from "@/data/laptops";
import { Link } from "react-router-dom";

interface LaptopCardProps {
  laptop: Laptop;
  onAddToCart: (laptop: Laptop) => void;
}

const LaptopCard = ({ laptop, onAddToCart }: LaptopCardProps) => {
  const discount = Math.round(((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100);

  return (
    <div className="group card-hover rounded-lg border border-border bg-card overflow-hidden">
      <Link to={`/product/${laptop.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={laptop.image}
            alt={laptop.name}
            loading="lazy"
            width={512}
            height={512}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {laptop.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {laptop.badge}
            </span>
          )}
          {!laptop.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/70">
              <span className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <p className="text-xs font-medium text-muted-foreground">{laptop.brand}</p>
        <Link to={`/product/${laptop.id}`}>
          <h3 className="mt-1 font-heading text-base font-semibold text-foreground transition-colors hover:text-primary">
            {laptop.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.floor(laptop.rating) ? "fill-warning text-warning" : "text-muted-foreground"}`}
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({laptop.reviews})</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="font-heading text-lg font-bold text-foreground">₹{laptop.price.toLocaleString()}</span>
            <span className="ml-2 text-xs text-muted-foreground line-through">₹{laptop.originalPrice.toLocaleString()}</span>
            <span className="ml-2 text-xs font-medium text-success">{discount}% off</span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(laptop)}
          disabled={!laptop.inStock}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default LaptopCard;
