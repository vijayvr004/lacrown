// Salon Services Data
// Source: la crown salon menu 2026

export interface SalonService {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  variants?: { name: string; price?: string; note?: string }[];
  price?: string;
  priceNote?: string;
  duration?: string;
  ageGroup?: string;
  consultationRequired?: boolean;
  featured?: boolean;
  image?: string;
}

export const SALON_CATEGORIES = [
  { id: 'baby-pampering', slug: 'baby-pampering', name: "Baby Pampering & Grooming", icon: 'baby' },
  { id: 'mens-haircut', slug: 'mens-haircut', name: "Men's Haircut & Grooming", icon: 'scissors' },
  { id: 'mens-haircare', slug: 'mens-haircare', name: "Men's Hair Care & Colour", icon: 'sparkles' },
  { id: 'womens-haircut', slug: 'womens-haircut', name: "Women's Haircut & Styling", icon: 'scissors' },
  { id: 'womens-haircare', slug: 'womens-haircare', name: "Women's Hair Care & Colour", icon: 'palette' },
  { id: 'threading', slug: 'threading', name: 'Threading & Grooming Essentials', icon: 'eye' },
  { id: 'waxing', slug: 'waxing', name: 'Waxing', icon: 'droplet' },
  { id: 'detan-bleach', slug: 'detan-bleach', name: 'De-Tan & Bleach', icon: 'sun' },
  { id: 'luxury-facials', slug: 'luxury-facials', name: 'Luxury Facials & Skin Peels', icon: 'flower' },
  { id: 'anti-ageing-salon', slug: 'anti-ageing-salon', name: 'Anti-Ageing Beauty Treatments', icon: 'clock' },
  { id: 'hand-foot', slug: 'hand-foot', name: 'Hand & Foot Care', icon: 'hand' },
  { id: 'nails', slug: 'nails', name: 'Nails', icon: 'sparkles' },
  { id: 'eyelash-hair-extensions', slug: 'eyelash-hair-extensions', name: 'Eyelash & Hair Extensions', icon: 'eye' },
  { id: 'body-relaxation', slug: 'body-relaxation', name: 'Body Relaxation & Massages', icon: 'heart' },
  { id: 'body-polishing', slug: 'body-polishing', name: 'Body Polishing', icon: 'star' },
  { id: 'makeup', slug: 'makeup', name: 'Makeup & Bridal Beauty', icon: 'brush' },
  { id: 'kids-grooming', slug: 'kids-grooming', name: "Kids' Pampering & Grooming", icon: 'star' },
  { id: 'loyalty', slug: 'loyalty', name: 'Loyalty Membership & Referrals', icon: 'crown' },
];

