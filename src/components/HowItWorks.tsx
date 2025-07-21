const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect your ATS",
      description: "Seamlessly integrate with your existing Applicant Tracking System for instant setup."
    },
    {
      number: "02", 
      title: "Customize your interview flow",
      description: "Design your interview process, add branding, and configure mandatory questions."
    },
    {
      number: "03",
      title: "Invite candidates",
      description: "Send secure interview links to candidates with automated scheduling."
    },
    {
      number: "04",
      title: "AI conducts interviews",
      description: "Our AI interviewer conducts live, proctored interviews with human-like interaction."
    },
    {
      number: "05",
      title: "Get instant analytics",
      description: "Receive detailed feedback, recordings, and skill assessments immediately."
    },
    {
      number: "06",
      title: "Make data-driven decisions",
      description: "Use comprehensive insights to hire the best candidates faster."
    }
  ];

  return (
    <section className="py-32 section-dark" id="how-it-works">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight text-foreground">
            How <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Get started in minutes with our intuitive platform designed for enterprise hiring needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative feature-card group"
            >
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-primary to-accent-purple rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-black text-2xl">{step.number}</span>
              </div>
              
              <div className="pt-12 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">{step.description}</p>
              </div>

              {/* Enhanced Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;