import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="min-h-dvh bg-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="text-white/80 transition-colors hover:text-white">
          ← Back to home
        </Link>
        <h1 className="mt-8 font-orbitron text-4xl uppercase tracking-wide sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Articles and insights from BlackMatter Technologies will be published
          here soon.
        </p>
      </div>
    </div>
  );
}
