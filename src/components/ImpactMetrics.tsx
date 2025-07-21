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
    <section className="py-32 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground">
            Measurable <span className="bg-gradient-to-r from-primary to-accent-emerald bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Join hundreds of companies already transforming their hiring process 
            with quantifiable results and proven ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group bento-card"
            >
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <metric.icon className="w-12 h-12 text-primary" />
                </div>
                
                <div className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">{metric.value}</div>
                <h3 className="text-lg font-bold mb-4 text-foreground">{metric.label}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">{metric.description}</p>
              </div>
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