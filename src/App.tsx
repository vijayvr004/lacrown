import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LuxuryCurtainTransition from './components/LuxuryCurtainTransition';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AestheticClinicPage from './pages/AestheticClinicPage';
import AestheticServicePage from './pages/AestheticServicePage';
import SalonPage from './pages/SalonPage';
import SalonServicePage from './pages/SalonServicePage';
import ServicesPage from './pages/ServicesPage';
import OurTeamPage from './pages/OurTeamPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import OffersPage from './pages/OffersPage';
import AcademyPage from './pages/AcademyPage';
import FranchisePage from './pages/FranchisePage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <LuxuryCurtainTransition />
      <Routes>
        {/* Admin Routes (Standalone Layout) */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

        {/* Public Website Routes (Shared Header & Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aesthetic-clinic" element={<AestheticClinicPage />} />
          <Route path="/aesthetic-clinic/:slug" element={<AestheticServicePage />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/salon/:slug" element={<SalonServicePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
