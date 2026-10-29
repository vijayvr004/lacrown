import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, Calendar, ShoppingBag, User } from 'lucide-react';
import { BRAND } from '../data/brand';
import { getAssetUrl } from '../utils/imageUrl';

const AESTHETIC_MENU = [
  {
    group: 'Hair Restoration',
    links: [
      { label: 'Hair Transplant & Bio FUE', to: '/aesthetic-clinic/hair-transplant' },
      { label: 'PRP Therapy', to: '/aesthetic-clinic/prp-therapy' },
      { label: 'GFC Therapy', to: '/aesthetic-clinic/gfc-therapy' },
      { label: 'Mesotherapy', to: '/aesthetic-clinic/mesotherapy' },
      { label: 'Stem Cell Therapy', to: '/aesthetic-clinic/stem-cell-therapy' },
      { label: 'Scalp Micro-Pigmentation', to: '/aesthetic-clinic/scalp-micro-pigmentation' },
    ],
  },
  {
    group: 'Skin & Facials',
    links: [
      { label: 'HydraFacial', to: '/aesthetic-clinic/hydrafacial' },
      { label: 'Korean Glass Facial', to: '/aesthetic-clinic/korean-glass-facial' },
      { label: 'BB Glow Facial', to: '/aesthetic-clinic/bb-glow-facial' },
      { label: 'Vampire Facial', to: '/aesthetic-clinic/vampire-facial' },
      { label: 'Aesthetic Grooming Essentials', to: '/aesthetic-clinic/aesthetic-grooming-essentials' },
      { label: 'Chemical Peels', to: '/aesthetic-clinic/chemical-peels' },
    ],
  },
  {
    group: 'Laser & Anti-Ageing',
    links: [
      { label: 'Laser Hair Removal', to: '/aesthetic-clinic/laser-hair-removal' },
      { label: 'Pico Laser', to: '/aesthetic-clinic/pico-laser' },
      { label: 'CO2 Laser', to: '/aesthetic-clinic/co2-laser' },
      { label: 'Dermal Fillers', to: '/aesthetic-clinic/dermal-fillers' },
      { label: 'Botox', to: '/aesthetic-clinic/botox' },
      { label: 'Thread Lift', to: '/aesthetic-clinic/thread-lift' },
    ],
  },
  {
    group: 'Body & Makeup',
    links: [
      { label: 'EMSculpt', to: '/aesthetic-clinic/emsculpt' },
      { label: 'HIFU', to: '/aesthetic-clinic/hifu' },
      { label: 'Lipo Laser', to: '/aesthetic-clinic/lipo-laser' },
      { label: 'Lip Tinting', to: '/aesthetic-clinic/lip-tinting' },
      { label: 'Microblading', to: '/aesthetic-clinic/microblading' },
      { label: 'Eyelash Extensions', to: '/aesthetic-clinic/eyelash-extensions-aesthetic' },
    ],
  },
];

