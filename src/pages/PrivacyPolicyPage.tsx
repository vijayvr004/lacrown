import Breadcrumb from '../components/Breadcrumb';
import { BRAND } from '../data/brand';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} light />
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-4">Privacy Policy</h1>
          <p className="font-sans text-white/80 text-sm mt-2">Last Updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl prose prose-sm font-sans text-taupe leading-relaxed space-y-6">
          <p>
            At <strong>{BRAND.fullName}</strong>, we are deeply committed to safeguarding the privacy and confidential personal data of our patients, clients, and online visitors.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">1. Information We Collect</h3>
          <p>
            When you visit our clinic, make inquiries, or book appointments via our digital portal, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identity Information: Name, age, gender.</li>
            <li>Contact Information: Telephone number, email address, postal address.</li>
            <li>Appointment Details: Selected service categories, date/time preferences, specialist notes.</li>
            <li>Medical & Skin History: Relevant prior medical history, allergy information, and skin sensitivities shared during clinical consultations.</li>
          </ul>

          <h3 className="font-serif text-xl text-charcoal font-semibold">2. Purpose of Data Processing</h3>
          <p>We process your data exclusively for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scheduling and confirming clinic and salon consultations.</li>
            <li>Delivering clinically safe, customized aesthetic and grooming treatments.</li>
            <li>Communicating appointment reminders, aftercare instructions, and administrative updates.</li>
            <li>Meeting medical and regulatory record-keeping compliances under Indian law.</li>
          </ul>

          <h3 className="font-serif text-xl text-charcoal font-semibold">3. Data Confidentiality & Medical Privacy</h3>
          <p>
            Any medical and clinical diagnostic details collected prior to or during treatment are preserved under clinical confidentiality. We do not sell, rent, or trade your personal or health information to third-party marketing entities.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">4. Data Security</h3>
          <p>
            We implement industry-standard encryption, firewalls, and restricted role-based internal access to ensure unauthorized individuals cannot access your contact or treatment history.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">5. Contact Information</h3>
          <p>
            For privacy inquiries or data update requests, please write to us at{' '}
            <a href={`mailto:${BRAND.email}`} className="text-burgundy underline">{BRAND.email}</a> or visit us at {BRAND.address.full}.
          </p>
        </div>
      </section>
    </div>
  );
}
