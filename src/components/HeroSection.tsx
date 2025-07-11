import { Button } from "@/components/ui/button";
import { Bot, Zap, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 animate-fade-in">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Powered by Advanced AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground">
                24/7 AI Interviewing
                <br />
                <span className="text-primary">Saves Engineering</span>
                <br />
                Bandwidth
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Let AI handle first-round interviews while your team focuses on building. 
                Scale your hiring without burning out your engineers.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <Button className="cta-primary">
                Book a Demo
              </Button>
              <Button className="cta-secondary">
                Start Free Trial
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-slide-up">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">80%</div>
                <div className="text-sm text-muted-foreground">Faster Hiring</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">60%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">AI Available</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">120+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-8">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Main AI Illustration */}
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl">
                {/* AI Bot Interface */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 ai-orb"></div>
                    <div>
                      <div className="font-semibold text-foreground">Rabbit AI Interviewer</div>
                      <div className="text-sm text-muted-foreground">Conducting interview...</div>
                    </div>
                  </div>
                  
                  {/* Chat Bubbles */}
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-2xl rounded-bl-sm p-4 max-w-xs">
                      <p className="text-sm text-foreground">"Tell me about your experience with React hooks and state management?"</p>
                    </div>
                    <div className="bg-muted rounded-2xl rounded-br-sm p-4 max-w-xs ml-auto">
                      <p className="text-sm text-foreground">"I've worked extensively with useState, useEffect, and Context API..."</p>
                    </div>
                    <div className="bg-primary/10 rounded-2xl rounded-bl-sm p-4 max-w-xs">
                      <p className="text-sm text-foreground">"Great! Can you walk me through a challenging debugging scenario?"</p>
                    </div>
                  </div>
                  
                  {/* AI Analysis */}
                  <div className="border-t border-border pt-4">
                    <div className="text-xs text-muted-foreground mb-2">Real-time Analysis</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Technical Knowledge</span>
                        <span className="text-primary font-medium">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Communication</span>
                        <span className="text-primary font-medium">88%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Problem Solving</span>
                        <span className="text-primary font-medium">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 ai-pulse opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 ai-pulse opacity-40" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 ai-pulse opacity-30" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;