const SALON_MENU = [
  {
    group: 'Hair Care & Styling',
    links: [
      { label: "Women's Haircut - Senior Stylist", to: '/salon/womens-haircut-senior' },
      { label: 'Balayage Hair Colour', to: '/salon/balayage' },
      { label: 'Global Fashion Hair Colour', to: '/salon/global-colour' },
      { label: 'Keratin Smoothing Treatment', to: '/salon/keratin-treatment' },
      { label: 'Nourishing Hair Spa', to: '/salon/womens-nourishing-hair-spa' },
      { label: "Men's Haircut - Creative Director", to: '/salon/mens-haircut-creative' },
    ],
  },
  {
    group: 'Skin & Grooming',
    links: [
      { label: 'Eyebrow & Facial Threading', to: '/salon/eyebrow-threading' },
      { label: 'Full Arm & Body Waxing', to: '/salon/full-arm-waxing' },
      { label: 'Face & Neck De-Tan Treatment', to: '/salon/face-detan' },
      { label: 'Salon Luxury Facial', to: '/salon/salon-luxury-facial' },
      { label: 'Anti-Ageing Beauty Facial', to: '/salon/salon-anti-ageing-facial' },
      { label: 'Full Body Luxury Polishing', to: '/salon/full-body-polish' },
    ],
  },
  {
    group: 'Nails & Beauty',
    links: [
      { label: 'Spa Manicure & Pedicure', to: '/salon/spa-manicure' },
      { label: 'Gel Nails & Nail Artistry', to: '/salon/gel-nails' },
      { label: 'Eyelash Extensions & Lift', to: '/salon/salon-eyelash-extensions' },
      { label: 'Bridal & Occasion Makeup', to: '/salon/bridal-makeup' },
      { label: 'Aromatherapy Body Massage', to: '/salon/aromatherapy-massage' },
      { label: "Baby & Toddler Haircut", to: '/salon/baby-haircut' },
    ],
  },
];

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Aesthetic Clinic', to: '/aesthetic-clinic', mega: AESTHETIC_MENU },
  { label: 'Salon', to: '/salon', mega: SALON_MENU },
  { label: 'Our Team', to: '/our-team' },
  { label: 'Academy', to: '/academy' },
  { label: 'Franchise', to: '/franchise' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-100/95 backdrop-blur-md shadow-card border-b border-rose-border'
          : 'bg-ivory-100/90 backdrop-blur-sm border-b border-rose-border/40'
      }`}
    >
      {/* Top micro bar */}
      <div className="bg-burgundy-wine text-ivory/85 py-1 px-4 text-[11px] font-sans border-b border-rose-muted/20">
        <div className="container-luxury flex items-center justify-between">
          <span className="tracking-wide">Mon–Sun &nbsp;|&nbsp; 10:30 AM – 9:00 PM</span>
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="flex items-center gap-1.5 text-gold-soft hover:text-white transition-colors"
          >
            <Phone size={10} className="text-gold" />
            <span>{BRAND.phone}</span>
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="container-luxury" ref={dropdownRef}>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo matching reference */}
          <Link to="/" className="flex items-center gap-3.5 flex-shrink-0 group">
            <img
              src={getAssetUrl('/assets/logo.png')}
              alt="LA CROWN Royal Crest"
              width={52}
              height={52}
              fetchPriority="high"
              decoding="async"
              className="h-11 md:h-13 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <div className="font-serif text-burgundy text-xl md:text-2xl font-bold tracking-wider leading-none">
                LA CROWN
              </div>
              <div className="font-sans text-gold-500 text-[9px] tracking-[0.25em] uppercase font-semibold mt-1">
                Aesthetic Clinic & Salon
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <div key={link.to} className="relative">
                {link.mega ? (
                  <button
                    className={`nav-link flex items-center gap-1 px-2.5 py-2 text-xs uppercase tracking-wider ${
                      isActive(link.to) ? 'text-burgundy font-bold' : 'text-charcoal hover:text-burgundy'
                    }`}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.label ? null : link.label)
                    }
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={12}
                      className={`text-gold transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className={`nav-link px-2.5 py-2 block text-xs uppercase tracking-wider ${
                      isActive(link.to) ? 'text-burgundy font-bold' : 'text-charcoal hover:text-burgundy'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega menu */}
                {link.mega && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] bg-white shadow-luxury border-t-2 border-burgundy z-50 p-6 text-charcoal rounded-b-lg border-x border-b border-rose-border animate-fade-in"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {link.mega.map((group) => (
                        <div key={group.group}>
                          <div className="font-serif text-burgundy text-sm font-semibold mb-3 pb-2 border-b border-rose-border">
                            {group.group}
                          </div>
                          <ul className="space-y-1.5">
                            {group.links.map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  className="font-sans text-xs text-charcoal/80 hover:text-burgundy transition-colors block py-0.5"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-rose-border flex justify-between items-center bg-ivory-100/60 -mx-6 -mb-6 p-4 rounded-b-lg">
                      <span className="font-sans text-xs text-taupe">Personalized luxury care tailored to you</span>
                      <Link to={link.to} className="font-sans text-xs text-burgundy hover:text-gold transition-colors font-semibold flex items-center gap-1">
                        View All {link.label} Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action icons & Pill button matching reference */}
          <div className="flex items-center gap-3">
            <Link
              to="/services"
              className="text-charcoal/70 hover:text-burgundy transition-colors p-1.5 hidden sm:block"
              title="Search Catalogue"
            >
              <ShoppingBag size={18} />
            </Link>
            <Link
              to="/admin/login"
              className="text-charcoal/70 hover:text-burgundy transition-colors p-1.5 hidden sm:block"
              title="Client Portal / Admin"
            >
              <User size={18} />
            </Link>

            {/* Burgundy Pill Appointment Button matching reference */}
            <Link
              to="/appointment"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-burgundy hover:bg-burgundy-dark text-white font-sans font-medium text-xs tracking-wider rounded-full shadow-md transition-all duration-300 active:scale-95"
            >
              <Calendar size={13} />
              <span>Appointment</span>
            </Link>

            <button
              className="lg:hidden p-2 text-charcoal hover:text-burgundy transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-ivory-100 text-charcoal border-t border-rose-border overflow-y-auto max-h-[80vh] shadow-luxury">
          <div className="container-luxury py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.to}>
                {link.mega ? (
                  <>
                    <button
                      className={`flex items-center justify-between w-full py-3 px-2 font-sans text-sm font-medium border-b border-rose-border/60 ${
                        isActive(link.to) ? 'text-burgundy font-semibold' : 'text-charcoal'
                      }`}
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gold transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="pl-4 py-3 space-y-4 bg-white/70 border-l border-gold/40 my-1">
                        {link.mega.map((group) => (
                          <div key={group.group}>
                            <div className="text-xs font-semibold text-burgundy uppercase tracking-wide mb-1.5">
                              {group.group}
                            </div>
                            {group.links.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className="block py-1.5 text-xs text-charcoal/80 hover:text-burgundy pl-2"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`block py-3 px-2 font-sans text-sm font-medium border-b border-rose-border/60 ${
                      isActive(link.to) ? 'text-burgundy font-semibold' : 'text-charcoal'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/appointment" className="btn-primary w-full text-center">
                <Calendar size={15} />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
