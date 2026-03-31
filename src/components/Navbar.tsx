import { ShoppingCart, Laptop, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ cartCount = 0 }: { cartCount?: number }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Laptop className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            Laptop<span className="text-gradient">Hub</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Laptops</Link>
          <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</Link>
          <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-muted-foreground transition-colors hover:text-foreground">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden text-muted-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Home</Link>
            <Link to="/products" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Laptops</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
