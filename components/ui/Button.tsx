import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center gap-2 border-2 border-ink px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.14em] transition-transform duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

const variants = {
  primary: "bg-ink text-paper shadow-offset-red hover:-translate-y-[2px]",
  ghost: "bg-paper-card text-ink shadow-offset hover:-translate-y-[2px]",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  className,
  children,
  type = "button",
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
