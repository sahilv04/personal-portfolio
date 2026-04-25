import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Experience',
  description: 'Detailed timeline of Sahil Verma’s engineering and leadership experience.',
  path: '/experience'
});

export default function ExperiencePage() {
  return (
    <section className="py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experience' }]} />
      <h1 className="text-4xl font-bold text-slate-100">Leadership and Delivery Experience</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Detailed timeline of Sahil Verma’s roles from software developer to technical lead and specialist programmer.
      </p>
      <ExperienceTimeline />
    </section>
  );
}
