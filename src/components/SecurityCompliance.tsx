import { Shield, Lock, Globe, FileCheck } from "lucide-react";
import globalImage from "@/assets/global-reach.jpg";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={globalImage} 
                alt="Global security and compliance network showing 120+ language support"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Security</span> & Compliance
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enterprise-grade security measures and compliance standards 
              ensure your data and candidates' information remain protected.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary to-secondary-glow rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">Additional Security Measures</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Multi-factor authentication for admin access</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Role-based access controls and permissions</li>
                <li>• Comprehensive audit logs and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;