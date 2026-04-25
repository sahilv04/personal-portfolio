import { profile } from '@/data/profile';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function FAQSection() {
  return (
    <section className="py-16" id="faq">
      <SectionHeader eyebrow="FAQ" title="Direct Answers for Recruiters, Clients, and Teams" />
      <div className="space-y-3">
        {profile.faq.map((item) => (
          <details key={item.question} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-medium text-white">{item.question}</summary>
            <p className="mt-2 text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
