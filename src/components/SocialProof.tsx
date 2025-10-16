import { Star } from "lucide-react";

const SocialProof = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      rating: 5,
      comment: "Best earbuds I've ever owned. The noise cancellation is incredible during my workouts!"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      rating: 5,
      comment: "Crystal clear audio for calls and music. Battery life is exactly as advertised."
    },
    {
      name: "Emma Davis",
      role: "Content Creator",
      rating: 5,
      comment: "These earbuds are a game-changer. Comfortable for hours and the sound quality is phenomenal."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-exo font-black">
            Loved by Thousands
            <span className="block gradient-text">Worldwide</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-primary text-primary" />
            ))}
            <span className="text-2xl font-bold ml-2">4.9/5.0</span>
          </div>
          <p className="text-muted-foreground text-lg">Based on 12,847 reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg italic">"{review.comment}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-bold">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Influencer endorsements */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">As featured on</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-exo font-bold">TechCrunch</div>
            <div className="text-2xl font-exo font-bold">The Verge</div>
            <div className="text-2xl font-exo font-bold">WIRED</div>
            <div className="text-2xl font-exo font-bold">Engadget</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
