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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            How <span className="text-gradient-accent">It Works</span>
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
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">{step.number}</span>
              </div>
              
              <div className="pt-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;