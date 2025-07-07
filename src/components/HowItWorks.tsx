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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient-accent">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our intuitive platform designed for enterprise hiring needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative feature-card group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;