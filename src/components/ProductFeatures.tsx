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
    <section className="py-24 section-gradient" id="features">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight text-foreground">
            Powerful Features for <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">Modern Hiring</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Everything you need to revolutionize your recruitment process, 
            from AI-powered interviews to enterprise-grade security.
          </p>
        </div>

        {/* Modern Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card text-center group relative"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;