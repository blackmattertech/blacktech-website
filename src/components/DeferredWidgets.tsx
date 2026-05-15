import { lazy, Suspense } from "react";
import { useDeferredMount } from "../hooks/useDeferredMount";

const SeoSchema = lazy(() => import("./SeoSchema"));
const CookieConsent = lazy(() => import("./CookieConsent"));
const ProjectInquiryModal = lazy(() => import("./ProjectInquiryModal"));

/** Non-critical UI — after idle so hero can paint first. */
export default function DeferredWidgets() {
  const ready = useDeferredMount();

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <SeoSchema />
      <CookieConsent />
      <ProjectInquiryModal />
    </Suspense>
  );
}
