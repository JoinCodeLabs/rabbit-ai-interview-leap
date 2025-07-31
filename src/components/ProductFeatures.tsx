import { Users, Calendar, Shield, Palette, Share, Zap, Lock, Globe } from "lucide-react";

const ProductFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "End-to-end Automation",
      description: "From interview to feedback, minimal human intervention required for complete hiring workflow."
    },
    {
      icon: Users,
      title: "Advanced AI",
      description: "NLP-driven AI trained on millions of interviews, generates custom questions for each role."
    },
    {
      icon: Shield,
      title: "Enterprise Proctoring", 
      description: "Face tracking, browser lockdown, and anti-cheating detection for secure assessments."
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Custom branding, interview flows, and mandatory questions tailored to your company."
    },
    {
      icon: Share,
      title: "Seamless Integration",
      description: "Works with major ATS platforms, API for scheduling and data synchronization."
    },
    {
      icon: Calendar,
      title: "Infinite Scalability",
      description: "Handle 100K+ concurrent interviews with robust load balancing and reliability."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "GDPR approved, secure S3 storage, auto-delete recordings after 3 months."
    },
    {
      icon: Globe,
      title: "Global Language Support",
      description: "Conduct interviews in 120+ global and vernacular languages for worldwide hiring."
    }
  ];

  return (
    <section className="py-24 section-gradient" id="features">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight text-foreground">
            Powerful Features for <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">Modern Hiring</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Everything you need to revolutionize your recruitment process, 
            from AI-powered interviews to enterprise-grade security.
          </p>
        </div>

        {/* Advanced Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 auto-rows-min">
          
          {/* Large Feature Card - Spans 2 columns */}
          <div className="lg:col-span-2 xl:col-span-3 row-span-2 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 group hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">End-to-end Automation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">From interview to feedback, minimal human intervention required for complete hiring workflow.</p>
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Medium Feature Cards */}
          <div className="lg:col-span-1 xl:col-span-1 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Advanced AI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">NLP-driven AI trained on millions of interviews.</p>
          </div>

          <div className="lg:col-span-1 xl:col-span-1 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">GDPR approved with secure storage.</p>
          </div>

          <div className="lg:col-span-1 xl:col-span-1 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Full Customization</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Custom branding and interview flows.</p>
          </div>

          {/* Wide Feature Card */}
          <div className="lg:col-span-2 xl:col-span-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                <Share className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Seamless Integration</h3>
                <p className="text-sm text-muted-foreground">Works with major ATS platforms</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-foreground shadow-sm">Workday</div>
              <div className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-foreground shadow-sm">BambooHR</div>
              <div className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-foreground shadow-sm">Greenhouse</div>
            </div>
          </div>

          {/* Remaining Features in Compact Cards */}
          <div className="lg:col-span-1 xl:col-span-1 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Infinite Scale</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Handle 100K+ concurrent interviews.</p>
          </div>

          <div className="lg:col-span-1 xl:col-span-1 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Global Support</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">120+ languages worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;