import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { blogPosts } from '@/data/blog';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Blog',
  description: 'Insights from Sahil Verma on scalable React, enterprise frontend leadership, and cloud-ready full-stack systems.',
  path: '/blog/',
});

export default function BlogPage() {
  return (
    <section className="py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <h1 className="mb-8 text-4xl font-bold text-white">Blog</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-cyan-300">{post.publishedAt} · {post.readingTime}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-cyan-300">{post.title}</Link>
            </h2>
            <p className="mt-3 text-slate-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
