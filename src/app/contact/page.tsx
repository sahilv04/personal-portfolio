import { ContactCTA } from '@/components/sections/ContactCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact Sahil Verma',
  description: 'Get in touch with Sahil Verma for React, Node.js, full-stack, and cloud-capable technical leadership engagements.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <section className="py-16">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <h1 className="mb-4 text-4xl font-bold text-white">Contact Sahil Verma</h1>
      <ContactCTA />
      <p className="text-slate-300">Resume: <a className="text-cyan-300" href={siteConfig.resumeUrl}>Download</a></p>
    </section>
  );
}
