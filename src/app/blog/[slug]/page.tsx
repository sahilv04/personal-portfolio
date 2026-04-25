import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/lib/site';
import { ArticleJsonLd } from '@/components/ui/JsonLd';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: 'Article not found' };
  }

  const path = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}${path}`
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt
    }
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="py-14">
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        publishedAt={post.publishedAt}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]}
      />
      <h1 className="text-4xl font-bold text-slate-100">{post.title}</h1>
      <p className="mt-3 text-sm text-cyan-200">
        {post.publishedAt} · {post.readingTime}
      </p>
      <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>
      <div className="mt-8 space-y-5 text-slate-300">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
