import { useEffect } from "react";
import {
  BM_COOKIE_CONSENT_EVENT,
  readConsent,
} from "../constants/cookieConsent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_SCRIPT_ID = "bm-gtag-js";

function loadGoogleAnalytics(measurementId: string): void {
  if (document.getElementById(GA_SCRIPT_ID)) return;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

export default function ConsentAwareAnalytics() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
    if (!measurementId) return;

    const tryLoad = () => {
      if (readConsent() !== "accepted") return;
      loadGoogleAnalytics(measurementId);
    };

    tryLoad();
    window.addEventListener(BM_COOKIE_CONSENT_EVENT, tryLoad);
    return () =>
      window.removeEventListener(BM_COOKIE_CONSENT_EVENT, tryLoad);
  }, []);

  return null;
}
