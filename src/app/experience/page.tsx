import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Experience',
  description: 'Career timeline of Sahil Verma across Infosys, Webmob Software Solutions, and Open Access Technology.',
  path: '/experience/',
});

export default function ExperiencePage() {
  return (
    <section className="py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experience' }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: '/' }, { '@type': 'ListItem', position: 2, name: 'Experience' }] }} />
      <h1 className="mb-4 text-4xl font-bold text-white">Experience</h1>
      <ExperienceTimeline />
    </section>
  );
}
