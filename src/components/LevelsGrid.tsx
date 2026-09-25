import { Zap, BarChart3, Target } from "lucide-react";
import { Reveal, TiltCard } from "@/lib/motion";

const BEVEL = "linear-gradient(100deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.16) 100%)";

const LEVELS = [
  { n: "01", t: "Awareness, for execution teams", d: "Learn to use AI tools daily, save time, and get more done." },
  { n: "02", t: "Strategy, for middle management", d: "Build strong business cases and drive better ROI." },
  { n: "03", t: "Leadership, for CXOs", d: "Monitor execution, review performance, and sharpen decision making." },
];

export function LevelsGrid() {
  return (
    <Reveal from="left">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Pyramid — mouse-tilt 3D + a light/shadow bevel per face for depth */}
        <TiltCard className="w-full max-w-[380px] mx-auto lg:mx-0 shrink-0">
          <div className="flex flex-col" style={{ filter: "drop-shadow(0 20px 30px rgba(30,20,10,0.2))" }}>
            {/* Band 03 — apex */}
            <div
              className="relative h-20 w-full flex items-center justify-center overflow-hidden"
              style={{ clipPath: "polygon(50% 0%, 66.67% 100%, 33.33% 100%)", background: "var(--gradient-quantum)" }}
            >
              <div className="absolute inset-0" style={{ background: BEVEL }} />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.45) 45%, transparent 60%)",
                  backgroundSize: "250% 250%",
                  animation: "sheen 3.5s ease-in-out infinite",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-0.5 text-primary-foreground">
                <Target className="w-4 h-4" />
                <span className="font-display font-bold text-xs">03</span>
              </div>
            </div>
            {/* Band 02 — middle */}
            <div
              className="relative h-20 w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10"
              style={{ clipPath: "polygon(33.33% 0%, 66.67% 0%, 83.34% 100%, 16.66% 100%)" }}
            >
              <div className="absolute inset-0" style={{ background: BEVEL }} />
              <div className="relative z-10 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-secondary" />
                <span className="font-display font-bold text-sm text-secondary">02</span>
                <span className="text-xs font-semibold">Strategy</span>
              </div>
            </div>
            {/* Band 01 — base */}
            <div
              className="relative h-20 w-full flex items-center justify-center bg-primary/10"
              style={{ clipPath: "polygon(16.66% 0%, 83.34% 0%, 100% 100%, 0% 100%)" }}
            >
              <div className="absolute inset-0" style={{ background: BEVEL }} />
              <div className="relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="font-display font-bold text-sm text-primary">01</span>
                <span className="text-xs font-semibold">Awareness</span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Dashed connectors — desktop only */}
        <div className="hidden lg:flex w-14 flex-col justify-around px-2">
          <div className="border-t border-dashed border-muted-foreground/50 w-full" />
          <div className="border-t border-dashed border-muted-foreground/50 w-full" />
          <div className="border-t border-dashed border-muted-foreground/50 w-full" />
        </div>

        {/* Captions, apex to base */}
        <div className="flex-1 flex flex-col justify-around gap-6 lg:gap-0">
          {[...LEVELS].reverse().map((lvl) => (
            <div key={lvl.n}>
              <span className="text-[13px] font-semibold text-foreground">{lvl.t}</span>
              <p className="text-[11.5px] text-muted-foreground leading-relaxed mt-0.5">{lvl.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
