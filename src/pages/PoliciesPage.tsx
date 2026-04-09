import { Link, useSearchParams } from "react-router-dom";
import CookiesPolicyContent from "../components/policies/CookiesPolicyContent";
import PrivacyPolicyContent from "../components/policies/PrivacyPolicyContent";
import TermsPolicyContent from "../components/policies/TermsPolicyContent";
import { resetCookieConsentAndReload } from "../constants/cookieConsent";

const TAB_CONFIG = [
  { id: "cookies" as const, label: "Cookies", title: "Cookie policy" },
  { id: "privacy" as const, label: "Privacy", title: "Privacy policy" },
  { id: "terms" as const, label: "Terms", title: "Terms of service" },
];

const ALL_TAB_IDS = TAB_CONFIG.map((t) => t.id);
type TabId = (typeof ALL_TAB_IDS)[number];

function isTabId(s: string | null): s is TabId {
  return ALL_TAB_IDS.includes(s as TabId);
}

export default function PoliciesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get("tab");
  const active: TabId = isTabId(raw) ? raw : "cookies";
  const tabMeta = TAB_CONFIG.find((t) => t.id === active)!;

  return (
    <div className="flex min-h-dvh flex-col bg-black text-white">
      <header className="shrink-0 border-b border-white/10 px-5 py-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-semibold text-white transition-opacity hover:opacity-90"
          >
            ← Back to home
          </Link>
          <h1 className="font-jetbrains text-[10px] uppercase tracking-[0.35em] text-white/50">
            Our policies
          </h1>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col px-5 py-10 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[90rem]">
          <nav
            className="flex flex-wrap gap-2 border-b border-white/10 pb-6"
            aria-label="Policy sections"
          >
            {TAB_CONFIG.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSearchParams({ tab: id })}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                  active === id
                    ? "bg-white text-black"
                    : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <article className="w-full pt-10">
            <h2 className="font-orbitron text-2xl font-light uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
              {tabMeta.title}
            </h2>
            <div className="mt-8 w-full max-w-none">
              {active === "cookies" && <CookiesPolicyContent />}
              {active === "privacy" && <PrivacyPolicyContent />}
              {active === "terms" && <TermsPolicyContent />}
            </div>
          </article>
        </div>
      </main>

      <footer className="shrink-0 border-t border-white/10 px-5 py-10 sm:px-10 lg:px-16 xl:px-20">
        <nav
          className="mx-auto flex w-full max-w-[90rem] flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-white/45"
          aria-label="Policies"
        >
          <Link to="/policies" className="transition-colors hover:text-white">
            Our policies
          </Link>
          <Link
            to="/policies?tab=cookies"
            className="transition-colors hover:text-white"
          >
            Cookies
          </Link>
          <Link
            to="/policies?tab=privacy"
            className="transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            to="/policies?tab=terms"
            className="transition-colors hover:text-white"
          >
            Terms
          </Link>
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <button
            type="button"
            className="transition-colors hover:text-white"
            onClick={resetCookieConsentAndReload}
          >
            Cookie settings
          </button>
        </nav>
      </footer>
    </div>
  );
}
