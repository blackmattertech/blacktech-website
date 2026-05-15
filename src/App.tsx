import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import DeferredWidgets from "./components/DeferredWidgets";
import { SeoProvider } from "./components/PageSeo";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./Index";

const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const PoliciesPage = lazy(() => import("./pages/PoliciesPage"));
const TagUnlimitedErpCaseStudyPage = lazy(
  () => import("./pages/TagUnlimitedErpCaseStudyPage")
);

export default function App() {
  return (
    <BrowserRouter>
      <SeoProvider>
        <DeferredWidgets />
        <ScrollToTop />
        <ConsentAwareAnalytics />
        <Suspense fallback={<div className="min-h-dvh bg-black" aria-hidden />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route
              path="/case-studies/tag-unlimited-erp"
              element={<TagUnlimitedErpCaseStudyPage />}
            />
          </Routes>
        </Suspense>
      </SeoProvider>
    </BrowserRouter>
  );
}
