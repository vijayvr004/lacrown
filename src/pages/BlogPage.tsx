import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export const BLOG_POSTS = [
  {
    id: 'hydrafacial-guide',
    slug: 'hydrafacial-guide',
    title: 'Complete Guide to HydraFacial: What to Expect',
    excerpt: 'HydraFacial is one of the most popular non-invasive skin treatments in the world. Learn what the treatment involves, who it is suitable for, and what to expect from your session.',
    content: `HydraFacial has become one of the premier non-invasive skincare treatments worldwide, renowned for its ability to deliver an instant glow without discomfort or downtime.

### How Does HydraFacial Work?
The patented Vortex-Fusion delivery system works in three distinct steps:
1. **Cleanse & Peel**: Gentle exfoliation and resurfacing uncover a fresh layer of skin.
2. **Extract & Hydrate**: Painless suction removes debris and congestion from pores while simultaneously nourishing with intense moisturizers.
3. **Fuse & Protect**: The skin's surface is saturated with antioxidants and peptides to maximize your glow.

### Who is it For?
HydraFacial addresses all skincare needs:
- Fine lines and wrinkles
- Elasticity and firmness
- Even tone and vibrancy
- Skin texture and clarity
- Brown spots and enlarged pores

At LA CROWN, founder Sunitha Devaraj brings specialized expertise to tailoring each HydraFacial regimen to individual skin types. Contact us to schedule your personalized consultation.`,
    category: 'Skincare',
    date: '2026-10-15',
    readTime: '5 min read',
    author: 'Sunitha Devaraj',
    image: '/images/services/facials/hydrafacial-treatment.jpg',
    published: true,
  },
  {
    id: 'laser-hair-removal-facts',
    slug: 'laser-hair-removal-facts',
    title: 'Laser Hair Removal: Facts, Expectations & Aftercare',
    excerpt: 'Considering laser hair removal? This guide covers how the treatment works, how many sessions are typically needed, and what aftercare is required for best results.',
    content: `Laser hair removal is a long-term solution for unwanted hair reduction on virtually any area of the body.

### The Science Behind It
Laser energy is absorbed by the melanin in the hair follicle, heating it and inhibiting future growth without damaging surrounding dermal tissue.

### Expected Sessions
Because hair grows in distinct cycles (anagen, catagen, and telogen), multiple treatments spaced 4 to 6 weeks apart are necessary to target hairs in their active growth phase.

### Pre-Care & Aftercare Tips
- Shave the treatment zone 24 hours prior; avoid waxing or plucking.
- Avoid direct sun exposure and tanning beds for at least 2 weeks before and after.
- Keep skin moisturized and use broad-spectrum SPF 50+.`,
    category: 'Laser Treatments',
    date: '2026-10-10',
    readTime: '6 min read',
    author: 'LA CROWN Clinical Team',
    image: '/images/services/laser/laser-hair-removal.jpg',
    published: true,
  },
  {
    id: 'hair-care-tips',
    slug: 'hair-care-tips',
    title: '10 Professional Hair Care Tips from Our Salon Team',
    excerpt: 'Our expert salon team shares their top tips for maintaining healthy, lustrous hair between salon visits — from washing routines to heat protection.',
    content: `Maintaining salon-quality hair at home requires thoughtful daily habits and the right nourishment.

1. **Mind Water Temperature**: Hot water strips natural oils; rinse with lukewarm or cool water.
2. **Use Sulfate-Free Shampoos**: Preserve colour vibrancy and scalp moisture.
3. **Deep Condition Weekly**: Replenish moisture balance with a restorative mask.
4. **Always Apply Heat Protectant**: Essential before flat ironing or blow drying.
5. **Get Regular Trims**: Every 6-8 weeks prevents split ends from traveling up the hair shaft.
6. **Protect Scalp Health**: A healthy scalp produces stronger, shinier hair.`,
    category: 'Hair Care',
    date: '2026-10-05',
    readTime: '4 min read',
    author: 'LA CROWN Salon Styling Team',
    image: '/images/services/hair/balayage-hair-colour.jpg',
    published: true,
  },
  {
    id: 'bridal-makeup-guide',
    slug: 'bridal-makeup-guide',
    title: 'Bridal Makeup Consultation: How to Prepare',
    excerpt: 'Planning your wedding day look? This guide explains what to discuss during your bridal makeup consultation and how to prepare for your big day.',
    content: `Your wedding day is one of the most memorable milestones in life. Achieving your dream bridal look begins with meticulous preparation.

### Bringing Inspiration
Bring fabric swatches, jewelry photos, and reference images that capture the mood of your ceremony and reception.

### Trial Timing
We recommend scheduling your bridal makeup and hair trial 4 to 8 weeks before the wedding day.

### Skincare Countdown
Start professional facials and hydration regimens 3 to 6 months in advance so your skin is radiant and receptive to makeup.`,
    category: 'Makeup',
    date: '2026-09-28',
    readTime: '5 min read',
    author: 'Bridal Beauty Specialists',
    image: '/images/services/makeup/bridal-makeup.jpg',
    published: true,
  },
  {
    id: 'prp-therapy-explained',
    slug: 'prp-therapy-explained',
    title: 'PRP Therapy for Hair Loss: Understanding the Treatment',
    excerpt: 'PRP therapy uses growth factors from your own blood to support hair follicle health. Learn about the process, what it involves, and what to discuss with your clinician.',
    content: `Platelet-Rich Plasma (PRP) therapy is an autologous treatment utilizing biological growth factors concentrated from your own blood.

### How It Works
A minor blood draw is processed in a medical centrifuge to isolate concentrated platelets rich in signaling proteins. These are gently injected into thinning areas of the scalp.

### Medical Supervision
All PRP procedures at LA CROWN are performed under clinical protocols by experienced medical professionals. Individual assessment determines suitability and projected session schedules.`,
    category: 'Hair Restoration',
    date: '2026-09-20',
    readTime: '7 min read',
    author: 'Clinical Dermatology Team',
    image: '/images/services/hair/prp-scalp-therapy.jpg',
    published: true,
  },
  {
    id: 'skincare-routine',
    slug: 'skincare-routine',
    title: 'Building a Skincare Routine: Advice from Our Aestheticians',
    excerpt: 'A consistent skincare routine is the foundation of healthy skin. Our aesthetic team shares guidance on building a routine suited to your skin type and goals.',
    content: `Effective skincare isn't about dozens of steps—it's about the right active ingredients applied in the right order.

### The Essential Pillars
1. **Cleanse**: Remove pollutants, sebum, and sunscreen without compromising the skin barrier.
2. **Target**: Serums formulated with vitamin C (morning) or retinol/peptides (evening).
3. **Moisturize**: Lock in hydration with ceramides and hyaluronic acid.
4. **Protect**: Broad-spectrum UV defense 365 days a year.`,
    category: 'Skincare',
    date: '2026-09-15',
    readTime: '5 min read',
    author: 'Sunitha Devaraj',
    image: '/images/services/facials/korean-glass-facial.jpg',
    published: true,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filtered = activeCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section className="relative py-20 bg-burgundy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-luxury relative z-10">
          <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} light />
          <div className="section-eyebrow mt-4 mb-3">Beauty Insights</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl leading-tight mb-5">Blog & Articles</h1>
          <div className="w-16 h-0.5 bg-gold mb-5" />
          <p className="font-sans text-white/80 text-lg max-w-xl">
            Educational articles on skincare, hair care, aesthetic treatments, and beauty from the LA CROWN team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-sans text-sm font-medium border transition-all capitalize ${
                  activeCategory === cat
                    ? 'bg-burgundy text-white border-burgundy'
                    : 'bg-white text-charcoal border-gray-200 hover:border-burgundy hover:text-burgundy'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="service-card overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="aspect-video overflow-hidden bg-ivory-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans text-xs bg-ivory-200 text-taupe px-2.5 py-1">{post.category}</span>
                      <span className="font-sans text-xs text-taupe flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-charcoal text-lg font-semibold mb-3 group-hover:text-burgundy transition-colors leading-snug">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="font-sans text-taupe text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-ivory-200 mt-auto flex items-center justify-between">
                  <span className="font-sans text-xs text-taupe">
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="font-sans text-xs text-burgundy font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
