import { Video, BarChart3, Clock, Star } from "lucide-react";

const CandidateExperience = () => {
  const experiences = [
    {
      icon: Video,
      title: "Human-like Interactions",
      description: "Live video interviews that feel natural and engaging, reducing candidate anxiety."
    },
    {
      icon: BarChart3,
      title: "Personalized Dashboard",
      description: "Dedicated portal for interview status, feedback, and performance insights."
    },
    {
      icon: Clock,
      title: "24x7x365 Availability",
      description: "Interview when ready - no scheduling conflicts or timezone limitations."
    },
    {
      icon: Star,
      title: "Immediate Feedback",
      description: "Instant performance feedback and next steps after interview completion."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Exceptional <span className="text-gradient-secondary">Candidate Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create positive impressions with candidates through seamless, 
            modern interview experiences that reflect your company's innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <experience.icon className="w-10 h-10 text-secondary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">{experience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>

        {/* Customer Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-8 py-4 shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground ml-2">4.9/5</span>
            <span className="text-muted-foreground">average rating from beta users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateExperience;