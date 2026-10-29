import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BRAND } from '../data/brand';
import { getAssetUrl } from '../utils/imageUrl';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-wine text-ivory-100" aria-label="Site footer">
      {/* Main footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3.5 mb-4 group">
              <img
                src={getAssetUrl('/assets/logo.png')}
                alt="LA CROWN"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain drop-shadow transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="font-serif text-white text-xl font-bold tracking-wider">LA CROWN</div>
                <div className="font-sans text-gold-soft text-[10px] tracking-widest uppercase font-semibold">
                  Luxury Aesthetic Clinic & Salon
                </div>
              </div>
            </Link>
            <p className="font-sans text-sm text-ivory-100/75 leading-relaxed mb-6">
              Personalised skin, hair, aesthetic and salon experiences designed around your individual beauty and wellness goals.
            </p>
            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-start gap-3 text-sm text-ivory-100/85 hover:text-gold-soft transition-colors"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-gold-soft" />
                <span>{BRAND.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-start gap-3 text-sm text-ivory-100/85 hover:text-gold-soft transition-colors"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-gold-soft" />
                <span>{BRAND.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-ivory-100/85">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold-soft" />
                <span>{BRAND.address.full}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ivory-100/85">
                <Clock size={15} className="mt-0.5 flex-shrink-0 text-gold-soft" />
                <span>{BRAND.hours.days} &bull; {BRAND.hours.time}</span>
              </div>
            </div>
          </div>

          {/* Services nav */}
          <div>
            <h3 className="font-serif text-gold-soft text-lg mb-3 tracking-wide">Aesthetic Clinic</h3>
            <div className="w-8 h-px bg-rose-muted/40 mb-4" />
            <ul className="space-y-2">
              {[
                ['Skin Care', '/aesthetic-clinic/skin-care'],
                ['Hair Restoration', '/aesthetic-clinic/hair-restoration'],
                ['Laser Treatments', '/aesthetic-clinic/laser'],
                ['HydraFacial', '/aesthetic-clinic/hydrafacial'],
                ['Chemical Peels', '/aesthetic-clinic/chemical-peels'],
                ['Anti-Ageing', '/aesthetic-clinic/anti-ageing'],
                ['Body Slimming', '/aesthetic-clinic/body-slimming'],
                ['Semi-Permanent Makeup', '/aesthetic-clinic/semi-permanent-makeup'],
                ['PRP & GFC Therapy', '/aesthetic-clinic/prp-therapy'],
                ['Botox & Fillers', '/aesthetic-clinic/botox'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="font-sans text-sm text-ivory-100/75 hover:text-gold-soft transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold-soft text-lg mb-3 tracking-wide">Salon Services</h3>
            <div className="w-8 h-px bg-rose-muted/40 mb-4" />
            <ul className="space-y-2">
              {[
                ["Men's Haircut & Grooming", '/salon/mens-haircut'],
                ["Women's Haircut & Styling", '/salon/womens-haircut'],
                ['Hair Colour & Care', '/salon/womens-haircare'],
                ['Threading & Essentials', '/salon/threading'],
                ['Waxing', '/salon/waxing'],
                ['Luxury Facials', '/salon/luxury-facials'],
                ['Nails', '/salon/nails'],
                ['Makeup & Bridal', '/salon/makeup'],
                ['Body Relaxation', '/salon/body-relaxation'],
                ['Baby & Kids Pampering', '/salon/baby-pampering'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="font-sans text-sm text-ivory-100/75 hover:text-gold-soft transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-gold-soft text-lg mb-3 tracking-wide">Quick Links</h3>
            <div className="w-8 h-px bg-rose-muted/40 mb-4" />
            <ul className="space-y-2 mb-6">
              {[
                ['Home', '/'],
                ['About LA CROWN', '/about'],
                ['Our Team', '/our-team'],
                ['Gallery', '/gallery'],
                ['Blog', '/blog'],
                ['Academy', '/academy'],
                ['Franchise', '/franchise'],
                ['Contact Us', '/contact'],
                ['Appointment', '/appointment'],
                ['Offers', '/offers'],
                ['FAQ', '/faq'],
                ['Sitemap', '/sitemap'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="font-sans text-sm text-ivory-100/75 hover:text-gold-soft transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div>
              <div className="font-sans text-xs text-ivory-100/60 uppercase tracking-widest mb-3">Follow Us</div>
              <div className="flex gap-3">
                {BRAND.social.instagram && (
                  <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-9 h-9 border border-rose-muted/40 flex items-center justify-center hover:border-gold-soft hover:text-gold-soft transition-all text-ivory-100/80">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                )}
                {BRAND.social.facebook && (
                  <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-9 h-9 border border-rose-muted/40 flex items-center justify-center hover:border-gold-soft hover:text-gold-soft transition-all text-ivory-100/80">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                )}
                {BRAND.social.youtube && (
                  <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                    className="w-9 h-9 border border-rose-muted/40 flex items-center justify-center hover:border-gold-soft hover:text-gold-soft transition-all text-ivory-100/80">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                )}
                {!BRAND.social.instagram && !BRAND.social.facebook && !BRAND.social.youtube && (
                  <span className="font-sans text-xs text-ivory-100/40 italic">Social links coming soon</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rose-muted/20 bg-burgundy-900/40">
        <div className="container-luxury py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ivory-100/60 text-center md:text-left">
            &copy; {year} {BRAND.fullName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              ['Privacy Policy', '/privacy-policy'],
              ['Terms & Conditions', '/terms-and-conditions'],
              ['Cancellation Policy', '/cancellation-policy'],
              ['Sitemap', '/sitemap'],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="font-sans text-xs text-ivory-100/60 hover:text-gold-soft transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
