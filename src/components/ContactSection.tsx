import { FormEvent, useState } from "react";
import { Github, Mail } from "lucide-react";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

const CONTACT_EMAIL = "info@blackmattertech.com";
const GITHUB_ORG = "https://github.com/blackmattertech";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      name ? `Inquiry from ${name}` : "Contact — BlackMatter Technologies"
    );
    const body = encodeURIComponent(
      [
        name && `Name: ${name}`,
        email && `Email: ${email}`,
        company && `Company: ${company}`,
        "",
        message || "(No message provided)",
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25"
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
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25"
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
                  autoComplete="organization"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25"
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
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-white/35 focus:border-white/25"
                  placeholder="Goals, timeline, stack, and anything else we should know."
                />
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Send via email
                </button>
                <p className="text-xs text-white/40">
                  Opens your mail app with this message addressed to{" "}
                  {CONTACT_EMAIL}.
                </p>
              </div>
              {submitted && (
                <p className="mt-4 text-sm text-white/55" role="status">
                  If your mail client didn&apos;t open, email us directly at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-white underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </ImmersiveReveal>
        </div>
      </div>
    </section>
  );
}
