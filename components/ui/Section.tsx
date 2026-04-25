import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative mx-auto max-w-6xl px-4 py-20 md:py-28", className)}
      {...props}
    >
      {(eyebrow || title || description) && (
        <header className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base text-ink-dim md:text-lg">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
