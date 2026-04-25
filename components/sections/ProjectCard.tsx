"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const accents: Record<Project["accent"], string> = {
  violet: "from-[#7c5cff] via-[#5cbcff] to-[#5cf2ff]",
  cyan: "from-[#5cf2ff] via-[#7c5cff] to-[#ff5cd6]",
  magenta: "from-[#ff5cd6] via-[#ff8a5c] to-[#ffd35c]",
  amber: "from-[#ffd35c] via-[#ff8a5c] to-[#ff5cd6]",
};

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/20 md:p-8"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl transition group-hover:opacity-40",
          "bg-gradient-to-br",
          accents[p.accent]
        )}
      />
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-muted">
        <span>{p.domain}</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>{p.year}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl text-ink md:text-3xl">{p.name}</h3>
      <p className="mt-2 max-w-2xl text-sm text-ink-dim md:text-base">{p.tagline}</p>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-dim md:text-[15px]">
        {p.summary}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Highlights</p>
          <ul className="mt-3 grid gap-2 text-sm text-ink-dim">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Outcomes</p>
          <ul className="mt-3 grid gap-2 text-sm text-ink-dim">
            {p.outcomes.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ice" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-ink-muted">Role</p>
          <p className="mt-2 text-sm text-ink-dim">{p.role}</p>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-ink-dim"
          >
            {s}
          </span>
        ))}
      </div>

      <Link
        href={`/projects#${p.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
        aria-label={`Read more about ${p.name}`}
      >
        Open case study
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
