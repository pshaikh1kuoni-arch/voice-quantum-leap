import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/* ============ reduced motion ============ */

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

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
  const reducedMotion = usePrefersReducedMotion();
  const hidden = REVEAL_HIDDEN[from];

  if (reducedMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

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
  const reducedMotion = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "115%", rotate: 4 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.85, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/* Same reveal, but triggered on scroll-into-view rather than on mount */
export function KineticInView({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
            <motion.span
              style={{ display: "inline-block" }}
              animate={inView ? { y: 0, rotate: 0 } : { y: "115%", rotate: 4 }}
              transition={{ duration: 0.85, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/* ============ magnetic button ============ */

export function Magnetic({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.3 });

  const onMove = (e: React.MouseEvent) => {
    if (reducedMotion) return;
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
  const reducedMotion = usePrefersReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const scale = useSpring(useMotionValue(1), { stiffness: 200, damping: 20 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glowOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const glowBackground = useTransform(
    [mx, my],
    ([x, y]: number[]) => `radial-gradient(280px circle at ${x}% ${y}%, hsl(var(--primary) / 0.18), transparent 70%)`,
  );

  const onMove = (e: React.MouseEvent) => {
    if (reducedMotion) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
    scale.set(1.02);
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
    glowOpacity.set(1);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glowOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {!reducedMotion && <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ opacity: glowOpacity, background: glowBackground }} />}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

/* ============ count-up stat ============ */

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
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
  }, [inView, value, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ============ marquee ============ */

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const row = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-border bg-card py-4 ${className ?? ""}`}>
      <div className={`flex w-max gap-10 ${reducedMotion ? "" : "animate-[marquee_26s_linear_infinite]"}`}>
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

/* ============ sticky stacking cards ============ */

/**
 * Tracks scroll progress across a whole stack of cards. Pass the returned
 * progress + ref to StackCard for each card in the stack.
 */
export function useCardStack(ref: React.RefObject<HTMLElement>) {
  return useScroll({ target: ref, offset: ["start start", "end end"] });
}

export function StackCard({
  index,
  total,
  progress,
  slotClassName = "h-[70vh]",
  className,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  slotClassName?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  if (reducedMotion) {
    return (
      <div className="py-3">
        <div className={className}>{children}</div>
      </div>
    );
  }

  return (
    <div className={slotClassName}>
      <div className="sticky flex items-center" style={{ top: `calc(6rem + ${index * 18}px)` }}>
        <motion.div style={{ scale }} className={className}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/* ============ character-by-character scroll reveal ============ */

function RevealChar({ progress, range, char }: { progress: MotionValue<number>; range: [number, number]; char: string }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function ScrollRevealText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });

  if (reducedMotion) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => (
        <RevealChar key={i} progress={scrollYProgress} range={[i / chars.length, (i + 1) / chars.length]} char={char} />
      ))}
    </p>
  );
}

/* ============ scroll-mask image reveal ============ */

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
  rounded = "0px",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  /** CSS length matching the container's own border-radius, so the clip-path wipe doesn't snap to square corners. */
  rounded?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className}>
        <img src={src} alt={alt} className={imgClassName} />
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ clipPath: `inset(0 100% 0 0 round ${rounded})` }}
      whileInView={{ clipPath: `inset(0 0% 0 0 round ${rounded})` }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={src} alt={alt} className={imgClassName} />
    </motion.div>
  );
}

/* ============ cursor-follow spotlight ============ */

export function SpotlightPanel({
  children,
  className,
  tint = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  /** "white" reads as a sheen on dark/gradient panels; "primary" reads as a soft glow on light cards. */
  tint?: "primary" | "white";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glow = tint === "white" ? "rgba(255,255,255,0.28)" : "hsl(var(--primary) / 0.18)";
  const background = useTransform([mx, my], ([x, y]: number[]) => `radial-gradient(280px circle at ${x}% ${y}%, ${glow}, transparent 70%)`);

  const onMove = (e: React.MouseEvent) => {
    if (reducedMotion) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <div ref={ref} className={`group relative overflow-hidden ${className ?? ""}`} onMouseMove={onMove}>
      {!reducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
