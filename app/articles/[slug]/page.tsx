import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import MdxContent from "@/components/mdx/MdxContent";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, articleSchema } from "@/lib/jsonld";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { SITE_URL } from "@/content/personal";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const base = buildMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${article.slug}`,
    keywords: article.tags,
  });
  const openGraph: NonNullable<Metadata["openGraph"]> = {
    ...(base.openGraph ?? {}),
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    tags: article.tags,
  };
  if (article.ogImage) {
    openGraph.images = [new URL(article.ogImage, SITE_URL).toString()];
  }
  return { ...base, openGraph };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: article.title, href: `/articles/${article.slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          slug: article.slug,
          date: article.date,
          modified: article.updated,
          tags: article.tags,
          image: article.ogImage,
          wordCount: article.body.trim().split(/\s+/).length,
          readingTimeMinutes: article.readingTimeMinutes,
        })}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Link
          href="/articles"
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft underline decoration-vermilion decoration-2 underline-offset-4 hover:text-ink"
        >
          ← All articles
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden className="text-vermilion">✦</span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <h1 className="wonk mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-ink md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg italic leading-relaxed text-ink-soft md:text-xl">
            {article.description}
          </p>
          {article.tags.length > 0 && (
            <p className="dotted-rule mt-7 pt-4 font-mono text-[11px] tracking-wide text-ink-faint">
              filed under: {article.tags.join(" · ")}
            </p>
          )}
        </header>

        <div className="article-prose dropcap prose prose-lg mt-12 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-p:text-ink-soft prose-a:text-vermilion prose-a:decoration-2 prose-a:underline-offset-4 prose-strong:text-ink prose-blockquote:border-l-vermilion prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-ink-soft prose-li:text-ink-soft prose-code:before:content-none prose-code:after:content-none">
          <MdxContent source={article.body} />
        </div>

        <p className="double-rule mt-16 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
          — fin —
        </p>
      </article>
      <CTA />
    </>
  );
}
