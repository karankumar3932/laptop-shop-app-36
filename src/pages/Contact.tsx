import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const Contact = () => {
  const { cartCount } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <div className="container py-16">
        <h1 className="font-heading text-3xl font-bold text-foreground">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">Have questions? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Name</label>
            <input required className="mt-1 w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Email</label>
            <input required type="email" className="mt-1 w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea required rows={4} className="mt-1 w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your message..." />
          </div>
          <button type="submit" className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
