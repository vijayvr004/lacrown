import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ServiceCard from '../components/ServiceCard';
import { AESTHETIC_CATEGORIES, AESTHETIC_SERVICES } from '../data/aestheticServices';
import { getAssetUrl } from '../utils/imageUrl';

export default function AestheticClinicPage() {
  return (
    <div>
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={getAssetUrl('/assets/hero-bg.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Aesthetic Clinic' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Advanced Aesthetic Medicine</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            LA CROWN Aesthetic Clinic
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-6" />
          <p className="font-sans text-white/80 text-lg max-w-2xl">
            Professional aesthetic treatments for skin, hair, laser, anti-ageing, body contouring, and semi-permanent makeup — all delivered under qualified medical supervision with a personalised approach.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-3">Our Aesthetic Clinic</div>
              <h2 className="section-title mb-5">Where Science Meets Beauty</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-4">
                LA CROWN's Aesthetic Clinic is a medically supervised facility offering a comprehensive range of advanced skin and hair treatments, laser procedures, body contouring, and aesthetic medicine.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-6">
                Every treatment begins with a thorough professional consultation to assess your individual needs, skin type, and treatment suitability. Our team — led by qualified dermatologists and aesthetic professionals — delivers personalised care at every stage of your journey.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 text-sm font-sans text-amber-800 mb-6">
                <strong>Important:</strong> Medical aesthetic procedures require a professional consultation to determine suitability. Results, risks, and recovery vary by individual. Please consult our qualified team before undertaking any medical treatment.
              </div>
              <Link to="/appointment" className="btn-primary text-sm">Book a Consultation <ArrowRight size={15} /></Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury border border-rose-border">
              <img src={getAssetUrl('/images/services/facials/hydrafacial-treatment.jpg')} alt="LA CROWN Aesthetic Clinic" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment categories */}
      {AESTHETIC_CATEGORIES.map((cat) => {
        const services = AESTHETIC_SERVICES.filter((s) => s.categorySlug === cat.slug);
        if (services.length === 0) return null;
        return (
          <section key={cat.slug} id={cat.slug} className="section-padding even:bg-ivory-100 odd:bg-white">
            <div className="container-luxury">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <h2 className="font-serif text-charcoal text-3xl">{cat.name}</h2>
                  <div className="gold-divider-left mt-3" />
                </div>
                <Link
                  to={`/aesthetic-clinic/${cat.slug}`}
                  className="btn-secondary text-xs flex-shrink-0"
                >
                  View All <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {services.slice(0, 4).map((s) => (
                  <ServiceCard
                    key={s.id}
                    name={s.name}
                    description={s.description}
                    image={s.image}
                    to={`/aesthetic-clinic/${s.slug}`}
                    priceNote={s.priceNote || 'Contact for pricing'}
                    badge={s.medicalProcedure ? 'Medical Procedure' : undefined}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-luxury text-center">
          <h2 className="section-title-light mb-4">Ready to Begin Your Aesthetic Journey?</h2>
          <p className="font-sans text-white/80 mb-8 max-w-lg mx-auto">
            Book a professional consultation to discuss your goals, assess your suitability, and design a personalised treatment plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/appointment" className="btn-gold text-sm">Book a Consultation</Link>
            <Link to="/contact" className="btn-gold-outline text-sm">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
