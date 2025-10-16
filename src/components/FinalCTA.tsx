import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-exo font-black">
              Ready to Experience
              <span className="block gradient-text text-glow">True Sound Freedom?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who made the switch to SoundWave Pro
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 rounded-full hover-glow animate-glow-pulse"
            >
              Order Today - $199
            </Button>
            <p className="text-sm text-muted-foreground">
              Free shipping • 30-day returns • 1-year warranty
            </p>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>In stock & ready to ship</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>100% satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
