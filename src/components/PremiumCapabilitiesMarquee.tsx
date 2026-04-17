const TECH_STACK_ITEMS = [
  "React Frontend Systems",
  "Next.js Scalable Apps",
  "Node.js Backend Architecture",
  "Supabase Real-time Database",
  "PostgreSQL Data Systems",
  "Tailwind Modern UI",
  "OpenAI AI Integrations",
  "Stripe Payment Systems",
  "AWS Cloud Infrastructure",
  "Firebase Realtime Apps",
  "REST API Integrations",
  "GraphQL Data Layer",
  "Automation Workflows",
  "Webhooks & Event Systems",
  "Secure Authentication Systems",
  "High Performance Hosting",
] as const;

const SOLUTION_ITEMS = [
  "High-Converting Websites",
  "Custom Web Applications",
  "Shopify Stores That Sell",
  "Lead Management CRM Systems",
  "ERP for Business Operations",
  "AI-Powered Business Tools",
  "WhatsApp Automation Systems",
  "Sales & Conversion Systems",
  "Internal Business Dashboards",
  "End-to-End Automation Systems",
  "Custom SaaS Platforms",
  "Inventory Management Systems",
  "Order & Workflow Systems",
  "Data & Analytics Dashboards",
  "Business Process Automation",
  "Scalable Digital Systems",
] as const;

type MarqueeRowProps = {
  items: readonly string[];
  direction: "left" | "right";
};

function MarqueeRow({ items, direction }: MarqueeRowProps) {
  return (
    <div className="premium-marquee-row group">
      <div
        className={
          "premium-marquee-track " +
          (direction === "left"
            ? "premium-marquee-track--left"
            : "premium-marquee-track--right")
        }
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="premium-marquee-list" aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={`${copy}-${item}`}>
                <span className="premium-marquee-pill">
                  <span className="premium-marquee-pill__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        fill="currentColor"
                        d="M11.999 2l6.364 3.675v7.35L12 16.7l-6.363-3.675v-7.35L12 2zm0 2.31L7.637 6.825v5.05L12 14.39l4.363-2.515v-5.05L12 4.31z"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function PremiumCapabilitiesMarquee() {
  return (
    <section className="bg-black py-2 text-white">
      <div className="relative overflow-hidden bg-[#f2f2f2] py-0.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f2f2f2] to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f2f2f2] to-transparent md:w-20" />

        <MarqueeRow items={TECH_STACK_ITEMS} direction="left" />
        <MarqueeRow items={SOLUTION_ITEMS} direction="right" />
      </div>
    </section>
  );
}
