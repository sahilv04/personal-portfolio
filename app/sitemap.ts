import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/personal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about", "/experience", "/education", "/projects", "/skills", "/services", "/contact"];
  const headshot = new URL("/sahil-verma.jpg", SITE_URL).toString();
  const ogImage = new URL("/opengraph-image", SITE_URL).toString();
  return routes.map((path) => ({
    url: new URL(path || "/", SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    images: path === "/about" ? [headshot, ogImage] : [ogImage],
  }));
}
