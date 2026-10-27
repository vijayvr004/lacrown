import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, Award, Shield, Clock, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { BRAND } from '../data/brand';
import { getFeaturedServices } from '../data/aestheticServices';
import { getFeaturedSalonServices } from '../data/salonServices';
import ServiceCard from '../components/ServiceCard';
import FAQAccordion from '../components/FAQAccordion';
import { getAssetUrl } from '../utils/imageUrl';

const FEATURED_AESTHETIC = getFeaturedServices().slice(0, 8);
const FEATURED_SALON = getFeaturedSalonServices().slice(0, 8);

const HOMEPAGE_FAQS = [
  {
    q: 'How do I book an appointment at LA CROWN?',
    a: 'You can book an appointment by filling out our online appointment request form, calling us at +91 96061 51079, or sending us a WhatsApp message. Our team will confirm your appointment.',
  },
  {
    q: 'What are your opening hours?',
    a: 'LA CROWN is open Monday to Sunday, 10:30 AM to 9:00 PM. We are open all seven days for your convenience.',
  },
  {
    q: 'Do I need a consultation before a treatment?',
    a: 'Medical aesthetic procedures such as laser treatments, injectables, hair transplants, and IV therapies require a professional consultation before treatment. Salon services generally do not require a prior consultation, though our team is happy to discuss your needs.',
  },
  {
    q: 'Is LA CROWN both an aesthetic clinic and a salon?',
    a: 'Yes. LA CROWN offers two distinct experiences under one brand: the Aesthetic Clinic for advanced skin, hair, laser, and body treatments; and the Luxury Salon for haircuts, colour, facials, waxing, nails, makeup, and body services.',
  },
  {
    q: 'Where is LA CROWN located?',
    a: 'LA CROWN is located at No. 37, First Floor, Ashoka Pillar Road, 10th Main Road, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011.',
  },
  {
    q: 'Does LA CROWN offer bridal packages?',
    a: 'Yes. We offer bridal makeup and beauty services for weddings, engagements, and special occasions. Please contact us or submit an appointment request for a personalised bridal consultation.',
  },
  {
    q: 'What is LA CROWN Academy?',
    a: 'LA CROWN Academy offers professional beauty and aesthetic training programmes for aspiring beauty professionals. Contact us for details on available courses, schedules, and enrolment.',
  },
  {
    q: 'Does LA CROWN offer franchise opportunities?',
    a: 'Yes. LA CROWN offers franchise opportunities for entrepreneurs interested in the luxury beauty and wellness sector. Visit our Franchise page or contact us for more information.',
  },
];