export const SALON_SERVICES: SalonService[] = [
  // ─── BABY PAMPERING ───
  {
    id: 'baby-haircut',
    slug: 'baby-haircut',
    name: "Baby / Toddler Haircut",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "Gentle, caring haircut service for toddlers and young children in a comfortable, welcoming environment.",
    ageGroup: 'Children (age ranges as per menu — contact us for details)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-haircut.jpg',
  },
  {
    id: 'royal-baby-massage',
    slug: 'royal-baby-massage',
    name: "Royal Baby Massage",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "A luxurious, gentle massage experience designed specially for babies, promoting relaxation and wellbeing.",
    ageGroup: 'Infants and young children (parent/guardian consent required)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/royal-baby-massage.jpg',
  },
  {
    id: 'baby-milk-bath',
    slug: 'baby-milk-bath',
    name: "Baby Milk Bath",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "A nurturing milk bath ritual for babies, soothing and softening delicate skin.",
    ageGroup: 'Infants (parent/guardian consent required)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-milk-bath.jpg',
  },
  {
    id: 'baby-oil-massage',
    slug: 'baby-oil-massage',
    name: "Baby Oil Massage",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "Gentle oil massage for babies to nourish skin and promote relaxation.",
    ageGroup: 'Infants (parent/guardian consent required)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-oil-massage.jpg'
  },
  {
    id: 'baby-butter-wrap',
    slug: 'baby-butter-wrap',
    name: "Baby Butter Wrap",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "A nourishing butter wrap treatment to deeply moisturise baby's delicate skin.",
    ageGroup: 'Infants and young children (parent/guardian consent required)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-butter-wrap.jpg'
  },
  {
    id: 'baby-bubble-manicure',
    slug: 'baby-bubble-manicure',
    name: "Bubble Manicure (Children)",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "A fun, gentle manicure experience for little ones.",
    ageGroup: 'Children (age as per menu — contact us)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-bubble-manicure.jpg'
  },
  {
    id: 'baby-soft-cleanse-facial',
    slug: 'baby-soft-cleanse-facial',
    name: "Soft Cleanse Facial (Children)",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "A gentle cleansing facial for children using child-safe products.",
    ageGroup: 'Children (age as per menu — contact us)',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-soft-cleanse-facial.jpg'
  },
  {
    id: 'baby-cut-file-polish',
    slug: 'baby-cut-file-polish',
    name: "Cut, File & Polish (Children)",
    category: "Baby Pampering & Grooming",
    categorySlug: 'baby-pampering',
    description: "Gentle nail cut, file, and polish for children.",
    ageGroup: 'Children',
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/baby-cut-file-polish.jpg'
  },

  // ─── MEN'S HAIRCUT ───
  {
    id: 'mens-haircut-junior',
    slug: 'mens-haircut-junior',
    name: "Men's Haircut — Junior Stylist",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Professional men's haircut by our junior stylist team.",
    priceNote: 'Contact us for pricing',
    featured: true,
  },
  {
    id: 'mens-haircut-senior',
    slug: 'mens-haircut-senior',
    name: "Men's Haircut — Senior Stylist",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Men's haircut by our experienced senior stylist team.",
    priceNote: 'Contact us for pricing',
    featured: true,
  },
  {
    id: 'mens-haircut-creative',
    slug: 'mens-haircut-creative',
    name: "Men's Haircut — Creative Director",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Premium men's haircut by our creative director.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'beard-trim',
    slug: 'beard-trim',
    name: "Beard Trim",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Precise beard trimming and shaping for a well-groomed look.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/beard-trim-shape.jpg'
  },
  {
    id: 'clean-shave',
    slug: 'clean-shave',
    name: "Clean Shave",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "A classic, professional clean shave service.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/traditional-clean-shave.jpg'
  },
  {
    id: 'zero-trim',
    slug: 'zero-trim',
    name: "Zero Trim",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Precision zero trim for a clean, sharp look.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/zero-fade-skin-fade.jpg'
  },
  {
    id: 'beard-design',
    slug: 'beard-design',
    name: "Beard Design",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Creative beard design and shaping tailored to your style.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'beard-spa',
    slug: 'beard-spa',
    name: "Beard Spa",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "A nourishing beard spa treatment for healthy, conditioned facial hair.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/beard-spa-ritual.jpg'
  },
  {
    id: 'beard-moustache-colour',
    slug: 'beard-moustache-colour',
    name: "Beard & Moustache Colour",
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    description: "Professional colour for beard and moustache, including grey coverage and fashion shades.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },

  // ─── MEN'S HAIR CARE ───
  {
    id: 'mens-hair-wash',
    slug: 'mens-hair-wash',
    name: "Men's Hair Wash",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Professional hair wash and conditioning service.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-oil-infusion',
    slug: 'mens-oil-infusion',
    name: "Men's Oil Infusion",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Nourishing oil infusion treatment for scalp and hair health.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-nourishing-hair-spa',
    slug: 'mens-nourishing-hair-spa',
    name: "Men's Nourishing Hair Spa",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Deep nourishing hair spa for men to restore moisture and vitality.",
    priceNote: 'Contact us for pricing',
    featured: true,
  },
  {
    id: 'mens-anti-dandruff',
    slug: 'mens-anti-dandruff',
    name: "Men's Anti-Dandruff Control",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Targeted anti-dandruff treatment to address flaking and scalp irritation.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-anti-hairfall',
    slug: 'mens-anti-hairfall',
    name: "Men's Anti-Hair Fall Control",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Targeted hair fall control treatment for men.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-deep-conditioning',
    slug: 'mens-deep-conditioning',
    name: "Men's Hair Deep Conditioning",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Intensive deep conditioning for dry, damaged or stressed hair.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-grey-coverage',
    slug: 'mens-grey-coverage',
    name: "Men's Grey Coverage",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Natural-looking grey coverage colour service for men.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-global-fashion-shades',
    slug: 'mens-global-fashion-shades',
    name: "Men's Global Fashion Shades",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Full head global colour in fashion shades for men.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-highlights-streaks',
    slug: 'mens-highlights-streaks',
    name: "Men's Cap Highlights & Streaks",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Cap highlights and streaks for a natural, sun-kissed or bold look.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-keratin',
    slug: 'mens-keratin',
    name: "Men's Keratin Treatment",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Smoothing keratin treatment for men to control frizz and improve manageability.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-rebonding',
    slug: 'mens-rebonding',
    name: "Men's Re-bonding",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Hair re-bonding for permanently straight, smooth hair.",
    priceNote: 'Contact us for pricing',
    consultationRequired: true,
  },
  {
    id: 'mens-skin-deep-cleansing',
    slug: 'mens-skin-deep-cleansing',
    name: "Men's Deep Cleansing Facial",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Deep cleansing facial for men to remove impurities and refresh skin.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-acne-control-facial',
    slug: 'mens-acne-control-facial',
    name: "Men's Acne Control Facial",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Targeted facial treatment to address acne and blemish concerns for men.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-detan-facial',
    slug: 'mens-detan-facial',
    name: "Men's De-Tan Facial",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "De-tan facial to address sun-induced pigmentation and dullness.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-brightening-facial',
    slug: 'mens-brightening-facial',
    name: "Men's Brightening Facial",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Brightening facial for men targeting uneven tone and dull complexion.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'mens-waxing',
    slug: 'mens-waxing',
    name: "Men's Waxing",
    category: "Men's Hair Care & Colour",
    categorySlug: 'mens-haircare',
    description: "Professional waxing services for men — chest, back, arms, and other areas.",
    priceNote: 'Contact us for pricing',
  },

  // ─── WOMEN'S HAIRCUT ───
  {
    id: 'womens-fringe-bangs',
    slug: 'womens-fringe-bangs',
    name: "Fringe & Bangs",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Precision fringe and bangs cutting for a polished, frame-enhancing look.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'womens-regular-haircut',
    slug: 'womens-regular-haircut',
    name: "Women's Regular Haircut",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Professional women's haircut tailored to your hair type and style.",
    priceNote: 'Contact us for pricing',
    featured: true,
  },
  {
    id: 'womens-creative-haircut',
    slug: 'womens-creative-haircut',
    name: "Women's Creative Haircut",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Creative, fashion-forward haircut with a senior stylist.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'womens-premium-haircut',
    slug: 'womens-premium-haircut',
    name: "Women's Premium Haircut",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Premium haircut experience with our top stylist team.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'blowdry',
    slug: 'blowdry',
    name: "Blow Dry",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Professional blow dry for a smooth, polished finish.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'flat-ironing',
    slug: 'flat-ironing',
    name: "Flat Ironing",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Sleek flat iron styling for straight, smooth hair.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'tonging',
    slug: 'tonging',
    name: "Tonging",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Curl and wave styling using professional tongs.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'crimping',
    slug: 'crimping',
    name: "Crimping",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Textured crimping styling service.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'hair-updo',
    slug: 'hair-updo',
    name: "Hair Up-Do",
    category: "Women's Haircut & Styling",
    categorySlug: 'womens-haircut',
    description: "Elegant hair up-dos for events, occasions, and everyday glamour.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },

  // ─── WOMEN'S HAIR CARE & COLOUR ───
  {
    id: 'womens-hair-wash',
    slug: 'womens-hair-wash',
    name: "Women's Hair Wash & Conditioning",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Professional hair wash and conditioning treatment.",
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'womens-hair-spa',
    slug: 'womens-hair-spa',
    name: "Women's Hair Spa",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Relaxing and restorative hair spa treatment.",
    priceNote: 'Contact us for pricing',
    featured: true,
  },
  {
    id: 'womens-nourishing-hair-spa',
    slug: 'womens-nourishing-hair-spa',
    name: "Nourishing Hair Spa",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Deeply nourishing hair spa with intensive moisture replenishment.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'womens-repairing-hair-spa',
    slug: 'womens-repairing-hair-spa',
    name: "Repairing Hair Spa",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Targeted repairing hair spa for damaged, stressed or chemically treated hair.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'womens-anti-dandruff',
    slug: 'womens-anti-dandruff',
    name: "Anti-Dandruff Control",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Targeted anti-dandruff scalp treatment.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'womens-anti-hairfall',
    slug: 'womens-anti-hairfall',
    name: "Anti-Hair Fall Control",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Targeted hair fall control treatment for women.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'grey-coverage',
    slug: 'grey-coverage',
    name: "Grey Coverage",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Natural-looking grey coverage colour service.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'root-touch-up',
    slug: 'root-touch-up',
    name: "Root Touch-Up",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Precise root touch-up colour to blend regrowth seamlessly.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'global-colour',
    slug: 'global-colour',
    name: "Global Hair Colour",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Full head global hair colour in natural or fashion shades.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'highlights',
    slug: 'highlights',
    name: "Highlights",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Expertly placed highlights for dimension and brightness.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'balayage',
    slug: 'balayage',
    name: "Balayage",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Hand-painted balayage for a natural, sun-kissed colour effect.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'ombre',
    slug: 'ombre',
    name: "Ombré",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Seamless ombré colour transition for a gradient effect.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'colour-correction',
    slug: 'colour-correction',
    name: "Colour Correction",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Expert colour correction to fix uneven or unwanted colour results.",
    priceNote: 'Price on consultation — varies by complexity',
    consultationRequired: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'colour-toning',
    slug: 'colour-toning',
    name: "Colour Toning",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Toning service to neutralise unwanted tones and refresh colour.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'keratin-treatment',
    slug: 'keratin-treatment',
    name: "Keratin Treatment",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Professional keratin smoothing treatment to reduce frizz and improve hair texture.",
    priceNote: 'Contact us for pricing',
    featured: true,
    consultationRequired: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'rebonding',
    slug: 'rebonding',
    name: "Re-bonding",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Permanent hair straightening re-bonding treatment.",
    priceNote: 'Contact us for pricing',
    consultationRequired: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'texture-transformation',
    slug: 'texture-transformation',
    name: "Texture Transformation",
    category: "Women's Hair Care & Colour",
    categorySlug: 'womens-haircare',
    description: "Personalised hair texture transformation service including smoothing and straightening options.",
    priceNote: 'Price on consultation',
    consultationRequired: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },

  // ─── THREADING ───
  {
    id: 'eyebrow-threading',
    slug: 'eyebrow-threading',
    name: "Eyebrow Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Precise eyebrow shaping using threading technique.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'upper-lip-threading',
    slug: 'upper-lip-threading',
    name: "Upper Lip Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Upper lip hair removal by threading.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'lower-lip-threading',
    slug: 'lower-lip-threading',
    name: "Lower Lip Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Lower lip hair removal by threading.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'chin-threading',
    slug: 'chin-threading',
    name: "Chin Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Chin hair removal by threading.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'jawline-threading',
    slug: 'jawline-threading',
    name: "Jawline Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Jawline hair removal by threading.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'sidelocks-threading',
    slug: 'sidelocks-threading',
    name: "Side Locks Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Side lock area hair removal by threading.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'neck-threading',
    slug: 'neck-threading',
    name: "Neck Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Neck hair removal by threading.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/eyebrow-threading.jpg'
  },
  {
    id: 'full-face-threading',
    slug: 'full-face-threading',
    name: "Full Face Threading",
    category: "Threading & Grooming Essentials",
    categorySlug: 'threading',
    description: "Complete full face threading package.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/eyebrow-threading.jpg'
  },

  // ─── WAXING ───
  {
    id: 'face-waxing',
    slug: 'face-waxing',
    name: "Face Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Gentle face waxing for smooth, hair-free facial skin.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'underarm-waxing',
    slug: 'underarm-waxing',
    name: "Underarm Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Effective underarm hair removal by waxing.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'half-arm-waxing',
    slug: 'half-arm-waxing',
    name: "Half Arm Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Waxing for the lower arm.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'full-arm-waxing',
    slug: 'full-arm-waxing',
    name: "Full Arm Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Complete arm waxing for smooth, hair-free arms.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'half-leg-waxing',
    slug: 'half-leg-waxing',
    name: "Half Leg Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Waxing for the lower leg.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'full-leg-waxing',
    slug: 'full-leg-waxing',
    name: "Full Leg Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Complete leg waxing from ankle to thigh.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'back-waxing',
    slug: 'back-waxing',
    name: "Back Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Back hair removal by waxing.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'brazilian-waxing',
    slug: 'brazilian-waxing',
    name: "Brazilian Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Complete Brazilian waxing service in a private, professional environment.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },
  {
    id: 'bikini-waxing',
    slug: 'bikini-waxing',
    name: "Bikini Waxing",
    category: "Waxing",
    categorySlug: 'waxing',
    description: "Bikini line waxing for a clean, neat finish.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/laser/laser-hair-removal.jpg'
  },

  // ─── DE-TAN & BLEACH ───
  {
    id: 'face-detan',
    slug: 'face-detan',
    name: "Face De-Tan",
    category: "De-Tan & Bleach",
    categorySlug: 'detan-bleach',
    description: "Targeted de-tan treatment for the face to address sun-induced pigmentation.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'full-body-detan',
    slug: 'full-body-detan',
    name: "Full Body De-Tan",
    category: "De-Tan & Bleach",
    categorySlug: 'detan-bleach',
    description: "Comprehensive full body de-tan treatment.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'face-bleach',
    slug: 'face-bleach',
    name: "Face Bleach",
    category: "De-Tan & Bleach",
    categorySlug: 'detan-bleach',
    description: "Professional face bleach treatment to lighten facial hair and brighten skin tone.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'full-body-bleach',
    slug: 'full-body-bleach',
    name: "Full Body Bleach",
    category: "De-Tan & Bleach",
    categorySlug: 'detan-bleach',
    description: "Full body bleach treatment for an even, brightened skin tone.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'arms-detan',
    slug: 'arms-detan',
    name: "Arms De-Tan",
    category: "De-Tan & Bleach",
    categorySlug: 'detan-bleach',
    description: "De-tan treatment for the arms.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'back-detan',
    slug: 'back-detan',
    name: "Back De-Tan",
    category: "De-Tan & Bleach",
    categorySlug: 'detan-bleach',
    description: "De-tan treatment for the back.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },

  // ─── LUXURY FACIALS (Salon) ───
  {
    id: 'salon-basic-facial',
    slug: 'salon-basic-facial',
    name: "Basic Facial",
    category: "Luxury Facials & Skin Peels",
    categorySlug: 'luxury-facials',
    description: "A foundational cleansing and hydration facial suitable for regular skin maintenance.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    id: 'salon-brightening-facial',
    slug: 'salon-brightening-facial',
    name: "Brightening Facial",
    category: "Luxury Facials & Skin Peels",
    categorySlug: 'luxury-facials',
    description: "Brightening facial targeting dullness and uneven skin tone for a radiant complexion.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    id: 'salon-detan-facial',
    slug: 'salon-detan-facial',
    name: "De-Tan Facial",
    category: "Luxury Facials & Skin Peels",
    categorySlug: 'luxury-facials',
    description: "Targeted de-tan facial to address sun-induced pigmentation and dullness.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    id: 'salon-anti-acne-facial',
    slug: 'salon-anti-acne-facial',
    name: "Anti-Acne Facial",
    category: "Luxury Facials & Skin Peels",
    categorySlug: 'luxury-facials',
    description: "Targeted facial treatment to address acne, blemishes and oily skin concerns.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    id: 'salon-luxury-facial',
    slug: 'salon-luxury-facial',
    name: "Luxury Facial",
    category: "Luxury Facials & Skin Peels",
    categorySlug: 'luxury-facials',
    description: "A premium, indulgent facial experience using high-quality products and advanced techniques.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/facials/korean-glass-facial.jpg'
  },
  {
    id: 'salon-skin-peel',
    slug: 'salon-skin-peel',
    name: "Salon Skin Peel",
    category: "Luxury Facials & Skin Peels",
    categorySlug: 'luxury-facials',
    description: "Professional skin peel treatment for exfoliation and skin renewal. (Note: Salon skin peels are cosmetic treatments distinct from medical-grade chemical peels.)",
    priceNote: 'Contact us for pricing',
    consultationRequired: false,
    image: '/images/services/facials/korean-glass-facial.jpg'
  },

  // ─── ANTI-AGEING (Salon) ───
  {
    id: 'salon-anti-ageing-facial',
    slug: 'salon-anti-ageing-facial',
    name: "Anti-Ageing Beauty Facial",
    category: "Anti-Ageing Beauty Treatments",
    categorySlug: 'anti-ageing-salon',
    description: "A luxurious salon anti-ageing facial using premium actives to address fine lines, dullness, and loss of firmness. Suitable for all genders.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/facials/anti-ageing-treatment.jpg'
  },
  {
    id: 'salon-firming-treatment',
    slug: 'salon-firming-treatment',
    name: "Firming & Lifting Treatment",
    category: "Anti-Ageing Beauty Treatments",
    categorySlug: 'anti-ageing-salon',
    description: "Salon-grade firming treatment to support skin tone and radiance.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/anti-ageing-treatment.jpg'
  },
  {
    id: 'salon-eye-treatment',
    slug: 'salon-eye-treatment',
    name: "Eye Revitalising Treatment",
    category: "Anti-Ageing Beauty Treatments",
    categorySlug: 'anti-ageing-salon',
    description: "Targeted eye treatment to address dark circles, puffiness, and fine lines around the eye area.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/anti-ageing-treatment.jpg'
  },

  // ─── HAND & FOOT CARE ───
  {
    id: 'basic-manicure',
    slug: 'basic-manicure',
    name: "Basic Manicure",
    category: "Hand & Foot Care",
    categorySlug: 'hand-foot',
    description: "Classic manicure including soak, cuticle care, nail shaping, and polish.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'spa-manicure',
    slug: 'spa-manicure',
    name: "Spa Manicure",
    category: "Hand & Foot Care",
    categorySlug: 'hand-foot',
    description: "Relaxing spa manicure with exfoliation, mask, and massage.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'luxury-manicure',
    slug: 'luxury-manicure',
    name: "Luxury Manicure",
    category: "Hand & Foot Care",
    categorySlug: 'hand-foot',
    description: "Premium manicure experience with high-end products and extended care.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'basic-pedicure',
    slug: 'basic-pedicure',
    name: "Basic Pedicure",
    category: "Hand & Foot Care",
    categorySlug: 'hand-foot',
    description: "Classic pedicure with soak, callus removal, nail care, and polish.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/luxury-pedicure.jpg'
  },
  {
    id: 'spa-pedicure',
    slug: 'spa-pedicure',
    name: "Spa Pedicure",
    category: "Hand & Foot Care",
    categorySlug: 'hand-foot',
    description: "Indulgent spa pedicure with exfoliation, mask, and foot massage.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/luxury-pedicure.jpg'
  },
  {
    id: 'luxury-pedicure',
    slug: 'luxury-pedicure',
    name: "Luxury Pedicure",
    category: "Hand & Foot Care",
    categorySlug: 'hand-foot',
    description: "Premium pedicure with high-end products and extended relaxation.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/luxury-pedicure.jpg'
  },

  // ─── NAILS ───
  {
    id: 'gel-nails',
    slug: 'gel-nails',
    name: "Gel Nails",
    category: "Nails",
    categorySlug: 'nails',
    description: "Long-lasting gel nail application for beautiful, chip-resistant colour.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'acrylic-nails',
    slug: 'acrylic-nails',
    name: "Acrylic Nails",
    category: "Nails",
    categorySlug: 'nails',
    description: "Strong acrylic nail extension service for added length and strength.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'nail-art',
    slug: 'nail-art',
    name: "Nail Art",
    category: "Nails",
    categorySlug: 'nails',
    description: "Creative nail art designs — from subtle to statement looks.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'nail-polish',
    slug: 'nail-polish',
    name: "Nail Polish",
    category: "Nails",
    categorySlug: 'nails',
    description: "Classic nail polish application in a wide range of colours.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },
  {
    id: 'nail-extensions',
    slug: 'nail-extensions',
    name: "Nail Extensions",
    category: "Nails",
    categorySlug: 'nails',
    description: "Custom nail extensions for added length and style.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/salon/spa-manicure-nail-care.jpg'
  },

  // ─── EYELASH & HAIR EXTENSIONS ───
  {
    id: 'salon-eyelash-extensions',
    slug: 'salon-eyelash-extensions',
    name: "Eyelash Extensions",
    category: "Eyelash & Hair Extensions",
    categorySlug: 'eyelash-hair-extensions',
    description: "Professional eyelash extensions for enhanced volume, length, and definition.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/aesthetic/eyelash-extensions.jpg'
  },
  {
    id: 'hair-extensions',
    slug: 'hair-extensions',
    name: "Hair Extensions",
    category: "Eyelash & Hair Extensions",
    categorySlug: 'eyelash-hair-extensions',
    description: "Premium hair extensions for added length and volume.",
    priceNote: 'Price on consultation — varies by method and length',
    consultationRequired: true,
    featured: true,
    image: '/images/services/hair/balayage-hair-colour.jpg'
  },
  {
    id: 'lash-lift',
    slug: 'lash-lift',
    name: "Lash Lift",
    category: "Eyelash & Hair Extensions",
    categorySlug: 'eyelash-hair-extensions',
    description: "Lash lifting treatment to curl and lift natural lashes for an open-eyed effect.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/aesthetic/microblading-eyebrow.jpg'
  },

  // ─── BODY RELAXATION ───
  {
    id: 'swedish-massage',
    slug: 'swedish-massage',
    name: "Swedish Massage",
    category: "Body Relaxation & Massages",
    categorySlug: 'body-relaxation',
    description: "Classic Swedish massage for full-body relaxation and stress relief.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/aesthetic/body-slimming-contouring.jpg'
  },
  {
    id: 'deep-tissue-massage',
    slug: 'deep-tissue-massage',
    name: "Deep Tissue Massage",
    category: "Body Relaxation & Massages",
    categorySlug: 'body-relaxation',
    description: "Therapeutic deep tissue massage targeting muscle tension and knots.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/aesthetic/body-slimming-contouring.jpg'
  },
  {
    id: 'aromatherapy-massage',
    slug: 'aromatherapy-massage',
    name: "Aromatherapy Massage",
    category: "Body Relaxation & Massages",
    categorySlug: 'body-relaxation',
    description: "Relaxing aromatherapy massage using essential oils for mind and body balance.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/aesthetic/body-slimming-contouring.jpg'
  },
  {
    id: 'head-massage',
    slug: 'head-massage',
    name: "Head Massage",
    category: "Body Relaxation & Massages",
    categorySlug: 'body-relaxation',
    description: "Relaxing scalp and head massage to relieve tension.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/aesthetic/body-slimming-contouring.jpg'
  },
  {
    id: 'foot-reflexology',
    slug: 'foot-reflexology',
    name: "Foot Reflexology",
    category: "Body Relaxation & Massages",
    categorySlug: 'body-relaxation',
    description: "Therapeutic foot reflexology for relaxation and wellbeing.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/aesthetic/body-slimming-contouring.jpg'
  },

  // ─── BODY POLISHING ───
  {
    id: 'full-body-polish',
    slug: 'full-body-polish',
    name: "Full Body Polishing",
    category: "Body Polishing",
    categorySlug: 'body-polishing',
    description: "Luxurious full body polishing treatment using exfoliating scrubs and nourishing masks for silky, glowing skin.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'back-polish',
    slug: 'back-polish',
    name: "Back Polishing",
    category: "Body Polishing",
    categorySlug: 'body-polishing',
    description: "Targeted back exfoliation and polishing treatment.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },
  {
    id: 'luxury-body-polish',
    slug: 'luxury-body-polish',
    name: "Luxury Body Polishing",
    category: "Body Polishing",
    categorySlug: 'body-polishing',
    description: "A premium body polishing ritual with high-end exfoliants and skin-nourishing treatments.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/facials/clinical-chemical-peel.jpg'
  },

  // ─── MAKEUP ───
  {
    id: 'party-makeup',
    slug: 'party-makeup',
    name: "Party Makeup",
    category: "Makeup & Bridal Beauty",
    categorySlug: 'makeup',
    description: "Glamorous party makeup for events, celebrations, and special occasions.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    id: 'engagement-makeup',
    slug: 'engagement-makeup',
    name: "Engagement Makeup",
    category: "Makeup & Bridal Beauty",
    categorySlug: 'makeup',
    description: "Elegant engagement makeup for one of your most special occasions.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    id: 'bridal-makeup',
    slug: 'bridal-makeup',
    name: "Bridal Makeup",
    category: "Makeup & Bridal Beauty",
    categorySlug: 'makeup',
    description: "Exquisite bridal makeup tailored to your wedding day vision — from traditional to contemporary looks.",
    priceNote: 'Price on consultation — bespoke packages available',
    consultationRequired: true,
    featured: true,
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    id: 'reception-makeup',
    slug: 'reception-makeup',
    name: "Reception Makeup",
    category: "Makeup & Bridal Beauty",
    categorySlug: 'makeup',
    description: "Stunning reception makeup for the celebration after your wedding.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    id: 'airbrush-makeup',
    slug: 'airbrush-makeup',
    name: "Airbrush Makeup",
    category: "Makeup & Bridal Beauty",
    categorySlug: 'makeup',
    description: "Flawless, long-lasting airbrush makeup application for a perfect finish.",
    priceNote: 'Contact us for pricing',
    featured: true,
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    id: 'saree-draping',
    slug: 'saree-draping',
    name: "Saree Draping",
    category: "Makeup & Bridal Beauty",
    categorySlug: 'makeup',
    description: "Expert saree draping in various regional and contemporary styles.",
    priceNote: 'Contact us for pricing',
    image: '/images/services/makeup/bridal-makeup.jpg'
  },

  // ─── KIDS GROOMING ───
  {
    id: 'kids-haircut',
    slug: 'kids-haircut',
    name: "Kids' Haircut",
    category: "Kids' Pampering & Grooming",
    categorySlug: 'kids-grooming',
    description: "Gentle, fun haircut service for children in a welcoming environment.",
    ageGroup: 'Children',
    priceNote: 'Contact us for pricing',
    featured: true,
  },
  {
    id: 'kids-hair-wash',
    slug: 'kids-hair-wash',
    name: "Kids' Hair Wash & Style",
    category: "Kids' Pampering & Grooming",
    categorySlug: 'kids-grooming',
    description: "Gentle hair wash and styling for children.",
    ageGroup: 'Children',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'kids-nail-care',
    slug: 'kids-nail-care',
    name: "Kids' Nail Care",
    category: "Kids' Pampering & Grooming",
    categorySlug: 'kids-grooming',
    description: "Safe, gentle nail care service for children.",
    ageGroup: 'Children',
    priceNote: 'Contact us for pricing',
  },

  // ─── LOYALTY ───
  {
    id: 'loyalty-membership',
    slug: 'loyalty-membership',
    name: "Loyalty Membership",
    category: "Loyalty Membership & Referrals",
    categorySlug: 'loyalty',
    description: "Join the LA CROWN Loyalty Programme and enjoy exclusive member benefits. Contact us for current programme details and terms.",
    priceNote: 'Contact us for membership details',
    featured: false,
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
  {
    id: 'referral-programme',
    slug: 'referral-programme',
    name: "Referral Programme",
    category: "Loyalty Membership & Referrals",
    categorySlug: 'loyalty',
    description: "Refer a friend to LA CROWN and enjoy exclusive rewards. Contact us for current referral programme terms and conditions.",
    priceNote: 'Contact us for referral details',
    featured: false,
    image: '/images/services/makeup/bridal-makeup.jpg'
  },
];

export const getSalonServiceBySlug = (slug: string) =>
  SALON_SERVICES.find((s) => s.slug === slug);

export const getSalonServicesByCategory = (categorySlug: string) =>
  SALON_SERVICES.filter((s) => s.categorySlug === categorySlug);

export const getFeaturedSalonServices = () =>
  SALON_SERVICES.filter((s) => s.featured);
