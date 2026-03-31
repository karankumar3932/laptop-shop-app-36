import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { Users, Award, Headphones } from "lucide-react";

const About = () => {
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} />
      <div className="container py-16">
        <h1 className="font-heading text-3xl font-bold text-foreground">About LaptopHub</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          LaptopHub is your trusted destination for premium laptops. We partner directly with top brands to bring you the latest technology at unbeatable prices, backed by genuine warranties and exceptional customer service.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Users, title: "50K+ Customers", desc: "Happy customers across India" },
            { icon: Award, title: "100% Genuine", desc: "Only authorized products" },
            { icon: Headphones, title: "24/7 Support", desc: "Round the clock assistance" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
