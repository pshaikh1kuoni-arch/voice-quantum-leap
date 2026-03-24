import { useState, useEffect } from "react";
import quantumLogo from "@/assets/quantum-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card rounded-none border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <img src={quantumLogo} alt="Quantum" className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-foreground">Quantum</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#trust" className="hover:text-primary transition-colors">Trust</a>
        </div>
        <a
          href="#features"
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground bg-primary glow-teal transition-transform hover:scale-105"
        >
          Get App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
