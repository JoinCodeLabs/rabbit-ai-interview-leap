import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-primary">Rabbit AI:</span><br />
              The Future of <span className="text-gradient-accent">Hiring</span> Is Here
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              AI-powered interviews, 24x7. Hire smarter, faster, and at scale with 
              our enterprise-grade interview platform.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero-primary">
                Book a Demo
              </Button>
              <Button className="btn-hero-secondary">
                Start Free Trial
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">80%</div>
                <div className="text-sm text-muted-foreground">Faster Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">60%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24x7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">120+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Rabbit AI Dashboard showing AI-powered interview platform"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;