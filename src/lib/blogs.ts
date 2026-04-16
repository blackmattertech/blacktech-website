export type BlogListItem = {
  id: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
};

export type BlogDetail = BlogListItem & {
  subtitle: string;
  content: string[];
  publishedAt: string | null;
};

type BlogRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string;
  cover_image_url: string;
  featured_image_url: string | null;
  category: string;
  author_name: string;
  read_time_minutes: number;
  content_json: unknown;
  content: string | null;
  is_published: boolean;
  status: string | null;
  published_at: string | null;
  created_at: string;
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.trim() ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ?? "";
const BLOGS_TABLE = "blogs";

function assertConfig() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.");
  }
}

function dateLabel(value: string | null, fallback: string): string {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function readTimeLabel(minutes: number): string {
  const clamped = Number.isFinite(minutes) && minutes > 0 ? Math.round(minutes) : 3;
  return `${clamped} min read`;
}

function extractPlainText(node: unknown): string[] {
  if (typeof node === "string") {
    const cleaned = node.trim();
    return cleaned ? [cleaned] : [];
  }

  if (!node || typeof node !== "object") return [];

  if (Array.isArray(node)) {
    return node.flatMap((item) => extractPlainText(item));
  }

  const record = node as Record<string, unknown>;

  if (typeof record.text === "string" && record.text.trim()) {
    return record.text
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean);
  }

  const fromChildren = extractPlainText(record.children);
  if (fromChildren.length > 0) return fromChildren;

  const fromBlocks = extractPlainText(record.blocks);
  if (fromBlocks.length > 0) return fromBlocks;

  const fromNodes = extractPlainText(record.nodes);
  if (fromNodes.length > 0) return fromNodes;

  const fromContentArray = extractPlainText(record.content);
  if (fromContentArray.length > 0) return fromContentArray;

  const fromDocument = extractPlainText(record.document);
  if (fromDocument.length > 0) return fromDocument;

  const fromRoot = extractPlainText(record.root);
  if (fromRoot.length > 0) return fromRoot;

  const fromData = extractPlainText(record.data);
  if (fromData.length > 0) return fromData;

  if (typeof record.content === "string" && record.content.trim()) {
    return record.content
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean);
  }

  return [];
}

function parseContent(contentJson: unknown, contentText: string | null, excerpt: string): string[] {
  const paragraphs = extractPlainText(contentJson);
  if (paragraphs.length > 0) return paragraphs;
  if (typeof contentText === "string" && contentText.trim()) {
    return contentText
      .split(/\n{2,}/)
      .map((part) => part.replace(/\n/g, " ").trim())
      .filter(Boolean);
  }
  return [excerpt];
}

function mapRowToListItem(row: BlogRow): BlogListItem {
  return {
    id: row.id,
    slug: row.slug,
    category: row.category,
    author: row.author_name,
    date: dateLabel(row.published_at, row.created_at),
    readTime: readTimeLabel(row.read_time_minutes),
    title: row.title,
    excerpt: row.excerpt,
    image: row.featured_image_url?.trim() || row.cover_image_url,
  };
}

function mapRowToDetail(row: BlogRow): BlogDetail {
  const base = mapRowToListItem(row);
  return {
    ...base,
    subtitle: row.subtitle ?? "",
    content: parseContent(row.content_json, row.content, row.excerpt),
    publishedAt: row.published_at,
  };
}

async function fetchBlogs(pathWithQuery: string): Promise<BlogRow[]> {
  assertConfig();
  const endpoint = `${SUPABASE_URL.replace(/\/+$/, "")}/rest/v1/${BLOGS_TABLE}${pathWithQuery}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Failed to fetch blogs (${response.status})${body ? `: ${body}` : ""}`);
  }

  const data = (await response.json()) as BlogRow[];
  return Array.isArray(data) ? data : [];
}

const BLOG_SELECT =
  "?select=id,slug,title,subtitle,excerpt,cover_image_url,featured_image_url,category,author_name,read_time_minutes,content_json,content,is_published,status,published_at,created_at";

const BLOG_ORDER =
  "&order=published_at.desc.nullslast&order=created_at.desc";
const PUBLISHED_FILTER = "&or=(is_published.eq.true,status.eq.published)";

export async function getPublishedBlogs(): Promise<BlogListItem[]> {
  const rows = await fetchBlogs(
    `${BLOG_SELECT}${PUBLISHED_FILTER}${BLOG_ORDER}`,
  );
  return rows.map(mapRowToListItem);
}

export async function getPublishedBlogBySlug(slug: string): Promise<BlogDetail | null> {
  const encodedSlug = encodeURIComponent(slug);
  const rows = await fetchBlogs(
    `${BLOG_SELECT}${PUBLISHED_FILTER}&slug=eq.${encodedSlug}&limit=1`,
  );
  if (rows.length === 0) return null;
  return mapRowToDetail(rows[0]);
}

export async function getSimilarPublishedBlogs(
  category: string,
  excludeSlug: string,
  limit = 4,
): Promise<BlogListItem[]> {
  const encodedCategory = encodeURIComponent(category);
  const encodedExclude = encodeURIComponent(excludeSlug);
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.floor(limit)) : 4;

  const primaryRows = await fetchBlogs(
    `${BLOG_SELECT}${PUBLISHED_FILTER}&category=eq.${encodedCategory}&slug=neq.${encodedExclude}${BLOG_ORDER}&limit=${safeLimit}`,
  );

  if (primaryRows.length >= safeLimit) {
    return primaryRows.slice(0, safeLimit).map(mapRowToListItem);
  }

  const fallbackRows = await fetchBlogs(
    `${BLOG_SELECT}${PUBLISHED_FILTER}&slug=neq.${encodedExclude}${BLOG_ORDER}&limit=${safeLimit + 4}`,
  );

  const seen = new Set(primaryRows.map((row) => row.slug));
  const merged = [...primaryRows];
  for (const row of fallbackRows) {
    if (seen.has(row.slug)) continue;
    seen.add(row.slug);
    merged.push(row);
    if (merged.length >= safeLimit) break;
  }

  return merged.map(mapRowToListItem);
}
