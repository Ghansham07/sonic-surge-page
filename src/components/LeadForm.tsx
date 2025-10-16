import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Check your inbox for your exclusive 10% discount code",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-exo font-black">
              Get Your Exclusive
              <span className="block gradient-text text-glow">10% Off</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join 50,000+ subscribers and get first access to new products and special offers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-6 text-lg bg-card border-border focus:border-primary rounded-full"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 h-14 rounded-full hover-glow whitespace-nowrap"
            >
              Get 10% Off
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
