import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/personal";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about", "/experience", "/education", "/projects", "/skills", "/services", "/contact", "/articles"];
  const headshot = new URL("/sahil-verma.webp", SITE_URL).toString();
  const ogImage = new URL("/opengraph-image", SITE_URL).toString();

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: new URL(path || "/", SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    images: path === "/about" ? [headshot, ogImage] : [ogImage],
  }));

  const articles = getAllArticles().filter((a) => !a.draft);
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: new URL(`/articles/${a.slug}`, SITE_URL).toString(),
    lastModified: a.updated ? new Date(a.updated) : new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [new URL(a.ogImage ?? "/opengraph-image", SITE_URL).toString()],
  }));

  return [...staticEntries, ...articleEntries];
}
