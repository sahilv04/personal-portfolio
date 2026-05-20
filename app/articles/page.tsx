import Section from "@/components/ui/Section";
import ArticleCard from "@/components/sections/ArticleCard";
import CTA from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumb, pageSchema } from "@/lib/jsonld";
import { getAllArticles } from "@/lib/articles";

const DESCRIPTION =
  "Writing by Sahil Verma on fintech engineering, blockchain settlement, full-stack architecture and technical leadership.";

export const metadata = buildMetadata({
  title: "Articles",
  description: DESCRIPTION,
  path: "/articles",
  keywords: ["Sahil Verma blog", "fintech engineering articles", "blockchain engineering writing"],
});

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Home", href: "/" }, { name: "Articles", href: "/articles" }])} />
      <JsonLd
        data={pageSchema({
          type: "CollectionPage",
          name: "Articles by Sahil Verma",
          description: DESCRIPTION,
          path: "/articles",
        })}
      />
      <Section
        eyebrow="Writing"
        title="Articles on fintech, blockchain and engineering."
        description="Notes from building financial software — settlement, React/Node patterns, and the engineering rigor finance demands."
      >
        {articles.length === 0 ? (
          <p className="text-ink-dim">No articles published yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        )}
      </Section>
      <CTA />
    </>
  );
}
