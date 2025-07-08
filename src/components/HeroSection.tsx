import { Button } from "@/components/ui/button";
import TechBackground from "./TechBackground";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient px-6 py-32 relative overflow-hidden">
      <TechBackground />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight text-white animate-fade-in">
            <span className="text-white">Rabbit AI:</span><br />
            The Future of <span className="text-white">Hiring</span> Is Here
          </h1>
          <p className="text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light animate-fade-in-delayed">
            AI-powered interviews, 24x7. Hire smarter, faster, and at scale with 
            our enterprise-grade interview platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-delayed">
            <Button className="bg-white text-black border-2 border-white font-semibold text-xl px-12 py-6 btn-interactive hover:bg-black hover:text-white">
              Book a Demo
            </Button>
            <Button className="bg-transparent text-white border-2 border-white font-semibold text-xl px-12 py-6 btn-interactive hover:bg-white hover:text-black">
              Start Free Trial
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-24 animate-slide-up">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">80%</div>
              <div className="text-lg text-white/80 font-medium">Faster Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">60%</div>
              <div className="text-lg text-white/80 font-medium">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">24x7</div>
              <div className="text-lg text-white/80 font-medium">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">120+</div>
              <div className="text-lg text-white/80 font-medium">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;