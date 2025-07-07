import analyticsImage from "@/assets/analytics-dashboard.jpg";
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Analytics</span> & Reporting
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Make informed hiring decisions with comprehensive analytics, 
              real-time insights, and detailed performance metrics.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={analyticsImage} 
                alt="Advanced analytics dashboard with candidate assessments and performance metrics"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsReporting;