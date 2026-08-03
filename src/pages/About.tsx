import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { Reveal, ScrollProgress } from "@/lib/motion";
import { SITE } from "@/lib/site-config";
import gacs1 from "@/assets/gacs/session-1-foundation-building.png";
import gacs2 from "@/assets/gacs/session-2-automation-with-ai.png";
import gacs3 from "@/assets/gacs/session-3-build-real-automation.png";
import salamBombay from "@/assets/salam-bombay.jpg";
import headshot from "@/assets/parvez-shaikh-headshot.png";

const SESSION_PHOTOS = [
  { img: gacs1, caption: "GACS, Session 1: Foundation Building" },
  { img: gacs2, caption: "GACS, Session 2: Automation with AI" },
  { img: gacs3, caption: "GACS, Session 3: Build Real Automation" },
  { img: salamBombay, caption: "Salam Bombay NGO, community knowledge session" },
];

const OTHER_INSTITUTIONS = ["Marsh (McLennan)", "Reliance", "Tata Motors", "Tata Steel", "Zaggle", "NIQ", "GroupM"];

const CREDENTIALS = [
  {
    t: "16+ Years in Workplace & FM Operations",
    d: "Deep cross-industry experience across BFSI, Fintech, Mobility, Retail, and Manufacturing environments.",
  },
  {
    t: "₹1.4 Cr+ Documented Operational Savings",
    d: "Measurable financial impact driven through process engineering and Lean Six Sigma methodologies.",
  },
  {
    t: "Global & Regional Portfolio Scale",
    d: "Managed workplace operations spanning single offices, multi-city hubs, and global corporate capability centers (GCCs).",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteNavbar />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <Reveal from="left">
            <img
              src={headshot}
              alt={SITE.founderName}
              className="w-40 h-40 rounded-full object-cover object-top shrink-0 border-4 border-card shadow-lg"
            />
          </Reveal>
          <Reveal from="right" delay={100}>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-2">{SITE.founderName}</h1>
            <p className="text-muted-foreground">{SITE.founderTitle}, AI for Facility Management &amp; Real Estate</p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 px-4">
        <div className="container max-w-3xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
              My Story
            </span>
          </Reveal>
          {[
            `I grew up a curious, restless kid in a middle class family in Mumbai, the one always asking "why" and "how does this actually work." That curiosity never left.`,
            `After graduating in Hotel Management, I looked for an industry that could weather anything. I landed in travel, one of the few sectors that never fully disappears no matter what the economy does. Five years in, my role naturally pulled me toward facility management. From there my expertise kept widening across facilities, travel, recruitment, and real estate, each one adding to a growing operational core rather than replacing the last.`,
            `Over the years that followed, I ran operations across Retail, BFSI, Fintech, Travel, and Insurance, inside GCCs and BPOs, for organizations managing everything from single offices to portfolios spanning many cities and countries. That range taught me something a career built in just one industry doesn't: how strikingly similar the operational problems are underneath the surface, no matter the sector.`,
            `Then AI arrived. Within about 40 days of hands on use, I knew this wasn't a passing trend. It was a paradigm shift, and I became genuinely obsessed with understanding it, a fascination that hasn't faded since.`,
            `That obsession came with a mix of optimism and healthy skepticism. I could see how much this technology could give back to people who understood it, and how easily it could leave behind those who didn't, especially in an industry like facility management and corporate real estate that's about to change more than most people realize.`,
            `That's the reason I started teaching. Not because I had all the answers, but because I'd rather take the responsibility to help people learn and benefit from this shift now, than watch them get left behind later.`,
          ].map((para, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Knowledge sessions / track record */}
      <section className="py-16 px-4 bg-card/40 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              Knowledge Sessions &amp; Community Impact
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">
              100+ AI knowledge sessions delivered
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              We work with corporate leaders and facility teams to elevate their daily productivity, replace
              manual drag with automated workflows, and build sharp decision making confidence. Alongside
              corporate upskilling, we actively partner with the Salaam Bombay Foundation to empower students
              from underserved communities with practical AI skills, helping them unlock new income
              opportunities and build brighter futures.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {SESSION_PHOTOS.map((s, i) => (
              <Reveal key={s.caption} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                  <img src={s.img} alt={s.caption} className="w-full aspect-square object-cover" />
                  <div className="p-4 text-xs text-muted-foreground">{s.caption}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-xs text-muted-foreground mb-3">
              Leaders from several Fortune 500 companies have also joined these sessions individually, including:
            </p>
            <div className="flex flex-wrap gap-3">
              {OTHER_INSTITUTIONS.map((name) => (
                <span key={name} className="text-xs font-medium rounded-full border border-border bg-card px-4 py-2">
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
          <p className="text-xs text-muted-foreground mt-6">
            Individual attendee names and photos are kept private out of respect for session permissions.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              Credentials
            </span>
          </Reveal>
          <ul className="flex flex-col gap-3">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <li className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary shrink-0">✦</span>
                  <span><span className="text-foreground font-medium">{c.t}.</span> {c.d}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-card/40 border-t border-border">
        <div className="container max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">Let's talk about your operation</h2>
            <div className="flex justify-center">
              <EmailCopyButton label="Get in Touch" />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
