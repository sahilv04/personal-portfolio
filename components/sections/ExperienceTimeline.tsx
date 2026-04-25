import { experiences } from "@/content/experience";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceTimeline() {
  return (
    <ol className="relative">
      <span aria-hidden className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-1/2" />
      {experiences.map((e, i) => (
        <Reveal as="li" key={`${e.company}-${e.period}`} delay={i * 0.06} className="relative mb-10 grid md:mb-14 md:grid-cols-2 md:gap-10">
          <span
            aria-hidden
            className="absolute left-[10px] top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(124,92,255,0.7)] md:left-1/2 md:-translate-x-1/2"
          />
          <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">{e.period}</p>
            <h3 className="mt-2 font-display text-xl text-ink md:text-2xl">{e.role}</h3>
            <p className="text-sm text-ink-dim">{e.company}</p>
            <p className="text-xs text-ink-muted">{e.location}</p>
          </div>
          <div className={i % 2 === 0 ? "pl-10 md:pl-12" : "pl-10 md:order-1 md:pr-12 md:text-right"}>
            <p className="text-sm leading-relaxed text-ink-dim">{e.summary}</p>
            <ul className={`mt-4 grid gap-2 text-sm text-ink-dim ${i % 2 === 0 ? "" : "md:list-inside"}`}>
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ice" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
