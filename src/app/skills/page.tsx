import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Skills',
  description: 'Technical stack and engineering capabilities of Sahil Verma across frontend, backend, cloud, and delivery.',
  path: '/skills'
});

export default function SkillsPage() {
  return (
    <section className="py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Skills' }]} />
      <h1 className="text-4xl font-bold text-slate-100">Technical Expertise</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Sahil works across React, TypeScript, Angular, Node.js, Express, AWS, and GCP with a strong focus on code
        quality and team delivery.
      </p>
      <SkillsSection />
    </section>
  );
}
