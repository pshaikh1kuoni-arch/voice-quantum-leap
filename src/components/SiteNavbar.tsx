import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site-config";
import { EmailCopyButton } from "./EmailCopyButton";
import logo from "@/assets/jsm-nexus-logo.png";

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Only hide once past the hero, and ignore tiny jitters so the bar
      // doesn't flicker on trackpad micro-scrolls.
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 120);
        lastY = y;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,transform] duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      } ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="container max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt={SITE.brand} className="h-[88px] w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-foreground/80">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="relative hover:text-primary transition-colors group">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <EmailCopyButton variant="primary" size="lg" label="Talk to Me" />
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <EmailCopyButton variant="primary" label="Talk to Me" />
        </div>
      )}
    </header>
  );
}
