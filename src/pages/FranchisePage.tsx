import { useState } from 'react';
import { Building2, TrendingUp, ShieldCheck, CheckCircle, Award } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [investmentBudget, setInvestmentBudget] = useState('Above 50 Lakhs');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Franchise Opportunities' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Partner With Us</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            LA CROWN Franchise
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Bring Bengaluru's distinguished luxury aesthetic clinic and salon model to your prime urban location.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="section-eyebrow mb-2">The Business Model</div>
              <h2 className="section-title mb-4">A High-Demand Dual Concept</h2>
              <div className="gold-divider-left mb-6" />
              <p className="font-sans text-taupe leading-relaxed mb-4">
                LA CROWN combines high-margin clinical aesthetic procedures with steady, high-frequency luxury salon visits. This synergistic synergy maximizes client lifetime value and optimizes space utilization.
              </p>
              <p className="font-sans text-taupe leading-relaxed mb-6">
                As a franchise partner, you benefit from our verified brand architecture, operational SOPs, clinician recruitment frameworks, equipment sourcing relationships, and centralized digital marketing support.
              </p>

              <div className="space-y-3 font-sans text-sm text-taupe">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  <span>Turnkey clinic and salon architectural guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  <span>Clinical protocol compliance & therapist onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  <span>Verified vendor contracts for machinery and consumables</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  <span>Comprehensive software, billing, and request CRM tools</span>
                </div>
              </div>
            </div>

            <div className="bg-ivory-100 p-8 border border-ivory-300">
              <h3 className="font-serif text-2xl text-burgundy mb-4">Franchise Partnership Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div className="bg-white p-4 border border-ivory-300">
                  <Building2 size={24} className="text-gold mb-2" />
                  <div className="text-xs text-taupe uppercase font-semibold">Space Required</div>
                  <div className="text-sm font-medium text-charcoal mt-1">1,800 - 3,500 sq. ft. prime commercial</div>
                </div>
                <div className="bg-white p-4 border border-ivory-300">
                  <TrendingUp size={24} className="text-gold mb-2" />
                  <div className="text-xs text-taupe uppercase font-semibold">Dual Revenue</div>
                  <div className="text-sm font-medium text-charcoal mt-1">Clinical aesthetic + Salon streams</div>
                </div>
                <div className="bg-white p-4 border border-ivory-300">
                  <ShieldCheck size={24} className="text-gold mb-2" />
                  <div className="text-xs text-taupe uppercase font-semibold">Training Support</div>
                  <div className="text-sm font-medium text-charcoal mt-1">LA CROWN Academy staff training</div>
                </div>
                <div className="bg-white p-4 border border-ivory-300">
                  <Award size={24} className="text-gold mb-2" />
                  <div className="text-xs text-taupe uppercase font-semibold">Brand Equity</div>
                  <div className="text-sm font-medium text-charcoal mt-1">Established luxury positioning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Franchise Form */}
          <div className="bg-white border border-ivory-300 p-8 md:p-12 shadow-card max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl text-charcoal mb-2">Request Franchise Prospectus</h3>
              <p className="font-sans text-sm text-taupe">
                Submit your credentials to connect with our franchise expansion directors. All submissions are held in strict business confidence.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-6 text-center text-green-800 font-sans">
                <CheckCircle size={32} className="mx-auto mb-2 text-green-600" />
                <h4 className="font-serif text-xl font-semibold mb-1">Proposal Received!</h4>
                <p className="text-sm">Thank you, {name}. Our business development office will contact you at {phone} within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Proposed City / Territory *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. South Bengaluru, Hyderabad, Chennai"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Estimated Investment Capacity</label>
                  <select
                    value={investmentBudget}
                    onChange={(e) => setInvestmentBudget(e.target.value)}
                    className="form-select"
                  >
                    <option value="35 - 50 Lakhs">₹35 Lakhs - ₹50 Lakhs</option>
                    <option value="50 - 75 Lakhs">₹50 Lakhs - ₹75 Lakhs</option>
                    <option value="75 Lakhs - 1 Crore">₹75 Lakhs - ₹1 Crore</option>
                    <option value="Above 1 Crore">Above ₹1 Crore</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Business Background & Property Details (Optional)</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about existing commercial properties or relevant retail experience..."
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-xs py-3.5">
                  Submit Franchise Expression of Interest
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
