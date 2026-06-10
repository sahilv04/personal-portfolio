import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-ink/40 bg-paper-card px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
