import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button 
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full hover-glow animate-glow-pulse shadow-2xl"
      >
        <ShoppingCart className="mr-2" />
        Buy Now - $199
      </Button>
    </div>
  );
};

export default StickyBuyButton;
