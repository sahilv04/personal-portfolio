import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ExperienceTimeline() {
  return (
    <section className="py-16" id="experience">
      <SectionHeader eyebrow="Leadership & Delivery" title="Professional Experience Timeline" />
      <ol className="space-y-4">
        {profile.experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{item.title} · {item.company}</h3>
            <p className="text-sm text-cyan-300">{item.period} · {item.location}</p>
            <p className="mt-3 text-slate-300">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
