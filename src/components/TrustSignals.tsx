import { Truck, RotateCcw, Shield } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On all orders over $50"
    },
    {
      icon: RotateCcw,
      title: "30-Day Return",
      description: "No questions asked"
    },
    {
      icon: Shield,
      title: "1-Year Warranty",
      description: "Full coverage included"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {signals.map((signal, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-primary/30 hover-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <signal.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">{signal.title}</div>
                <div className="text-sm text-muted-foreground">{signal.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
