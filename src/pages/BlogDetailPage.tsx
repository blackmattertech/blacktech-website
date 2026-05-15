import { useEffect, useState } from "react";
import { CalendarDays, Clock3, UserCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useSeoOverrides } from "../components/PageSeo";
import StickySiteNav from "../components/StickySiteNav";
import { SITE_NAME, absoluteUrl } from "../constants/site";
import {
  type BlogDetail,
  type BlogListItem,
  getPublishedBlogBySlug,
  getSimilarPublishedBlogs,
} from "../lib/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const setSeoOverrides = useSeoOverrides();
  const [post, setPost] = useState<BlogDetail | null>(null);
  const [similarPosts, setSimilarPosts] = useState<BlogListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const blogSlug = (slug ?? "").trim();
    if (!blogSlug) {
      setError("Blog post not found.");
      setIsLoading(false);
      setPost(null);
      setSimilarPosts([]);
      return;
    }

    let alive = true;

    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const found = await getPublishedBlogBySlug(blogSlug);
        if (!alive) return;

        if (!found) {
          setPost(null);
          setSimilarPosts([]);
          setError("Blog post not found.");
          setIsLoading(false);
          return;
        }

        setPost(found);
        const similar = await getSimilarPublishedBlogs(found.category, found.slug, 4);
        if (!alive) return;
        setSimilarPosts(similar);
      } catch (err) {
        if (!alive) return;
        setError(err instanceof Error ? err.message : "Unable to load this blog.");
      } finally {
        if (alive) setIsLoading(false);
      }
    };

    load();
    return () => {
      alive = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!post) {
      setSeoOverrides(undefined);
      return;
    }

    const image = post.image.startsWith("http")
      ? post.image
      : absoluteUrl(post.image);

    setSeoOverrides({
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image,
      imageAlt: post.title,
    });

    return () => setSeoOverrides(undefined);
  }, [post, setSeoOverrides]);

  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#04060d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(76,66,255,0.45)_0%,rgba(19,15,54,0.34)_35%,rgba(4,6,13,0)_72%)] blur-xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,38,0.65)_0%,rgba(4,6,13,0.96)_52%,#04060d_100%)]" />
      </div>

      <StickySiteNav />

      <div className="relative px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        {isLoading ? (
          <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/70">
            Loading article...
          </section>
        ) : error || !post ? (
          <section className="rounded-xl border border-red-400/35 bg-red-500/10 p-5 text-sm text-red-100">
            {error ?? "Blog post not found."}
          </section>
        ) : (
          <section className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          <article>
            <img
              src={post.image}
              alt={post.title}
              className="h-[240px] w-full rounded-lg object-cover sm:h-[340px] lg:h-[430px]"
            />

            <div className="space-y-5 pt-3 sm:pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/60">
                <div className="inline-flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5">
                    <UserCircle2 className="h-3.5 w-3.5 text-white/75" />
                    {post.author}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[11px] tracking-wide text-white/80">
                    {post.category}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-white/75" />
                  {post.date}
                </span>
              </div>

              <div>
                <h1 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-2 max-w-4xl text-sm text-white/70 sm:text-base">
                  {post.subtitle}
                </p>
              </div>

              <div className="max-w-5xl space-y-3 text-sm leading-relaxed text-white/80 sm:text-base">
                {post.content.map((paragraph, index) => (
                  <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          <aside className="xl:pl-1">
            <h2 className="text-2xl font-semibold tracking-tight">Similar articles</h2>

            <div className="mt-4 space-y-3">
              {similarPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group grid grid-cols-[96px_minmax(0,1fr)] gap-3 rounded-lg border border-white/10 bg-[#070b1a]/45 p-2 transition-colors hover:border-white/25 hover:bg-[#0b1127]/55"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-24 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-medium leading-snug text-white/90 transition-colors group-hover:text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 line-clamp-1 text-xs text-white/55">{item.excerpt}</p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-white/55">
                      <span>{item.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
          </section>
        )}
      </div>
    </div>
  );
}

