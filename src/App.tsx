import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsent from "./components/CookieConsent";
import ProjectInquiryModal from "./components/ProjectInquiryModal";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./Index";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogPage from "./pages/BlogPage";
import PoliciesPage from "./pages/PoliciesPage";
import TagUnlimitedErpCaseStudyPage from "./pages/TagUnlimitedErpCaseStudyPage";

export default function App() {
  return (
    <BrowserRouter>
      <ProjectInquiryModal />
      <ScrollToTop />
      <ConsentAwareAnalytics />
      <CookieConsent />
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
    </BrowserRouter>
  );
}
