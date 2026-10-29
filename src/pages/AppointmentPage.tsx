import Breadcrumb from '../components/Breadcrumb';
import AppointmentForm from '../components/AppointmentForm';
import { BRAND } from '../data/brand';
import { Phone, MessageCircle } from 'lucide-react';
import { getAssetUrl } from '../utils/imageUrl';

export default function AppointmentPage() {
  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl('/images/heroes/appointment-hero.png')}
            alt="Book an Appointment at LA CROWN"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Book an Appointment' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Your Journey Starts Here</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">Book an Appointment</h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Request an appointment at LA CROWN and our team will contact you to confirm your booking.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-charcoal text-2xl mb-3">Appointment Request Form</h2>
              <div className="gold-divider-left mb-6" />
              <AppointmentForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-ivory-300 p-6">
                <h3 className="font-serif text-charcoal text-lg mb-4">Prefer to Contact Us Directly?</h3>
                <div className="space-y-3">
                  <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary w-full text-sm flex items-center justify-center gap-2">
                    <Phone size={16} /> Call {BRAND.phone}
                  </a>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=Hi, I'd like to book an appointment at LA CROWN.`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-secondary w-full text-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="bg-burgundy text-white p-6">
                <h3 className="font-serif text-xl mb-4">Opening Hours</h3>
                <div className="font-sans text-white/80 text-sm mb-1">{BRAND.hours.days}</div>
                <div className="font-sans text-gold font-semibold text-lg">{BRAND.hours.time}</div>
                <div className="font-sans text-white/60 text-xs mt-2">{BRAND.hours.note}</div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-5 text-sm font-sans text-amber-800">
                <strong>Important:</strong> Submitting this form does not automatically confirm your appointment. Our team will contact you to confirm. For urgent enquiries, please call us directly.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
