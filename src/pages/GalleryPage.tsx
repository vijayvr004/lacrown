import { useState } from 'react';
import { X } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { getAssetUrl } from '../utils/imageUrl';

const GALLERY_ITEMS = [
  { id: 1, category: 'treatments', alt: 'HydraFacial Vortex Cleansing Ritual', src: '/images/services/facials/hydrafacial-treatment.jpg' },
  { id: 2, category: 'clinic', alt: 'Aesthetic Dermatology Consultation Suite', src: '/images/services/aesthetic/dermal-fillers-botox.jpg' },
  { id: 3, category: 'treatments', alt: 'Laser Hair Removal with Sapphire Cooling', src: '/images/services/laser/laser-hair-removal.jpg' },
  { id: 4, category: 'salon', alt: 'Executive Men’s Barber & Grooming Lounge', src: '/images/services/salon/mens-haircut.jpg' },
  { id: 5, category: 'hair', alt: 'Caramel Balayage & Gloss Styling', src: '/images/services/hair/balayage-hair-colour.jpg' },
  { id: 6, category: 'makeup', alt: 'Bespoke Royal South Asian Bridal Makeup', src: '/images/services/makeup/bridal-makeup.jpg' },
  { id: 7, category: 'skincare', alt: 'Korean Glass Skin Infusion Ritual', src: '/images/services/facials/korean-glass-facial.jpg' },
  { id: 8, category: 'treatments', alt: 'Clinical Hair Restoration & Dermatoscope Analysis', src: '/images/services/hair/hair-transplant.jpg' },
  { id: 9, category: 'clinic', alt: 'Advanced Medical Body Contouring Suite', src: '/images/services/aesthetic/body-slimming-contouring.jpg' },
  { id: 10, category: 'hair', alt: 'PRP Scalp Therapy & Trichology Assessment', src: '/images/services/hair/prp-scalp-therapy.jpg' },
  { id: 11, category: 'makeup', alt: 'Precision Microblading & Eyebrow Architecture', src: '/images/services/aesthetic/microblading-eyebrow.jpg' },
  { id: 12, category: 'salon', alt: 'Luxury Spa Manicure & Nail Studio', src: '/images/services/salon/spa-manicure-nail-care.jpg' },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'clinic', label: 'Clinic Interiors' },
  { id: 'salon', label: 'Salon Interiors' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'hair', label: 'Hair Services' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'makeup', label: 'Makeup' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setLightbox(null);
    if (!lightbox) return;
    const idx = filtered.findIndex((i) => i.id === lightbox.id);
    if (e.key === 'ArrowRight' && idx < filtered.length - 1) setLightbox(filtered[idx + 1]);
    if (e.key === 'ArrowLeft' && idx > 0) setLightbox(filtered[idx - 1]);
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetUrl('/images/heroes/gallery-hero.png')}
            alt="LA CROWN Gallery"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Our Work & Space</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">Gallery</h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Explore our clinic, salon spaces, treatment results, and beauty services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 font-sans text-xs uppercase tracking-wider font-medium rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-burgundy text-white border-burgundy shadow-sm'
                    : 'bg-ivory text-charcoal border-rose-border hover:border-burgundy hover:text-burgundy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="font-sans text-sm text-taupe mb-6">{filtered.length} images</div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="aspect-square overflow-hidden group relative bg-ivory-200 focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`Open: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-white text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-sans">View</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-sans text-sm text-taupe italic">
              These are placeholder images. Authentic LA CROWN gallery images will be added upon content upload.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="font-sans text-white/70 text-sm">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
