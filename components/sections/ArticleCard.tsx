"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Article } from "@/lib/articles";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
}

export default function ArticleCard({ article, index }: { article: Article; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-white/20 md:p-8"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-muted">
        <span>{formatDate(article.date)}</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>{article.readingTimeMinutes} min read</span>
      </div>

      <h3 className="mt-4 font-display text-2xl text-ink md:text-3xl">
        <Link href={`/articles/${article.slug}`} className="hover:underline underline-offset-4">
          {article.title}
        </Link>
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim md:text-[15px]">
        {article.description}
      </p>

      {article.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-ink-dim"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <Link
        href={`/articles/${article.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
        aria-label={`Read ${article.title}`}
      >
        Read article
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
