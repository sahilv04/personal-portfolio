import Link from "next/link";
import type { Article } from "@/lib/articles";
import Reveal from "@/components/ui/Reveal";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}

export default function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <Reveal delay={Math.min(index, 3) * 0.06} className="h-full">
      <Link
        href={`/articles/${article.slug}`}
        className="group block h-full border border-ink/25 bg-paper-card p-7 shadow-offset-sm transition-transform duration-200 hover:-translate-y-1 md:p-8"
      >
        <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTimeMinutes} min read</span>
        </div>
        <h3 className="wonk mt-4 font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-vermilion md:text-3xl">
          {article.title}
        </h3>
        <p className="mt-3 italic leading-relaxed text-ink-soft">{article.description}</p>
        {article.tags.length > 0 && (
          <p className="dotted-rule mt-5 pt-4 font-mono text-[11px] tracking-wide text-ink-faint">
            filed under: {article.tags.join(" · ")}
          </p>
        )}
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-vermilion">
          Read the entry →
        </p>
      </Link>
    </Reveal>
  );
}
