import { TrendingUp, Users, AlertTriangle, BarChart } from "lucide-react";

const AnalyticsReporting = () => {
  const features = [
    {
      icon: BarChart,
      title: "Detailed Skill Assessments",
      description: "Comprehensive evaluation of technical and soft skills with clear performance verdicts."
    },
    {
      icon: TrendingUp,
      title: "Top Candidate Highlights", 
      description: "Automatically identify and rank the most promising candidates based on performance data."
    },
    {
      icon: AlertTriangle,
      title: "Suspicious Activity Detection",
      description: "Advanced monitoring flags potential cheating or irregular behavior during interviews."
    },
    {
      icon: Users,
      title: "Enterprise Dashboards",
      description: "Advanced analytics with white-labeling options for large-scale enterprise deployments."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-gradient-primary">Analytics</span> & Reporting
          </h2>
          <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
            Make informed hiring decisions with comprehensive analytics, 
            real-time insights, and detailed performance metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsReporting;