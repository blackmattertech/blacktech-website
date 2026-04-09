import { useCallback, useEffect, useState } from "react";
import {
  persistConsent,
  readConsent,
  type CookieConsentStatus,
} from "../constants/cookieConsent";

const COOKIE_MESSAGE =
  "We use cookies even though we are not a bakery. Unfortunately, they are needed to ensure the proper functioning of the website.";

export type { CookieConsentStatus };

export default function CookieConsent() {
  const [status, setStatus] = useState<CookieConsentStatus | null>(() =>
    typeof window === "undefined" ? null : readConsent()
  );

  useEffect(() => {
    setStatus(readConsent());
  }, []);

  const dismiss = useCallback((next: CookieConsentStatus) => {
    persistConsent(next);
    setStatus(next);
  }, []);

  if (status !== null) return null;

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="cookie-consent__card">
        <span id="cookie-consent-title" className="sr-only">
          Cookie notice
        </span>
        <span className="cookie-consent__emoji" aria-hidden>
          🍪
        </span>
        <p id="cookie-consent-desc" className="cookie-consent__text">
          {COOKIE_MESSAGE}
        </p>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--refuse"
            onClick={() => dismiss("refused")}
          >
            Refuse
          </button>
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--accept"
            onClick={() => dismiss("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
