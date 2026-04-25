import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section className="py-16" id="about">
      <SectionHeader eyebrow="About Sahil" title="Building sustainable and scalable digital systems" />
      <p className="max-w-4xl text-slate-300">{profile.intro}</p>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-slate-100">Working With Sahil</h3>
        <p className="mt-2 text-slate-300">
          Sahil combines technical depth with delivery ownership. He partners with product and engineering teams to
          translate goals into reliable architecture, clear sprint plans, and maintainable codebases.
        </p>
      </div>
    </section>
  );
}
