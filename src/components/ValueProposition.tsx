import { Check, TrendingUp, Shield, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ValueProposition = () => {
  const sectionRef = useScrollAnimation();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Budgeting and expense tracking Take control of your finances with our intuitive budgeting and expense-tracking solution. Easily manage your income",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Investment",
      description: "Investment management refers to the professional handling of various securities and assets, such as stocks, bonds, real estate, and other investment instruments",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "The digital transformation journey involves integrating digital technologies into all areas of a business, fundamentally changing how it operates and",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Strategy",
      description: "Market expansion strategy A market expansion strategy involves identifying and entering new markets to increase a company's customer base",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 section-animate relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(224,76%,48%,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 border border-primary/10 shadow-lg mb-8">
            <span className="text-primary text-sm font-semibold tracking-wide">We are passionate about empowering individuals and businesses</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-8 text-foreground leading-tight max-w-4xl mx-auto">
            Make payment easy,
            <br />
            <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent">
              simplify your finance
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Our platform managing personal finances or growing your investment portfolio, 
            our system integrates the latest technology to help you make smarter financial decisions with ease
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card content */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 h-full relative overflow-hidden">
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Contact us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;