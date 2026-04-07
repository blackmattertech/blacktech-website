import { FormEvent, useState } from "react";
import { Github, Mail } from "lucide-react";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const CONTACT_EMAIL = "info@blackmattertech.com";
const GITHUB_ORG = "https://github.com/blackmattertech";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "Network error. Check that the contact API is running, then try again."
      );
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ImmersiveReveal>
          <p className="text-sm uppercase tracking-widest text-white/40">
            Contact
          </p>
          <h2
            className="mt-4 max-w-2xl text-4xl tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Tell us what you&apos;re{" "}
            <span className="italic text-white/55">building</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
            BlackMatter Technologies builds intelligent, scalable digital
            systems for complex operations. Share a short brief—we&apos;ll
            follow up by email.
          </p>
        </ImmersiveReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <ImmersiveReveal
            delay={0.06}
            className="flex flex-col gap-6 lg:col-span-4"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="liquid-glass flex items-center gap-3 rounded-2xl px-5 py-4 text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-5 w-5 shrink-0 text-white/70" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45">
                  Email
                </p>
                <p className="mt-1 text-sm font-medium">{CONTACT_EMAIL}</p>
              </div>
            </a>
            <a
              href={GITHUB_ORG}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex items-center gap-3 rounded-2xl px-5 py-4 text-white transition-colors hover:bg-white/10"
            >
              <Github className="h-5 w-5 shrink-0 text-white/70" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45">
                  GitHub
                </p>
                <p className="mt-1 text-sm font-medium">@blackmattertech</p>
              </div>
            </a>
          </ImmersiveReveal>

          <ImmersiveReveal delay={0.1} className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="liquid-glass rounded-3xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-white/45">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={status === "loading"}
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25 disabled:opacity-50"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-white/45">
                    Work email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25 disabled:opacity-50"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="text-xs uppercase tracking-widest text-white/45">
                  Company (optional)
                </span>
                <input
                  name="company"
                  type="text"
                  disabled={status === "loading"}
                  autoComplete="organization"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25 disabled:opacity-50"
                  placeholder="Organization"
                />
              </label>
              <label className="mt-5 block">
                <span className="text-xs uppercase tracking-widest text-white/45">
                  How can we help?
                </span>
                <textarea
                  name="message"
                  required
                  disabled={status === "loading"}
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25 disabled:opacity-50"
                  placeholder="Goals, timeline, stack, and anything else we should know."
                />
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
                <p className="text-xs text-white/40">
                  We&apos;ll email you a confirmation and reply within 24 hours.
                </p>
              </div>
              {status === "success" && (
                <p className="mt-4 text-sm text-white/80" role="status">
                  Thanks — check your inbox for a confirmation. Our team will
                  respond within <span className="text-white">24 hours</span>.
                </p>
              )}
              {status === "error" && errorMessage && (
                <p className="mt-4 text-sm text-red-300/90" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          </ImmersiveReveal>
        </div>
      </div>
    </section>
  );
}
