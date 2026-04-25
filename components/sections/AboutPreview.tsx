import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { personal } from "@/content/personal";

export default function AboutPreview() {
  return (
    <Section
      eyebrow="About"
      title="A passionate full stack engineer leading teams that ship enterprise software."
      description={personal.summary}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Full Stack Engineering",
            d: "React and Angular on the frontend, Node.js services on the backend, REST and SQL/NoSQL data layers — production scale.",
          },
          {
            t: "Cloud & Distributed Systems",
            d: "AWS Certified Cloud Practitioner and R3 Corda Certified Developer — comfortable with cloud delivery and distributed-ledger work.",
          },
          {
            t: "Team Leadership",
            d: "Leading ~5-engineer teams under scrum: estimation, code review, technical interviewing and delivery ownership.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/20">
              <div className="absolute -inset-px -z-10 opacity-0 transition group-hover:opacity-100" style={{ background: "linear-gradient(120deg, rgba(124,92,255,0.18), rgba(92,242,255,0.08))" }} />
              <p className="font-display text-xl text-ink">{c.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{c.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/about"
          className="text-sm text-ink-dim underline-offset-4 hover:text-ink hover:underline"
        >
          Read the full story →
        </Link>
      </div>
    </Section>
  );
}
