import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import AppointmentForm from '../components/AppointmentForm';
import { BRAND } from '../data/brand';

export default function ContactPage() {
  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Get in Touch</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">Contact Us</h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Reach out to our team for appointments, enquiries, or any assistance you need.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { icon: Phone, title: 'Call Us', value: BRAND.phone, href: `tel:${BRAND.phoneRaw}`, label: 'Call now' },
              { icon: MessageCircle, title: 'WhatsApp', value: BRAND.phone, href: `https://wa.me/${BRAND.whatsapp}`, label: 'Chat on WhatsApp' },
              { icon: Mail, title: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}`, label: 'Send email' },
              { icon: Clock, title: 'Opening Hours', value: `${BRAND.hours.days}\n${BRAND.hours.time}`, href: undefined, label: '' },
            ].map(({ icon: Icon, title, value, href, label }) => (
              <div key={title} className="bg-white p-6 text-center border border-ivory-300">
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-charcoal text-lg mb-2">{title}</h3>
                <div className="font-sans text-taupe text-sm whitespace-pre-line">{value}</div>
                {href && (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-sans text-xs text-burgundy font-medium mt-3 block hover:text-gold transition-colors">
                    {label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-charcoal text-2xl mb-3">Find Us</h2>
              <div className="gold-divider-left mb-5" />
              <div className="flex items-start gap-3 mb-5">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-taupe text-base">{BRAND.address.full}</p>
              </div>
              <div className="aspect-video bg-ivory-200 border border-ivory-300 flex items-center justify-center">
                <a
                  href={BRAND.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <MapPin size={16} /> View on Google Maps
                </a>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-charcoal text-2xl mb-3">Request a Consultation</h2>
              <div className="gold-divider-left mb-5" />
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
