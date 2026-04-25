import { SkillsSection } from '@/components/sections/SkillsSection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Technical Expertise',
  description: 'Frontend, backend, cloud, and leadership skills used by Sahil Verma for enterprise software delivery.',
  path: '/skills/',
});

export default function SkillsPage() {
  return (
    <section className="py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Skills' }]} />
      <h1 className="mb-4 text-4xl font-bold text-white">Technical Expertise</h1>
      <SkillsSection />
    </section>
  );
}
