import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Selected Work',
  description: 'Anonymized enterprise and domain-focused case studies delivered by Sahil Verma.',
  path: '/work'
});

export default function WorkPage() {
  return (
    <section className="py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
      <h1 className="text-4xl font-bold text-slate-100">Selected Work</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Honest, anonymized examples of enterprise financial systems, cloud-hosted platforms, and power domain product
        contributions.
      </p>
      <SelectedWork />
    </section>
  );
}
