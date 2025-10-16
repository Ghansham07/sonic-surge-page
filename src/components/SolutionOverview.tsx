import { CheckCircle2 } from "lucide-react";

const SolutionOverview = () => {
  const solutions = [
    "Advanced Active Noise Cancellation blocks out distractions",
    "24-hour battery life keeps you powered all day long",
    "Fast charging gives you 3 hours of play in just 10 minutes",
    "Crystal-clear audio with premium drivers",
    "Ergonomic design for all-day comfort"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Solutions list */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-exo font-black">
                The Perfect
                <span className="block gradient-text text-glow">Sound Solution</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                SoundWave Pro combines cutting-edge technology with premium design
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature highlight */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-card to-secondary p-12 rounded-3xl border border-primary/30 hover-glow">
              <div className="space-y-6 text-center">
                <div className="text-6xl font-exo font-black gradient-text">99.9%</div>
                <div className="text-2xl font-bold">Noise Reduction</div>
                <p className="text-muted-foreground text-lg">
                  Industry-leading ANC technology eliminates unwanted ambient sound
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
