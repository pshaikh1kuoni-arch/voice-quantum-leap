import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SpotlightPanel } from "@/lib/motion";

const LEVELS = [
  { n: "01", t: "Awareness, for execution teams", d: "Learn to use AI tools daily, save time, and get more done." },
  { n: "02", t: "Strategy, for middle management", d: "Build strong business cases and drive better ROI." },
  { n: "03", t: "Leadership, for CXOs", d: "Monitor execution, review performance, and sharpen decision making." },
];

const FM_PROOF = [
  "Data Health Agent, built to catch and flag data quality issues in operations data",
  "Predictive Maintenance Agent, using a retrieval system over maintenance history to support decisions",
  "ESG Occupancy Attendant Agent, for occupancy and ESG tracking",
  "Lease abstraction automation, built directly for real estate and facility operators",
  "A six week AI for FM curriculum, built for a RICS India engagement",
];

export const ChooseYourPath = () => {
  const [tab, setTab] = useState("industry");

  useEffect(() => {
    if (window.location.hash === "#fm-track") setTab("fm");
  }, []);

  return (
    <section id="choose-your-path" className="relative py-24 px-4 bg-card/40 border-y border-border">
      <span id="fm-track" className="absolute -top-24 sm:-top-28" aria-hidden="true" />
      <div className="container max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">Choose your path</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Training and automation for any industry, or a specialist track built on 16 years inside facility
            management and real estate.
          </p>
        </Reveal>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="industry">Every industry</TabsTrigger>
            <TabsTrigger value="fm">Facility management and real estate</TabsTrigger>
          </TabsList>

          <TabsContent value="industry">
            <SpotlightPanel className="rounded-2xl border border-border bg-card">
              <div className="p-8">
                <p className="italic font-display text-lg mb-6 gradient-text w-fit">Three levels, one program.</p>
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  {LEVELS.map((lvl) => (
                    <div key={lvl.n}>
                      <span className="font-display font-bold text-xl text-primary">{lvl.n}</span>
                      <h4 className="text-sm font-semibold mt-2 mb-1">{lvl.t}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{lvl.d}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground border-t border-border pt-6 leading-relaxed">
                  Recently delivered for teams well outside facility management too, including KEP Engineering
                  Services Pvt Ltd, KPMG, Jana Small Finance Bank, and NIQ, spanning engineering, manufacturing,
                  NBFC, and BFSI, from execution teams through to leadership.
                </p>
              </div>
            </SpotlightPanel>
          </TabsContent>

          <TabsContent value="fm">
            <SpotlightPanel className="rounded-2xl border border-border bg-card">
              <div className="p-8">
                <p className="italic font-display text-lg mb-6 gradient-text w-fit">
                  Sixteen years across BFSI, GCC, Retail, Manufacturing, and Logistics. This is where the training
                  and automation go deeper.
                </p>
                <ul className="flex flex-col gap-3 mb-6 text-sm text-muted-foreground">
                  {FM_PROOF.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground border-t border-border pt-6 leading-relaxed">
                  If your team runs facility management or a real estate portfolio, this is where the deeper
                  automation and training conversation starts.
                </p>
              </div>
            </SpotlightPanel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
