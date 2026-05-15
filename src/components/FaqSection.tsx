import { Link } from "react-router-dom";
import { FAQ_ITEMS } from "../constants/seo";
import { openProjectFormModal } from "../constants/projectFormModal";
import { ImmersiveReveal } from "./motion/ImmersiveReveal";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-white/[0.07] bg-black py-20 text-white md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <ImmersiveReveal>
          <p className="text-sm uppercase tracking-widest text-white/40">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Custom software development —{" "}
            <span className="italic text-white/55">common questions</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
            Answers about ERP, SaaS, web apps, and working with a software
            development company in India.
          </p>
        </ImmersiveReveal>

        <dl className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <ImmersiveReveal key={item.question} delay={index * 0.04}>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
                <dt className="text-base font-medium leading-snug text-white">
                  {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.answer}
                </dd>
              </div>
            </ImmersiveReveal>
          ))}
        </dl>

        <ImmersiveReveal delay={0.12} className="mt-10 text-center">
          <p className="text-sm text-white/50">
            Ready to scope your project?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openProjectFormModal}
              className="rounded-full border border-neon/50 bg-neon px-6 py-3 text-sm font-semibold text-[#061001] transition-colors hover:bg-neon/90"
            >
              Get a quote for custom software development
            </button>
            <Link
              to="/blog"
              className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Read our software insights →
            </Link>
          </div>
        </ImmersiveReveal>
      </div>
    </section>
  );
}
