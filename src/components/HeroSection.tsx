import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            <span className="text-gradient-primary">Rabbit AI:</span><br />
            The Future of <span className="text-gradient-accent">Hiring</span> Is Here
          </h1>
          <p className="text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            AI-powered interviews, 24x7. Hire smarter, faster, and at scale with 
            our enterprise-grade interview platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button className="btn-hero-primary text-xl px-12 py-6">
              Book a Demo
            </Button>
            <Button className="btn-hero-secondary text-xl px-12 py-6">
              Start Free Trial
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">80%</div>
              <div className="text-lg text-muted-foreground font-medium">Faster Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-secondary mb-2">60%</div>
              <div className="text-lg text-muted-foreground font-medium">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">24x7</div>
              <div className="text-lg text-muted-foreground font-medium">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">120+</div>
              <div className="text-lg text-muted-foreground font-medium">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;