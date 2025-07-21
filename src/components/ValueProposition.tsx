import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ValueProposition = () => {
  const sectionRef = useScrollAnimation();
  const benefits = [
    "Conduct all types of interviews (coding, technical, non-tech, HR, case studies)",
    "Live, human-like AI interviewer available 24x7x365",
    "Enterprise-grade security and proctoring",
    "Seamless ATS integration and automated scheduling",
    "Detailed analytics and actionable feedback",
    "Supports 120+ global and vernacular languages"
  ];

  return (
    <section ref={sectionRef} className="py-32 section-gradient section-animate">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight text-foreground">
            Why <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">Rabbit AI</span> is a Game-Changer
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
              className="bento-card flex items-start gap-6 group"
            >
              <div className="relative z-10">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent-emerald rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
              </div>
              <p className="text-xl text-foreground leading-relaxed font-medium relative z-10">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;