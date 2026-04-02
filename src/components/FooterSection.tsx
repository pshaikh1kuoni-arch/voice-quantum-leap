import quantumLogo from "@/assets/quantum-logo.png";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={quantumLogo} alt="Quantum Assistant" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-lg text-foreground">Quantum Assistant</span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://docs.google.com/document/d/14sltAeEh9rghEjRRCqGGB9CSClvG466nISbGP5s5qBo/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms and Conditions
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSRGOJOiAvZ_V_8VHND-Z2Eyma9_CiYUV8ScqmQbkiBBkMjZ2TIu9k-h_Er5tJseSS8FKlVNQ5s3Lew/pub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:parvezaigyaan@gmail.com" className="hover:text-primary transition-colors">
              parvezaigyaan@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quantum Assistant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
