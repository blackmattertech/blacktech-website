/**
 * Regenerates public/sitemap.xml with static routes + published blog slugs from Supabase.
 * Run: node scripts/generate-sitemap.mjs
 * Env: VITE_SITE_URL, VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY (optional, for blogs)
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SITE_URL = (process.env.VITE_SITE_URL || "https://www.blackmattertech.com").replace(
  /\/+$/,
  ""
);

const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  {
    path: "/case-studies/tag-unlimited-erp",
    changefreq: "monthly",
    priority: "0.7",
  },
  { path: "/policies", changefreq: "yearly", priority: "0.4" },
];

async function fetchBlogSlugs() {
  const base = process.env.VITE_SUPABASE_URL?.replace(/\/+$/, "");
  const key = process.env.VITE_SUPABASE_ANON_KEY?.trim();
  if (!base || !key) return [];

  const query =
    "/rest/v1/blogs?select=slug,published_at,updated_at&or=(is_published.eq.true,status.eq.published)&order=published_at.desc.nullslast";
  const res = await fetch(`${base}${query}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) {
    console.warn(`Blog fetch skipped (${res.status})`);
    return [];
  }
  const rows = await res.json();
  return Array.isArray(rows) ? rows : [];
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function urlEntry(loc, changefreq, priority, lastmod) {
  const lastmodTag = lastmod
    ? `    <lastmod>${escapeXml(lastmod)}</lastmod>\n`
    : "";
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
${lastmodTag}    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const blogs = await fetchBlogSlugs();
const today = new Date().toISOString().slice(0, 10);

const entries = [
  ...STATIC_ROUTES.map(({ path, changefreq, priority }) =>
    urlEntry(`${SITE_URL}${path}`, changefreq, priority, today)
  ),
  ...blogs.map((row) => {
    const lastmod = (row.updated_at || row.published_at || today).slice(0, 10);
    return urlEntry(
      `${SITE_URL}/blog/${row.slug}`,
      "monthly",
      "0.6",
      lastmod
    );
  }),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

const outPath = join(root, "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${outPath} (${entries.length} URLs)`);
