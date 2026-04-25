import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';
import { blogPosts } from '@/data/blog';

export const metadata = pageMetadata({
  title: 'Blog',
  description: 'Technical writing by Sahil Verma on React architecture, frontend leadership, and cloud-ready full-stack delivery.',
  path: '/blog'
});

export default function BlogPage() {
  return (
    <section className="py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <h1 className="text-4xl font-bold text-slate-100">Insights & Articles</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Practical writing on scalable React applications, engineering leadership, and cloud-capable full-stack systems.
      </p>
      <div className="mt-10 grid gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">
              <Link href={`/blog/${post.slug}`} className="hover:text-cyan-200">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-slate-300">{post.excerpt}</p>
            <p className="mt-3 text-sm text-cyan-200">
              {post.publishedAt} · {post.readingTime}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
