import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function EducationSection() {
  return (
    <section className="py-16" id="education">
      <SectionHeader eyebrow="Education & Certifications" title="Academic Foundation and Credentials" />
      <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">{profile.education.degree}</h3>
        <p className="text-cyan-300">{profile.education.school} · {profile.education.period}</p>
        <p className="mt-3 text-slate-300">{profile.education.details}</p>
      </article>
      <ul className="mt-6 space-y-2 text-slate-200">
        {profile.certifications.map((cert) => (
          <li key={cert}>• {cert}</li>
        ))}
      </ul>
    </section>
  );
}
