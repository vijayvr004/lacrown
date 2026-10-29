import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ServiceCard from '../components/ServiceCard';
import { SALON_CATEGORIES, SALON_SERVICES } from '../data/salonServices';
import { getAssetUrl } from '../utils/imageUrl';

export default function SalonPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl('/images/heroes/salon-hero.jpg')}
            alt="LA CROWN Luxury Salon"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1020}
            height={768}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Salon' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Premium Salon Experience</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            LA CROWN Luxury Salon
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-6" />
          <p className="font-sans text-white/80 text-lg max-w-2xl">
            From precision haircuts and stunning colour to bridal makeup, indulgent facials, nail artistry, and body relaxation — LA CROWN Salon is Bengaluru's most comprehensive luxury beauty destination.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-3">Our Luxury Salon</div>
              <h2 className="section-title mb-5">Every Service, Elevated</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-4">
                LA CROWN's salon brings together a complete range of professional beauty services under one luxurious space in Jayanagar, Bengaluru.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-6">
                Whether you are visiting for a quick threading or waxing appointment, a transformative hair colour, a relaxing massage, or a head-to-toe bridal beauty package, our salon team delivers precision, care, and artistry at every service.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-8">
                We also offer services for children and families, loyalty membership programmes, and dedicated bridal consultations for your most special occasions.
              </p>
              <Link to="/appointment" className="btn-primary text-sm">Book a Salon Appointment <ArrowRight size={15} /></Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury border border-rose-border">
              <img src={getAssetUrl('/images/services/hair/balayage-hair-colour.jpg')} alt="LA CROWN Luxury Salon" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {SALON_CATEGORIES.map((cat, idx) => {
        const services = SALON_SERVICES.filter((s) => s.categorySlug === cat.slug);
        if (services.length === 0) return null;
        return (
          <section key={cat.slug} id={cat.slug} className={`section-padding ${idx % 2 === 0 ? 'bg-ivory-100' : 'bg-white'}`}>
            <div className="container-luxury">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <h2 className="font-serif text-charcoal text-3xl">{cat.name}</h2>
                  <div className="gold-divider-left mt-3" />
                </div>
                <Link to={`/salon/${cat.slug}`} className="btn-secondary text-xs flex-shrink-0">
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
                    to={`/salon/${s.slug}`}
                    priceNote={s.priceNote || 'Contact for pricing'}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-burgundy-900 text-white">
        <div className="container-luxury text-center">
          <h2 className="section-title-light mb-4">Ready for Your Salon Experience?</h2>
          <p className="font-sans text-white/80 mb-8 max-w-lg mx-auto">
            Book your favourite salon service or speak to our team about a personalised beauty experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/appointment" className="btn-gold text-sm">Book Now</Link>
            <Link to="/contact" className="btn-gold-outline text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
