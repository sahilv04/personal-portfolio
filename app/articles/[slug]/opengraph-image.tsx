import { ImageResponse } from "next/og";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
import { personal } from "@/content/personal";

export const alt = "Article by Sahil Verma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticleOGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "Article";
  const description = article?.description ?? "";
  const tags = article?.tags ?? [];
  const dateLabel = article
    ? new Date(article.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top left, #1a1a3a 0%, #060611 60%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
            }}
          />
          <span style={{ fontSize: "28px", opacity: 0.85, letterSpacing: "-0.02em" }}>
            sahilverma.in
          </span>
          <span style={{ fontSize: "22px", opacity: 0.4, marginLeft: "auto" }}>
            Articles
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: title.length > 60 ? "56px" : "72px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: "1040px",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: "26px",
                opacity: 0.65,
                lineHeight: 1.4,
                maxWidth: "980px",
                marginTop: "8px",
              }}
            >
              {description.length > 160 ? `${description.slice(0, 157)}…` : description}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            opacity: 0.55,
          }}
        >
          <span style={{ display: "flex", gap: "16px" }}>
            <span>{personal.name}</span>
            {dateLabel && <span>·</span>}
            {dateLabel && <span>{dateLabel}</span>}
          </span>
          {tags.length > 0 && (
            <span style={{ display: "flex", gap: "10px" }}>
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "999px",
                    padding: "6px 14px",
                    fontSize: "18px",
                  }}
                >
                  {t}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
