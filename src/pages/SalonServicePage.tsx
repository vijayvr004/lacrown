import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ServiceCard from '../components/ServiceCard';
import AppointmentForm from '../components/AppointmentForm';
import { getSalonServiceBySlug, SALON_SERVICES, SALON_CATEGORIES } from '../data/salonServices';
import { getAssetUrl } from '../utils/imageUrl';

export default function SalonServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getSalonServiceBySlug(slug) : undefined;
  const category = slug ? SALON_CATEGORIES.find((c) => c.slug === slug) : undefined;

  // 1. If neither service nor category matches, return to /salon
  if (!service && !category) return <Navigate to="/salon" replace />;

  // 2. CATEGORY VIEW: When user clicks "View All" for a category or visits /salon/:categorySlug
  if (category) {
    const categoryServices = SALON_SERVICES.filter((s) => s.categorySlug === category.slug);

    return (
      <div>
        {/* Category Hero Banner */}
        <section className="relative py-20 bg-burgundy text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={getAssetUrl('/assets/hero-bg.jpg')}
              alt=""
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/90 via-burgundy/80 to-burgundy-900/70" />
          </div>
          <div className="container-luxury relative z-10">
            <Breadcrumb
              crumbs={[
                { label: 'Home', to: '/' },
                { label: 'Salon', to: '/salon' },
                { label: category.name },
              ]}
              light
            />
            <div className="section-eyebrow mt-4 mb-3">LA CROWN Salon Collection</div>
            <h1 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-5 max-w-2xl">
              {category.name}
            </h1>
            <div className="w-16 h-0.5 bg-gold mb-5" />
            <p className="font-sans text-white/85 text-lg max-w-xl leading-relaxed mb-6">
              Explore our complete range of {category.name} services, curated for exceptional beauty results and luxury care.
            </p>
            <Link
              to="/salon"
              className="inline-flex items-center gap-2 btn-gold-outline text-xs px-4 py-2"
            >
              <ArrowLeft size={14} /> View All Salon Services
            </Link>
          </div>
        </section>

        {/* Category Service Cards Grid */}
        <section className="section-padding bg-ivory-100">
          <div className="container-luxury">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-charcoal text-2xl sm:text-3xl">
                  Available Services ({categoryServices.length})
                </h2>
                <div className="gold-divider-left mt-2" />
              </div>
              <Link to="/salon" className="btn-secondary text-xs flex-shrink-0">
                <ArrowLeft size={14} /> Back to All Categories
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {categoryServices.map((s) => (
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

        {/* Category Appointment Section */}
        <section className="section-padding bg-white">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="section-eyebrow mb-3">Book An Appointment</div>
                <h2 className="section-title mb-5">Experience {category.name}</h2>
                <div className="gold-divider-left mb-6" />
                <p className="section-subtitle mb-4">
                  Reserve your appointment at LA CROWN Salon. Our team will contact you to confirm timing and consultation details.
                </p>
              </div>
              <div>
                <AppointmentForm preselectedType="Salon" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 3. INDIVIDUAL SERVICE VIEW: When a specific service is selected
  // Displays only this service's title page, image, and details (does not show all salon services)
  const related = SALON_SERVICES.filter(
    (s) => s.categorySlug === service!.categorySlug && s.id !== service!.id
  ).slice(0, 3);

  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl(service!.image || '/assets/hero-bg.jpg')}
            alt={service!.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/90 via-burgundy/80 to-burgundy-900/70" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb
            crumbs={[
              { label: 'Home', to: '/' },
              { label: 'Salon', to: '/salon' },
              { label: service!.category, to: `/salon/${service!.categorySlug}` },
              { label: service!.name },
            ]}
            light
          />
          <div className="section-eyebrow mt-4 mb-3">{service!.category}</div>
          <h1 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-5 max-w-2xl">{service!.name}</h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/85 text-lg max-w-xl leading-relaxed">{service!.description}</p>
        </div>
      </section>

      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {/* High-Resolution Showcase Image */}
            {service!.image && (
              <div className="relative w-full rounded-2xl overflow-hidden shadow-luxury border border-rose-border bg-ivory-100 group">
                <img
                  src={getAssetUrl(service!.image)}
                  alt={service!.name}
                  className="w-full h-auto max-h-[500px] object-cover object-center transition-all duration-300"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-burgundy/85 backdrop-blur-md text-gold text-xs px-3.5 py-1.5 rounded-full border border-gold/40 font-serif tracking-wide shadow-md">
                  LA CROWN Salon Excellence
                </div>
              </div>
            )}

            <div>
              <h2 className="font-serif text-charcoal text-2xl mb-4">About This Service</h2>
              <div className="gold-divider-left mb-5" />
              <p className="font-sans text-taupe text-base leading-relaxed">{service!.description}</p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-ivory-100 p-5 border border-ivory-300">
              {service!.duration && (
                <div>
                  <div className="font-sans text-xs text-taupe uppercase tracking-wide mb-1">Duration</div>
                  <div className="font-sans text-sm text-charcoal font-medium">{service!.duration}</div>
                </div>
              )}
              {service!.ageGroup && (
                <div>
                  <div className="font-sans text-xs text-taupe uppercase tracking-wide mb-1">Suitable For</div>
                  <div className="font-sans text-sm text-charcoal font-medium">{service!.ageGroup}</div>
                </div>
              )}
              <div>
                <div className="font-sans text-xs text-taupe uppercase tracking-wide mb-1">Pricing</div>
                <div className="font-sans text-sm text-charcoal font-medium">
                  {service!.price || service!.priceNote || 'Contact us for pricing'}
                </div>
              </div>
            </div>

            {/* Variants */}
            {service!.variants && service!.variants.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Service Options</h2>
                <div className="gold-divider-left mb-5" />
                <div className="divide-y divide-ivory-300 border border-ivory-300">
                  {service!.variants.map((v, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3">
                      <span className="font-sans text-sm text-charcoal">{v.name}</span>
                      <span className="font-sans text-sm text-taupe italic">
                        {v.price || v.note || 'Contact for pricing'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-ivory-100 border border-ivory-300 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={16} className="text-gold" />
                <h3 className="font-serif text-charcoal text-lg">Professional Service Guarantee</h3>
              </div>
              <p className="font-sans text-taupe text-sm leading-relaxed">
                All LA CROWN salon services are delivered by trained beauty professionals using quality products in a hygienic, welcoming environment.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-burgundy text-white p-6">
              <h3 className="font-serif text-xl text-white mb-4">Book This Service</h3>
              <div className="w-8 h-px bg-gold/50 mb-4" />
              <p className="font-sans text-white/80 text-sm mb-5 leading-relaxed">
                Book {service!.name} at LA CROWN Salon today.
              </p>
              <Link to="/appointment" className="btn-gold text-xs w-full text-center block">
                Request Appointment <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </div>

            <div className="border border-ivory-300 p-6 bg-white">
              <h3 className="font-serif text-charcoal text-lg mb-3">Pricing</h3>
              <div className="w-8 h-px bg-gold/40 mb-4" />
              <div className="font-sans text-taupe text-sm italic">
                {service!.price || service!.priceNote || 'Contact us for pricing'}
              </div>
            </div>

            {/* Quick Links to View Cards */}
            <div className="border border-ivory-300 p-6 bg-ivory-100/60 space-y-3">
              <h4 className="font-serif text-charcoal text-sm font-semibold">Explore More Services</h4>
              <Link
                to={`/salon/${service!.categorySlug}`}
                className="btn-secondary text-xs w-full text-center block"
              >
                View All {service!.category} Services
              </Link>
              <Link
                to="/salon"
                className="btn-primary text-xs w-full text-center block"
              >
                View All Salon Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding bg-ivory-100">
          <div className="container-luxury">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-charcoal text-2xl">More in {service!.category}</h2>
                <div className="gold-divider-left mt-2" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  to={`/salon/${service!.categorySlug}`}
                  className="btn-secondary text-xs flex-shrink-0"
                >
                  View All {service!.category} Services <ArrowRight size={14} />
                </Link>
                <Link
                  to="/salon"
                  className="btn-gold-outline text-xs flex-shrink-0"
                >
                  View All Salon Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s) => (
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
      )}

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-eyebrow mb-3">Get Started</div>
              <h2 className="section-title mb-5">Book Your {service!.name}</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle">Complete the form and our team will contact you to confirm your appointment.</p>
            </div>
            <div>
              <AppointmentForm preselectedService={service!.name} preselectedType="Salon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
