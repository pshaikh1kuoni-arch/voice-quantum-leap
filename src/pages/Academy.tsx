import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { Reveal, KineticInView, SpotlightPanel } from "@/lib/motion";

const LEVELS = [
  { n: "01", t: "Foundation Building", d: "Levels 0 and 1, from curiosity to first working automation" },
  { n: "02", t: "Automation with AI", d: "Level 2, where repetitive tasks become smart workflows" },
  { n: "03", t: "Build Real Automation", d: "Turn ideas into working, deployed AI powered apps" },
];

const TRACKS = [
  {
    tag: "Track 1",
    title: "Strategy & Built Environment",
    courses: ["AI for FM & Real Estate", "AI for Business Strategy", "AI in Decision Making", "AI for Digital Transformation"],
  },
  {
    tag: "Track 2",
    title: "Industry & Technical Mastery",
    courses: ["AI for IT Professionals", "AI for Risk Management", "AI in Manufacturing & Supply Chain", "AI for Banking Professionals"],
  },
  {
    tag: "Track 3",
    title: "Core Functional Productivity",
    courses: ["AI Essentials for Professionals", "AI for Business Fundamentals", "AI in Project Management", "AI in Digital Marketing", "How to Use AI in Education"],
  },
];

const Academy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-24 pb-14 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              JSM Nexus AI Academy
            </span>
            <h1 className="font-display text-page-display font-semibold mb-5">
              <KineticInView text="Corporate & institutional knowledge sessions in applied AI" />
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for Facility Management &amp; Corporate Real Estate leaders, and open to any professional or
              educator ready to move from curious to capable with AI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Flagship program */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              Flagship Program
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-8">A three level path, already field tested</h2>
          </Reveal>
          <Reveal delay={100}>
            <SpotlightPanel className="rounded-2xl border border-border bg-card">
              <div className="p-8">
                {LEVELS.map((lvl, i) => (
                  <div key={lvl.n} className={`flex items-center gap-4 py-4 ${i < LEVELS.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="font-display font-bold text-2xl text-primary w-10 shrink-0">{lvl.n}</span>
                    <div>
                      <div className="font-semibold">{lvl.t}</div>
                      <div className="text-sm text-muted-foreground">{lvl.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightPanel>
            <p className="text-xs text-muted-foreground mt-4">
              Most recently delivered as the GACS AI Transformation Masterclass, October to December 2025. Session
              flyers to follow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-14 px-4 bg-card/40 border-y border-border">
        <div className="container max-w-6xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              Three Learning Tracks
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-12">Who this is for</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TRACKS.map((track, i) => (
              <Reveal key={track.title} delay={i * 100}>
                <SpotlightPanel className="rounded-2xl border border-border bg-card h-full">
                  <div className="p-6">
                    <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
                      {track.tag}
                    </span>
                    <h3 className="font-display font-semibold text-lg mb-4">{track.title}</h3>
                    <ul className="flex flex-col gap-2">
                      {track.courses.map((c) => (
                        <li key={c} className="text-sm text-muted-foreground pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightPanel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Two audiences */}
      <section className="py-14 px-4">
        <div className="container max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal from="left">
            <SpotlightPanel className="rounded-2xl border border-border bg-card h-full">
              <div className="p-6">
                <h3 className="font-display font-semibold mb-2">Facility &amp; Real Estate Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Learn the same AI workflows I use to automate procurement, assets, leases, and vendor operations,
                  from someone who's actually run these operations, not just studied them.
                </p>
              </div>
            </SpotlightPanel>
          </Reveal>
          <Reveal from="right" delay={100}>
            <SpotlightPanel className="rounded-2xl border border-border bg-card h-full">
              <div className="p-6">
                <h3 className="font-display font-semibold mb-2">Educators &amp; Corporate Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  General AI upskilling for teams and educators ready to move beyond curiosity: foundations, tools,
                  and safe, practical application.
                </p>
              </div>
            </SpotlightPanel>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-card/40 border-t border-border">
        <div className="container max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Every good session starts with curiosity</h2>
            <p className="text-muted-foreground mb-8">
              Tell me a bit about your team and what you'd like to learn. Send your email and I'll get back to you
              personally with what a session could look like.
            </p>
            <div className="flex justify-center">
              <EmailCopyButton label="Ask about a session" />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Academy;
