import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
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
        })}
      />
      <Section className="!py-24 md:!py-32">
        <div className="max-w-3xl">
          <Link href="/articles" className="text-sm text-ink-dim hover:text-ink">
            ← All articles
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-muted">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base text-ink-dim md:text-lg">{article.description}</p>
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
          <div className="prose prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent-ice prose-pre:rounded-2xl prose-pre:border prose-pre:border-white/10 prose-code:before:content-none prose-code:after:content-none">
            <MdxContent source={article.body} />
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}
