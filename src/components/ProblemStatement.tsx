import { Cable, BatteryLow, Volume2 } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: Cable,
      title: "Tangled Wires",
      description: "Frustrated with cables getting in your way during workouts or commutes?"
    },
    {
      icon: BatteryLow,
      title: "Short Battery Life",
      description: "Tired of your earbuds dying halfway through your day?"
    },
    {
      icon: Volume2,
      title: "Poor Sound Quality",
      description: "Dealing with muffled audio and constant background noise?"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-exo font-black">
            Sound Problems?
            <span className="block gradient-text">We've Got You Covered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Say goodbye to the common frustrations of traditional earbuds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-exo font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
