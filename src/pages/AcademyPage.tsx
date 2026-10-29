import { useState } from 'react';
import { GraduationCap, Users, CheckCircle, X, Maximize2, Loader2, AlertCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { getAssetUrl } from '../utils/imageUrl';
import { ApiService } from '../services/api';

interface CourseItem {
  title: string;
  duration: string;
  level: string;
  image: string;
  overview: string;
  modules: string[];
  objectPosition: string;
}

const COURSES: CourseItem[] = [
  {
    title: 'Diploma in Cosmetology & Clinical Skincare',
    duration: 'Comprehensive Modular Course',
    level: 'Beginner to Advanced',
    image: '/images/lacrown/other/academy/academy-cosmetology-skincare.png',
    overview: 'In-depth foundation covering skin biology, modern aesthetic facial treatments, chemical peel fundamentals, and salon hygiene standards.',
    modules: ['Skin Anatomy & Physiology', 'Advanced Facial Techniques & Vortex Extraction', 'Chemical Peeling Protocols', 'Sterilization & Client Consultation'],
    objectPosition: 'object-[center_16%]',
  },
  {
    title: 'Masterclass in Semi-Permanent Makeup (SPMU)',
    duration: 'Specialized Certificate Training',
    level: 'Intermediate Practitioners',
    image: '/images/lacrown/other/academy/academy-spmu-masterclass.png',
    overview: 'Precision artistry training in microblading techniques, lip tinting, shading, color theory, and aftercare management.',
    modules: ['Eyebrow Mapping & Architecture', 'Microblading Stroke Techniques', 'Lip Neutralization & Tinting', 'Safety, Needles & Pigment Science'],
    objectPosition: 'object-[center_35%]',
  },
  {
    title: 'Advanced Hair Styling & Texture Transformation',
    duration: 'Professional Salon Series',
    level: 'Salon Stylists',
    image: '/images/lacrown/other/academy/academy-hair-styling-texture.png',
    overview: 'Creative cutting mastery, international balayage application, keratin smoothing protocols, and executive men’s grooming techniques.',
    modules: ['Geometric & Creative Haircuts', 'Balayage & Ombré Freehand Techniques', 'Keratin & Rebonding Science', 'Client Consultations & Styling Portfolio'],
    objectPosition: 'object-[center_20%]',
  },
];

export default function AcademyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [refNumber, setRefNumber] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(COURSES[0].title);
  const [notes, setNotes] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !course.trim()) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await ApiService.submitAcademyEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        course: course.trim(),
        message: notes.trim() || undefined,
      });

      if (res.success) {
        setRefNumber(res.reference || `LC-AC-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      } else {
        setErrorMessage(res.message || 'Unable to submit your enquiry at this time. Please try again.');
      }
    } catch {
      setErrorMessage('A network error occurred while connecting to the admissions desk. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl('/images/heroes/academy-hero.png')}
            alt="LA CROWN Academy"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {COURSES.map((c) => (
                <div
                  key={c.title}
                  className="border border-rose-border/60 bg-white shadow-card hover:shadow-luxury transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Compact Image Container with Clean Edge-to-Edge Fitting */}
                    <div
                      onClick={() => setSelectedCourse(c)}
                      className="relative aspect-[3/2] overflow-hidden bg-ivory-100 cursor-pointer"
                      title="Click to view crystal-clear high resolution course preview"
                    >
                      <img
                        src={getAssetUrl(c.image)}
                        alt={c.title}
                        className={`w-full h-full object-cover ${c.objectPosition} transition-transform duration-500 group-hover:scale-105`}
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 z-10 bg-burgundy/90 backdrop-blur-sm text-white text-[9px] font-sans font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        {c.level}
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/75 backdrop-blur-sm text-gold text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <Maximize2 size={11} /> Open High-Res
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 pb-2">
                      <div className="text-[11px] font-sans font-semibold text-gold uppercase tracking-wider mb-1">
                        {c.duration}
                      </div>
                      <h3
                        onClick={() => setSelectedCourse(c)}
                        className="font-serif text-lg text-burgundy font-semibold mb-2 leading-snug cursor-pointer hover:text-burgundy-700 transition-colors line-clamp-1"
                        title={c.title}
                      >
                        {c.title}
                      </h3>
                      <p className="font-sans text-xs text-taupe leading-relaxed mb-4 line-clamp-2">
                        {c.overview}
                      </p>

                      <h4 className="font-serif text-[11px] text-charcoal uppercase tracking-wider font-semibold mb-2">Core Modules:</h4>
                      <ul className="space-y-1.5 mb-5">
                        {c.modules.slice(0, 3).map((m) => (
                          <li key={m} className="font-sans text-xs text-taupe flex items-start gap-1.5">
                            <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{m}</span>
                          </li>
                        ))}
                        {c.modules.length > 3 && (
                          <li
                            onClick={() => setSelectedCourse(c)}
                            className="font-sans text-[11px] text-gold hover:underline cursor-pointer pt-0.5"
                          >
                            +{c.modules.length - 3} more modules (click to open)
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(c)}
                      className="btn-secondary text-xs flex-1 text-center py-2"
                    >
                      View Details
                    </button>
                    <a
                      href="#enrolment-form"
                      onClick={() => setCourse(c.title)}
                      className="btn-primary text-xs flex-1 text-center py-2"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High-Resolution Course Detail Modal */}
          {selectedCourse && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
              onClick={() => setSelectedCourse(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-rose-border max-h-[90vh] flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-charcoal flex items-center justify-center shadow-md transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {/* Left: Razor-Sharp High-Res Image Showcase */}
                <div className="md:w-1/2 bg-ivory-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={getAssetUrl(selectedCourse.image)}
                    alt={selectedCourse.title}
                    className="w-full h-full max-h-[360px] md:max-h-[560px] object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-burgundy/85 backdrop-blur-md text-gold text-xs px-3 py-1 rounded-full border border-gold/30 font-serif">
                    LA CROWN Academy
                  </div>
                </div>

                {/* Right: Comprehensive Details & Syllabus */}
                <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-burgundy text-white text-[10px] font-sans font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {selectedCourse.level}
                      </span>
                      <span className="text-gold font-sans font-semibold text-xs uppercase tracking-wider">
                        {selectedCourse.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-charcoal font-semibold mb-2 leading-snug">
                      {selectedCourse.title}
                    </h3>
                    <div className="gold-divider-left mb-4" />

                    <p className="font-sans text-sm text-taupe leading-relaxed mb-6">
                      {selectedCourse.overview}
                    </p>

                    <h4 className="font-serif text-xs text-charcoal uppercase tracking-wider font-semibold mb-3">
                      Core Syllabus & Modules:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedCourse.modules.map((m) => (
                        <li key={m} className="font-sans text-xs text-taupe flex items-start gap-2">
                          <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-ivory-300">
                    <a
                      href="#enrolment-form"
                      onClick={() => {
                        setCourse(selectedCourse.title);
                        setSelectedCourse(null);
                      }}
                      className="btn-gold text-xs w-full text-center block"
                    >
                      Enquire for this Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enrolment Form */}
          <div id="enrolment-form" className="bg-ivory-100 p-8 md:p-12 border border-ivory-300 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl text-charcoal mb-2">Academy Enrolment Enquiry</h3>
              <p className="font-sans text-sm text-taupe">
                Submit your details to receive syllabus schedules, batch dates, and fee structures from our admissions coordinator.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center text-green-900 font-sans rounded-sm">
                <CheckCircle size={36} className="mx-auto mb-3 text-green-600" />
                <h4 className="font-serif text-2xl font-semibold mb-2 text-charcoal">Enquiry Successfully Registered</h4>
                <div className="inline-block bg-white border border-green-300 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Reference: {refNumber}
                </div>
                <p className="text-sm text-taupe max-w-md mx-auto mb-4">
                  Thank you, <strong>{name}</strong>. Your enquiry for <strong>{course}</strong> has been logged into our database, and our admissions team has been immediately notified with the updated registration ledger.
                </p>
                <p className="text-xs text-taupe">We will connect with you at <strong>{phone}</strong> shortly.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setNotes('');
                  }}
                  className="mt-6 text-xs text-burgundy font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-sm flex items-start gap-2">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}
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

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-xs py-3.5 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {loading ? 'Submitting Enquiry...' : 'Submit Academy Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
