import { Battery, Droplets, Bluetooth, Hand } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Battery,
      title: "24-Hour Battery",
      description: "All-day listening with quick charge support"
    },
    {
      icon: Droplets,
      title: "IPX7 Waterproof",
      description: "Sweat and water resistant for any activity"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth 5.3",
      description: "Stable connection up to 30 feet"
    },
    {
      icon: Hand,
      title: "Touch Controls",
      description: "Intuitive gestures for full control"
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-exo font-black">
            Premium Features
            <span className="block gradient-text">Built for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail designed for the ultimate listening experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover-glow text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-exo font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
