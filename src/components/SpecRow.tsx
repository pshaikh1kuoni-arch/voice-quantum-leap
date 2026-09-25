import { LucideIcon } from "lucide-react";

interface SpecRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "primary" | "secondary" | "white";
}

export function SpecRow({ icon: Icon, title, description, tone = "primary" }: SpecRowProps) {
  const tokenClasses = {
    primary: "bg-primary/10 border-primary/25 text-primary",
    secondary: "bg-secondary/10 border-secondary/25 text-secondary",
    white: "bg-white/15 border-white/30 text-white",
  }[tone];
  const dashClass = tone === "white" ? "border-white/40" : "border-muted-foreground/50";
  const titleClass = tone === "white" ? "text-white" : "text-foreground";
  const descClass = tone === "white" ? "text-white/80" : "text-muted-foreground";

  return (
    <div className="flex items-start gap-0">
      <div className={`w-8 h-8 rounded-[9px] border flex items-center justify-center shrink-0 ${tokenClasses}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="w-5 pt-4 shrink-0 flex justify-center">
        <div className={`border-t border-dashed w-full ${dashClass}`} />
      </div>
      <div className="flex-1">
        <span className={`text-[13px] font-semibold ${titleClass}`}>{title}</span>
        <p className={`text-[11.5px] leading-relaxed mt-0.5 ${descClass}`}>{description}</p>
      </div>
    </div>
  );
}
