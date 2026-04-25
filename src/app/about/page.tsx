import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { profile } from '@/data/profile';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About Sahil Verma',
  description: 'Detailed profile of Sahil Verma, a Technical Lead and Full Stack Developer focused on scalable digital products.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <section className="py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', name: 'About Sahil Verma' }} />
      <h1 className="text-4xl font-bold text-white">About Sahil Verma</h1>
      <p className="mt-6 max-w-4xl text-slate-300">{profile.intro}</p>
      <p className="mt-4 max-w-4xl text-slate-300">{profile.positioning}</p>
      <h2 className="mt-10 text-2xl font-semibold text-cyan-200">Working With Sahil</h2>
      <p className="mt-3 max-w-4xl text-slate-300">Sahil combines frontend depth, backend ownership, and cloud implementation discipline. He works effectively with product managers, QA, and engineering stakeholders to deliver maintainable releases in Scrum-driven environments.</p>
      <h2 className="mt-10 text-2xl font-semibold text-cyan-200">Leadership & Delivery</h2>
      <p className="mt-3 max-w-4xl text-slate-300">Across multiple roles, Sahil has led teams of around five engineers, maintained quality with structured code reviews, and contributed to hiring decisions through technical interviews.</p>
    </section>
  );
}
