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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-5 py-3 animate-fade-in shadow-md">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">Powered by Advanced AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-foreground">
                AI That
                <br />
                <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent animate-shimmer bg-300% bg-size-200">
                  Interviews
                </span>
                <br />
                Like Humans
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Transform hiring with AI that conducts natural, human-like interviews 24/7. 
                <span className="text-foreground font-medium">Scale your recruitment without limits.</span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <Button className="cta-primary group text-lg px-8 py-4">
                <span className="relative z-10">Book a Demo</span>
              </Button>
              <Button className="cta-secondary text-lg px-8 py-4">
                Start Free Trial
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-slide-up">
              <div className="text-center space-y-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground">80%</div>
                <div className="text-sm text-muted-foreground font-medium">Faster Hiring</div>
              </div>
              <div className="text-center space-y-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-emerald/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Bot className="w-7 h-7 text-accent-emerald" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground">60%</div>
                <div className="text-sm text-muted-foreground font-medium">Cost Reduction</div>
              </div>
              <div className="text-center space-y-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-amber/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Clock className="w-7 h-7 text-accent-amber" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">AI Available</div>
              </div>
              <div className="text-center space-y-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-purple/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Users className="w-7 h-7 text-accent-purple" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground">120+</div>
                <div className="text-sm text-muted-foreground font-medium">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-8">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Main AI Interface */}
              <div className="relative glass-effect rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-xl">
                {/* AI Bot Interface */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 ai-orb shadow-lg"></div>
                    <div>
                      <div className="font-bold text-foreground text-lg">Rabbit AI Interviewer</div>
                      <div className="text-sm text-primary font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        Conducting live interview...
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Chat Bubbles */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary/15 to-accent-purple/10 rounded-2xl rounded-bl-md p-5 max-w-sm border border-primary/20 shadow-sm">
                      <p className="text-sm text-foreground font-medium">"Tell me about your experience with React hooks and state management?"</p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl rounded-br-md p-5 max-w-sm ml-auto border border-slate-200 shadow-sm">
                      <p className="text-sm text-foreground">"I've worked extensively with useState, useEffect, and Context API for complex state management..."</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/15 to-accent-purple/10 rounded-2xl rounded-bl-md p-5 max-w-sm border border-primary/20 shadow-sm">
                      <p className="text-sm text-foreground font-medium">"Excellent! Can you walk me through debugging a complex React component?"</p>
                    </div>
                  </div>
                  
                  {/* Enhanced AI Analysis */}
                  <div className="border-t border-border/50 pt-6">
                    <div className="text-xs text-muted-foreground mb-4 font-semibold tracking-wide">REAL-TIME ANALYSIS</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Technical Knowledge</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="w-[92%] h-full bg-gradient-to-r from-primary to-accent-emerald rounded-full"></div>
                          </div>
                          <span className="text-primary font-bold text-sm">92%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Communication</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="w-[88%] h-full bg-gradient-to-r from-primary to-accent-emerald rounded-full"></div>
                          </div>
                          <span className="text-primary font-bold text-sm">88%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Problem Solving</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-gradient-to-r from-primary to-accent-emerald rounded-full"></div>
                          </div>
                          <span className="text-primary font-bold text-sm">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 ai-pulse opacity-80 shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 ai-pulse opacity-60 shadow-md" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 -right-10 w-6 h-6 ai-pulse opacity-40" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 -left-4 w-4 h-4 bg-gradient-to-br from-accent-purple to-primary rounded-full opacity-50 floating-shapes" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;