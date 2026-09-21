import { TiltCard } from "@/lib/motion";

const LEVELS = [
  { n: "01", t: "Awareness, for execution teams", d: "Learn to use AI tools daily, save time, and get more done." },
  { n: "02", t: "Strategy, for middle management", d: "Build strong business cases and drive better ROI." },
  { n: "03", t: "Leadership, for CXOs", d: "Monitor execution, review performance, and sharpen decision making." },
];

export function LevelsGrid() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {LEVELS.map((lvl) => (
        <TiltCard key={lvl.n} className="rounded-2xl border border-border bg-card shadow-xl p-6 h-full">
          <span className="font-display font-bold text-xl text-primary">{lvl.n}</span>
          <h4 className="text-sm font-semibold mt-2 mb-1">{lvl.t}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{lvl.d}</p>
        </TiltCard>
      ))}
    </div>
  );
}
