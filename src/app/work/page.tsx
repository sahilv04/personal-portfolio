import { SelectedWork } from '@/components/sections/SelectedWork';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Selected Work',
  description: 'Anonymized case studies of enterprise financial, cloud-hosted, and power domain systems delivered by Sahil Verma.',
  path: '/work/',
});

export default function WorkPage() {
  return (
    <section className="py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
      <h1 className="mb-4 text-4xl font-bold text-white">Selected Work</h1>
      <SelectedWork />
    </section>
  );
}
