import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import ProductFeatures from "@/components/ProductFeatures";
import CandidateExperience from "@/components/CandidateExperience";
import AnalyticsReporting from "@/components/AnalyticsReporting";
import ImpactMetrics from "@/components/ImpactMetrics";
import Testimonials from "@/components/Testimonials";
import WhoItsFor from "@/components/WhoItsFor";
import SecurityCompliance from "@/components/SecurityCompliance";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <ProductFeatures />
        <CandidateExperience />
        <AnalyticsReporting />
        <ImpactMetrics />
        <Testimonials />
        <WhoItsFor />
        <SecurityCompliance />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
