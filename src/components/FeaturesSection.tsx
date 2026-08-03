import { motion } from "framer-motion";
import { Mic, BarChart3, Calendar, MessageSquareReply, Target, Gauge } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Zero-Touch Task Orchestration",
    description: "NLP-powered Action Chat that executes commands instead of just recording them. Speak naturally, and Quantum handles the rest.",
  },
  {
    icon: BarChart3,
    title: "Productivity Dashboard",
    description: "Industry-first Productivity KPIs like Meeting Density Score and a Conflict Resolution Engine to optimize your schedule.",
  },
  {
    icon: Calendar,
    title: "Unified Google Calendar Sync",
    description: "Seamless integration with Google Calendar, with one tap join for virtual meetings so you never miss a Zoom or Meet link again.",
  },
  {
    icon: MessageSquareReply,
    title: "Intelligent Auto-Responder",
    description: "The 'Reply-on-Behalf' module acts as your digital proxy, sending professional messages when you're busy or in focus mode.",
  },
  {
    icon: Target,
    title: "Goal-Oriented To-Dos",
    description: "Recursive logic for 365-day repeating tasks, micro-focus sub-tasking, and smart prioritization to keep you on track.",
  },
  {
    icon: Gauge,
    title: "Achievement Widget",
    description: "Real-time progress bar widget for your Android home screen. Track your daily goals at a glance without opening the app.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Six powerful modules working in harmony to automate your professional life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className="glass-card p-6 group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-teal transition-shadow">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
