import { Laptop, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-primary" />
            <span className="font-heading text-lg font-bold">LaptopHub</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Your one-stop destination for premium laptops at the best prices.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Home</li><li>Laptops</li><li>About Us</li><li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Ultrabooks</li><li>Gaming</li><li>Business</li><li>2-in-1</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground">Contact Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@laptophub.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 73529 51377</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 LaptopHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