const WHY_LACROWN = [
  {
    icon: Award,
    title: 'Expert Professionals',
    desc: 'Our team includes qualified dermatologists, aestheticians, and trained salon specialists committed to professional excellence.',
  },
  {
    icon: Star,
    title: 'Personalised Consultations',
    desc: 'Every treatment begins with a thorough consultation to understand your individual goals, skin type, and needs.',
  },
  {
    icon: Shield,
    title: 'Safe & Hygienic',
    desc: 'We maintain the highest standards of hygiene, sanitation, and professional care across all clinic and salon services.',
  },
  {
    icon: Clock,
    title: 'Open 7 Days a Week',
    desc: 'Conveniently open Monday through Sunday, 10:30 AM to 9:00 PM, to fit your schedule.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          <img
            src={getAssetUrl('/assets/hero-bg.jpg')}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-luxury relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="font-sans font-semibold text-gold-soft text-xs md:text-sm tracking-[0.25em] uppercase mb-4 animate-fade-in flex items-center gap-2">
              <span>Aesthetic Clinic</span>
              <span>·</span>
              <span>Jayanagar, Bengaluru</span>
            </div>
            <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 animate-slide-up">
              Where Beauty Meets<br />
              <span className="italic font-normal text-gold-soft font-serif">Science</span>
            </h1>
            <p className="font-sans text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              Premium skin, hair and body treatments crafted around you. Rediscover your natural radiance with safe, science-backed care in a calm, luxurious environment.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/aesthetic-clinic" className="btn-hero-primary">
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/appointment" className="btn-hero-secondary">
                <Calendar size={15} />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Reference stats counter */}
            <div className="flex items-center gap-6 sm:gap-8 pt-6 border-t border-white/20 max-w-lg">
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-gold-soft">12+</div>
                <div className="text-[10px] text-white/80 font-sans tracking-widest uppercase mt-0.5">Years</div>
              </div>
              <div className="w-px h-8 bg-white/25" />
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-gold-soft">20k+</div>
                <div className="text-[10px] text-white/80 font-sans tracking-widest uppercase mt-0.5">Happy Clients</div>
              </div>
              <div className="w-px h-8 bg-white/25" />
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-gold-soft flex items-center gap-0.5">
                  <span>4.9</span>
                  <span className="text-gold-soft text-lg">★</span>
                </div>
                <div className="text-[10px] text-white/80 font-sans tracking-widest uppercase mt-0.5">Google Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      </section>

      {/* ── BRAND INTRO ── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-3">Welcome to LA CROWN</div>
              <h2 className="section-title mb-5">
                Bengaluru's Premier Luxury Aesthetic Clinic & Salon
              </h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-5">
                Located in the heart of Jayanagar, Bengaluru, LA CROWN brings together advanced aesthetic medicine and a world-class salon experience under one prestigious roof.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-6">
                Whether you are seeking transformative aesthetic treatments — from HydraFacials and laser procedures to hair restoration and anti-ageing therapies — or indulgent salon services including haircuts, colour, bridal makeup, and nail care, LA CROWN offers a personalised experience crafted for your individual beauty journey.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-8">
                Our founder, Sunitha Devaraj, and a team of qualified medical professionals and beauty specialists are dedicated to delivering outcomes that reflect your unique goals with care, precision, and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary text-sm">Our Story</Link>
                <Link to="/our-team" className="btn-secondary text-sm">Meet the Team</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={getAssetUrl('/assets/hero-bg.jpg')}
                  alt="Professional aesthetic treatment at LA CROWN"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-burgundy text-white p-6 shadow-burgundy hidden md:block">
                <div className="font-serif text-3xl font-bold text-gold mb-1">7</div>
                <div className="font-sans text-xs uppercase tracking-widest">Days a Week</div>
                <div className="font-sans text-xs text-white/70 mt-1">10:30 AM – 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR EXPERIENCE ── */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-3">Two Distinct Experiences</div>
            <h2 className="section-title mb-4">Choose Your Experience</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Aesthetic Clinic */}
            <div className="group relative overflow-hidden bg-burgundy text-white rounded-2xl border border-gold/20 shadow-luxury">
              <div className="absolute inset-0 opacity-25">
                <img src={getAssetUrl('/images/lacrown/other/homepage/home-aesthetic-clinic.webp')} alt="LA CROWN Aesthetic Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative p-10">
                <div className="font-script text-gold text-2xl mb-2">Aesthetic Clinic</div>
                <h3 className="font-serif text-3xl font-semibold text-white mb-5">
                  Advanced Aesthetic Medicine
                </h3>
                <div className="w-12 h-px bg-gold/60 mb-6" />
                <ul className="space-y-3 mb-8">
                  {[
                    'Skin Treatments & Medi-Facials',
                    'Hair Restoration & PRP / GFC',
                    'Laser Treatments',
                    'Anti-Ageing & Injectables',
                    'Body Slimming & Contouring',
                    'Semi-Permanent Makeup',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-sm text-white/85">
                      <ChevronRight size={14} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/aesthetic-clinic" className="btn-gold-outline text-sm">
                  Explore Aesthetic Treatments <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Salon */}
            <div className="group relative overflow-hidden bg-burgundy-900 text-white rounded-2xl border border-gold/20 shadow-luxury">
              <div className="absolute inset-0 opacity-25">
                <img src={getAssetUrl('/images/lacrown/other/homepage/home-luxury-salon.webp')} alt="LA CROWN Luxury Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative p-10">
                <div className="font-script text-gold text-2xl mb-2">Luxury Salon</div>
                <h3 className="font-serif text-3xl font-semibold text-white mb-5">
                  Premium Salon Services
                </h3>
                <div className="w-12 h-px bg-gold/60 mb-6" />
                <ul className="space-y-3 mb-8">
                  {[
                    'Haircuts, Styling & Hair Colour',
                    'Hair Care, Spa & Keratin',
                    'Facials & Grooming',
                    'Waxing, Threading & Nails',
                    'Makeup & Bridal Beauty',
                    'Body Relaxation & Massages',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-sm text-white/85">
                      <ChevronRight size={14} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/salon" className="btn-gold-outline text-sm">
                  Explore Salon Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED TREATMENTS ── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="section-eyebrow mb-2">Aesthetic Clinic</div>
              <h2 className="section-title">Featured Treatments</h2>
              <div className="gold-divider-left mt-4" />
            </div>
            <Link to="/aesthetic-clinic" className="btn-secondary text-xs flex-shrink-0">
              View All Treatments <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_AESTHETIC.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                description={s.description}
                image={s.image}
                to={`/aesthetic-clinic/${s.slug}`}
                category={s.category}
                priceNote={s.priceNote || 'Contact for pricing'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden max-w-md mx-auto lg:mx-0">
                <img
                  src="/assets/founder.png"
                  alt="Sunitha Devaraj, Founder of LA CROWN"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 right-0 md:right-8 lg:-right-4 bg-burgundy text-white p-5 shadow-burgundy max-w-xs">
                <div className="font-script text-gold text-lg mb-1">Founder</div>
                <div className="font-serif text-white text-xl font-semibold">Sunitha Devaraj</div>
                <div className="font-sans text-white/70 text-xs mt-1">Internationally Recognised Cosmetologist & Nutrition Expert</div>
              </div>
            </div>
            <div>
              <div className="section-eyebrow mb-3">Meet the Founder</div>
              <h2 className="section-title mb-5">Sunitha Devaraj</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-5">
                An internationally recognised nutrition and dietitian and cosmetologist redefining the standards of skincare and beauty.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-4">
                With a passion for innovation and mastery in HydraFacial treatments, Sunitha has transformed countless faces — restoring youthful radiance and confidence. Renowned for her expertise in non-invasive skin rejuvenation, she blends cutting-edge technology with a deep understanding of aesthetics.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-8">
                Sunitha's dedication to personalised care, professional expertise, and continuous learning has made LA CROWN one of Bengaluru's most trusted luxury aesthetic destinations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary text-sm">Read Full Story</Link>
                <Link to="/our-team" className="btn-secondary text-sm">Our Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SALON HIGHLIGHTS ── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="section-eyebrow mb-2">Luxury Salon</div>
              <h2 className="section-title">Salon Highlights</h2>
              <div className="gold-divider-left mt-4" />
            </div>
            <Link to="/salon" className="btn-secondary text-xs flex-shrink-0">
              View All Salon Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_SALON.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                description={s.description}
                image={s.image}
                to={`/salon/${s.slug}`}
                category={s.category}
                priceNote={s.priceNote || 'Contact for pricing'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LA CROWN ── */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="font-script text-gold text-xl mb-3">Why Choose Us</div>
            <h2 className="section-title-light mb-4">The LA CROWN Difference</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_LACROWN.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="font-serif text-white text-xl mb-3">{title}</h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <div className="section-eyebrow mb-3">Our Space & Work</div>
            <h2 className="section-title mb-4">Gallery</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-ivory-200 group cursor-pointer">
                <img
                  src="/assets/hero-bg.jpg"
                  alt={`LA CROWN gallery image ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary text-sm">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ── ACADEMY & FRANCHISE ── */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-burgundy text-white p-10">
              <div className="font-script text-gold text-xl mb-2">LA CROWN Academy</div>
              <h3 className="font-serif text-2xl text-white mb-4">Beauty & Aesthetic Training</h3>
              <div className="w-10 h-px bg-gold/50 mb-5" />
              <p className="font-sans text-white/80 text-sm leading-relaxed mb-6">
                LA CROWN Academy offers professional training programmes in beauty and aesthetic medicine, equipping aspiring beauty professionals with the skills and knowledge to excel in the industry.
              </p>
              <Link to="/academy" className="btn-gold-outline text-sm">
                Learn About Academy <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-burgundy-900 text-white p-10 border border-gold/20 shadow-luxury">
              <div className="font-script text-gold text-xl mb-2">Franchise</div>
              <h3 className="font-serif text-2xl text-white mb-4">Business Opportunities</h3>
              <div className="w-10 h-px bg-gold/50 mb-5" />
              <p className="font-sans text-white/80 text-sm leading-relaxed mb-6">
                Join the LA CROWN family by exploring our franchise opportunities. Partner with a recognised luxury beauty brand and bring the LA CROWN experience to your city.
              </p>
              <Link to="/franchise" className="btn-gold-outline text-sm">
                Explore Franchise <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="section-eyebrow mb-3">Got Questions?</div>
              <h2 className="section-title mb-5">Frequently Asked Questions</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-6">
                Find answers to common questions about our services, appointments, and policies.
              </p>
              <Link to="/faq" className="btn-primary text-sm">View All FAQs</Link>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion faqs={HOMEPAGE_FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={getAssetUrl('/assets/hero-bg.jpg')} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <div className="section-eyebrow mb-4">Begin Your Journey</div>
          <h2 className="section-title mb-5 max-w-2xl mx-auto">Your Beauty Journey Starts Here.</h2>
          <div className="gold-divider mb-8" />
          <p className="section-subtitle max-w-lg mx-auto mb-10">
            Book an appointment, explore our treatments, or speak with our team to begin your personalised LA CROWN experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/appointment" className="btn-primary">
              <Calendar size={16} /> Book an Appointment
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request a Consultation
            </Link>
            <a href={`tel:${BRAND.phoneRaw}`} className="btn-gold">
              <Phone size={16} /> Call the Clinic
            </a>
            <Link to="/salon" className="btn-secondary">
              Explore Salon Services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-sans text-sm text-taupe">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-gold" />
              <span>Jayanagar, Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-gold" />
              <span>Mon–Sun, 10:30 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-gold" />
              <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-burgundy">{BRAND.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
