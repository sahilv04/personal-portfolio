import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/personal";

/* Explicitly welcome AI / answer-engine crawlers alongside classic search bots.
   The wildcard already allows everything; naming them is a deliberate GEO signal
   that this site wants to be read, cited and surfaced by generative engines. */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "FacebookBot",
  "Amazonbot",
  "cohere-ai",
  "CCBot",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
    host: SITE_URL,
  };
}
