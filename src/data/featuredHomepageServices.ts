export interface HomepageFeaturedService {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  priceNote: string;
}

export const FEATURED_AESTHETIC_HOMEPAGE: HomepageFeaturedService[] = [
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    description: 'Advanced hair transplantation procedures to restore natural-looking hair density and coverage.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/hair-transplant-bio-fue.jpg',
    slug: 'hair-transplant',
    category: 'Hair Restoration & Scalp',
    priceNote: 'Price on consultation — varies based on individual assessment and procedure extent'
  },
  {
    id: 'prp-therapy',
    name: 'PRP Therapy',
    description: "Platelet-Rich Plasma therapy using your own blood's growth factors to stimulate hair follicle health and support hair growth.",
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/prp-therapy.jpg',
    slug: 'prp-therapy',
    category: 'Hair Restoration & Scalp',
    priceNote: 'Price on consultation'
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    description: 'The globally renowned multi-step facial treatment that cleanses, exfoliates, extracts, and hydrates simultaneously for visibly radiant skin.',
    image: '/images/lacrown/aesthetic-clinic/facials/hydrafacial.jpg',
    slug: 'hydrafacial',
    category: 'Facials & Medi-Facials',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'korean-glass-facial',
    name: 'Korean Glass Facial',
    description: 'Inspired by K-beauty, this treatment targets translucent, luminous skin with deep hydration and brightening protocols.',
    image: '/images/lacrown/aesthetic-clinic/facials/korean-glass-facial.jpg',
    slug: 'korean-glass-facial',
    category: 'Facials & Medi-Facials',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'bb-glow-facial',
    name: 'BB Glow Facial',
    description: 'A semi-permanent foundation effect achieved through micro-needling infusion of skin-tone enhancing serums.',
    image: '/images/lacrown/aesthetic-clinic/facials/bb-glow-facial.jpg',
    slug: 'bb-glow-facial',
    category: 'Facials & Medi-Facials',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    description: 'Advanced laser technology for long-term hair reduction across the face and body.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/laser-hair-removal.jpg',
    slug: 'laser-hair-removal',
    category: 'Laser Treatments',
    priceNote: 'Price on consultation — varies by area and number of sessions'
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    description: 'Professional-grade chemical exfoliation treatments to resurface the skin, address pigmentation, acne, and uneven texture.',
    image: '/images/lacrown/aesthetic-clinic/chemical-peels/chemical-peels.jpg',
    slug: 'chemical-peels',
    category: 'Chemical Peels',
    priceNote: 'Price on consultation — varies by peel type'
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    description: 'Injectable treatments to restore facial volume, smooth lines, and enhance facial features.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/dermal-fillers.jpg',
    slug: 'dermal-fillers',
    category: 'Anti-Ageing Treatments',
    priceNote: 'Price on consultation — varies by area and product'
  }
];

export const FEATURED_SALON_HOMEPAGE: HomepageFeaturedService[] = [
  {
    id: 'mens-haircut-junior',
    name: "Men's Haircut — Junior Stylist",
    description: "Professional men's haircut by our junior stylist team.",
    image: '/images/lacrown/luxury-salon/mens-grooming/mens-haircut-junior-stylist.jpg',
    slug: 'mens-haircut-junior',
    category: "Men's Haircut & Grooming",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'mens-haircut-senior',
    name: "Men's Haircut — Senior Stylist",
    description: "Men's haircut by our experienced senior stylist team.",
    image: '/images/lacrown/luxury-salon/mens-grooming/mens-haircut-senior-stylist.jpg',
    slug: 'mens-haircut-senior',
    category: "Men's Haircut & Grooming",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Precise beard trimming and shaping for a well-groomed look.',
    image: '/images/lacrown/luxury-salon/mens-grooming/beard-trim.jpg',
    slug: 'beard-trim',
    category: "Men's Haircut & Grooming",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'mens-nourishing-hair-spa',
    name: "Men's Nourishing Hair Spa",
    description: 'Deep nourishing hair spa for men to restore moisture and vitality.',
    image: '/images/lacrown/luxury-salon/mens-haircare/mens-nourishing-hair-spa.jpg',
    slug: 'mens-nourishing-hair-spa',
    category: "Men's Hair Care & Colour",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-regular-haircut',
    name: "Women's Regular Haircut",
    description: "Professional women's haircut tailored to your hair type and style.",
    image: '/images/lacrown/luxury-salon/womens-hair/womens-regular-haircut.jpg',
    slug: 'womens-regular-haircut',
    category: "Women's Haircut & Styling",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'blowdry',
    name: 'Blow Dry',
    description: 'Professional blow dry for a smooth, polished finish.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-blowdry.webp',
    slug: 'blowdry',
    category: "Women's Haircut & Styling",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'hair-updo',
    name: 'Hair Up-Do',
    description: 'Elegant hair up-dos for events, occasions, and everyday glamour.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-hair-updo.webp',
    slug: 'hair-updo',
    category: "Women's Haircut & Styling",
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-hair-spa',
    name: "Women's Hair Spa",
    description: 'Relaxing and restorative hair spa treatment.',
    image: '/images/lacrown/luxury-salon/womens-hair/womens-hair-spa.jpg',
    slug: 'womens-hair-spa',
    category: "Women's Hair Care & Colour",
    priceNote: 'Contact us for pricing'
  }
];
