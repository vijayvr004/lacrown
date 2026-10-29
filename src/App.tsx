import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LuxuryCurtainTransition from './components/LuxuryCurtainTransition';

// Primary Landing Page (Loaded Eagerly for Optimal FCP / LCP)
import HomePage from './pages/HomePage';

// Route-Level Code Splitting (Loaded on demand to minimize initial JS payload)
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AestheticClinicPage = lazy(() => import('./pages/AestheticClinicPage'));
const AestheticServicePage = lazy(() => import('./pages/AestheticServicePage'));
const SalonPage = lazy(() => import('./pages/SalonPage'));
const SalonServicePage = lazy(() => import('./pages/SalonServicePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const OurTeamPage = lazy(() => import('./pages/OurTeamPage'));
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const OffersPage = lazy(() => import('./pages/OffersPage'));
const AcademyPage = lazy(() => import('./pages/AcademyPage'));
const FranchisePage = lazy(() => import('./pages/FranchisePage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CancellationPolicyPage = lazy(() => import('./pages/CancellationPolicyPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Admin Pages (Code-split entirely away from public visitor bundle)
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));

// Subtle, elegant fallback matching luxury aesthetic
function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-ivory-100">
      <div className="w-8 h-8 rounded-full border-2 border-burgundy border-t-gold animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <LuxuryCurtainTransition />
      <Suspense fallback={<PageFallback />}>
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
      </Suspense>
    </BrowserRouter>
  );
}
