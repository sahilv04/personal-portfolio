import Reveal from "@/components/ui/Reveal";
import InkSculpture from "@/components/three/InkSculptureLoader";
import { personal } from "@/content/personal";

/** Closing plate — the journal's classified ad for collaboration. */
export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t-2 border-ink bg-ink text-paper">
      <InkSculpture
        variant="icosa"
        color="#F3EDE0"
        className="absolute -right-20 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 opacity-30 md:block"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/60">
            Classifieds — situations wanted
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="wonk mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
            Have a product, idea or{" "}
            <em className="soft-display font-medium not-italic text-[#E8603C]">
              engineering challenge
            </em>{" "}
            to solve?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg italic leading-relaxed text-paper/75">
            Happy to help with React, Angular, Node.js, Cloud and Opensource development. Message me
            on any platform — I reply within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-paper bg-paper px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-ink shadow-offset-red transition-transform duration-150 hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Start a conversation →
            </a>
            <a
              href={personal.socials.email}
              className="font-mono text-sm text-paper/70 underline decoration-vermilion decoration-2 underline-offset-4 hover:text-paper"
            >
              {personal.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
