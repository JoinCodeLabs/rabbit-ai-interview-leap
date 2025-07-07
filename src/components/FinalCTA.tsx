import { ArrowRight, Play, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-background/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-background/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-background">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl lg:text-2xl text-background/80 mb-12 leading-relaxed">
            Join forward-thinking companies already using AI to hire better talent faster. 
            Experience the future of recruitment today.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-background text-foreground px-10 py-5 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Play className="w-6 h-6" />
              Book a Demo
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-background text-background bg-transparent px-10 py-5 rounded-xl font-semibold text-xl hover:bg-background hover:text-foreground transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              Start Free Trial
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Alternative Actions */}
          <div className="flex flex-wrap justify-center gap-8 text-background/70">
            <button className="flex items-center gap-2 hover:text-background transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Sales</span>
            </button>
            <span className="hidden sm:block">|</span>
            <button className="hover:text-background transition-colors duration-200">
              View Pricing
            </button>
            <span className="hidden sm:block">|</span>
            <button className="hover:text-background transition-colors duration-200">
              Read Documentation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 border-t border-background/20 pt-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-background mb-2">500+</div>
                <div className="text-background/70 text-sm">Companies Trust Us</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-background mb-2">1M+</div>
                <div className="text-background/70 text-sm">Interviews Conducted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-background mb-2">24/7</div>
                <div className="text-background/70 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-background mb-2">99.9%</div>
                <div className="text-background/70 text-sm">Uptime Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;