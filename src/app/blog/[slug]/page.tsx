import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleJsonLd } from '@/components/ui/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { absoluteUrl } from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  const path = `/blog/${post.slug}/`;
  const url = absoluteUrl(path);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article' },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="py-16">
      <ArticleJsonLd title={post.title} description={post.excerpt} path={`/blog/${post.slug}/`} publishedAt={post.publishedAt} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
      <p className="text-sm text-cyan-300">{post.publishedAt} · {post.readingTime}</p>
      <h1 className="mt-2 text-4xl font-bold text-white">{post.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">{post.excerpt}</p>
      <div className="mt-8 space-y-6">
        {post.content.map((paragraph, idx) => (
          <p key={paragraph} className="max-w-3xl text-slate-200">
            {idx < post.headings.length ? <strong className="block pb-2 text-cyan-200">{post.headings[idx]}</strong> : null}
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
