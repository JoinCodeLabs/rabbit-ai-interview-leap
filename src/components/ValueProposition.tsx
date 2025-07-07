import { Check } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    "Conduct all types of interviews (coding, technical, non-tech, HR, case studies)",
    "Live, human-like AI interviewer available 24x7x365",
    "Enterprise-grade security and proctoring",
    "Seamless ATS integration and automated scheduling",
    "Detailed analytics and actionable feedback",
    "Supports 120+ global and vernacular languages"
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="text-gradient-primary">Rabbit AI</span> is a Game-Changer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your hiring process with AI that understands, evaluates, and scales 
            like never before. Experience the future of recruitment today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-secondary-foreground" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;