import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FAQ_ITEMS,
  SEO_DESCRIPTION,
  SERVICE_SCHEMA_ITEMS,
} from "../constants/seo";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "../constants/site";

const SCHEMA_SCRIPT_ID = "bm-jsonld";

function injectJsonLd(graph: Record<string, unknown>[]) {
  const payload = { "@context": "https://schema.org", "@graph": graph };
  let el = document.getElementById(SCHEMA_SCRIPT_ID) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = SCHEMA_SCRIPT_ID;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
}

export default function SeoSchema() {
  const { pathname } = useLocation();

  useEffect(() => {
    const graph: Record<string, unknown>[] = [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/logo.svg"),
        image: DEFAULT_OG_IMAGE,
        email: "info@blackmattertech.com",
        description: SEO_DESCRIPTION,
        sameAs: [
          "https://github.com/blackmattertech",
          "https://www.linkedin.com/company/blackmattertech",
          "https://www.instagram.com/blackmattertech",
        ],
        areaServed: ["IN", "Worldwide"],
        knowsAbout: [
          "Custom Software Development",
          "ERP Development",
          "SaaS Development",
          "Web Application Development",
          "Business Process Automation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SEO_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        image: DEFAULT_OG_IMAGE,
        description: SEO_DESCRIPTION,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: SERVICE_SCHEMA_ITEMS.map((s) => s.name),
      },
    ];

    if (pathname === "/") {
      graph.push({
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });

      graph.push(
        ...SERVICE_SCHEMA_ITEMS.map((service, index) => ({
          "@type": "Service",
          "@id": `${SITE_URL}/#service-${index}`,
          name: service.name,
          description: service.description,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: "IN",
        }))
      );
    }

    injectJsonLd(graph);

    return () => {
      document.getElementById(SCHEMA_SCRIPT_ID)?.remove();
    };
  }, [pathname]);

  return null;
}
