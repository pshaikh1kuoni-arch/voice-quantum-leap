import { useMemo } from "react";
import { Link } from "react-router-dom";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ChooseYourPath } from "@/components/ChooseYourPath";
import {
  Reveal,
  KineticText,
  TiltCard,
  CountUp,
  Marquee,
  ScrollProgress,
  Magnetic,
  ScrollRevealText,
  ImageReveal,
  SpotlightPanel,
} from "@/lib/motion";
import { SITE } from "@/lib/site-config";
import { SEEDED_PRODUCTS } from "@/data/products";
import { useSheetGalleryProducts } from "@/lib/productSheet";
import headshot from "@/assets/parvez-shaikh-headshot.png";
import { SpecRow } from "@/components/SpecRow";
import {
  MessageCircle,
  Cpu,
  Search,
  Code2,
  Clapperboard,
  LayoutGrid,
  ListChecks,
  Zap,
  BarChart3,
  Target,
  Package,
} from "lucide-react";

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
  const { data: sheetProducts = [] } = useSheetGalleryProducts();
  const allProducts = useMemo(() => [...SEEDED_PRODUCTS, ...sheetProducts], [sheetProducts]);
  const liveProducts = useMemo(() => allProducts.filter((p) => p.status === "Live"), [allProducts]);
  const upcomingProducts = useMemo(() => allProducts.filter((p) => p.status === "Upcoming"), [allProducts]);

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
            <div className="relative mx-auto max-w-[280px] lg:max-w-none">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-violet-300/40 to-cyan-300/40 blur-[60px]" />
              <ImageReveal
                src={headshot}
                alt={SITE.founderName}
                imgClassName="w-full h-auto drop-shadow-[0_20px_40px_rgba(30,20,10,0.15)]"
              />
            </div>

            <div>
              <h1 className="font-display font-semibold text-hero-display leading-[1.12] mb-6">
                <KineticText text="I teach organizations how to use AI," delay={0.25} />
                <br />
                <span className="italic gradient-text">
                  <KineticText text="and I build the automation that proves it works" delay={0.65} />
                </span>
              </h1>

              <p className="text-muted-foreground text-lg max-w-xl mb-9 leading-relaxed">
                Practical AI training and workflow automation for any industry, from execution teams to leadership.
              </p>

              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href="#what-i-do"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm text-primary-foreground glow-teal transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-quantum)" }}
                  >
                    See how I can help your team
                  </a>
                </Magnetic>
                <a
                  href="#fm-track"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  Facility management and real estate specialist track
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {TRUST_STATS.map((s) => (
              <SpotlightPanel key={s.label} className="rounded-2xl border border-border bg-card">
                <div className="p-5">
                  <div className="font-display font-semibold text-2xl gradient-text">
                    <CountUp value={s.value} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              </SpotlightPanel>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* Two pillars: What I do */}
      <section id="what-i-do" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-14">What I do</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal from="left">
              <TiltCard className="rounded-2xl border border-border bg-card shadow-xl p-8 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-3">AI training and workshops</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  I teach every major AI tool in current use, organized by what a team actually needs to get done,
                  not just the two or three names everyone already knows.
                </p>
                <div className="flex flex-col gap-4 mb-5">
                  <SpecRow
                    icon={MessageCircle}
                    tone="primary"
                    title="Generative AI chat tools"
                    description="ChatGPT, Gemini, Claude, Grok, and current open weight models such as DeepSeek and GLM."
                  />
                  <SpecRow
                    icon={Cpu}
                    tone="primary"
                    title="Prompt engineering and agentic AI"
                    description="Designing AI agents and agentic workflows using frameworks such as LangChain, n8n, and OpenClaw."
                  />
                  <SpecRow
                    icon={Search}
                    tone="primary"
                    title="Document intelligence and RAG"
                    description="NotebookLM and retrieval augmented generation systems that turn a team's own SOPs, policies, and meeting notes into a searchable, accurate assistant."
                  />
                  <SpecRow
                    icon={Code2}
                    tone="primary"
                    title="Vibe coding and AI app building"
                    description="Claude Code, Cursor, Google Antigravity, and Replit, letting any team build small internal tools without writing code from scratch."
                  />
                  <SpecRow
                    icon={Clapperboard}
                    tone="primary"
                    title="AI video and image creation"
                    description="HeyGen, Descript, and Higgsfield, for training material, presentations, and marketing content without a production budget."
                  />
                  <SpecRow
                    icon={LayoutGrid}
                    tone="primary"
                    title="AI inside everyday work tools"
                    description="Microsoft Copilot and similar assistants now built directly into Word, Excel, and PowerPoint."
                  />
                </div>
                <p className="text-sm italic text-muted-foreground border-t border-border pt-4 mt-auto">
                  Delivered using real work from your own operations as the case study, not generic examples.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal from="right" delay={100}>
              <TiltCard className="rounded-2xl border border-border bg-card shadow-xl p-8 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-3">Business automation and workflow AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Automation applied directly to your operations, using agentic AI frameworks such as LangChain,
                  n8n, and OpenClaw, connected to the systems a team already uses. Over 500 business workflows
                  automated to date, including procurement workflows, WhatsApp CRM, and RAG based SOP and contract
                  search bots. Once it is built it runs with zero manual intervention, so the gains compound every
                  day instead of depending on someone remembering to do the task.
                </p>
                <div className="flex flex-col gap-4">
                  <SpecRow
                    icon={ListChecks}
                    tone="secondary"
                    title="Productivity"
                    description="Repeatable tasks such as data entry, reporting, and document extraction run on their own."
                  />
                  <SpecRow
                    icon={Zap}
                    tone="secondary"
                    title="Efficiency"
                    description="Fewer manual handoffs, faster turnaround, lower error rates."
                  />
                  <SpecRow
                    icon={BarChart3}
                    tone="secondary"
                    title="Decision making power"
                    description="Dashboards and agents that surface the right numbers before a meeting, not after."
                  />
                  <SpecRow
                    icon={Target}
                    tone="secondary"
                    title="Strategy building"
                    description="Automation that frees senior time away from repetitive work and toward planning."
                  />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

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

          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal from="left">
              <TiltCard className="rounded-2xl shadow-xl h-full">
                <SpotlightPanel className="h-full" tint="white">
                  <div style={{ background: "var(--gradient-quantum)" }} className="rounded-2xl p-8 h-full text-primary-foreground flex flex-col">
                    <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider bg-white/20 rounded-full px-3 py-1 mb-4">
                      Software I've Built
                    </span>
                    <div className="flex flex-col gap-3 mb-5">
                      {liveProducts.slice(0, 5).map((p) => (
                        <SpecRow key={p.id} icon={Package} tone="white" title={p.name} description={p.tagline} />
                      ))}
                    </div>
                    {liveProducts.length > 5 && (
                      <p className="text-xs text-white/70 mb-4">+{liveProducts.length - 5} more</p>
                    )}
                    <Link to="/products" className="group inline-block mt-auto w-fit text-sm font-semibold underline underline-offset-4">
                      See all products <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </SpotlightPanel>
              </TiltCard>
            </Reveal>

            <Reveal from="right" delay={100}>
              <TiltCard className="rounded-2xl shadow-xl h-full">
                <SpotlightPanel className="h-full" tint="white">
                  <div style={{ background: "var(--gradient-quantum)" }} className="rounded-2xl p-8 h-full text-primary-foreground flex flex-col">
                    <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider bg-white/20 rounded-full px-3 py-1 mb-4">
                      What's Next
                    </span>
                    {upcomingProducts.length > 0 ? (
                      <div className="flex flex-col gap-3 mb-5">
                        {upcomingProducts.slice(0, 5).map((p) => (
                          <SpecRow key={p.id} icon={Package} tone="white" title={p.name} description={p.tagline} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-white/80 mb-5">New software in the works, check back soon.</p>
                    )}
                    <Link to="/products" className="group inline-block mt-auto w-fit text-sm font-semibold underline underline-offset-4">
                      See all products <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </SpotlightPanel>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <ChooseYourPath />

      {/* About and proof */}
      <section className="py-24 px-4 bg-card/40 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">About and proof</h2>
            <SpotlightPanel className="rounded-2xl border border-border bg-card">
              <div className="p-8 flex flex-col sm:flex-row items-start gap-8">
                <ImageReveal
                  src={headshot}
                  alt={SITE.founderName}
                  className="w-32 h-32 rounded-full shrink-0 border-4 border-background shadow-md"
                  imgClassName="w-full h-full object-cover object-top"
                  rounded="9999px"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold">{SITE.founderName}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{SITE.founderTitle}</p>
                  <ScrollRevealText
                    text="Builds what he teaches. Has shipped production AI applications, including Quantum Assistant, a voice first daily planner live on the Play Store, and Rezoome.in, an AI powered resume optimizer, and has automated 500+ business workflows using generative AI, agentic AI, and RAG systems."
                    className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-4">
                    16 years in Facility Management and Workplace Operations, spanning Insurance and GCC, BFSI,
                    Retail, Manufacturing, Logistics, and Travel. Past clients and employers include Marsh
                    McLennan, JLL, Zaggle, Satin Finserv, LG Polymers, Bestseller Retail India, and Kuoni Travel
                    India. That operational depth is why the automation holds up under real conditions, not just in
                    a workshop room.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-4">
                    Delivered 100+ hands on training sessions to a working community of 10,000+ professionals
                    across LinkedIn, WhatsApp, and YouTube Shorts, including leaders from Fortune 500 organizations
                    such as Marsh McLennan, Reliance, Tata Motors, Tata Steel, KPMG, and GroupM.
                  </p>
                  <Link to="/about" className="group text-sm font-semibold text-primary underline underline-offset-4">
                    Read the full story <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </SpotlightPanel>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 text-center">
        <div className="container max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">Connect to know more</h2>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm text-primary-foreground glow-teal transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--gradient-quantum)" }}
              >
                Start a conversation
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home;
