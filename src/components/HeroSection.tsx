import { Button } from "@/components/ui/button";
import { Bot, Zap, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen section-hero px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 ai-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-full blur-3xl floating-shapes"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-accent-purple/10 to-primary/10 rounded-full blur-3xl floating-shapes" style={{animationDelay: '5s'}}></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[90vh]">
          
          {/* Left Content - Modern Layout */}
          <div className="lg:col-span-6 space-y-12">
            {/* AI Badge with modern styling */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">Powered by Advanced AI</span>
            </div>

            {/* Main Headline - Enhanced Typography */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tight text-foreground">
                Build & grow with
                <br />
                <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent">
                  scalable interviews
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
                Easily adapt to changes and scale your hiring operations with our flexible AI infrastructure, 
                <span className="text-foreground font-medium">designed to support your business growth.</span>
              </p>
            </div>
            
            {/* CTA Buttons - Modern Styling */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                Features →
              </Button>
              <Button variant="outline" className="border-2 border-muted-foreground/20 text-foreground hover:bg-muted/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                Pricing
              </Button>
            </div>

            {/* Social Proof - Modern Cards */}
            <div className="flex items-center gap-4 pt-8 animate-slide-up">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">10K+</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">10,000+ people already joined the platform</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Modern Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[600px] w-full">
              
              {/* Main Feature Card - Top Right */}
              <div className="absolute top-0 right-0 w-72 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground">Mobile accessibility</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>

              {/* Analytics Card - Center Left */}
              <div className="absolute top-32 left-0 w-80 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">Expenses</h3>
                  <div className="text-right text-xs text-muted-foreground mb-2">Monthly</div>
                </div>
                <div className="text-5xl font-bold text-orange-500 mb-4">85%</div>
                <div className="flex gap-1 items-end h-16">
                  <div className="bg-orange-500 rounded-full w-4 h-8"></div>
                  <div className="bg-orange-500 rounded-full w-4 h-10"></div>
                  <div className="bg-orange-500 rounded-full w-4 h-12"></div>
                  <div className="bg-orange-500 rounded-full w-4 h-14"></div>
                  <div className="bg-orange-500 rounded-full w-4 h-16"></div>
                  <div className="bg-orange-500 rounded-full w-4 h-16"></div>
                </div>
              </div>

              {/* Security Card - Bottom Right */}
              <div className="absolute bottom-0 right-8 w-64 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-foreground">Enhanced security</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>

              {/* Action Buttons - Bottom Center */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 shadow-lg">
                  BUY TEMPLATE
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                  SEE ALL TEMPLATES
                </button>
              </div>

              {/* Floating Brand Badge */}
              <div className="absolute bottom-4 right-4 text-xs text-muted-foreground animate-fade-in" style={{animationDelay: '0.8s'}}>
                ⚡ Made in Framer
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-40 right-32 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;