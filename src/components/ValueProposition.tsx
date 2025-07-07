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
    <section className="py-32 section-gradient">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Why <span className="text-gradient-primary">Rabbit AI</span> is a Game-Changer
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Transform your hiring process with AI that understands, evaluates, and scales 
            like never before. Experience the future of recruitment today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Check className="w-6 h-6 text-secondary-foreground" />
              </div>
              <p className="text-xl text-foreground leading-relaxed font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;