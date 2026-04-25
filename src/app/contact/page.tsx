import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with Sahil Verma for frontend architecture, full-stack development, and cloud-ready product delivery.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <section className="py-14">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <h1 className="text-4xl font-bold text-slate-100">Contact Sahil Verma</h1>
      <ContactCTA />
    </section>
  );
}
