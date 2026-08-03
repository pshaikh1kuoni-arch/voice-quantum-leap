import { MapPin, Linkedin } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { Reveal } from "@/lib/motion";
import { SITE } from "@/lib/site-config";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-28 pb-24 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <Reveal>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-4">Let's talk</h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Training, B2B automation, product support, whatever brought you here, send me your email and I'll
              reply personally.
            </p>
            <div className="flex justify-center mb-10">
              <EmailCopyButton label={`✉ ${SITE.email}`} />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {SITE.location}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
