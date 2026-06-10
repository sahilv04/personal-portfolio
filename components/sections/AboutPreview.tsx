import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const NOTES = [
  {
    index: "a",
    title: "Full Stack",
    body: "React and Angular up front, Node.js behind — one engineer responsible for the whole slice, from pixel to API to deploy.",
    accent: "text-vermilion",
  },
  {
    index: "b",
    title: "Cloud",
    body: "AWS-certified three times over (SAA, AI, CP) plus Azure Fundamentals. Cloud is delivery infrastructure, not a buzzword.",
    accent: "text-cobalt",
  },
  {
    index: "c",
    title: "Leadership",
    body: "Teams of ~5 engineers under scrum — estimation, code review culture, technical interviews and the discipline of shipping.",
    accent: "text-teal",
  },
];

/** Three field-note cards introducing the practice. */
export default function AboutPreview() {
  return (
    <section className="border-t border-ink/20 bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-px overflow-hidden border border-ink/25 bg-ink/25 md:grid-cols-3">
          {NOTES.map((note, i) => (
            <Reveal key={note.title} delay={i * 0.08} className="h-full">
              <article className="ledger-lines h-full bg-paper-card p-7 md:p-8">
                <p className={`font-mono text-xs uppercase tracking-[0.24em] ${note.accent}`}>
                  note {note.index}.
                </p>
                <h3 className="wonk mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                  {note.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{note.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 text-right">
            <Link
              href="/about"
              className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft underline decoration-vermilion decoration-2 underline-offset-4 hover:text-ink"
            >
              The longer story →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
