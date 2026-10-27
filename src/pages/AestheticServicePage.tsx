import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, AlertCircle, Clock, Hash, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import FAQAccordion from '../components/FAQAccordion';
import ServiceCard from '../components/ServiceCard';
import AppointmentForm from '../components/AppointmentForm';
import { getServiceBySlug, AESTHETIC_SERVICES } from '../data/aestheticServices';
import { getAssetUrl } from '../utils/imageUrl';

export default function AestheticServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/aesthetic-clinic" replace />;

  const related = service.relatedServices
    ?.map((s) => AESTHETIC_SERVICES.find((srv) => srv.slug === s))
    .filter(Boolean) as typeof AESTHETIC_SERVICES;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl(service.image || '/assets/hero-bg.jpg')}
            alt={service.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/90 via-burgundy/80 to-burgundy-900/70" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb
            crumbs={[
              { label: 'Home', to: '/' },
              { label: 'Aesthetic Clinic', to: '/aesthetic-clinic' },
              { label: service.category, to: `/aesthetic-clinic/${service.categorySlug}` },
              { label: service.name },
            ]}
            light
          />
          <div className="section-eyebrow mt-4 mb-3">{service.category}</div>
          <h1 className="font-serif text-white text-4xl md:text-5xl leading-tight mb-5 max-w-2xl">{service.name}</h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/85 text-lg max-w-xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Medical notice */}
      {service.medicalProcedure && (
        <div className="bg-amber-50 border-b border-amber-200 py-3">
          <div className="container-luxury flex items-start gap-3">
            <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="font-sans text-amber-800 text-sm">
              <strong>Medical Procedure:</strong> This treatment requires a professional consultation to assess your individual suitability, medical history, and goals. Results, risks, and recovery vary by individual. Always consult a qualified medical professional.
            </p>
          </div>
        </div>
      )}

      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* High-Resolution Showcase Image */}
            {service.image && (
              <div className="relative w-full rounded-2xl overflow-hidden shadow-luxury border border-rose-border bg-ivory-100 group">
                <img
                  src={getAssetUrl(service.image)}
                  alt={service.name}
                  className="w-full h-auto max-h-[500px] object-cover object-center transition-all duration-300"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-burgundy/85 backdrop-blur-md text-gold text-xs px-3.5 py-1.5 rounded-full border border-gold/40 font-serif tracking-wide shadow-md">
                  LA CROWN Signature Treatment
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <h2 className="font-serif text-charcoal text-2xl mb-4">Overview</h2>
              <div className="gold-divider-left mb-5" />
              <p className="font-sans text-taupe text-base leading-relaxed">{service.overview}</p>
            </div>

            {/* Quick info bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-ivory-100 p-5 border border-ivory-300">
              {service.duration && (
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-sans text-xs text-taupe uppercase tracking-wide mb-0.5">Duration</div>
                    <div className="font-sans text-sm text-charcoal font-medium">{service.duration}</div>
                  </div>
                </div>
              )}
              {service.sessions && (
                <div className="flex items-start gap-3">
                  <Hash size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-sans text-xs text-taupe uppercase tracking-wide mb-0.5">Sessions</div>
                    <div className="font-sans text-sm text-charcoal font-medium">{service.sessions}</div>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-sans text-xs text-taupe uppercase tracking-wide mb-0.5">Pricing</div>
                  <div className="font-sans text-sm text-charcoal font-medium">
                    {service.price || service.priceNote || 'Contact for pricing'}
                  </div>
                </div>
              </div>
            </div>

            {/* Purpose */}
            {service.purpose?.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">What It Addresses</h2>
                <div className="gold-divider-left mb-5" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.purpose.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-sans text-sm text-taupe">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {service.benefits?.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Potential Benefits</h2>
                <div className="gold-divider-left mb-3" />
                <p className="font-sans text-taupe text-xs italic mb-4">Individual results vary. Consult our team for expectations based on your specific circumstances.</p>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 font-sans text-sm text-taupe">
                      <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suitable for */}
            {service.suitableFor?.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Who May Consider This Treatment</h2>
                <div className="gold-divider-left mb-3" />
                <p className="font-sans text-taupe text-xs italic mb-4">Suitability is always confirmed during a professional consultation. This is not a substitute for medical assessment.</p>
                <ul className="space-y-2">
                  {service.suitableFor.map((s) => (
                    <li key={s} className="flex items-start gap-3 font-sans text-sm text-taupe">
                      <div className="w-1.5 h-1.5 rounded-full bg-burgundy mt-2 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Variants */}
            {service.variants && service.variants.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Service Options</h2>
                <div className="gold-divider-left mb-5" />
                <div className="divide-y divide-ivory-300 border border-ivory-300">
                  {service.variants.map((v, i) => (
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

            {/* Pre-care */}
            {service.precare && service.precare.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Pre-Treatment Preparation</h2>
                <div className="gold-divider-left mb-5" />
                <ul className="space-y-2">
                  {service.precare.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-sans text-sm text-taupe">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Aftercare */}
            {service.aftercare && service.aftercare.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Aftercare Guidance</h2>
                <div className="gold-divider-left mb-5" />
                <ul className="space-y-2">
                  {service.aftercare.map((a) => (
                    <li key={a} className="flex items-start gap-3 font-sans text-sm text-taupe">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Downtime */}
            {service.downtime && (
              <div className="bg-ivory-100 border border-ivory-300 p-5">
                <h3 className="font-serif text-charcoal text-lg mb-2">Downtime & Recovery</h3>
                <p className="font-sans text-taupe text-sm leading-relaxed">{service.downtime}</p>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div>
                <h2 className="font-serif text-charcoal text-2xl mb-4">Frequently Asked Questions</h2>
                <div className="gold-divider-left mb-5" />
                <FAQAccordion faqs={service.faqs} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking card */}
            <div className="bg-burgundy text-white p-6">
              <h3 className="font-serif text-xl text-white mb-4">Book a Consultation</h3>
              <div className="w-8 h-px bg-gold/50 mb-4" />
              <p className="font-sans text-white/80 text-sm mb-5 leading-relaxed">
                Ready to explore {service.name}? Book a professional consultation and our team will design a personalised plan for you.
              </p>
              <Link to="/appointment" className="btn-gold text-xs w-full text-center block">
                Request Appointment <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </div>

            {/* Price card */}
            <div className="border border-ivory-300 p-6 bg-white">
              <h3 className="font-serif text-charcoal text-lg mb-3">Pricing</h3>
              <div className="w-8 h-px bg-gold/40 mb-4" />
              {service.price ? (
                <div className="font-sans text-burgundy text-2xl font-bold mb-2">{service.price}</div>
              ) : (
                <div className="font-sans text-taupe text-sm italic">
                  {service.priceNote || 'Price on consultation'}
                </div>
              )}
              <p className="font-sans text-xs text-taupe mt-2 leading-relaxed">
                Contact our team for detailed pricing based on your specific requirements.
              </p>
            </div>

            {/* Consult notice */}
            {service.consultationRequired && (
              <div className="bg-amber-50 border border-amber-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={16} className="text-amber-600" />
                  <span className="font-sans text-sm font-semibold text-amber-800">Consultation Required</span>
                </div>
                <p className="font-sans text-xs text-amber-700 leading-relaxed">
                  This treatment requires a professional consultation before proceeding. Individual suitability and medical history will be assessed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related treatments */}
      {related && related.length > 0 && (
        <section className="section-padding bg-ivory-100">
          <div className="container-luxury">
            <h2 className="font-serif text-charcoal text-2xl mb-3">Related Treatments</h2>
            <div className="gold-divider-left mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.slice(0, 3).map((s) => (
                <ServiceCard
                  key={s.id}
                  name={s.name}
                  description={s.description}
                  image={s.image}
                  to={`/aesthetic-clinic/${s.slug}`}
                  priceNote={s.priceNote || 'Contact for pricing'}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Appointment section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-eyebrow mb-3">Get Started</div>
              <h2 className="section-title mb-5">Request a {service.name} Appointment</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-4">
                Fill in the form and our team will contact you to confirm your appointment and answer any questions.
              </p>
              <p className="font-sans text-taupe text-sm leading-relaxed">
                Submitting this form does not automatically confirm an appointment. Our team will reach out to confirm your booking.
              </p>
            </div>
            <div>
              <AppointmentForm preselectedService={service.name} preselectedType="Aesthetic Clinic" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
