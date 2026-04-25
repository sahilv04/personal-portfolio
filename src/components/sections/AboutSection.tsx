import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <SectionHeader eyebrow="About Sahil" title="Who Sahil Verma is" description={profile.intro} />
      <p className="max-w-4xl text-slate-300">{profile.positioning}</p>
    </section>
  );
}
