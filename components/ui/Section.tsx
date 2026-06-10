import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import InkSculpture from "@/components/three/InkSculptureLoader";
import type { SculptureVariant } from "@/components/three/InkSculpture";

type SectionProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  index?: string;
  /** Optional wireframe engraving turning in the header's right margin. */
  relief?: SculptureVariant;
  /** "h1" on each page's lead section — exactly one h1 per page. */
  titleAs?: "h1" | "h2";
};

/**
 * Numbered journal section — mono folio line, oversized wonky serif title,
 * italic standfirst. Every section opens with the same editorial furniture.
 */
export default function Section({
  eyebrow,
  title,
  description,
  index,
  relief,
  titleAs: TitleTag = "h2",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn("relative overflow-hidden border-t border-ink/20", className)} {...rest}>
      {relief && (
        <div aria-hidden className="absolute -right-28 -top-10 hidden h-[24rem] w-[24rem] lg:block">
          <div className="halftone absolute inset-0 opacity-20 [mask-image:radial-gradient(closest-side,black,transparent)]" />
          <InkSculpture variant={relief} color="#211D14" className="absolute inset-0 opacity-50" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        {(eyebrow || title) && (
          <header className="mb-12 md:mb-16">
            {eyebrow && (
              <Reveal>
                <div className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-ink-soft">
                  {index && <span className="text-vermilion">№ {index}</span>}
                  <span>{eyebrow}</span>
                  <span aria-hidden className="h-px flex-1 translate-y-[-3px] bg-ink/25" />
                </div>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.06}>
                <TitleTag className="wonk mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
                  {title}
                </TitleTag>
              </Reveal>
            )}
            {description && (
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-2xl text-lg italic leading-relaxed text-ink-soft">
                  {description}
                </p>
              </Reveal>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
