import { useState } from 'react';
import { GraduationCap, Users, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { getAssetUrl } from '../utils/imageUrl';

const COURSES = [
  {
    title: 'Diploma in Cosmetology & Clinical Skincare',
    duration: 'Comprehensive Modular Course',
    level: 'Beginner to Advanced',
    image: '/images/lacrown/other/academy/academy-cosmetology-skincare.webp',
    overview: 'In-depth foundation covering skin biology, modern aesthetic facial treatments, chemical peel fundamentals, and salon hygiene standards.',
    modules: ['Skin Anatomy & Physiology', 'Advanced Facial Techniques & Vortex Extraction', 'Chemical Peeling Protocols', 'Sterilization & Client Consultation'],
  },
  {
    title: 'Masterclass in Semi-Permanent Makeup (SPMU)',
    duration: 'Specialized Certificate Training',
    level: 'Intermediate Practitioners',
    image: '/images/lacrown/other/academy/academy-spmu-masterclass.webp',
    overview: 'Precision artistry training in microblading techniques, lip tinting, shading, color theory, and aftercare management.',
    modules: ['Eyebrow Mapping & Architecture', 'Microblading Stroke Techniques', 'Lip Neutralization & Tinting', 'Safety, Needles & Pigment Science'],
  },
  {
    title: 'Advanced Hair Styling & Texture Transformation',
    duration: 'Professional Salon Series',
    level: 'Salon Stylists',
    image: '/images/lacrown/other/academy/academy-hair-styling-texture.webp',
    overview: 'Creative cutting mastery, international balayage application, keratin smoothing protocols, and executive men’s grooming techniques.',
    modules: ['Geometric & Creative Haircuts', 'Balayage & Ombré Freehand Techniques', 'Keratin & Rebonding Science', 'Client Consultations & Styling Portfolio'],
  },
];

export default function AcademyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(COURSES[0].title);
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
          <img src={getAssetUrl('/assets/hero-bg.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Academy' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Professional Education</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">
            LA CROWN Academy
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Empowering the next generation of aesthetic practitioners, cosmetologists, and salon professionals with verified training curricula.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="section-eyebrow mb-2">Excellence in Training</div>
              <h2 className="section-title mb-4">Shaping Aesthetic & Beauty Leaders</h2>
              <div className="gold-divider-left mb-6" />
              <p className="font-sans text-taupe leading-relaxed mb-4">
                LA CROWN Academy was founded by Sunitha Devaraj with a vision to deliver world-class vocational and clinical training in cosmetology, skin therapies, hair artistry, and semi-permanent makeup.
              </p>
              <p className="font-sans text-taupe leading-relaxed mb-6">
                Our programs bridge theoretical dermatological understanding with hands-on clinical methodology, equipping students with real-world technical confidence and client management skills.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-ivory-300 p-4 bg-ivory-100">
                  <GraduationCap className="text-gold mb-2" size={24} />
                  <h4 className="font-serif text-charcoal font-semibold text-sm">Certified Curriculum</h4>
                  <p className="font-sans text-xs text-taupe mt-1">Structured modules adhering to verified industry standards.</p>
                </div>
                <div className="border border-ivory-300 p-4 bg-ivory-100">
                  <Users className="text-gold mb-2" size={24} />
                  <h4 className="font-serif text-charcoal font-semibold text-sm">Hands-On Practice</h4>
                  <p className="font-sans text-xs text-taupe mt-1">Practical training under senior aesthetic instructors.</p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] bg-ivory-200 overflow-hidden shadow-card">
              <img
                src={getAssetUrl('/images/lacrown/other/academy/academy-shaping-leaders.jpg')}
                alt="LA CROWN Academy - Shaping Aesthetic & Beauty Leaders"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Courses */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="section-eyebrow mb-2">Programs</div>
              <h2 className="section-title">Training Courses</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COURSES.map((c) => (
                <div key={c.title} className="border border-ivory-300 bg-white shadow-card hover:shadow-luxury transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ivory-100 via-ivory-200 to-cream flex items-center justify-center">
                      {/* Ambient backdrop */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src={getAssetUrl(c.image)}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover blur-xl opacity-25 scale-125"
                        />
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
                      </div>

                      <img
                        src={getAssetUrl(c.image)}
                        alt={c.title}
                        className="relative z-10 w-full h-full object-contain p-2 sm:p-2.5 transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 z-20 bg-burgundy text-white text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {c.level}
                      </div>
                    </div>
                    <div className="p-6 pb-2">
                      <div className="flex items-center justify-between text-xs font-sans text-taupe mb-2">
                        <span className="text-gold font-semibold uppercase tracking-wider">{c.duration}</span>
                      </div>
                      <h3 className="font-serif text-xl text-burgundy font-semibold mb-3 leading-snug">{c.title}</h3>
                      <p className="font-sans text-sm text-taupe leading-relaxed mb-5">{c.overview}</p>

                      <h4 className="font-serif text-xs text-charcoal uppercase tracking-wider font-semibold mb-3">Core Modules:</h4>
                      <ul className="space-y-2 mb-6">
                        {c.modules.map((m) => (
                          <li key={m} className="font-sans text-xs text-taupe flex items-start gap-2">
                            <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href="#enrolment-form"
                      onClick={() => setCourse(c.title)}
                      className="btn-secondary text-xs w-full text-center block mt-auto"
                    >
                      Enquire for this Course
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enrolment Form */}
          <div id="enrolment-form" className="bg-ivory-100 p-8 md:p-12 border border-ivory-300 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl text-charcoal mb-2">Academy Enrolment Enquiry</h3>
              <p className="font-sans text-sm text-taupe">
                Submit your details to receive syllabus schedules, batch dates, and fee structures from our admissions coordinator.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-6 text-center text-green-800 font-sans">
                <CheckCircle size={32} className="mx-auto mb-2 text-green-600" />
                <h4 className="font-serif text-xl font-semibold mb-1">Thank You for Your Enquiry!</h4>
                <p className="text-sm">Our Academy admissions team will connect with you at {phone} with full course details.</p>
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
                    <label className="form-label">Preferred Course</label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="form-select"
                    >
                      {COURSES.map((c) => (
                        <option key={c.title} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Message / Background (Optional)</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your prior experience or career goals..."
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-xs py-3.5">
                  Submit Academy Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
