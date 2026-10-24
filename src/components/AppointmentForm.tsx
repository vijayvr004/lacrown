import { useState } from 'react';
import { CheckCircle, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { AESTHETIC_CATEGORIES } from '../data/aestheticServices';
import { SALON_CATEGORIES } from '../data/salonServices';
import { AESTHETIC_SERVICES } from '../data/aestheticServices';
import { SALON_SERVICES } from '../data/salonServices';
import { saveRequest, generateReferenceNumber, type AppointmentRequest } from '../data/mockApi';
import { BRAND } from '../data/brand';

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: 'Aesthetic Clinic' | 'Salon' | '';
  serviceCategory: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  preferredContact: 'Phone' | 'WhatsApp' | 'Email' | '';
  message: string;
  consent: boolean;
}

interface FormErrors { [key: string]: string }

const TIME_SLOTS = [
  '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
];

const today = new Date();
today.setDate(today.getDate() + 1);
const MIN_DATE = today.toISOString().split('T')[0];

export default function AppointmentForm({ preselectedService = '', preselectedType = '' }) {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: preselectedType as FormData['serviceType'] || '',
    serviceCategory: '',
    serviceName: preselectedService || '',
    preferredDate: '',
    preferredTime: '',
    preferredContact: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [refNumber, setRefNumber] = useState('');

  const categories = form.serviceType === 'Aesthetic Clinic'
    ? AESTHETIC_CATEGORIES
    : form.serviceType === 'Salon'
    ? SALON_CATEGORIES
    : [];

  const services = form.serviceCategory
    ? (form.serviceType === 'Aesthetic Clinic'
      ? AESTHETIC_SERVICES.filter((s) => s.categorySlug === form.serviceCategory)
      : SALON_SERVICES.filter((s) => s.categorySlug === form.serviceCategory))
    : [];

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'serviceType') { next.serviceCategory = ''; next.serviceName = ''; }
      if (field === 'serviceCategory') { next.serviceName = ''; }
      return next;
    });
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.phone.trim()) errs.phone = 'Please enter your mobile number.';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.serviceType) errs.serviceType = 'Please select a service type.';
    if (!form.serviceName) errs.serviceName = 'Please select a service.';
    if (!form.preferredDate) errs.preferredDate = 'Please choose a preferred date.';
    if (!form.preferredTime) errs.preferredTime = 'Please choose a preferred time.';
    if (!form.preferredContact) errs.preferredContact = 'Please select a contact method.';
    if (!form.consent) errs.consent = 'Please read and accept the privacy notice.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    const ref = generateReferenceNumber();
    const now = new Date().toISOString();

    const request: AppointmentRequest = {
      id: `req-${Date.now()}`,
      referenceNumber: ref,
      customerName: form.name,
      phone: form.phone,
      email: form.email || undefined,
      serviceType: form.serviceType as AppointmentRequest['serviceType'],
      serviceCategory: form.serviceCategory || form.serviceType,
      serviceName: form.serviceName,
      preferredDate: form.preferredDate,
      preferredTime: form.preferredTime,
      preferredContact: form.preferredContact as AppointmentRequest['preferredContact'],
      message: form.message || undefined,
      consentGiven: true,
      status: 'Pending',
      statusHistory: [{ status: 'Pending', changedAt: now, changedBy: 'System' }],
      submittedAt: now,
      updatedAt: now,
    };

    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));
    try {
      saveRequest(request);
      setRefNumber(ref);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-green-200 p-8 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h2 className="font-serif text-charcoal text-2xl mb-2">Request Received!</h2>
        <p className="font-sans text-taupe text-sm mb-4">
          Your appointment request has been submitted successfully. Our team will contact you to confirm your appointment.
        </p>
        <div className="bg-ivory-100 border border-ivory-300 rounded-sm p-4 mb-6 inline-block">
          <div className="font-sans text-xs text-taupe mb-1">Reference Number</div>
          <div className="font-serif text-burgundy text-xl font-bold tracking-wider">{refNumber}</div>
        </div>
        <div className="font-sans text-xs text-taupe bg-amber-50 border border-amber-200 p-3 mb-6 text-left">
          <strong>Please note:</strong> Submitting this form does not automatically confirm your appointment. Our team will reach out to confirm your booking.
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary text-sm">
            <Phone size={15} /> Call Us
          </a>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi, my appointment request ref is ${refNumber}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Demo notice */}
      <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 p-3 text-xs font-sans text-blue-800">
        <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
        <span><strong>Development mode:</strong> Requests are stored locally for demonstration. Connect a real backend for production use.</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label">Full Name <span className="text-red-500">*</span></label>
          <input id="name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
            className={`form-input ${errors.name ? 'border-red-400' : ''}`} placeholder="Your full name" autoComplete="name" />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="form-label">Mobile Number <span className="text-red-500">*</span></label>
          <input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)}
            className={`form-input ${errors.phone ? 'border-red-400' : ''}`} placeholder="10-digit mobile number" autoComplete="tel" />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">Email Address <span className="text-taupe font-normal">(optional)</span></label>
        <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
          className={`form-input ${errors.email ? 'border-red-400' : ''}`} placeholder="your@email.com" autoComplete="email" />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div>
        <label className="form-label">Service Type <span className="text-burgundy-500">*</span></label>
        <div className="grid grid-cols-2 gap-3">
          {(['Aesthetic Clinic', 'Salon'] as const).map((type) => (
            <button key={type} type="button"
              onClick={() => update('serviceType', type)}
              className={`py-3 px-4 rounded-full border font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                form.serviceType === type
                  ? 'bg-burgundy text-white border-burgundy shadow-sm'
                  : 'bg-white text-charcoal border-rose-border hover:border-burgundy'
              }`}
            >{type}</button>
          ))}
        </div>
        {errors.serviceType && <p className="form-error">{errors.serviceType}</p>}
      </div>

      {form.serviceType && (
        <div>
          <label htmlFor="category" className="form-label">Service Category</label>
          <div className="relative">
            <select id="category" value={form.serviceCategory} onChange={(e) => update('serviceCategory', e.target.value)}
              className="form-select pr-10">
              <option value="">— Select a category —</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="service" className="form-label">Requested Service <span className="text-red-500">*</span></label>
        {services.length > 0 ? (
          <select id="service" value={form.serviceName} onChange={(e) => update('serviceName', e.target.value)}
            className={`form-select ${errors.serviceName ? 'border-red-400' : ''}`}>
            <option value="">— Select a service —</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>
        ) : (
          <input id="service" type="text" value={form.serviceName} onChange={(e) => update('serviceName', e.target.value)}
            className={`form-input ${errors.serviceName ? 'border-red-400' : ''}`}
            placeholder={form.serviceCategory ? 'Type service name' : 'Select category above or type service name'} />
        )}
        {errors.serviceName && <p className="form-error">{errors.serviceName}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="date" className="form-label">Preferred Date <span className="text-red-500">*</span></label>
          <input id="date" type="date" value={form.preferredDate} min={MIN_DATE}
            onChange={(e) => update('preferredDate', e.target.value)}
            className={`form-input ${errors.preferredDate ? 'border-red-400' : ''}`} />
          {errors.preferredDate && <p className="form-error">{errors.preferredDate}</p>}
        </div>
        <div>
          <label htmlFor="time" className="form-label">Preferred Time <span className="text-red-500">*</span></label>
          <select id="time" value={form.preferredTime} onChange={(e) => update('preferredTime', e.target.value)}
            className={`form-select ${errors.preferredTime ? 'border-red-400' : ''}`}>
            <option value="">— Select a time —</option>
            {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.preferredTime && <p className="form-error">{errors.preferredTime}</p>}
        </div>
      </div>

      <div>
        <label className="form-label">Preferred Contact Method <span className="text-burgundy-500">*</span></label>
        <div className="grid grid-cols-3 gap-3">
          {(['Phone', 'WhatsApp', 'Email'] as const).map((method) => (
            <button key={method} type="button"
              onClick={() => update('preferredContact', method)}
              className={`py-2 px-3 rounded-full border font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
                form.preferredContact === method
                  ? 'bg-burgundy text-white border-burgundy shadow-sm'
                  : 'bg-white text-charcoal border-rose-border hover:border-burgundy'
              }`}
            >{method}</button>
          ))}
        </div>
        {errors.preferredContact && <p className="form-error">{errors.preferredContact}</p>}
      </div>

      <div>
        <label htmlFor="message" className="form-label">Message <span className="text-taupe font-normal">(optional)</span></label>
        <textarea id="message" rows={3} value={form.message} onChange={(e) => update('message', e.target.value)}
          className="form-input resize-none" placeholder="Any specific concerns, questions, or requests…" />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)}
            className="mt-1 w-4 h-4 accent-burgundy flex-shrink-0" />
          <span className="font-sans text-sm text-taupe leading-relaxed">
            I have read and accept the{' '}
            <a href="/privacy-policy" className="text-burgundy underline hover:text-gold" target="_blank">
              Privacy Policy
            </a>. I understand that submitting this form does not automatically confirm an appointment.
          </span>
        </label>
        {errors.consent && <p className="form-error">{errors.consent}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 p-3 text-red-700 text-sm font-sans">
          <AlertCircle size={16} />
          <span>Something went wrong. Please try again or contact us directly.</span>
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'}
        className={`btn-primary w-full text-sm py-4 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Appointment Request'}
      </button>

      <p className="font-sans text-xs text-taupe text-center">
        Prefer to call? <a href={`tel:${BRAND.phoneRaw}`} className="text-burgundy font-medium hover:text-gold">{BRAND.phone}</a>
      </p>
    </form>
  );
}
