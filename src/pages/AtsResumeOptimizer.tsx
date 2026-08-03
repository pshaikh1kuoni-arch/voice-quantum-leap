import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal, TiltCard } from "@/lib/motion";
import { SITE } from "@/lib/site-config";
import rezoomeShot from "@/assets/rezoome-screenshot.png";

const FEATURES = [
  { title: "ATS Proof Formatting", desc: "Come in with any resume you already have, and get back a format that actually clears applicant tracking systems." },
  { title: "Tailor Made Resumes", desc: "Optimized against the exact language of a specific job description, not a generic template." },
  { title: "Application Tracker", desc: "Keep every application you send in one place, so nothing falls through the cracks." },
];

const AtsResumeOptimizer = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-24 pb-14 px-4">
        <div className="container max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-6">
              rezoome.in
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5">ATS Resume Optimizer</h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Built for job seekers, job switchers, and anyone ready to move up. Bring any resume you already have,
              and we turn it into an ATS proof, tailor made version built around the job you actually want, plus an
              application tracker to keep it all organized.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={SITE.rezoomeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-sm text-primary-foreground glow-teal"
                style={{ background: "var(--gradient-quantum)" }}
              >
                Launch ATS Resume Engine ↗
              </a>
              <span className="text-sm text-muted-foreground">Starting at ₹49, one of the most affordable tools of its kind.</span>
            </div>
          </Reveal>
          <Reveal from="right" delay={100}>
            <img src={rezoomeShot} alt="ATS Resume Optimizer, rezoome.in" className="rounded-xl border border-border shadow-lg w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-14 px-4 bg-card/40 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold mb-10 text-center">Who this is for</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 leading-relaxed">
              Anyone job hunting, switching careers, or ready to move into a bigger role. If you're applying to
              jobs and not hearing back, the problem is often the format your resume arrives in, not you.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <TiltCard className="rounded-2xl border border-border bg-card p-6 h-full">
                  <h3 className="font-display font-semibold mb-2 text-sm">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default AtsResumeOptimizer;
