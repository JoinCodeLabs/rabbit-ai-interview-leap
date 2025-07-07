import { Building2, Zap, Users } from "lucide-react";

const WhoItsFor = () => {
  const segments = [
    {
      icon: Zap,
      title: "High-Growth Startups",
      description: "Scale your hiring rapidly without compromising quality. Perfect for companies growing from 10 to 1000+ employees.",
      benefits: ["Fast implementation", "Cost-effective scaling", "Consistent quality", "Remote hiring support"]
    },
    {
      icon: Building2,
      title: "Large Enterprises",
      description: "Enterprise-grade security and customization for complex hiring needs across multiple departments and regions.",
      benefits: ["White-label solutions", "Advanced analytics", "GDPR compliance", "Custom integrations"]
    },
    {
      icon: Users,
      title: "Recruitment Agencies",
      description: "Multiply your capacity and serve more clients with AI-powered efficiency and detailed candidate insights.",
      benefits: ["Multi-client management", "Detailed reporting", "Competitive advantage", "Scalable operations"]
    }
  ];

  return (
    <section className="py-20 section-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Who <span className="text-gradient-primary">Benefits</span> Most?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rabbit AI is designed to serve organizations of all sizes, 
            from fast-growing startups to global enterprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="feature-card text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-cta">
                <segment.icon className="w-10 h-10 text-accent-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{segment.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{segment.description}</p>
              
              <ul className="space-y-2 text-left">
                {segment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-secondary-glow rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;