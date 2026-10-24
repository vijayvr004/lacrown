import Breadcrumb from '../components/Breadcrumb';
import { BRAND } from '../data/brand';

export default function CancellationPolicyPage() {
  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Cancellation & Rescheduling Policy' }]} light />
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-4">
            Cancellation & Rescheduling Policy
          </h1>
          <p className="font-sans text-white/80 text-sm mt-2">Last Updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl font-sans text-taupe leading-relaxed space-y-6">
          <p>
            At <strong>{BRAND.fullName}</strong>, our specialists and treatment rooms are reserved exclusively for you. Timely notification of schedule changes enables us to serve clients on our waitlist.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">1. Standard Notice Period</h3>
          <p>
            We respectfully request a minimum of <strong>24 hours' advance notice</strong> for canceling or rescheduling any salon service or aesthetic clinic consultation.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">2. Multi-Hour & Clinical Procedures</h3>
          <p>
            For specialized surgical or lengthy clinical sessions (such as Hair Transplant procedures, extensive Laser courses, or Bridal Party packages), a minimum of <strong>48 hours' prior notice</strong> is required for rescheduling.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">3. Late Arrivals</h3>
          <p>
            Arriving more than 15 minutes past your scheduled appointment time may necessitate shortening your treatment duration or rescheduling your session so as not to disadvantage subsequent appointments.
          </p>

          <h3 className="font-serif text-xl text-charcoal font-semibold">4. How to Reschedule</h3>
          <p>
            You can notify our desk by calling us directly at{' '}
            <a href={`tel:${BRAND.phoneRaw}`} className="text-burgundy underline font-medium">{BRAND.phone}</a>{' '}
            or sending an immediate WhatsApp message during operating hours (Mon - Sun, 10:30 AM to 9:00 PM).
          </p>
        </div>
      </section>
    </div>
  );
}
