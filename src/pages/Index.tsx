import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import TrustSection from "@/components/TrustSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkflowSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <TrustSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
