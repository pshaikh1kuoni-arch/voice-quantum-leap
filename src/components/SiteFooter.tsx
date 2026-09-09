import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site-config";
import logo from "@/assets/jsm-nexus-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="inline-block mb-3">
              <img src={logo} alt={SITE.brand} className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-[260px]">
              Practical AI training and workflow automation for any industry, from execution teams to leadership.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">Navigate</h4>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/sessions" className="text-muted-foreground hover:text-primary transition-colors">Sessions</Link>
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/solutions/fm-ops" className="text-muted-foreground hover:text-primary transition-colors">B2B Automations</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">Learn &amp; Work With Me</h4>
            <Link to="/academy" className="text-muted-foreground hover:text-primary transition-colors">AI Academy</Link>
            <Link to="/solutions/fm-ops" className="text-muted-foreground hover:text-primary transition-colors">B2B Automations</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">Elsewhere</h4>
            <a href={SITE.playStoreUrl} target="_blank" rel="noopener noreferrer" className="group text-muted-foreground hover:text-primary transition-colors">
              Quantum Assistant on the Play Store <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a href={SITE.rezoomeUrl} target="_blank" rel="noopener noreferrer" className="group text-muted-foreground hover:text-primary transition-colors">
              rezoome.in <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group text-muted-foreground hover:text-primary transition-colors">
              LinkedIn <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {SITE.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
