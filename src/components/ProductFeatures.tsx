import { Users, Calendar, Shield, Palette, Share, Zap, Lock, Globe } from "lucide-react";

const ProductFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "End-to-end Automation",
      description: "From interview to feedback, minimal human intervention required for complete hiring workflow."
    },
    {
      icon: Users,
      title: "Advanced AI",
      description: "NLP-driven AI trained on millions of interviews, generates custom questions for each role."
    },
    {
      icon: Shield,
      title: "Enterprise Proctoring", 
      description: "Face tracking, browser lockdown, and anti-cheating detection for secure assessments."
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Custom branding, interview flows, and mandatory questions tailored to your company."
    },
    {
      icon: Share,
      title: "Seamless Integration",
      description: "Works with major ATS platforms, API for scheduling and data synchronization."
    },
    {
      icon: Calendar,
      title: "Infinite Scalability",
      description: "Handle 100K+ concurrent interviews with robust load balancing and reliability."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "GDPR approved, secure S3 storage, auto-delete recordings after 3 months."
    },
    {
      icon: Globe,
      title: "Global Language Support",
      description: "Conduct interviews in 120+ global and vernacular languages for worldwide hiring."
    }
  ];

  return (
    <section className="py-32 section-subtle">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-foreground">
            Powerful <span className="text-foreground">Features</span> for Modern Hiring
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Everything you need to revolutionize your recruitment process, 
            from AI-powered interviews to enterprise-grade security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card text-center group"
            >
              <div className="w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-md transition-all duration-300">
                <feature.icon className="w-10 h-10 text-background" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 text-foreground">{feature.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;