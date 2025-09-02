import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DigitalIdSection from "@/components/DigitalIdSection";
import SafetyFeatures from "@/components/SafetyFeatures";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DigitalIdSection />
      <SafetyFeatures />
      <MonitoringDashboard />
      <Footer />
    </div>
  );
};

export default Index;
