import { motion } from "framer-motion";
import { ShieldCheck, RotateCcw, Zap } from "lucide-react";
import { SpotlightPanel } from "@/lib/motion";

const cards = [
  {
    icon: ShieldCheck,
    title: "Accessibility Service API Disclosure",
    description:
      "Quantum Assistant uses Android's Accessibility Service to power 'Automated Outreach' and 'Reply-on-Behalf' features. This service is used solely to interact with messaging apps on your behalf. We do not collect, store, or share any private user data through this API.",
  },
  {
    icon: RotateCcw,
    title: "3-Day Refund Policy",
    description:
      "Not satisfied? Request a full refund within 3 days of purchase, no questions asked. Your satisfaction is our priority.",
  },
  {
    icon: Zap,
    title: "Instant Digital Delivery",
    description:
      "Quantum Assistant is delivered instantly upon purchase. No shipping required, just download and start boosting your productivity immediately.",
  },
];

const TransparencySection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-quantum-blue/40 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transparency & <span className="gradient-text">Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg">We believe in full disclosure. Here's how we operate.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <SpotlightPanel key={c.title} className="glass-card">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            </SpotlightPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
