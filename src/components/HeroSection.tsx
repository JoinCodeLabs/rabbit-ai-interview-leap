import { Button } from "@/components/ui/button";
import { Bot, Zap, Globe, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient ai-background px-4 py-20 relative overflow-hidden">
      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/35 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Bot className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Powered by Advanced AI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight text-white animate-fade-in">
            24/7 AI Interviewing
            <br />
            <span className="text-white/90">Saves Engineering</span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Bandwidth</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-10 sm:mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-delayed">
            Let AI handle first-round interviews while your team focuses on building. 
            Scale your hiring without burning out your engineers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 animate-fade-in-delayed">
            <Button className="cta-button text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl">
              Book a Demo
            </Button>
            <Button className="cta-button-outline text-lg px-8 py-4 rounded-lg font-semibold">
              Start Free Trial
            </Button>
          </div>

          {/* AI-Focused Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16 sm:mt-20 animate-slide-up">
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">80%</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">Faster Hiring</div>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">60%</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">AI Availability</div>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">120+</div>
              <div className="text-sm sm:text-base text-white/70 font-medium">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;