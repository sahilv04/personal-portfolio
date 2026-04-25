import { profile } from '@/data/profile';
import { siteConfig } from '@/lib/site';

const ScriptTag = ({ data }: { data: Record<string, unknown> }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.positioning,
    url: siteConfig.url,
    sameAs: [siteConfig.github, siteConfig.linkedin]
  };

  return <ScriptTag data={data} />;
}

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
  };

  return <ScriptTag data={data} />;
}

export function FAQJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: profile.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return <ScriptTag data={data} />;
}

export function ArticleJsonLd({
  title,
  description,
  path,
  publishedAt
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: profile.name
    },
    publisher: {
      '@type': 'Person',
      name: profile.name
    },
    datePublished: publishedAt,
    mainEntityOfPage: `${siteConfig.url}${path}`
  };

  return <ScriptTag data={data} />;
}
