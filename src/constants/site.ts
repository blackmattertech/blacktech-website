/** Public site origin — no trailing slash. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.trim() || "https://www.blackmattertech.com"
).replace(/\/+$/, "");

export const SITE_NAME = "BlackMatter Technologies";

import { SEO_DESCRIPTION, SEO_TITLE } from "./seo";

export const DEFAULT_TITLE = SEO_TITLE;

export const DEFAULT_DESCRIPTION = SEO_DESCRIPTION;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/footer-hero.png`;

export const LOCALE = "en_IN";

/** Set VITE_NOINDEX=true on staging to block search indexing. */
export const NO_INDEX = import.meta.env.VITE_NOINDEX === "true";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
