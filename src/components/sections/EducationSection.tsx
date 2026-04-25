import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function EducationSection() {
  return (
    <section className="py-16" id="education">
      <SectionHeader eyebrow="Education" title="Education & Certifications" />
      <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-slate-100">{profile.education.degree}</h3>
        <p className="text-slate-300">{profile.education.university}</p>
        <p className="text-sm text-cyan-200">{profile.education.period}</p>
        <p className="mt-3 text-slate-300">{profile.education.details}</p>
        <h4 className="mt-6 text-lg font-semibold text-slate-100">Certifications</h4>
        <ul className="mt-2 space-y-1 text-slate-300">
          {profile.certifications.map((cert) => (
            <li key={cert}>• {cert}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
