import { Clock, DollarSign, Users, Star } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Clock,
      value: "80%",
      label: "Reduction in Hiring Turnaround Time",
      description: "Accelerate your hiring process with automated interviews and instant feedback"
    },
    {
      icon: DollarSign,
      value: "60%",
      label: "Decrease in Recruitment Costs",
      description: "Eliminate manual interview coordination and reduce operational overhead"
    },
    {
      icon: Users,
      value: "200+",
      label: "Hours/Week Bandwidth Saved",
      description: "Free up your team to focus on strategic hiring decisions and candidate experience"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating from Beta Users",
      description: "Consistently high satisfaction from both hiring teams and candidates"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Measurable <span className="text-gradient-accent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies already transforming their hiring process 
            with quantifiable results and proven ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-cta">
                <metric.icon className="w-10 h-10 text-accent-foreground" />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-gradient-primary">{metric.value}</div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{metric.label}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Trusted by Enterprise Leaders
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From high-growth startups to Fortune 500 companies, organizations worldwide 
              are leveraging Rabbit AI to scale their hiring operations and make better 
              recruitment decisions faster than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;