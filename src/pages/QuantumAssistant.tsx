import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import TransparencySection from "@/components/TransparencySection";
import { Reveal } from "@/lib/motion";

const QuantumAssistant = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <HeroSection />

      <section className="py-16 px-4">
        <div className="container max-w-md mx-auto">
          <Reveal>
            <div className="rounded-[2rem] border-4 border-border/60 bg-card p-2 shadow-2xl">
              <video
                src="/videos/quantum-assistant-demo.mp4"
                controls
                playsInline
                className="w-full rounded-[1.5rem]"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">See Quantum Assistant in action</p>
          </Reveal>
        </div>
      </section>

      <div id="features">
        <FeaturesSection />
      </div>
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="trust">
        <TransparencySection />
      </div>
      <SiteFooter />
    </div>
  );
};

export default QuantumAssistant;
