import { profile } from '@/data/profile';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ExpertiseSection() {
  return (
    <section className="py-16" id="what-i-do">
      <SectionHeader eyebrow="What I Do" title="Technical Expertise and Delivery" />
      <div className="grid gap-5 md:grid-cols-3">
        {profile.whatIDo.map((item) => (
          <GlassCard key={item.title}>
            <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
