import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  ogImage?: string;
  draft: boolean;
  body: string;
  readingTimeMinutes: number;
};

function readArticleFile(filename: string): Article | null {
  if (!filename.endsWith(".mdx")) return null;
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  if (!data.title || !data.description || !data.date) {
    throw new Error(`Article ${filename} is missing required frontmatter (title, description, date).`);
  }

  const words = content.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.max(1, Math.round(words / 220));

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    updated: data.updated ? (data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated)) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    draft: Boolean(data.draft),
    body: content,
    readingTimeMinutes,
  };
}

function listFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllArticles(): Article[] {
  const includeDrafts = process.env.NODE_ENV !== "production";
  return listFiles()
    .map(readArticleFile)
    .filter((a): a is Article => a !== null && (includeDrafts || !a.draft))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}

export function getArticleBySlug(slug: string): Article | null {
  const safe = slug.replace(/[^a-z0-9-_]/gi, "");
  if (!safe) return null;
  const filename = `${safe}.mdx`;
  if (!fs.existsSync(path.join(ARTICLES_DIR, filename))) return null;
  return readArticleFile(filename);
}
