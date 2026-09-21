import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SpotlightPanel } from "@/lib/motion";
import { LevelsGrid } from "@/components/LevelsGrid";

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
                <p className="italic font-display text-lg mb-6 gradient-text w-fit">3 levels, 1 program.</p>
                <div className="mb-8">
                  <LevelsGrid />
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
                  16 years across BFSI, GCC, Retail, Manufacturing, and Logistics. This is where the training
                  and automation go deeper.
                </p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Data health agents, predictive maintenance, ESG tracking, and lease abstraction, already built
                  and shipped for real FM and CRE operators.{" "}
                  <Link to="/products" className="text-primary font-semibold underline underline-offset-4">
                    See the software →
                  </Link>
                </p>
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
