import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { Reveal, TiltCard } from "@/lib/motion";
import { LayoutDashboard, ScanText, Leaf, Building2, Database, MessageSquareText } from "lucide-react";

const AUTOMATIONS = [
  { icon: LayoutDashboard, title: "Dashboard Automation", desc: "Monthly, quarterly, and yearly reviews with cost versus actual tracking, built and refreshed automatically." },
  { icon: ScanText, title: "Invoice OCR", desc: "Extract data straight from invoices and maintain a clean, searchable database without manual entry." },
  { icon: Leaf, title: "ESG & Carbon Calculation", desc: "Automated tracking and reporting for sustainability and carbon metrics across your portfolio." },
  { icon: Building2, title: "Occupancy Analytics", desc: "Real time occupancy and space utilization insight, without the manual headcounts." },
  { icon: Database, title: "Data Refining Automation", desc: "Turn messy, scattered operational data into clean, usable records." },
  { icon: MessageSquareText, title: "Chatbot Automation", desc: "WhatsApp and web bots that answer questions, log tickets, and route requests automatically." },
];

const PILLAR_1 = [
  {
    title: "Procurement & Financial Workflows",
    items: [
      { t: "PR to PO Processing", d: "Instant AI extraction of Purchase Requisitions, automated Purchase Order generation, and ERP syncing." },
      { t: "Vendor Quote Comparison", d: "Automated quote parsing across multiple vendors side by side, SLA compliance auditing, and invoice reconciliation." },
    ],
  },
  {
    title: "Asset Lifecycle & Site Operations",
    items: [
      { t: "Asset and Inventory Tracking", d: "Automated equipment health logs, warranty expiration alerts, and preventative maintenance dispatches." },
      { t: "Site Inspection Audits", d: "Digitized physical audit logs, photo to text defect logging, and automated SLA breach reporting." },
    ],
  },
  {
    title: "Travel Desk & Dynamic Approval Matrices",
    items: [
      { t: "Corporate Travel Engine", d: "Automated travel request intake, itinerary policy checks, and instant manager routing." },
      { t: "Multi Tier Approval Matrices", d: "Configurable approval chains with automated escalation rules across multiple channels." },
    ],
  },
  {
    title: "Document & Data Intelligence",
    items: [
      { t: "Lease Abstraction", d: "AI parsing of CRE leases that extracts critical dates, escalations, and financial liabilities in seconds." },
      { t: "Operational Analytics", d: "Real time aggregation across energy consumption, space utilization, and maintenance costs." },
    ],
  },
];

const PILLAR_2 = [
  {
    title: "WhatsApp CRM & Automated Ticketing",
    items: [
      { t: "Incident and Work Order Routing", d: "Tenants report issues on WhatsApp, and the system logs tickets into CAFM or IWMS and routes them to field engineers." },
      { t: "Real Time Status and Escalations", d: "Automated updates on job progress, SLA timers, and closing approvals." },
    ],
  },
  {
    title: "Enterprise RAG Assistants",
    items: [
      { t: "Facility SOP and Building Manual RAG", d: "Turns hundreds of pages of manuals and SOPs into instant, queryable bots." },
      { t: "Contract and SLA RAG", d: "Query vendor contracts and SLAs instantly on WhatsApp or the web during emergency maintenance." },
    ],
  },
  {
    title: "Custom LLM & System Integration",
    items: [
      { t: "Deep System Integration", d: "Connecting custom AI models directly to your existing ERP, ticketing software, or cloud architecture." },
    ],
  },
];

const B2BSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
              B2B Solutions
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 max-w-2xl">
              Full spectrum FM automation and WhatsApp CRM intelligence
            </h1>
            <p className="text-lg italic text-foreground/80 max-w-xl">
              "If it is a manual process in facility operations, we automate it."
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we automate: concrete, scannable, reader-facing */}
      <section className="py-10 px-4">
        <div className="container max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">What we automate</h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              A sample of what's already running for facility and real estate teams. If you don't see your exact
              headache listed here, it's probably still on the list.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUTOMATIONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
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
          <Reveal delay={200}>
            <p className="text-sm text-muted-foreground mt-8 text-center">
              Plus twenty or so other automations built around exactly how your team works, not a one size fits
              all template. The point of all of it: better productivity, better business outcomes, and a team that
              spends less time on busywork.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillar 1 */}
      <section className="py-14 px-4 bg-card/40 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-primary mb-3">Pillar 1</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-10">Full Spectrum FM &amp; CRE Automation</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {PILLAR_1.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <h3 className="font-display font-semibold mb-3">{group.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item.t} className="text-sm text-muted-foreground leading-relaxed">
                        <span className="text-foreground font-medium">{item.t}.</span> {item.d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2 */}
      <section className="py-14 px-4">
        <div className="container max-w-5xl mx-auto">
          <Reveal>
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">Pillar 2</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">WhatsApp CRM, Conversational AI &amp; RAG Infrastructure</h2>
            <p className="italic text-foreground/80 mb-10">
              "Transforming WhatsApp into an enterprise operational engine powered by custom RAG architecture."
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {PILLAR_2.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <h3 className="font-display font-semibold mb-3">{group.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item.t} className="text-sm text-muted-foreground leading-relaxed">
                        <span className="text-foreground font-medium">{item.t}.</span> {item.d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA, natural tone, no meta commentary about pricing */}
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
