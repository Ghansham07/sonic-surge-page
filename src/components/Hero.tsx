import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-earbuds.jpg";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-exo font-black leading-tight">
                Experience Pure
                <span className="block gradient-text text-glow">Sound Freedom</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Next-level comfort and clarity for your music and calls.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full hover-glow animate-glow-pulse"
              >
                Buy Now - $199
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToFeatures}
                className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6 rounded-full"
              >
                Learn More
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-exo font-black text-primary">24H</div>
                <div className="text-sm text-muted-foreground">Battery Life</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-exo font-black text-primary">IPX7</div>
                <div className="text-sm text-muted-foreground">Waterproof</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-exo font-black text-primary">ANC</div>
                <div className="text-sm text-muted-foreground">Active Noise Cancel</div>
              </div>
            </div>
          </div>

          {/* Product image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="SoundWave Pro Wireless Earbuds" 
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to features"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
