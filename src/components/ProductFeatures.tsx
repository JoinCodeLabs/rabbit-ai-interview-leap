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
    <section className="py-20 section-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful <span className="text-gradient-primary">Features</span> for Modern Hiring
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your recruitment process, 
            from AI-powered interviews to enterprise-grade security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;