import type { Project } from "@/content/projects";
import Reveal from "@/components/ui/Reveal";

/* Spot-colour mapping: the data's screen accents re-inked as print colours. */
const ACCENTS: Record<Project["accent"], { text: string; border: string; stampRotate: string }> = {
  violet: { text: "text-cobalt", border: "border-l-cobalt", stampRotate: "rotate-[5deg]" },
  cyan: { text: "text-teal", border: "border-l-teal", stampRotate: "rotate-[-6deg]" },
  magenta: { text: "text-vermilion", border: "border-l-vermilion", stampRotate: "rotate-[4deg]" },
  amber: { text: "text-ochre", border: "border-l-ochre", stampRotate: "rotate-[-4deg]" },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = ACCENTS[project.accent];
  const folio = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={Math.min(index, 2) * 0.06}>
      <article
        id={project.slug}
        className="relative scroll-mt-32 border border-ink/25 bg-paper-card p-6 shadow-offset-sm md:p-10"
      >
        <span
          className={`stamp absolute -top-3 right-5 text-[10px] ${accent.text} ${accent.stampRotate}`}
        >
          {project.year}
        </span>

        <div className="grid gap-8 md:grid-cols-[auto_1fr]">
          <div className="select-none md:w-24">
            <span className="wonk font-display text-6xl font-black leading-none text-ink/15 md:text-8xl">
              {folio}
            </span>
          </div>

          <div>
            <p className={`font-mono text-[11px] uppercase tracking-[0.26em] ${accent.text}`}>
              {project.domain}
            </p>
            <h3 className="wonk mt-2 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {project.name}
            </h3>
            <p className="mt-3 max-w-2xl text-lg italic leading-relaxed text-ink-soft">
              {project.tagline}
            </p>

            <p className="mt-5 max-w-3xl leading-relaxed text-ink-soft">{project.summary}</p>

            <div className="dotted-rule mt-6 grid gap-6 pt-6 md:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                  In the field
                </p>
                <ul className="mt-3 grid gap-2 text-[15px] leading-relaxed text-ink-soft">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span aria-hidden className={`mt-[3px] ${accent.text}`}>▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                  What it changed
                </p>
                <ul className={`mt-3 grid gap-2 border-l-[3px] ${accent.border} pl-4 text-[15px] italic leading-relaxed text-ink-soft`}>
                  {project.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                  Role
                </p>
                <p className="mt-1.5 text-sm text-ink-soft">{project.role}</p>
              </div>
            </div>

            <p className="dotted-rule mt-6 pt-4 font-mono text-[11px] leading-relaxed tracking-wide text-ink-faint">
              <span className="text-ink-soft">Set with:</span>{" "}
              {project.stack.join("  /  ")}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
