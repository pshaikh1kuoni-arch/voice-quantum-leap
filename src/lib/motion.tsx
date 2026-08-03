import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/* ============ scroll reveal ============ */

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right";
  className?: string;
}

const REVEAL_HIDDEN: Record<NonNullable<RevealProps["from"]>, { x?: number; y?: number; rotateX?: number; rotateY?: number }> = {
  up: { y: 50, rotateX: 6 },
  left: { x: -60, rotateY: 8 },
  right: { x: 60, rotateY: -8 },
};

export function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const hidden = REVEAL_HIDDEN[from];
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 900 }}
      initial={{ opacity: 0, ...hidden }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.16, 0.8, 0.26, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ============ kinetic word-by-word headline ============ */

export function KineticText({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "115%", rotate: 4 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.85, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Same reveal, but triggered on scroll-into-view rather than on mount */
export function KineticInView({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            animate={inView ? { y: 0, rotate: 0 } : { y: "115%", rotate: 4 }}
            transition={{ duration: 0.85, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ============ magnetic button ============ */

export function Magnetic({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.18);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} className={className} style={{ x, y, display: "inline-block" }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
}

/* ============ tilt card ============ */

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const scale = useSpring(useMotionValue(1), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
    scale.set(1.02);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ============ count-up stat ============ */

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const m = value.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) {
      setDisplay(value);
      return;
    }
    const [, pre, numStr, suf] = m;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = (numStr.split(".")[1] || "").length;
    const useCommas = numStr.includes(",");
    const t0 = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      let n = (target * eased).toFixed(decimals);
      if (useCommas) n = Number(n).toLocaleString("en-US", { minimumFractionDigits: decimals });
      setDisplay(pre + n + suf);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ============ marquee ============ */

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-border bg-card py-4 ${className ?? ""}`}>
      <div className="flex w-max gap-10 animate-[marquee_26s_linear_infinite]">
        {row.map((w, i) => (
          <span key={i} className="font-display text-sm text-muted-foreground whitespace-nowrap flex items-center gap-3">
            {w} <em className="not-italic text-primary">✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ scroll progress bar ============ */

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[100]"
      style={{ width: `${w}%`, background: "var(--gradient-quantum)", transition: "width 80ms linear" }}
    />
  );
}
