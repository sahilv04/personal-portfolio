import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';
import { profile } from '@/data/profile';

export const metadata = pageMetadata({
  title: 'About Sahil Verma',
  description: 'Learn Sahil Verma’s professional story as a Technical Lead, Full Stack Developer, and cloud-capable engineer.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <section className="py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <h1 className="text-4xl font-bold text-slate-100">About Sahil Verma</h1>
      <p className="mt-5 max-w-4xl text-slate-300">{profile.intro}</p>
      <div className="mt-8 space-y-5 text-slate-300">
        <p>{profile.positioning}</p>
        <p>
          Sahil specializes in frontend architecture with React and TypeScript, full-stack implementation with Node.js
          and Express, and cloud deployments across AWS and GCP.
        </p>
        <p>
          His career spans financial domain systems, power domain product development, and enterprise web applications
          where reliability, responsiveness, and delivery discipline are essential.
        </p>
      </div>
    </section>
  );
}
