import { ShoppingCart, Laptop, Menu, X, User, LogOut, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Navbar = ({ cartCount = 0 }: { cartCount?: number }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
  };

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
          <Link to="/admin" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Admin</Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/my-orders" className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <Package className="h-4 w-4" /> Orders
              </Link>
              <button onClick={handleSignOut} className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4" /> Login
            </Link>
          )}
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
            <Link to="/admin" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Admin</Link>
            {user ? (
              <>
                <Link to="/my-orders" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">My Orders</Link>
                <button onClick={() => { handleSignOut(); setMobileOpen(false); }} className="text-left text-sm text-muted-foreground">Logout</button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground">Login / Sign Up</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
