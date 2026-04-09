import { deleteCookie, getCookie, setCookie } from "../lib/cookieStorage";

export const COOKIE_CONSENT_STORAGE_KEY = "blackmatter-cookie-consent";
/** First-party HTTP cookie; mirrors localStorage for consent UX and policy alignment */
export const COOKIE_CONSENT_COOKIE_NAME = "bm_cookie_consent";

export type CookieConsentStatus = "accepted" | "refused";

const CONSENT_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

export const BM_COOKIE_CONSENT_EVENT = "bm-cookie-consent" as const;

export function readConsent(): CookieConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const fromCookie = getCookie(COOKIE_CONSENT_COOKIE_NAME);
    if (fromCookie === "accepted" || fromCookie === "refused") {
      return fromCookie;
    }
  } catch {
    /* ignore */
  }
  try {
    const fromLs = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (fromLs === "accepted" || fromLs === "refused") {
      setCookie(COOKIE_CONSENT_COOKIE_NAME, fromLs, {
        maxAgeSeconds: CONSENT_MAX_AGE_SECONDS,
      });
      return fromLs;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function persistConsent(status: CookieConsentStatus): void {
  try {
    setCookie(COOKIE_CONSENT_COOKIE_NAME, status, {
      maxAgeSeconds: CONSENT_MAX_AGE_SECONDS,
    });
  } catch {
    /* ignore */
  }
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, status);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent(BM_COOKIE_CONSENT_EVENT, { detail: { status } })
  );
}

export function resetCookieConsentAndReload(): void {
  try {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    /* private mode */
  }
  try {
    deleteCookie(COOKIE_CONSENT_COOKIE_NAME);
  } catch {
    /* ignore */
  }
  window.location.reload();
}
