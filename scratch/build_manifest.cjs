const fs = require('fs');
const path = require('path');

// 1. Aesthetic Clinic (35 cards)
// Let's parse aestheticServices.ts accurately
const aestheticText = fs.readFileSync('src/data/aestheticServices.ts', 'utf8');

// We find all service definitions inside AESTHETIC_SERVICES
const aestheticStart = aestheticText.indexOf('export const AESTHETIC_SERVICES: AestheticService[] = [');
const aestheticEnd = aestheticText.lastIndexOf('];');
const aestheticArrayStr = aestheticText.substring(aestheticStart, aestheticEnd);

// Split by id: '...'
const aBlocks = aestheticArrayStr.split(/\{\s*id:\s*'/).slice(1);
const aestheticCards = aBlocks.map(block => {
  const id = block.substring(0, block.indexOf("'"));
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
  const catSlugMatch = block.match(/categorySlug:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/description:\s*['"]([^'"]+)['"]/);
  const imgMatch = block.match(/image:\s*['"]([^'"]+)['"]/);
  
  return {
    section: 'Aesthetic Clinic',
    id,
    name: nameMatch ? nameMatch[1] : id,
    category: catMatch ? catMatch[1] : '',
    categorySlug: catSlugMatch ? catSlugMatch[1] : '',
    description: descMatch ? descMatch[1] : '',
    currentImage: imgMatch ? imgMatch[1] : ''
  };
});

// 2. Luxury Salon (97 cards)
const salonText = fs.readFileSync('src/data/salonServices.ts', 'utf8');
const salonStart = salonText.indexOf('export const SALON_SERVICES: SalonService[] = [');
const salonEnd = salonText.lastIndexOf('];');
const salonArrayStr = salonText.substring(salonStart, salonEnd);

const sBlocks = salonArrayStr.split(/\{\s*id:\s*'/).slice(1);
const salonCards = sBlocks.map(block => {
  const id = block.substring(0, block.indexOf("'"));
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
  const catSlugMatch = block.match(/categorySlug:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/description:\s*['"]([^'"]+)['"]/);
  const imgMatch = block.match(/image:\s*['"]([^'"]+)['"]/);
  
  return {
    section: 'Luxury Salon',
    id,
    name: nameMatch ? nameMatch[1] : id,
    category: catMatch ? catMatch[1] : '',
    categorySlug: catSlugMatch ? catSlugMatch[1] : '',
    description: descMatch ? descMatch[1] : '',
    currentImage: imgMatch ? imgMatch[1] : ''
  };
});

// 3. Other Sections (15 cards)
// 3a. Offers (4)
const offersCards = [
  {
    section: 'Other Website Sections',
    subcategory: 'Curated Packages & Offers',
    id: 'package-bridal-glow',
    name: 'The Royal Bridal Glow Ritual',
    category: 'Exclusive Package',
    description: 'Designed across 4-6 weeks leading up to your wedding day. Includes customized HydraFacial sessions, full-body polishing, de-tan rituals, luxury hair spa, and bridal trial.',
    currentImage: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Curated Packages & Offers',
    id: 'package-skin-rejuvenation',
    name: 'Signature Glass Skin & Hydration Series',
    category: 'Aesthetic Clinic Package',
    description: 'A curated 3-session series combining deep vortex pore extraction, Korean Glass Facial infusion, and targeted LED light therapy for luminous, translucent skin.',
    currentImage: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Curated Packages & Offers',
    id: 'package-gentlemans-grooming',
    name: "The Executive Gentleman's Experience",
    category: 'Luxury Salon Package',
    description: 'Precision haircut by Senior Stylist, beard sculpting & spa, deep cleansing facial, and invigorating hair wash & deep conditioning.',
    currentImage: '/images/services/salon/mens-haircut.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Curated Packages & Offers',
    id: 'package-laser-hair-reduction',
    name: 'Laser Hair Reduction Complete Course',
    category: 'Clinical Package',
    description: 'Special session-bundle pricing for full-body, underarms, or facial laser hair removal courses. Clinically supervised by qualified practitioners.',
    currentImage: '/images/services/laser/laser-hair-removal.jpg'
  }
];

// 3b. Academy (3)
const academyCards = [
  {
    section: 'Other Website Sections',
    subcategory: 'Academy Professional Training',
    id: 'academy-cosmetology-skincare',
    name: 'Diploma in Cosmetology & Clinical Skincare',
    category: 'Academy Training',
    description: 'In-depth foundation covering skin biology, modern aesthetic facial treatments, chemical peel fundamentals, and salon hygiene standards.',
    currentImage: '/images/services/facials/customised-facials.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Academy Professional Training',
    id: 'academy-spmu-masterclass',
    name: 'Masterclass in Semi-Permanent Makeup (SPMU)',
    category: 'Academy Training',
    description: 'Precision artistry training in microblading techniques, lip tinting, shading, color theory, and aftercare management.',
    currentImage: '/images/services/aesthetic/microblading.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Academy Professional Training',
    id: 'academy-hair-styling-texture',
    name: 'Advanced Hair Styling & Texture Transformation',
    category: 'Academy Training',
    description: 'Creative cutting mastery, international balayage application, keratin smoothing protocols, and executive men’s grooming techniques.',
    currentImage: '/images/services/hair/balayage-hair-colour.jpg'
  }
];

// 3c. Blog (6)
const blogCards = [
  {
    section: 'Other Website Sections',
    subcategory: 'Educational Blog Articles',
    id: 'blog-hydrafacial-guide',
    name: 'Complete Guide to HydraFacial: What to Expect',
    category: 'Skincare Blog',
    description: 'HydraFacial is one of the most popular non-invasive skin treatments in the world. Learn what the treatment involves and what to expect.',
    currentImage: '/images/services/facials/hydrafacial-treatment.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Educational Blog Articles',
    id: 'blog-laser-hair-removal-facts',
    name: 'Laser Hair Removal: Facts, Expectations & Aftercare',
    category: 'Laser Treatments Blog',
    description: 'Considering laser hair removal? This guide covers how the treatment works, sessions needed, and required aftercare.',
    currentImage: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Educational Blog Articles',
    id: 'blog-professional-hair-care-tips',
    name: '10 Professional Hair Care Tips from Our Salon Team',
    category: 'Hair Care Blog',
    description: 'Expert advice on maintaining healthy, vibrant hair between salon visits from the master stylists at LA CROWN.',
    currentImage: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Educational Blog Articles',
    id: 'blog-bridal-makeup-guide',
    name: 'Bridal Makeup Consultation: How to Prepare',
    category: 'Bridal Beauty Blog',
    description: 'Everything brides need to know about scheduling trials, skin preparation timelines, and achieving their dream bridal look.',
    currentImage: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Educational Blog Articles',
    id: 'blog-prp-therapy-hair-loss',
    name: 'PRP Therapy for Hair Loss: Understanding the Treatment',
    category: 'Hair Restoration Blog',
    description: 'An evidence-based overview of Platelet-Rich Plasma therapy for androgenetic alopecia and hair thinning.',
    currentImage: '/images/services/hair/prp-therapy.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Educational Blog Articles',
    id: 'blog-skincare-routine-advice',
    name: 'Building a Skincare Routine: Advice from Our Aestheticians',
    category: 'Skincare Routine Blog',
    description: 'How to build an effective daily skincare regimen with cleanser, actives, moisturizer, and broad-spectrum sunscreen.',
    currentImage: '/images/services/facials/korean-glass-facial.jpg'
  }
];

// 3d. Homepage Experience Cards (2)
const homepageCards = [
  {
    section: 'Other Website Sections',
    subcategory: 'Homepage Experience Cards',
    id: 'home-aesthetic-clinic-experience',
    name: 'Aesthetic Clinic Experience — Where Beauty Meets Science',
    category: 'Homepage Feature',
    description: 'Advanced Aesthetic Medicine: Skin Treatments & Medi-Facials, Hair Restoration, Laser Therapies, Anti-Ageing & Body Contouring.',
    currentImage: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    section: 'Other Website Sections',
    subcategory: 'Homepage Experience Cards',
    id: 'home-luxury-salon-experience',
    name: 'Luxury Salon Experience — Artistry, Indulgence & Style',
    category: 'Homepage Feature',
    description: 'Premium Salon Services: Haircuts, Styling & Colour, Spa & Keratin, Facials, Waxing, Nails, Bridal Beauty & Massages.',
    currentImage: '/images/services/hair/balayage-hair-colour.jpg'
  }
];

const all147 = [
  ...aestheticCards,
  ...salonCards,
  ...offersCards,
  ...academyCards,
  ...blogCards,
  ...homepageCards
];

console.log('=== COMPLETE 147 CARDS INVENTORY ===');
console.log(`Aesthetic Clinic Cards: ${aestheticCards.length}`);
console.log(`Luxury Salon Cards: ${salonCards.length}`);
console.log(`Offers Cards: ${offersCards.length}`);
console.log(`Academy Cards: ${academyCards.length}`);
console.log(`Blog Cards: ${blogCards.length}`);
console.log(`Homepage Experience Cards: ${homepageCards.length}`);
console.log(`TOTAL REGISTERED CARDS: ${all147.length}`);

fs.writeFileSync('scratch/all_147_cards.json', JSON.stringify(all147, null, 2));
