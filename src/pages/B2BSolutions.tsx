import { useState } from "react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { Reveal, TiltCard } from "@/lib/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingCart,
  FileSearch,
  LayoutDashboard,
  Database,
  MessageSquareText,
  BookOpen,
  Plane,
  Boxes,
  Plug,
  Leaf,
  Building2,
  FileText,
  Library,
  Wrench,
} from "lucide-react";

const UNIVERSAL_AUTOMATIONS = [
  { icon: ShoppingCart, title: "Procurement & Purchase Automation", desc: "PR to PO in seconds, vendor quotes compared side by side, invoices reconciled automatically." },
  { icon: FileSearch, title: "Document Intelligence", desc: "Contracts and long documents parsed for the dates, numbers, and liabilities that matter, so nothing gets missed in the fine print." },
  { icon: LayoutDashboard, title: "Reporting & Dashboards", desc: "The numbers that used to take a week to pull together, refreshed automatically, every time." },
  { icon: Database, title: "Data Cleanup at Scale", desc: "Messy, scattered records turned into clean, usable data, without anyone retyping a thing." },
  { icon: MessageSquareText, title: "WhatsApp & Web Chatbots", desc: "Customers or employees ask, and get an instant answer, a logged ticket, or a routed request, no human in the loop." },
  { icon: BookOpen, title: "Company Knowledge, On Tap", desc: "SOPs and policies turned into a chatbot that actually knows the answer, instead of a folder nobody opens." },
  { icon: Plane, title: "Travel & Approvals", desc: "Requests, policy checks, and manager sign-off, running on their own instead of waiting in an inbox." },
  { icon: Boxes, title: "Asset & Inventory Tracking", desc: "Equipment health, warranties, and maintenance, tracked automatically instead of on a spreadsheet." },
  { icon: Plug, title: "System Integration", desc: "Connecting AI directly into the ERP, ticketing tool, or cloud stack you already run." },
];

const FM_AUTOMATIONS = [
  { icon: Leaf, title: "ESG & Carbon Calculation", desc: "Automated tracking and reporting for sustainability and carbon metrics across your portfolio." },
  { icon: Building2, title: "Occupancy Analytics", desc: "Real time occupancy and space utilization insight, without the manual headcounts." },
  { icon: FileText, title: "Lease Abstraction", desc: "AI parsing of CRE leases that extracts critical dates, escalations, and financial liabilities in seconds." },
  { icon: Library, title: "Facility SOP & Building Manual RAG", desc: "Turns hundreds of pages of manuals and SOPs into instant, queryable bots for your building or portfolio." },
  { icon: Wrench, title: "Tenant Incident & Work Order Routing", desc: "Tenants report issues on WhatsApp, and the system logs tickets into CAFM or IWMS and routes them to field engineers automatically." },
];

function AutomationGrid({ items, delayOffset = 0 }: { items: typeof UNIVERSAL_AUTOMATIONS; delayOffset?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((a, i) => (
        <Reveal key={a.title} delay={(delayOffset + i) * 70}>
          <TiltCard className="rounded-2xl border border-border bg-card p-6 h-full">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2 text-sm">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}

const B2BSolutions = () => {
  const [tab, setTab] = useState("industry");

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              Automation
            </span>
            <h1 className="font-display text-page-display font-semibold mb-5 max-w-2xl">Automation, built to run without you</h1>
            <p className="text-lg italic text-foreground/80 max-w-xl">"If it's a manual process, it can run on its own."</p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="container max-w-5xl mx-auto">
          <Reveal>
            <p className="text-muted-foreground max-w-2xl mb-10">
              General automation for any industry, or a specialist track built on 16 years inside facility
              management and real estate.
            </p>
          </Reveal>

          <Tabs value={tab} onValueChange={setTab}>
            <Reveal>
              <TabsList className="mb-10">
                <TabsTrigger value="industry">Every industry</TabsTrigger>
                <TabsTrigger value="fm">Facility management and real estate</TabsTrigger>
              </TabsList>
            </Reveal>

            <TabsContent value="industry">
              <AutomationGrid items={UNIVERSAL_AUTOMATIONS} />
            </TabsContent>

            <TabsContent value="fm">
              <AutomationGrid items={UNIVERSAL_AUTOMATIONS} />
              <Reveal delay={9 * 70}>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mt-10 mb-5">
                  Built specifically for facility management and real estate
                </p>
              </Reveal>
              <AutomationGrid items={FM_AUTOMATIONS} delayOffset={9} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-card/40 border-t border-border">
        <div className="container max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Curious what this looks like for your operation?</h2>
            <p className="text-muted-foreground mb-8">
              Send me your email and a line about what's eating your team's time. I'll get back to you personally
              with what a solution could look like.
            </p>
            <div className="flex justify-center">
              <EmailCopyButton label="Ask about automation" />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default B2BSolutions;
