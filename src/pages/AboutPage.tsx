import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Target, Eye } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { BRAND } from '../data/brand';
import { getAssetUrl } from '../utils/imageUrl';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'About LA CROWN' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Our Story</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight max-w-2xl mb-6">
            About LA CROWN
          </h1>
          <div className="w-16 h-0.5 bg-gold mb-6" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            A luxury destination where advanced aesthetic medicine meets world-class salon artistry.
          </p>
        </div>
      </section>

      {/* Brand intro */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-3">Who We Are</div>
              <h2 className="section-title mb-5">Bengaluru's Premier Luxury Aesthetic Clinic & Salon</h2>
              <div className="gold-divider-left mb-6" />
              <p className="section-subtitle mb-5">
                LA CROWN® Luxury Aesthetic Clinic Pvt. Ltd. is located in the heart of Jayanagar, Bengaluru — one of the city's most vibrant and accessible neighbourhoods.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-4">
                Founded by Sunitha Devaraj, an internationally recognised cosmetologist and nutrition expert, LA CROWN was established with a clear vision: to bring world-class aesthetic medicine and luxury salon services to Bengaluru under one prestigious roof.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-6">
                From advanced skin treatments, hair restoration, laser therapies, and anti-ageing procedures at our Aesthetic Clinic — to precision haircuts, colour, bridal makeup, facials, and nail services at our Luxury Salon — LA CROWN offers a comprehensive, personalised beauty and wellness experience.
              </p>
              <Link to="/our-team" className="btn-primary text-sm">Meet Our Team <ArrowRight size={15} /></Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-luxury border border-rose-border">
              <img src={getAssetUrl('/images/about/about-premier-clinic-salon.jpg')} alt="LA CROWN Luxury Aesthetic Clinic & Salon" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-3">Our Principles</div>
            <h2 className="section-title mb-4">Vision, Mission & Values</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                content: 'To be the most trusted luxury aesthetic and salon destination in Bengaluru, known for transformative results, personalised care, and unwavering professional standards.',
              },
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To deliver clinically sound, personalised beauty and aesthetic experiences that empower our clients to look and feel their best — combining advanced treatments with a warm, professional environment.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                content: 'Integrity, expertise, personalisation, hygiene, and genuine care for every client. We believe beauty is deeply personal, and every service we deliver reflects that belief.',
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="bg-white p-8 text-center border border-ivory-300">
                <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-charcoal text-xl mb-3">{title}</h3>
                <div className="w-8 h-px bg-gold/50 mx-auto mb-4" />
                <p className="font-sans text-taupe text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="section-eyebrow mb-3">Meet the Founder</div>
              <h2 className="section-title mb-5">Sunitha Devaraj</h2>
              <div className="gold-divider-left mb-6" />
              <div className="bg-ivory-100 border-l-4 border-gold px-5 py-4 mb-6">
                <p className="font-sans text-taupe text-sm italic leading-relaxed">
                  "An internationally recognised nutrition and dietitian and cosmetologist redefining the standards of skincare and beauty."
                </p>
              </div>
              <p className="font-sans text-taupe text-base leading-relaxed mb-4">
                With a passion for innovation and mastery in HydraFacial treatments, Sunitha has transformed countless faces — restoring youthful radiance and confidence. Renowned for her expertise in non-invasive skin rejuvenation, she blends cutting-edge technology with a deep understanding of aesthetics to deliver flawless, glowing skin.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-4">
                Her clientele includes celebrities, influencers, and discerning individuals who seek nothing less than the best in skin health.
              </p>
              <p className="font-sans text-taupe text-base leading-relaxed mb-8">
                A sought-after speaker at global dermatology conferences, Sunitha is not just a practitioner but a trendsetter in the world of beauty and wellness. From anti-ageing solutions and hydration therapy to personalised skincare regimens, her signature treatments combine science with beauty.
              </p>
              <Link to="/our-team" className="btn-primary text-sm">Full Team Profiles <ArrowRight size={15} /></Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden max-w-sm mx-auto">
                  <img
                    src="/assets/founder.png"
                    alt="Sunitha Devaraj, Founder of LA CROWN"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-burgundy text-white p-5">
                  <Award size={24} className="text-gold mb-2" />
                  <div className="font-serif text-white text-base">Internationally<br />Recognised Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="font-script text-gold text-xl mb-3">Our Approach</div>
            <h2 className="section-title-light mb-4">Personalised Care at Every Step</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Comprehensive consultation before every treatment',
              'Individual skin and hair analysis',
              'Personalised treatment planning',
              'Qualified medical professionals for clinical procedures',
              'Trained salon specialists for beauty services',
              'Professional-grade products and equipment',
              'Stringent hygiene and sanitation standards',
              'Aftercare guidance and follow-up support',
              'Transparent communication throughout your journey',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="font-sans text-white/85 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="section-padding bg-ivory-100">
        <div className="container-luxury text-center">
          <div className="section-eyebrow mb-3">Find Us</div>
          <h2 className="section-title mb-4">Visit LA CROWN</h2>
          <div className="gold-divider mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-10">
            <div>
              <div className="font-serif text-burgundy text-lg mb-2">Address</div>
              <p className="font-sans text-taupe text-sm leading-relaxed">{BRAND.address.full}</p>
            </div>
            <div>
              <div className="font-serif text-burgundy text-lg mb-2">Hours</div>
              <p className="font-sans text-taupe text-sm">{BRAND.hours.days}</p>
              <p className="font-sans text-taupe text-sm">{BRAND.hours.time}</p>
            </div>
            <div>
              <div className="font-serif text-burgundy text-lg mb-2">Contact</div>
              <a href={`tel:${BRAND.phoneRaw}`} className="font-sans text-burgundy text-sm hover:text-gold block">{BRAND.phone}</a>
              <a href={`mailto:${BRAND.email}`} className="font-sans text-taupe text-sm hover:text-burgundy">{BRAND.email}</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/appointment" className="btn-primary text-sm">Book an Appointment</Link>
            <Link to="/contact" className="btn-secondary text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
