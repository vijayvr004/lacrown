import { Link } from 'react-router-dom';
import { Tag, Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const PACKAGES = [
  {
    id: 'bridal-glow',
    title: 'The Royal Bridal Glow Ritual',
    subtitle: 'Comprehensive Pre-Wedding Aesthetic & Salon Package',
    description: 'Designed across 4-6 weeks leading up to your wedding day. Includes customized HydraFacial sessions, full-body polishing, de-tan rituals, luxury hair spa, and bridal trial.',
    type: 'Exclusive Package',
    validity: 'Prior consultation required',
    badge: 'Popular',
    image: '/images/services/makeup/bridal-makeup.jpg',
  },
  {
    id: 'skin-rejuvenation',
    title: 'Signature Glass Skin & Hydration Series',
    subtitle: 'Multi-Session Skin Radiance Protocol',
    description: 'A curated 3-session series combining deep vortex pore extraction, Korean Glass Facial infusion, and targeted LED light therapy for luminous, translucent skin.',
    type: 'Aesthetic Clinic',
    validity: 'Consultation-based customization',
    badge: 'Best Value',
    image: '/images/services/facials/korean-glass-facial.jpg',
  },
  {
    id: 'gentlemans-grooming',
    title: "The Executive Gentleman's Experience",
    subtitle: 'Complete Head-to-Toe Grooming & Rejuvenation',
    description: 'Precision haircut by Senior Stylist, beard sculpting & spa, deep cleansing facial, and invigorating hair wash & deep conditioning.',
    type: 'Luxury Salon',
    validity: 'Available Mon - Sun',
    badge: 'Signature',
    image: '/images/services/salon/mens-haircut.jpg',
  },
  {
    id: 'laser-package',
    title: 'Laser Hair Reduction Complete Course',
    subtitle: 'Targeted Multi-Session Clinical Course',
    description: 'Special session-bundle pricing for full-body, underarms, or facial laser hair removal courses. Clinically supervised by qualified practitioners.',
    type: 'Clinical Package',
    validity: 'Medical assessment included',
    badge: 'Clinical Course',
    image: '/images/services/laser/laser-hair-removal.jpg',
  },
];

export default function OffersPage() {
  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Offers & Packages' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Curated Experiences</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            Offers & Packages
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Explore our signature treatment rituals, curated service combinations, and bridal packages tailored for transformative outcomes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="bg-ivory-100 border border-ivory-300 p-6 mb-12 flex items-start gap-4">
            <ShieldCheck className="text-gold flex-shrink-0 mt-1" size={22} />
            <div className="font-sans text-sm text-taupe leading-relaxed">
              <strong className="text-charcoal block mb-1">Authentic Pricing & Clinical Integrity:</strong>
              All package protocols and seasonal privileges are tailored following an initial assessment to ensure suitability. We do not advertise misleading flash discounts; our packages represent structured, genuine value for multi-session care.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-rose-border rounded-2xl overflow-hidden hover:border-gold/60 transition-all duration-300 shadow-card flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-ivory-200">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-burgundy text-white text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {pkg.badge}
                    </div>
                    <div className="absolute top-3 left-3 bg-ivory-100/90 backdrop-blur-sm text-burgundy text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full border border-rose-border shadow-sm flex items-center gap-1.5">
                      <Tag size={11} className="text-gold" /> {pkg.type}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-2xl text-charcoal group-hover:text-burgundy transition-colors mb-2">
                      {pkg.title}
                    </h3>
                    <div className="text-xs font-sans text-taupe uppercase tracking-wider mb-4 pb-3 border-b border-ivory-200">
                      {pkg.subtitle}
                    </div>

                    <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex items-center justify-between border-t border-ivory-200 pt-4">
                  <div className="font-sans text-xs text-taupe flex items-center gap-1">
                    <Calendar size={13} className="text-gold" /> {pkg.validity}
                  </div>
                  <Link
                    to="/appointment"
                    className="btn-primary text-xs flex items-center gap-1.5 py-2.5 px-4"
                  >
                    Enquire Package <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-burgundy text-white p-10 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto">
              <Sparkles className="text-gold mx-auto mb-3" size={28} />
              <h3 className="font-serif text-3xl mb-3">Custom Bridal & Group Packages</h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                Planning an engagement, wedding, or private family pampering day? Speak with our clinic and salon concierge to design a bespoke experience matching your event timeline.
              </p>
              <Link to="/contact" className="btn-gold text-xs">
                Request Bespoke Package Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
