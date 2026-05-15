import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  LOCALE,
  NO_INDEX,
  SITE_NAME,
  absoluteUrl,
} from "../constants/site";

export type SeoOverrides = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string
) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

const ROUTE_SEO: Record<
  string,
  { title: string; description: string; imageAlt: string }
> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    imageAlt:
      "Custom software development company — BlackMatter Technologies ERP and SaaS",
  },
  "/blog": {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Insights on custom software, ERP, automation, and scaling digital operations from BlackMatter Technologies.",
    imageAlt: "BlackMatter Technologies blog",
  },
  "/policies": {
    title: `Policies | ${SITE_NAME}`,
    description:
      "Privacy, cookies, and terms for BlackMatter Technologies websites and services.",
    imageAlt: "BlackMatter Technologies legal policies",
  },
  "/case-studies/tag-unlimited-erp": {
    title: `TAG Unlimited ERP Case Study | ${SITE_NAME}`,
    description:
      "How BlackMatter built a custom ERP for TAG Unlimited Clothing — operations, inventory, and workflow in one system.",
    imageAlt: "TAG Unlimited ERP case study by BlackMatter Technologies",
  },
};

const BLOG_DETAIL_FALLBACK = {
  title: `Article | ${SITE_NAME}`,
  description: DEFAULT_DESCRIPTION,
  imageAlt: "BlackMatter Technologies blog article",
};

const SeoOverridesContext = createContext<
  (overrides: SeoOverrides | undefined) => void
>(() => {});

export function useSeoOverrides() {
  return useContext(SeoOverridesContext);
}

export function SeoProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<SeoOverrides | undefined>();
  return (
    <SeoOverridesContext.Provider value={setOverrides}>
      <PageSeo overrides={overrides} />
      {children}
    </SeoOverridesContext.Provider>
  );
}

function applyPageSeo({
  title,
  description,
  url,
  image,
  imageAlt,
  noIndex,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  noIndex: boolean;
}) {
  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta(
    "name",
    "robots",
    noIndex ? "noindex, nofollow" : "index, follow"
  );
  upsertMeta(
    "name",
    "googlebot",
    noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  );

  upsertLink("canonical", url);

  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", imageAlt);
  upsertMeta("property", "og:image:width", "1200");
  upsertMeta("property", "og:image:height", "630");
  upsertMeta("property", "og:locale", LOCALE);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);
  upsertMeta("name", "twitter:image:alt", imageAlt);
}

/**
 * Updates title, canonical, robots, Open Graph, and Twitter tags per route.
 * Homepage defaults also live in index.html for non-JS crawlers.
 */
function PageSeo({ overrides }: { overrides?: SeoOverrides }) {
  const { pathname } = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    const isBlogDetail = pathname.startsWith("/blog/") && Boolean(slug);
    const routeKey = isBlogDetail ? null : pathname.split("?")[0];
    const routeSeo = routeKey ? ROUTE_SEO[routeKey] : null;

    const title =
      overrides?.title ??
      routeSeo?.title ??
      (isBlogDetail ? BLOG_DETAIL_FALLBACK.title : DEFAULT_TITLE);
    const description =
      overrides?.description ??
      routeSeo?.description ??
      (isBlogDetail ? BLOG_DETAIL_FALLBACK.description : DEFAULT_DESCRIPTION);
    const path =
      overrides?.path ?? (isBlogDetail ? `/blog/${slug}` : pathname);
    const url = absoluteUrl(path);
    const image = overrides?.image ?? DEFAULT_OG_IMAGE;
    const imageAlt =
      overrides?.imageAlt ??
      routeSeo?.imageAlt ??
      BLOG_DETAIL_FALLBACK.imageAlt;
    const noIndex = NO_INDEX || overrides?.noIndex === true;

    applyPageSeo({ title, description, url, image, imageAlt, noIndex });
  }, [pathname, slug, overrides]);

  return null;
}
