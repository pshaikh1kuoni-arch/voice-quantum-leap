import { motion } from "framer-motion";
import quantumLogo from "@/assets/quantum-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-quantum-teal/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-quantum-blue/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-quantum-lime/5 blur-[150px]" />
      </div>

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="gradient-text">Quantum Assistant</span>
            <br />
            <span className="text-foreground">Your Voice-First Productivity OS.</span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mb-8 text-balance">
            Stop typing, start doing. The first Android experience where a single voice command manages your entire professional lifecycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-primary-foreground bg-primary glow-teal transition-transform hover:scale-105"
            >
              Download Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold border border-glass text-foreground backdrop-blur-sm transition-transform hover:scale-105 hover:border-primary/50"
            >
              View Features
            </a>
          </div>
        </motion.div>

        {/* Logo / Bot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-quantum-teal/20 blur-[60px] animate-pulse-glow" />
            <img
              src={quantumLogo}
              alt="Quantum Assistant - AI Productivity Bot"
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain animate-float drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
