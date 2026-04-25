import { siteConfig } from '@/lib/site';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ContactCTA() {
  return (
    <section className="py-16" id="contact-cta">
      <SectionHeader eyebrow="Working With Sahil" title="Need a Technical Lead for React, Full Stack, or Cloud Delivery?" />
      <p className="max-w-3xl text-slate-300">
        I am available on almost every social media. You can message me, and I will reply within 24 hours. I can help with React, Angular, Node.js, Cloud, and open-source development.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a className="rounded border border-white/20 px-4 py-2 text-cyan-200" href={`mailto:${siteConfig.email}`}>Email</a>
        <a className="rounded border border-white/20 px-4 py-2 text-cyan-200" href={siteConfig.github}>GitHub</a>
        <a className="rounded border border-white/20 px-4 py-2 text-cyan-200" href={siteConfig.linkedin}>LinkedIn</a>
      </div>
    </section>
  );
}
