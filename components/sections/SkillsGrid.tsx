import { skillGroups } from "@/content/skills";
import Reveal from "@/components/ui/Reveal";

const ACCENTS = ["text-vermilion", "text-cobalt", "text-teal", "text-ochre", "text-vermilion"];

/** Skills typeset as a back-of-book index, grouped and ruled. */
export default function SkillsGrid() {
  return (
    <div className="grid gap-px overflow-hidden border border-ink/25 bg-ink/25 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={Math.min(i, 4) * 0.06} className="h-full">
          <article className="h-full bg-paper-card p-7 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="wonk font-display text-2xl font-semibold text-ink">{group.title}</h3>
              <span className={`font-mono text-xs ${ACCENTS[i % ACCENTS.length]}`}>
                {String(i + 1).padStart(2, "0")}.
              </span>
            </div>
            <p className="mt-2 text-sm italic leading-relaxed text-ink-soft">{group.blurb}</p>
            <p className="dotted-rule mt-5 pt-5 font-mono text-[13px] leading-[2] tracking-wide text-ink-soft">
              {group.items.map((item, j) => (
                <span key={item}>
                  {item}
                  {j < group.items.length - 1 && (
                    <span aria-hidden className="mx-2 text-vermilion">·</span>
                  )}
                </span>
              ))}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
