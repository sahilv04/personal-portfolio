import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/personal";
import { getAllArticles } from "@/lib/articles";

const ROUTE_PRIORITY: Record<string, number> = {
  "": 1,
  "/projects": 0.9,
  "/about": 0.9,
  "/experience": 0.8,
  "/skills": 0.8,
  "/services": 0.8,
  "/articles": 0.8,
  "/contact": 0.8,
  "/education": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = Object.keys(ROUTE_PRIORITY);
  const headshot = new URL("/sahil-verma.webp", SITE_URL).toString();
  const ogImage = new URL("/opengraph-image", SITE_URL).toString();

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: new URL(path || "/", SITE_URL).toString(),
    lastModified: now,
    changeFrequency: path === "" || path === "/articles" ? "weekly" : "monthly",
    priority: ROUTE_PRIORITY[path],
    images: path === "/about" || path === "" ? [headshot, ogImage] : [ogImage],
  }));

  const articles = getAllArticles().filter((a) => !a.draft);
  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: new URL(`/articles/${a.slug}`, SITE_URL).toString(),
    lastModified: a.updated ? new Date(a.updated) : new Date(a.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [new URL(a.ogImage ?? "/opengraph-image", SITE_URL).toString()],
  }));

  return [...staticEntries, ...articleEntries];
}
