import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import TransparencySection from "@/components/TransparencySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="trust">
        <TransparencySection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
