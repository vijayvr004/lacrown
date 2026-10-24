import Breadcrumb from '../components/Breadcrumb';
import { BRAND } from '../data/brand';

export default function TermsPage() {
  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms and Conditions' }]} light />
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-4">Terms & Conditions</h1>
          <p className="font-sans text-white/80 text-sm mt-2">Last Updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl font-sans text-taupe leading-relaxed space-y-6">
          <p>
            Welcome to the official website of <strong>{BRAND.fullName}</strong>. By accessing this website or scheduling services at our clinic and salon, you agree to comply with and be bound by the following terms of service.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">1. Nature of Services & Clinical Assessment</h3>
          <p>
            LA CROWN provides both clinical aesthetic procedures and professional salon beauty services. Clinical aesthetic procedures (including injectables, laser treatments, chemical peels, and hair restoration) are elective medical procedures that require professional pre-treatment assessment.
          </p>
          <p className="bg-ivory-100 p-4 border-l-4 border-gold text-xs italic">
            Disclaimer: Content published on this website is for informational and educational purposes only. It is not intended to serve as medical advice, diagnosis, or guaranteed treatment outcomes. Individual results will vary.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">2. Appointment Requests</h3>
          <p>
            Submission of an appointment request via this website does not constitute a guaranteed or confirmed booking. An appointment is confirmed only when our administrative team contacts you via phone, WhatsApp, or email.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">3. Pricing & Taxes</h3>
          <p>
            All prices published in printed menus or online directories are subject to applicable Goods and Services Tax (GST) unless explicitly stated otherwise. Clinical aesthetic procedure costs may be customized following physician consultation.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">4. Intellectual Property</h3>
          <p>
            All brand trademarks, logos, copy, photographs, and media assets published on this website are the proprietary intellectual property of {BRAND.fullName}. Unauthorized reproduction, scraping, or commercial exploitation is strictly prohibited.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">5. Jurisdiction</h3>
          <p>
            These terms are governed by the laws of India. Any legal disputes arising out of the use of this website or clinic services are subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
          </p>
        </div>
      </section>
    </div>
  );
}
