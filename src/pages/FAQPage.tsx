import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import FAQAccordion from '../components/FAQAccordion';
import { BRAND } from '../data/brand';

const ALL_FAQS = [
  {
    category: 'General & Appointments',
    faqs: [
      {
        q: 'How do I book an appointment at LA CROWN?',
        a: 'You can request an appointment online through our website booking form, phone us directly at +91 96061 51079, or contact us via WhatsApp. Our team will verify therapist availability and confirm your booking.',
      },
      {
        q: 'What are your operational working hours?',
        a: 'We are open Monday through Sunday, 10:30 AM to 9:00 PM. We are operational all seven days of the week to serve you conveniently.',
      },
      {
        q: 'Where is LA CROWN located?',
        a: 'We are situated at No. 37, First Floor, Ashoka Pillar Road, 10th Main Road, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011.',
      },
      {
        q: 'Can I reschedule or cancel my appointment?',
        a: 'Yes. We kindly ask for at least 24 hours prior notice for cancellations or rescheduling so we may accommodate other clients on our waitlist. Please review our Cancellation & Rescheduling Policy.',
      },
    ],
  },
  {
    category: 'Aesthetic Clinic & Medical Treatments',
    faqs: [
      {
        q: 'Do medical aesthetic treatments require a doctor consultation first?',
        a: 'Yes. All injectable, laser, chemical peel, and hair restoration procedures require a clinical assessment to review medical history, analyze your skin or scalp, and ensure complete suitability.',
      },
      {
        q: 'Are treatments such as HydraFacial and Korean Glass Facial painful?',
        a: 'No. HydraFacial and glass skin treatments are gentle, soothing, and relaxing non-invasive procedures. Most clients report a sensation similar to a light massage and experience immediate glow with zero downtime.',
      },
      {
        q: 'How many sessions of Laser Hair Removal will I need?',
        a: 'Because hair grows in distinct phases, multiple sessions (typically 6 to 8 sessions spaced several weeks apart) are recommended for optimal reduction. Exact requirements depend on individual hair density and skin tone.',
      },
      {
        q: 'Are the medical doctors and dermatologists verified?',
        a: 'Yes. LA CROWN operates under medical director oversight with certified practitioners in dermatology, cosmetology, and aesthetic medicine.',
      },
    ],
  },
  {
    category: 'Salon Services',
    faqs: [
      {
        q: 'What salon services are available at LA CROWN?',
        a: 'We offer men’s and women’s haircuts, creative hair styling, global hair colouring, balayage, keratin smoothing, luxury facials, waxing, threading, de-tan, manicures, pedicures, nail extensions, and bespoke bridal makeup.',
      },
      {
        q: 'Do you offer services for children and toddlers?',
        a: 'Yes. Our specialized Baby & Kids Pampering catalogue includes gentle toddler haircuts, baby massages, milk baths, bubble manicures, and soft cleansing facials performed with safe, gentle products under parental supervision.',
      },
      {
        q: 'How early should I book for Bridal Makeup?',
        a: 'We advise reserving your bridal and wedding makeup consultation 1 to 3 months in advance to schedule trial looks, customize packages, and align skin prep regimens before your big day.',
      },
      {
        q: 'Do you offer loyalty memberships or referral benefits?',
        a: 'Yes. We maintain exclusive loyalty privileges and referral incentives for our returning patrons. Please contact our reception desk to register.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <div>
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Frequently Asked Questions' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Help & Guidance</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Everything you need to know about our clinic protocols, salon services, consultations, and visitor policies.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl">
          {/* Tab Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-medium border transition-all ${
                activeTab === 'all'
                  ? 'bg-burgundy text-white border-burgundy shadow-sm'
                  : 'bg-ivory text-charcoal border-rose-border hover:border-burgundy'
              }`}
            >
              All Categories
            </button>
            {ALL_FAQS.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(cat.category)}
                className={`px-5 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-medium border transition-all ${
                  activeTab === cat.category
                    ? 'bg-burgundy text-white border-burgundy shadow-sm'
                    : 'bg-ivory text-charcoal border-rose-border hover:border-burgundy'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {ALL_FAQS.filter((cat) => activeTab === 'all' || activeTab === cat.category).map((section) => (
              <div key={section.category} className="bg-ivory-100 p-8 border border-ivory-300">
                <h2 className="font-serif text-2xl text-burgundy mb-2">{section.category}</h2>
                <div className="w-12 h-0.5 bg-gold mb-6" />
                <FAQAccordion faqs={section.faqs} />
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white border border-ivory-300 text-center shadow-card">
            <h3 className="font-serif text-2xl text-charcoal mb-3">Still have questions?</h3>
            <p className="font-sans text-sm text-taupe mb-6 max-w-md mx-auto">
              Our clinic and salon concierge is available 7 days a week to assist you with inquiries, appointments, and treatment recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary text-xs">
                Call {BRAND.phone}
              </a>
              <Link to="/contact" className="btn-secondary text-xs">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
