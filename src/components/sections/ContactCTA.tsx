import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/lib/site';

export function ContactCTA() {
  return (
    <section className="py-16" id="contact">
      <SectionHeader eyebrow="Contact" title="Let’s build your next product" />
      <article className="rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-7">
        <p className="max-w-3xl text-slate-300">
          I am available on almost every social media. You can message me, and I will reply within 24 hours. I can
          help with React, Angular, NodeJS, Cloud, and open-source development.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-cyan-200">
          <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          <Link href={siteConfig.github}>GitHub</Link>
          <Link href={siteConfig.linkedin}>LinkedIn</Link>
        </div>
      </article>
    </section>
  );
}
