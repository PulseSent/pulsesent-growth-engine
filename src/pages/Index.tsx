import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AutomationsSection from "@/components/AutomationsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import TrustSection from "@/components/TrustSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AutomationsSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <TrustSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
