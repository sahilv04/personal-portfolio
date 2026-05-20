# Articles Section — Plan & Architecture

## Context

`sahilverma.in` is outranked by `sahilverma.org` and `sahil-coder.vercel.app` on "Sahil Verma portfolio" queries despite being older. Root cause: **content volume + backlinks**, not on-page SEO. `.org` has many indexed WordPress pages; `sahilverma.in` is essentially a single-route site.

The `/articles` section adds technical writing (fintech, blockchain, React/Node, cloud) directly on the canonical domain. Each article = a new indexable page with unique title, description, Article schema, and sitemap entry. Over time this grows site surface area, builds topical authority for fintech/blockchain, generates freshness signals, and captures backlinks on `sahilverma.in` rather than Medium.

## Stack

- **Format:** MDX with YAML frontmatter — `content/articles/*.mdx`
- **Rendering:** `next-mdx-remote/rsc` (Next 15 App Router + RSC)
- **Frontmatter:** `gray-matter`
- **Code highlighting:** `rehype-pretty-code` + `shiki` (build-time, zero client JS)
- **Markdown extensions:** `remark-gfm` (tables, task lists)
- **Prose styling:** `@tailwindcss/typography`
- **Cross-posting strategy:** site is canonical; Medium imports later with `rel="canonical"` back to `sahilverma.in`.

## Files

**Created**
- `content/articles/hello-fintech.mdx` — seed article
- `lib/articles.ts` — frontmatter loader + types
- `components/mdx/MdxContent.tsx` — MDX renderer wrapping `MDXRemote`
- `components/sections/ArticleCard.tsx` — index card
- `app/articles/page.tsx` — article index
- `app/articles/[slug]/page.tsx` — article detail

**Modified**
- `lib/jsonld.tsx` — add `articleSchema`
- `app/sitemap.ts` — include `/articles` and each article URL
- `components/Navbar.tsx` — add "Articles" link
- `tailwind.config.ts` — register `@tailwindcss/typography`
- `package.json` — new deps

## Frontmatter Shape

```yaml
---
title: Settlement Flows Explained
description: How atomic settlement works on distributed ledgers — notary, finality, and gotchas.
date: 2026-05-20
updated: 2026-05-21        # optional
tags: [fintech, blockchain, settlement]
ogImage: /og/settlement.png   # optional
draft: false               # optional, hidden from index + sitemap in prod
---
```

## Per-Article SEO

- Unique title + description via `buildMetadata` (frontmatter-driven)
- OpenGraph `type: "article"` with `publishedTime`, `modifiedTime`, `tags`
- `articleSchema` JSON-LD: `headline`, `author`, `publisher`, `datePublished`, `dateModified`, `image`, `mainEntityOfPage`
- Breadcrumb JSON-LD: Home → Articles → [Title]
- Canonical = `${SITE_URL}/articles/${slug}`
- Single `<h1>` matches frontmatter title

## Verification

1. `npm run build` — no TS or MDX errors; all routes static-generated.
2. `npm run dev` then visit `/articles` and `/articles/hello-fintech`.
3. `curl -s http://localhost:3000/articles/hello-fintech | grep -E 'og:|application/ld\+json|<title'`
4. `curl -s http://localhost:3000/sitemap.xml` — confirm article URLs present.
5. Production: Google Rich Results Test on the deployed URL.

## Out of Scope (future)

Tag pages, RSS feed, view counters, comments, search, pagination, auto-generated per-article OG images.
