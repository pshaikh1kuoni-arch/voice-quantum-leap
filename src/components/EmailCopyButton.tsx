import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Magnetic } from "@/lib/motion";
import { SITE } from "@/lib/site-config";

interface EmailCopyButtonProps {
  label?: string;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
}

/**
 * The site-wide inquiry mechanism: no forms and no calendar. Click to copy
 * the email address. Used for every "learn more" or "get in touch" moment.
 */
export function EmailCopyButton({ label = "Talk to Me", variant = "primary", size = "md", className = "" }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const onClick = () => {
    // Fire and forget: don't let a slow or blocked clipboard permission prompt
    // delay the visible confirmation. The copy itself is a nice touch, but the
    // feedback (and the visible email text as a fallback) is what matters.
    navigator.clipboard?.writeText(SITE.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const base = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-shadow";
  const sizing = size === "lg" ? "px-7 py-3.5 text-base" : "px-6 py-3 text-sm";
  const styles =
    variant === "primary"
      ? "text-primary-foreground glow-teal shadow-lg"
      : "border border-border bg-card text-foreground hover:border-primary/50";

  return (
    <Magnetic>
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${sizing} ${styles} ${copied ? "!bg-green-600 !text-white" : ""} ${className}`}
        style={variant === "primary" && !copied ? { background: "var(--gradient-quantum)" } : undefined}
      >
        {copied ? <Check className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} /> : <Mail className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />}
        {copied ? "Copied. I'll reply personally" : label}
      </button>
    </Magnetic>
  );
}
