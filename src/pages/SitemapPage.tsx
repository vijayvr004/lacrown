import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { AESTHETIC_CATEGORIES, AESTHETIC_SERVICES } from '../data/aestheticServices';
import { SALON_CATEGORIES, SALON_SERVICES } from '../data/salonServices';

export default function SitemapPage() {
  const mainPages = [
    { title: 'Home', path: '/' },
    { title: 'About LA CROWN', path: '/about' },
    { title: 'Aesthetic Clinic', path: '/aesthetic-clinic' },
    { title: 'Luxury Salon', path: '/salon' },
    { title: 'Complete Service Directory', path: '/services' },
    { title: 'Our Team & Founder', path: '/our-team' },
    { title: 'Appointment Booking', path: '/appointment' },
    { title: 'Offers & Packages', path: '/offers' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Blog & Educational Articles', path: '/blog' },
    { title: 'LA CROWN Academy', path: '/academy' },
    { title: 'Franchise Opportunities', path: '/franchise' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'Frequently Asked Questions (FAQ)', path: '/faq' },
    { title: 'Privacy Policy', path: '/privacy-policy' },
    { title: 'Terms & Conditions', path: '/terms-and-conditions' },
    { title: 'Cancellation & Rescheduling Policy', path: '/cancellation-policy' },
  ];

  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Sitemap' }]} light />
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-4">Website Sitemap</h1>
          <p className="font-sans text-white/80 text-sm mt-2">
            A comprehensive, structured index of all pages, clinical procedures, and salon services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-serif text-2xl text-burgundy mb-3 pb-2 border-b border-ivory-300">
                Main Pages
              </h2>
              <ul className="space-y-2 font-sans text-sm">
                {mainPages.map((p) => (
                  <li key={p.path}>
                    <Link to={p.path} className="text-charcoal hover:text-burgundy transition-colors">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aesthetic Clinic Treatments */}
            <div>
              <h2 className="font-serif text-2xl text-burgundy mb-3 pb-2 border-b border-ivory-300">
                Aesthetic Treatments
              </h2>
              <div className="space-y-4">
                {AESTHETIC_CATEGORIES.map((cat) => {
                  const services = AESTHETIC_SERVICES.filter((s) => s.categorySlug === cat.slug);
                  return (
                    <div key={cat.slug}>
                      <h3 className="font-serif text-base text-gold font-semibold mb-1">
                        {cat.name}
                      </h3>
                      <ul className="space-y-1 pl-3 border-l border-ivory-300 font-sans text-xs">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/aesthetic-clinic/${s.slug}`}
                              className="text-taupe hover:text-burgundy transition-colors"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Salon Services */}
            <div>
              <h2 className="font-serif text-2xl text-burgundy mb-3 pb-2 border-b border-ivory-300">
                Salon Services
              </h2>
              <div className="space-y-4">
                {SALON_CATEGORIES.map((cat) => {
                  const services = SALON_SERVICES.filter((s) => s.categorySlug === cat.slug);
                  return (
                    <div key={cat.slug}>
                      <h3 className="font-serif text-base text-gold font-semibold mb-1">
                        {cat.name}
                      </h3>
                      <ul className="space-y-1 pl-3 border-l border-ivory-300 font-sans text-xs">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/salon/${s.slug}`}
                              className="text-taupe hover:text-burgundy transition-colors"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
