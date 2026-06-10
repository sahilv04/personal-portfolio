import { experiences } from "@/content/experience";
import Reveal from "@/components/ui/Reveal";

/** Career as a ledger — period in the left column, entry on the right. */
export default function ExperienceTimeline() {
  return (
    <ol className="double-rule">
      {experiences.map((exp, i) => (
        <li key={`${exp.company}-${exp.period}`} className="border-b border-ink/20">
          <Reveal delay={Math.min(i, 3) * 0.05}>
            <div className="grid gap-4 py-10 md:grid-cols-[200px_1fr] md:gap-10">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                <p className="text-vermilion">{exp.period}</p>
                <p className="mt-2 text-ink-faint">{exp.location}</p>
                <p aria-hidden className="wonk mt-4 hidden font-display text-5xl font-black text-ink/10 md:block">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h3 className="wonk font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  {exp.role}
                  <span className="soft-display font-medium italic text-ink-soft"> · {exp.company}</span>
                </h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{exp.summary}</p>
                <ul className="mt-5 grid max-w-3xl gap-2 text-[15px] leading-relaxed text-ink-soft md:grid-cols-2 md:gap-x-8">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span aria-hidden className="mt-[3px] text-vermilion">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
