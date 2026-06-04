export const GA_MEASUREMENT_ID = "G-E957GSMJYY";

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

/** Fire a GA4 custom event. No-ops on the server or before gtag loads. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

/** Send a manual SPA page_view (Next.js client-side route changes). */
export function pageview(url: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}
