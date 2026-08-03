import { Link } from "react-router-dom";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { Reveal, KineticText, TiltCard, CountUp, Marquee, ScrollProgress } from "@/lib/motion";
import { SITE } from "@/lib/site-config";
import headshot from "@/assets/parvez-shaikh-headshot.png";

const TRUST_STATS = [
  { value: "100+", label: "Knowledge sessions delivered" },
  { value: "10,000+", label: "LinkedIn network" },
  { value: "500+", label: "Workflows automated" },
];

const MARQUEE_ITEMS = [
  "AI for Facility Management",
  "Real Estate Automation",
  "Voice-First Planning",
  "WhatsApp CRM",
  "RAG Knowledge Bases",
  "AI Knowledge Sessions",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-8%] w-[36vw] h-[36vw] rounded-full bg-violet-200/40 blur-[90px]" />
          <div className="absolute bottom-[-16%] left-[-6%] w-[28vw] h-[28vw] rounded-full bg-cyan-200/40 blur-[90px]" />
          <div className="absolute top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-[min(26vw,300px)] text-foreground/[0.035] whitespace-nowrap select-none">
            NEXUS
          </div>
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center mb-14">
            <Reveal from="left">
              <div className="relative mx-auto max-w-[280px] lg:max-w-none">
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-violet-300/40 to-cyan-300/40 blur-[60px]" />
                <img
                  src={headshot}
                  alt={SITE.founderName}
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(30,20,10,0.15)]"
                />
              </div>
            </Reveal>

            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-7">
                AI for Facility Management &amp; Real Estate
              </span>

              <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] mb-6">
                <KineticText text="I teach the built environment" delay={0.25} />
                <br />
                <span className="italic gradient-text">
                  <KineticText text="to use AI." delay={0.65} />
                </span>
              </h1>

              <p className="text-muted-foreground text-lg max-w-xl mb-9 leading-relaxed">
                I don't just teach tools. I help people build a completely new way of working. My mission is to
                give Real Estate and Facility Management professionals the freedom to step away from manual
                routines, look at data with fresh eyes, and deliver high quality work much faster. When work stops
                being a constant grind, you don't just get better results. You reclaim the time and space you need
                to grow as a person and as a leader.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/academy"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm text-primary-foreground glow-teal transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-quantum)" }}
                >
                  Explore AI Academy
                </Link>
                <a
                  href="#proof"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  See what I've built
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-display font-semibold text-2xl gradient-text">
                  <CountUp value={s.value} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* Proof: I don't just teach it, I ship it */}
      <section id="proof" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              Proof, Not Just Theory
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-14 max-w-xl">
              I don't just teach it, I ship it
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0} className="lg:col-span-2">
              <TiltCard className="h-full">
                <div style={{ background: "var(--gradient-quantum)" }} className="rounded-2xl p-7 h-full text-primary-foreground">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-white/20 rounded-full px-3 py-1 mb-4">
                    Featured App
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-2">Quantum Assistant</h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    A voice first daily planner, live on the Play Store. Built by the same person teaching you to
                    automate.
                  </p>
                  <Link to="/quantum-assistant" className="inline-block mt-4 text-sm font-semibold underline underline-offset-4">
                    View product →
                  </Link>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2">
              <TiltCard className="rounded-2xl border border-border bg-card p-7 h-full">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                  rezoome.in
                </span>
                <h3 className="font-display text-xl font-semibold mb-2">ATS Resume Optimizer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A tailor made AI resume engine that optimizes your profile against ATS systems and specific job
                  descriptions in seconds.
                </p>
                <Link to="/ats-resume-optimizer" className="inline-block mt-4 text-sm font-semibold text-primary underline underline-offset-4">
                  View product →
                </Link>
              </TiltCard>
            </Reveal>

            <Reveal delay={200}>
              <TiltCard className="rounded-2xl border border-border bg-card p-7 h-full">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                  B2B Automation
                </span>
                <h3 className="font-display text-lg font-semibold mb-2">FM &amp; CRE Workflows</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Procurement, assets, travel, and lease abstraction, implemented for real operators.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay={300}>
              <TiltCard className="rounded-2xl border border-border bg-card p-7 h-full">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-3 py-1 mb-4">
                  B2B Automation
                </span>
                <h3 className="font-display text-lg font-semibold mb-2">WhatsApp CRM &amp; RAG</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ticketing, SOP bots, and contract search, or let me build it for your team.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Academy flagship program */}
      <section className="py-24 px-4 bg-card/40 border-y border-border">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal from="left">
            <div className="rounded-2xl border border-border bg-card p-8">
              {[
                { n: "01", t: "Foundation Building", d: "Levels 0 and 1, from curiosity to first working automation" },
                { n: "02", t: "Automation with AI", d: "Level 2, where repetitive tasks become smart workflows" },
                { n: "03", t: "Build Real Automation", d: "Turn ideas into working, deployed AI powered apps" },
              ].map((lvl, i, arr) => (
                <div key={lvl.n} className={`flex items-center gap-4 py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-display font-bold text-xl text-primary w-8 shrink-0">{lvl.n}</span>
                  <div>
                    <div className="text-sm font-semibold">{lvl.t}</div>
                    <div className="text-xs text-muted-foreground">{lvl.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              AI Academy Flagship Program
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">A three level path, already field tested</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Built for Facility Management and Corporate Real Estate leaders, and open to any professional or
              educator ready to move from curious to capable with AI.
            </p>
            <ul className="flex flex-col gap-3 mb-8 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">✦</span> Delivered as live knowledge sessions, most recently the GACS AI Transformation Masterclass</li>
              <li className="flex gap-2"><span className="text-primary">✦</span> Also taught in community settings, including a Salam Bombay NGO session</li>
              <li className="flex gap-2"><span className="text-primary">✦</span> Curious about a session for your team? Send your email and I'll get back to you personally</li>
            </ul>
            <EmailCopyButton label="Ask about a session" />
          </Reveal>
        </div>
      </section>

      {/* B2B teaser */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              Or, Let Me Build It For You
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12 max-w-xl">
              B2B automation for facility &amp; real estate operators
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <Reveal>
              <TiltCard className="rounded-2xl border border-border bg-card p-7 h-full">
                <h3 className="font-display text-lg font-semibold mb-3">FM Operations, Leases, Approvals and More</h3>
                <ul className="text-sm text-muted-foreground flex flex-col gap-3">
                  <li>• Find exact lease terms, escalation dates, and penalty clauses without searching through 50 page PDFs</li>
                  <li>• Track live building occupancy and space usage without relying on manual headcounts or spreadsheets</li>
                  <li>• Compare vendor quotes side by side and approve purchase orders in minutes instead of chasing sign offs for days</li>
                  <li>• Clear travel requests and multi tier manager approvals automatically so work never gets stalled</li>
                </ul>
              </TiltCard>
            </Reveal>
            <Reveal delay={100}>
              <TiltCard className="rounded-2xl border border-border bg-card p-7 h-full">
                <h3 className="font-display text-lg font-semibold mb-3">Daily Helpdesk &amp; Maintenance</h3>
                <ul className="text-sm text-muted-foreground flex flex-col gap-3">
                  <li>• Let staff and tenants log issues over chat and send automatic status updates straight to their phones</li>
                  <li>• Ask questions directly to your building manuals to solve equipment breakdowns on the spot</li>
                  <li>• Prevent maintenance requests from getting lost in email threads with automatic task routing to technicians</li>
                  <li>• Get instant alerts before vendor contracts or service deadlines are breached</li>
                </ul>
              </TiltCard>
            </Reveal>
          </div>
          <Link to="/solutions/fm-ops" className="text-sm font-semibold text-primary underline underline-offset-4">
            See how we solve your specific operational headache →
          </Link>
        </div>
      </section>

      {/* About / founder strip */}
      <section className="py-24 px-4 bg-card/40 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col sm:flex-row items-center gap-8">
              <img
                src={headshot}
                alt={SITE.founderName}
                className="w-32 h-32 rounded-full object-cover object-top shrink-0 border-4 border-background shadow-md"
              />
              <div>
                <h3 className="font-display text-xl font-semibold">{SITE.founderName}</h3>
                <p className="text-xs text-muted-foreground mb-3">{SITE.founderTitle}, AI for Facility Management &amp; Real Estate</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-4">
                  With 16 years in Facility Management and Corporate Real Estate, and 100+ AI knowledge sessions
                  delivered to an active community of 10,000+ industry leaders, I operate on a single core
                  principle: technology must deliver measurable operational and financial ROI.
                </p>
                <Link to="/about" className="text-sm font-semibold text-primary underline underline-offset-4">
                  Read the full story →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home;
