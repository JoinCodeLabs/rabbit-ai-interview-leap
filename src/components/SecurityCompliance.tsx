import { Shield, Lock, Globe, FileCheck } from "lucide-react";

const SecurityCompliance = () => {
  const features = [
    {
      icon: Shield,
      title: "GDPR Approved",
      description: "Full compliance with European data protection regulations and privacy standards."
    },
    {
      icon: Lock,
      title: "Secure Storage", 
      description: "Enterprise-grade S3 storage with encryption at rest and in transit."
    },
    {
      icon: FileCheck,
      title: "Auto-Deletion Policy",
      description: "Recordings automatically deleted after 3 months to protect candidate privacy."
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Meets international security standards for enterprise deployment worldwide."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-gradient-primary">Security</span> & Compliance
          </h2>
          <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light mb-16">
            Enterprise-grade security measures and compliance standards 
            ensure your data and candidates' information remain protected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-secondary to-secondary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-border max-w-4xl mx-auto">
          <h4 className="text-xl font-semibold text-foreground mb-4">Additional Security Measures</h4>
          <ul className="text-muted-foreground space-y-2 text-lg">
            <li>• Multi-factor authentication for admin access</li>
            <li>• Regular security audits and penetration testing</li>
            <li>• Role-based access controls and permissions</li>
            <li>• Comprehensive audit logs and monitoring</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;