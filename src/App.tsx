import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsentAwareAnalytics from "./components/ConsentAwareAnalytics";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./Index";
import BlogPage from "./pages/BlogPage";
import PoliciesPage from "./pages/PoliciesPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ConsentAwareAnalytics />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
