import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/experience', '/work', '/skills', '/contact', '/blog'];
  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
