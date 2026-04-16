import { useEffect, useState } from "react";
import { CalendarDays, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import StickySiteNav from "../components/StickySiteNav";
import { type BlogListItem, getPublishedBlogs } from "../lib/blogs";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await getPublishedBlogs();
        if (alive) setPosts(result);
      } catch (err) {
        if (!alive) return;
        setError(err instanceof Error ? err.message : "Unable to load blogs.");
      } finally {
        if (alive) setIsLoading(false);
      }
    };

    load();
    return () => {
      alive = false;
    };
  }, []);

  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const visiblePosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#04060d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(76,66,255,0.55)_0%,rgba(19,15,54,0.4)_35%,rgba(4,6,13,0)_72%)] blur-xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,38,0.65)_0%,rgba(4,6,13,0.96)_52%,#04060d_100%)]" />
      </div>

      <StickySiteNav />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-14 pt-32 sm:px-10 sm:pt-36 lg:px-14">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,440px)] lg:items-start">
          <h1 className="font-orbitron text-6xl font-semibold uppercase tracking-tight sm:text-7xl lg:text-8xl">
            Blogs
          </h1>

          <div>
            <p className="max-w-xl text-xs leading-relaxed text-white/68 sm:text-sm">
              Welcome to our blog! Here you will find practical articles, current
              trends and tested strategies that help you build high-performance
              digital experiences and grow your online presence. Whether you are
              an entrepreneur, specialist or technology enthusiast, you will find
              valuable resources to take your projects to the next level.
            </p>
          </div>
        </section>

        {isLoading ? (
          <section className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/70">
            Loading latest blogs...
          </section>
        ) : error ? (
          <section className="mt-10 rounded-xl border border-red-400/35 bg-red-500/10 p-5 text-sm text-red-100">
            {error}
          </section>
        ) : posts.length === 0 ? (
          <section className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/70">
            No published blogs found yet.
          </section>
        ) : (
          <>
            <section className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={
                      "rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-200 " +
                      (isActive
                        ? "border-[#6fff00]/70 bg-[#6fff00] text-black shadow-[0_0_20px_rgba(111,255,0,0.3)]"
                        : "border-white/18 bg-white/[0.03] text-white/85 hover:border-white/35 hover:bg-white/[0.06]")
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </section>

            <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visiblePosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group bm-blog-card">
              <span className="pointer-events-none bm-blog-card__runner" />

              <div className="bm-blog-card__shell">
                <div className="relative h-44 overflow-hidden rounded-t-[15px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,26,0)_34%,rgba(7,11,26,0.92)_100%)]" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="space-y-2.5 px-4 pb-4 pt-3.5">
                  <div className="flex items-center justify-between gap-3 text-xs text-white/55">
                    <span className="inline-flex items-center gap-1.5">
                      <UserCircle2 className="h-3.5 w-3.5 text-white/70" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-white/70" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="line-clamp-2 text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-[#d7dcff]">
                    {post.title}
                  </h2>

                  <p className="line-clamp-2 text-sm leading-relaxed text-white/62">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
            ))}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
