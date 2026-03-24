import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    stars: 5,
    quote: "As a Project Manager, the 'Reply-on-Behalf' feature is a lifesaver. It handles my texts while I'm in back-to-back sprints. Truly a chief of staff in my pocket!",
    name: "Sarah J.",
    role: "Project Manager",
  },
  {
    stars: 4,
    quote: "The voice recognition is scarily accurate. It loses a star only because I want even more widget customization, but the productivity KPIs have already changed how I schedule my week.",
    name: "Marcus T.",
    role: "Startup Founder",
  },
  {
    stars: 3,
    quote: "Solid app. The learning curve for the voice commands took me a day or two, but once you get it, it's faster than any manual planner I've used.",
    name: "Kevin L.",
    role: "Freelance Designer",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Users, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">See how professionals are transforming their workflow.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-5 h-5 ${s < r.stars ? "text-quantum-lime fill-quantum-lime" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed flex-1 mb-4">"{r.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
