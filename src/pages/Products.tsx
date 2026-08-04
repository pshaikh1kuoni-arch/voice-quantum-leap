import { Link } from "react-router-dom";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal, TiltCard } from "@/lib/motion";
import quantumLogo from "@/assets/quantum-logo.png";
import rezoomeShot from "@/assets/rezoome-screenshot.png";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-24 pb-14 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              Proof, Not Just Theory
            </span>
            <h1 className="font-display text-page-display font-semibold mb-5">Products I've built and shipped</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two live products, both built by the same person teaching you to automate. Not side projects, proof.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <Reveal>
            <Link to="/quantum-assistant" className="group block h-full">
              <TiltCard className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                <div className="p-8 flex flex-col h-full">
                  <img src={quantumLogo} alt="Quantum Assistant" className="w-16 h-16 object-contain mb-5" />
                  <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                    Featured App
                  </span>
                  <h2 className="font-display text-xl font-semibold mb-2">Quantum Assistant</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    A voice first daily planner that replaces passive to do lists with an active execution workflow.
                    Live on the Play Store.
                  </p>
                  <span className="mt-auto text-sm font-semibold text-primary">
                    View product <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </TiltCard>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Link to="/ats-resume-optimizer" className="group block h-full">
              <TiltCard className="rounded-2xl border border-border bg-card overflow-hidden h-full">
                <div className="p-8 flex flex-col h-full">
                  <img src={rezoomeShot} alt="ATS Resume Optimizer" className="w-full rounded-lg border border-border mb-5" />
                  <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-3 py-1 mb-3">
                    rezoome.in
                  </span>
                  <h2 className="font-display text-xl font-semibold mb-2">ATS Resume Optimizer</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    An ATS proof, tailor made resume and application tracker built for anyone job hunting or ready
                    to move up.
                  </p>
                  <span className="mt-auto text-sm font-semibold text-primary">
                    View product <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </TiltCard>
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Products;
