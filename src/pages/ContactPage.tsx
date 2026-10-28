import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import AppointmentForm from '../components/AppointmentForm';
import { ApiService } from '../services/api';
import { BRAND } from '../data/brand';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'consultation' | 'message'>('consultation');
  
  // Direct Contact Message Form State
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cSubject, setCSubject] = useState('');
  const [cMessage, setCMessage] = useState('');
  const [cSubmitting, setCSubmitting] = useState(false);
  const [cSubmitted, setCSubmitted] = useState(false);
  const [cRef, setCRef] = useState('');
  const [cError, setCError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName.trim() || !cEmail.trim() || !cPhone.trim() || !cMessage.trim()) return;

    setCSubmitting(true);
    setCError(null);

    try {
      const res = await ApiService.submitContactMessage({
        name: cName.trim(),
        email: cEmail.trim(),
        phone: cPhone.trim(),
        subject: cSubject.trim() || 'General Clinical Enquiry',
        message: cMessage.trim(),
      });

      if (res.success) {
        setCRef(res.reference || `LC-MSG-${Date.now().toString().slice(-6)}`);
        setCSubmitted(true);
      } else {
        setCError(res.message || 'Unable to deliver your message. Please try again.');
      }
    } catch {
      setCError('A network error occurred while connecting to concierge.');
    } finally {
      setCSubmitting(false);
    }
  };
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
              <div className="flex items-center gap-2 mb-4 border-b border-ivory-300 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('consultation')}
                  className={`font-serif text-lg pb-1.5 transition-colors border-b-2 ${
                    activeTab === 'consultation'
                      ? 'text-burgundy border-burgundy font-semibold'
                      : 'text-taupe border-transparent hover:text-charcoal'
                  }`}
                >
                  Request Consultation
                </button>
                <span className="text-ivory-400">|</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('message')}
                  className={`font-serif text-lg pb-1.5 transition-colors border-b-2 ${
                    activeTab === 'message'
                      ? 'text-burgundy border-burgundy font-semibold'
                      : 'text-taupe border-transparent hover:text-charcoal'
                  }`}
                >
                  Send a Message
                </button>
              </div>

              {activeTab === 'consultation' ? (
                <AppointmentForm />
              ) : (
                <div className="bg-white border border-rose-border p-6 shadow-sm">
                  {cSubmitted ? (
                    <div className="bg-green-50 border border-green-200 p-8 text-center text-green-900 font-sans">
                      <CheckCircle size={38} className="mx-auto mb-3 text-green-600" />
                      <h4 className="font-serif text-2xl font-semibold mb-2">Message Delivered!</h4>
                      <p className="text-sm text-taupe mb-4">
                        Thank you, <strong className="text-charcoal">{cName}</strong>. Your clinical enquiry has been routed directly to our concierge team.
                      </p>
                      {cRef && (
                        <div className="bg-white border border-green-200 rounded-sm px-4 py-2 inline-block mb-4">
                          <span className="text-xs text-taupe block">Enquiry Ticket</span>
                          <span className="font-serif text-burgundy font-bold text-lg">{cRef}</span>
                        </div>
                      )}
                      <p className="text-xs text-taupe">
                        We will reply to <strong>{cEmail}</strong> or call you at <strong>{cPhone}</strong> promptly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      {cError && (
                        <div className="flex items-center gap-2 bg-red-50 border border-red-200 p-3 text-red-700 text-xs font-sans">
                          <AlertCircle size={15} />
                          <span>{cError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label text-xs">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={cName}
                            onChange={(e) => setCName(e.target.value)}
                            placeholder="Full name"
                            className="form-input text-sm"
                          />
                        </div>
                        <div>
                          <label className="form-label text-xs">Mobile Number *</label>
                          <input
                            type="tel"
                            required
                            value={cPhone}
                            onChange={(e) => setCPhone(e.target.value)}
                            placeholder="10-digit mobile"
                            className="form-input text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label text-xs">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={cEmail}
                            onChange={(e) => setCEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="form-input text-sm"
                          />
                        </div>
                        <div>
                          <label className="form-label text-xs">Subject / Department</label>
                          <input
                            type="text"
                            value={cSubject}
                            onChange={(e) => setCSubject(e.target.value)}
                            placeholder="e.g. Skin, Hair, or General Inquiry"
                            className="form-input text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label text-xs">Your Message *</label>
                        <textarea
                          rows={4}
                          required
                          value={cMessage}
                          onChange={(e) => setCMessage(e.target.value)}
                          placeholder="How may our clinical team assist you today?"
                          className="form-input text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={cSubmitting}
                        className={`btn-primary w-full text-xs py-3.5 flex items-center justify-center gap-2 ${
                          cSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {cSubmitting ? (
                          <>
                            <Loader2 size={15} className="animate-spin" />
                            <span>Delivering Message to Concierge…</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            <span>Dispatch Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
