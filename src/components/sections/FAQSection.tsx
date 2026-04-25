import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function FAQSection() {
  return (
    <section className="py-16" id="faq">
      <SectionHeader eyebrow="FAQ" title="Common Questions" />
      <div className="space-y-4">
        {profile.faq.map((item) => (
          <details key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <summary className="cursor-pointer font-semibold text-slate-100">{item.question}</summary>
            <p className="mt-3 text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
