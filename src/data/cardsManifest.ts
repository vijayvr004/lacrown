import { getAssetUrl } from '../utils/imageUrl';

export interface CardRecord {
  id: string;
  section: 'Aesthetic Clinic' | 'Luxury Salon' | 'Other Website Sections';
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  price?: string;
  priceNote?: string;
  featured?: boolean;
  badge?: string;
}

export const CARDS_MANIFEST: CardRecord[] = [
  // ==========================================
  // SECTION A: AESTHETIC CLINIC (35 CARDS)
  // ==========================================
  {
    id: 'hair-transplant',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'Hair Transplant Consultation',
    description: 'Surgical hair restoration consultation assessing follicular density, donor suitability, and procedure planning for permanent results.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/hair-transplant-bio-fue.png',
    alt: 'Professional clinical hair restoration consultation at LA CROWN Aesthetic Clinic',
    priceNote: 'Price on consultation',
    featured: true,
    badge: 'Clinical'
  },
  {
    id: 'bio-fue',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'Bio FUE Hair Transplant',
    description: 'Follicular Unit Extraction combined with autologous platelet growth factors to support graft survival and promote natural hairline regrowth.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/hair-transplant-bio-fue.png',
    alt: 'Bio FUE hair transplant procedure with platelet enrichment in clinical setting',
    priceNote: 'Price on consultation',
    featured: true
  },
  {
    id: 'prp-therapy',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'PRP Hair Restoration',
    description: 'Autologous platelet-rich plasma concentrated from your blood and micro-injected into the scalp to stimulate dormant follicles.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/prp-therapy.png',
    alt: 'PRP scalp micro-injection therapy for hair rejuvenation at LA CROWN',
    priceNote: 'Per session / packages available',
    featured: true,
    badge: 'Popular'
  },
  {
    id: 'gfc-therapy',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'GFC Hair Therapy',
    description: 'Next-generation Growth Factor Concentrate derived from your platelets, delivering high concentrations of targeted growth factors to the scalp.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/gfc-therapy.png',
    alt: 'Advanced Growth Factor Concentrate GFC scalp treatment in clinic',
    priceNote: 'Per session / package available',
    featured: true
  },
  {
    id: 'mesotherapy',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'Hair Mesotherapy',
    description: 'Micro-injections of pharmaceutical-grade vitamins, minerals, amino acids, and DHT blockers delivered directly into the dermal scalp layer.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/mesotherapy.png',
    alt: 'Targeted scalp mesotherapy micro-nutrient infusion for thinning hair',
    priceNote: 'Per session'
  },
  {
    id: 'stem-cell-therapy',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'Stem Cell Hair Therapy',
    description: 'Advanced regenerative hair treatment utilizing concentrated biological factors to awaken dormant hair follicles and improve hair density.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/stem-cell-therapy.png',
    alt: 'Regenerative biological stem cell scalp therapy session',
    priceNote: 'Price on consultation'
  },
  {
    id: 'scalp-micro-pigmentation',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'Scalp Micro-Pigmentation',
    description: 'Precision medical cosmetic pigmentation creating the natural appearance of hair follicles on thinning scalps or defined shaved hairlines.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/scalp-micro-pigmentation.png',
    alt: 'Scalp micro-pigmentation SMP follicle density recreation',
    priceNote: 'Per area assessed'
  },
  {
    id: 'high-frequency-therapy',
    section: 'Aesthetic Clinic',
    category: 'Hair Restoration & Scalp',
    categorySlug: 'hair-restoration',
    title: 'High-Frequency Scalp Therapy',
    description: 'Gentle electrical stimulation therapy designed to enhance scalp micro-circulation, eliminate surface microbes, and invigorate hair roots.',
    image: '/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-high-frequency-therapy.webp',
    alt: 'High frequency electro-stimulation scalp therapy wand in action',
    priceNote: 'Per session'
  },
  {
    id: 'aesthetic-grooming-essentials',
    section: 'Aesthetic Clinic',
    category: 'Skin & Aesthetic Grooming',
    categorySlug: 'skin-aesthetic',
    title: 'Aesthetic Grooming Essentials',
    description: 'Clinical skin preparation, deep cleansing, and dermatological grooming to maintain clear, healthy skin and refined pores.',
    image: '/images/lacrown/aesthetic-clinic/skin-grooming/aesthetic-grooming-essentials.png',
    alt: 'Aesthetic clinical skin grooming and pore refinement treatment',
    priceNote: 'From ₹1,800',
    featured: true
  },
  {
    id: 'hydrafacial',
    section: 'Aesthetic Clinic',
    category: 'Facials & Medi-Facials',
    categorySlug: 'facials',
    title: 'HydraFacial',
    description: 'Patented 3-step Vortex-Fusion protocol: deep pore extraction, lactic and glycolic acid peel, and antioxidant serum saturation for immediate glow.',
    image: '/images/lacrown/aesthetic-clinic/facials/hydrafacial.png',
    alt: 'HydraFacial vortex hydradermabrasion facial treatment in clinic',
    priceNote: 'From ₹4,500',
    featured: true,
    badge: 'Signature'
  },
  {
    id: 'korean-glass-facial',
    section: 'Aesthetic Clinic',
    category: 'Facials & Medi-Facials',
    categorySlug: 'facials',
    title: 'Korean Glass Skin Facial',
    description: 'Multi-layer hyaluronic acid infusion, LED therapy, and botanical skin boosters that create translucent, reflective, glass-like radiance.',
    image: '/images/lacrown/aesthetic-clinic/facials/korean-glass-facial.png',
    alt: 'Korean glass skin hydrating glow facial with luminous skin finish',
    priceNote: 'From ₹3,800',
    featured: true,
    badge: 'Trending'
  },
  {
    id: 'bb-glow-facial',
    section: 'Aesthetic Clinic',
    category: 'Facials & Medi-Facials',
    categorySlug: 'facials',
    title: 'BB Glow Facial',
    description: 'Semi-permanent tinted serum infusion via nano-needling to even skin tone, reduce redness, and deliver a smooth foundation finish.',
    image: '/images/lacrown/aesthetic-clinic/facials/bb-glow-facial.png',
    alt: 'BB Glow nano-needling radiance infusion facial treatment',
    priceNote: 'From ₹3,500'
  },
  {
    id: 'vampire-facial',
    section: 'Aesthetic Clinic',
    category: 'Facials & Medi-Facials',
    categorySlug: 'facials',
    title: 'Vampire Facial (PRP Facial)',
    description: 'Micro-needling combined with autologous platelet-rich plasma (PRP) to stimulate collagen synthesis and dramatically improve skin firmness.',
    image: '/images/lacrown/aesthetic-clinic/facials/vampire-facial.png',
    alt: 'Clinical PRP vampire facial micro-needling collagen stimulation',
    priceNote: 'Price on consultation',
    featured: true
  },
  {
    id: 'collagen-boost-facial',
    section: 'Aesthetic Clinic',
    category: 'Facials & Medi-Facials',
    categorySlug: 'facials',
    title: 'Collagen Boost Medi-Facial',
    description: 'Peptide complex infusion with radiofrequency skin warming to stimulate natural collagen architecture, firm contours, and soften fine lines.',
    image: '/images/lacrown/aesthetic-clinic/facials/aesthetic-collagen-boost-facial.webp',
    alt: 'Collagen boost medi-facial with radiofrequency dermal warming',
    priceNote: 'From ₹3,200'
  },
  {
    id: 'customised-facials',
    section: 'Aesthetic Clinic',
    category: 'Facials & Medi-Facials',
    categorySlug: 'facials',
    title: 'Customised Medi-Facial',
    description: 'Tailored facial protocol created after clinical skin analysis, targeting pigmentation, acne, barrier damage, or deep dehydration.',
    image: '/images/lacrown/aesthetic-clinic/facials/aesthetic-customised-facials.webp',
    alt: 'Customised aesthetic medi-facial formulated for individual skin concerns',
    priceNote: 'From ₹2,800'
  },
  {
    id: 'laser-hair-removal',
    section: 'Aesthetic Clinic',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    title: 'Laser Hair Removal',
    description: 'Triple-wavelength diode laser with chilled sapphire contact cooling for painless, permanent hair reduction across all skin tones.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-laser-hair-removal.webp',
    alt: 'Professional triple-wavelength diode laser hair removal session',
    priceNote: 'From ₹1,500 (per area)',
    featured: true,
    badge: 'Popular'
  },
  {
    id: 'pico-laser',
    section: 'Aesthetic Clinic',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    title: 'Pico Laser Treatment',
    description: 'Picosecond photoacoustic laser targeting stubborn melasma, sun damage, deep dermal pigmentation, and post-inflammatory acne marks.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-pico-laser.webp',
    alt: 'Pico laser photoacoustic pigmentation and melasma treatment',
    priceNote: 'Price on consultation',
    featured: true
  },
  {
    id: 'co2-laser',
    section: 'Aesthetic Clinic',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    title: 'Fractional CO2 Laser',
    description: 'Ablative fractional resurfacing that creates micro-thermal treatment zones to smooth deep acne scars, reduce pore size, and tighten skin.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-co2-laser.webp',
    alt: 'Fractional CO2 laser skin resurfacing and acne scar revision',
    priceNote: 'Price on consultation'
  },
  {
    id: 'mole-removal',
    section: 'Aesthetic Clinic',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    title: 'Clinical Mole Removal',
    description: 'Radiofrequency electro-surgical or precision laser removal of benign dermal moles with minimal tissue trauma and optimal cosmetic healing.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-mole-removal.webp',
    alt: 'Precise radiofrequency mole removal in clean clinical environment',
    priceNote: 'Price per lesion'
  },
  {
    id: 'wart-removal',
    section: 'Aesthetic Clinic',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    title: 'Clinical Wart Removal',
    description: 'Precision ablative removal of cutaneous warts, skin tags, and benign lesions using sterile dermatological protocols.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-wart-removal.webp',
    alt: 'Clinical laser wart and skin tag removal by aesthetic clinician',
    priceNote: 'Price per lesion'
  },
  {
    id: 'tattoo-removal',
    section: 'Aesthetic Clinic',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    title: 'Laser Tattoo Removal',
    description: 'High-peak-power Q-switched and picosecond laser pulses fragmenting embedded ink particles for gradual, clear fading with skin preservation.',
    image: '/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-tattoo-removal.webp',
    alt: 'Laser tattoo removal treatment breaking down pigment particles',
    priceNote: 'From ₹2,000 (per session)'
  },
  {
    id: 'chemical-peels',
    section: 'Aesthetic Clinic',
    category: 'Chemical Peels',
    categorySlug: 'chemical-peels',
    title: 'Clinical Chemical Peels',
    description: 'Dermatological resurfacing with customized glycolic, salicylic, lactic, TCA, and mandelic acid complexes for cellular turnover and glow.',
    image: '/images/lacrown/aesthetic-clinic/chemical-peels/chemical-peels.png',
    alt: 'Dermatologist applying clinical chemical peel solution with fan brush',
    priceNote: 'From ₹2,200',
    featured: true
  },
  {
    id: 'vitamin-therapy',
    section: 'Aesthetic Clinic',
    category: 'Anti-Ageing Treatments',
    categorySlug: 'anti-ageing',
    title: 'Vitamin Therapy Infusions',
    description: 'Intravenous or intramuscular micronutrient infusions formulated with Vitamin C, B-Complex, Zinc, and electrolytes for deep cellular radiance.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-vitamin-therapy.webp',
    alt: 'IV vitamin therapy nutrient infusion drip at luxury clinic lounge',
    priceNote: 'From ₹2,500'
  },
  {
    id: 'iv-glutathione',
    section: 'Aesthetic Clinic',
    category: 'Anti-Ageing Treatments',
    categorySlug: 'anti-ageing',
    title: 'IV Glutathione Infusion',
    description: 'High-potency antioxidant IV protocol to neutralize free radicals, reduce systemic melanin production, and illuminate the complexion.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-iv-glutathione.webp',
    alt: 'IV Glutathione antioxidant skin brightening therapy administration',
    priceNote: 'From ₹3,500',
    featured: true
  },
  {
    id: 'iv-cocktail-therapy',
    section: 'Aesthetic Clinic',
    category: 'Anti-Ageing Treatments',
    categorySlug: 'anti-ageing',
    title: 'IV Cocktail Therapy',
    description: 'Curated wellness cocktails (Myers formulation, Beauty Elixir, Immune Shield) restoring cellular hydration and full-body vitality.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-iv-cocktail-therapy.webp',
    alt: 'Comprehensive IV wellness cocktail infusion for skin vitality',
    priceNote: 'From ₹4,000'
  },
  {
    id: 'thread-lift',
    section: 'Aesthetic Clinic',
    category: 'Anti-Ageing Treatments',
    categorySlug: 'anti-ageing',
    title: 'Thread Lift Treatment',
    description: 'Minimally invasive PDO/PLLA polydioxanone absorbable threads placed subcutaneously to lift sagging jowls, cheeks, and neck contours.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-thread-lift.webp',
    alt: 'Clinical thread lift contouring procedure for non-surgical face lift',
    priceNote: 'Price on consultation',
    featured: true
  },
  {
    id: 'dermal-fillers',
    section: 'Aesthetic Clinic',
    category: 'Anti-Ageing Treatments',
    categorySlug: 'anti-ageing',
    title: 'Dermal Fillers',
    description: 'Hyaluronic acid dermal fillers expertly injected to restore lost mid-face volume, enhance lip fullness, and sculpt jawline definition.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-dermal-fillers.webp',
    alt: 'Aesthetic doctor injecting hyaluronic acid dermal filler with micro-cannula',
    priceNote: 'Price per syringe on consultation',
    featured: true
  },
  {
    id: 'botox',
    section: 'Aesthetic Clinic',
    category: 'Anti-Ageing Treatments',
    categorySlug: 'anti-ageing',
    title: 'Botox Wrinkle Relaxers',
    description: 'Botulinum toxin micro-injections relaxing hyperactive facial muscles to smooth forehead lines, crow’s feet, and frown furrows naturally.',
    image: '/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-botox.webp',
    alt: 'Doctor administering anti-wrinkle Botox injection into forehead lines',
    priceNote: 'Price per unit on consultation',
    featured: true
  },
  {
    id: 'emsculpt',
    section: 'Aesthetic Clinic',
    category: 'Body Slimming & Contouring',
    categorySlug: 'body-slimming',
    title: 'EMSculpt Body Contouring',
    description: 'High-Intensity Focused Electromagnetic (HIFEM) technology triggering 20,000 supramaximal muscle contractions in a 30-minute session.',
    image: '/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-emsculpt.webp',
    alt: 'EMSculpt HIFEM electromagnetic body contouring on abdominal muscles',
    priceNote: 'From ₹5,000 (per session)',
    featured: true
  },
  {
    id: 'lipo-laser',
    section: 'Aesthetic Clinic',
    category: 'Body Slimming & Contouring',
    categorySlug: 'body-slimming',
    title: 'Lipo Laser Contouring',
    description: 'Non-invasive low-level diode laser pads placed against stubborn fat deposits to stimulate adipocyte lipid pore emptying and body shaping.',
    image: '/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-lipo-laser.webp',
    alt: 'Lipo laser diode contouring pads positioned on waistline in clinic',
    priceNote: 'From ₹3,500'
  },
  {
    id: 'hifu',
    section: 'Aesthetic Clinic',
    category: 'Body Slimming & Contouring',
    categorySlug: 'body-slimming',
    title: 'HIFU Skin Tightening',
    description: 'High-Intensity Focused Ultrasound delivering thermal coagulation points into the SMAS layer for long-term skin tightening and lifting.',
    image: '/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-hifu.webp',
    alt: 'HIFU ultrasound skin tightening transducer treating jawline and neck',
    priceNote: 'From ₹6,000',
    featured: true
  },
  {
    id: 'cool-sculpting',
    section: 'Aesthetic Clinic',
    category: 'Body Slimming & Contouring',
    categorySlug: 'body-slimming',
    title: 'CoolSculpting Fat Freezing',
    description: 'Controlled cryolipolysis fat freezing technology that crystalizes and permanently eliminates stubborn fat cells without surgery.',
    image: '/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-cool-sculpting.webp',
    alt: 'CoolSculpting cryolipolysis fat freezing applicator session',
    priceNote: 'From ₹8,000',
    featured: true
  },
  {
    id: 'lip-tinting',
    section: 'Aesthetic Clinic',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'semi-permanent-makeup',
    title: 'Semi-Permanent Lip Tinting',
    description: 'Lip blush micropigmentation infusing natural organic pigment to define the vermilion border and provide a permanent natural flush.',
    image: '/images/lacrown/aesthetic-clinic/spmu/aesthetic-lip-tinting.webp',
    alt: 'Semi-permanent lip tinting blush micropigmentation artistry',
    priceNote: 'From ₹7,500'
  },
  {
    id: 'microblading',
    section: 'Aesthetic Clinic',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'semi-permanent-makeup',
    title: 'Eyebrow Microblading',
    description: 'Hair-stroke feathering technique embedding organic mineral pigment to construct realistic, perfectly framed, symmetrical brows.',
    image: '/images/lacrown/aesthetic-clinic/spmu/aesthetic-microblading.webp',
    alt: 'Eyebrow microblading precise feather hair-stroke procedure',
    priceNote: 'From ₹8,500',
    featured: true
  },
  {
    id: 'eyelash-extensions-aesthetic',
    section: 'Aesthetic Clinic',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'semi-permanent-makeup',
    title: 'Clinical Eyelash Extensions',
    description: 'Dermatologically safe semi-permanent lash extensions applied with medical-grade hypoallergenic adhesive for volume and definition.',
    image: '/images/lacrown/aesthetic-clinic/spmu/aesthetic-eyelash-extensions.webp',
    alt: 'Clinical individual eyelash extension application with precision tweezers',
    priceNote: 'From ₹3,500'
  },

  // ==========================================
  // SECTION B: LUXURY SALON (97 CARDS)
  // ==========================================
  // 1. Baby & Toddler Pampering (8 cards)
  {
    id: 'baby-haircut',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Haircut',
    description: 'Gentle, stress-free first haircut experience with child-safe sanitized scissors, patient stylists, and fun distraction seating.',
    image: '/images/lacrown/luxury-salon/baby-toddler/baby-toddler-haircut.png',
    alt: 'Gentle baby first haircut experience in playful, patient salon setting',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'royal-baby-massage',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Royal Baby Massage',
    description: 'Calming pediatric-safe body massage using organic cold-pressed almond and virgin coconut oils to relax muscles and soothe sleep.',
    image: '/images/lacrown/luxury-salon/baby-toddler/royal-baby-massage.png',
    alt: 'Nourishing organic oil baby massage performed by pediatric care specialist',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'baby-milk-bath',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Milk Bath',
    description: 'Warm, nutrient-dense organic oat and almond milk bath that tenderly hydrates delicate infant skin and calms sensitivity.',
    image: '/images/lacrown/luxury-salon/baby-toddler/baby-milk-bath.png',
    alt: 'Soothing warm organic milk and blossom baby bath ritual',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'baby-oil-massage',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Oil Massage',
    description: 'Ayurvedic inspired herbal oil massage formulated specifically for toddlers to improve circulation, joint mobility, and immunity.',
    image: '/images/lacrown/luxury-salon/baby-toddler/baby-oil-massage.png',
    alt: 'Gentle toddler herbal oil massage in warm, comforting environment',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'baby-butter-wrap',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Butter Wrap',
    description: 'Ultra-gentle shea and cocoa butter moisture wrap for tender skin, combating dryness and leaving a protective barrier.',
    image: '/images/lacrown/luxury-salon/baby-toddler/salon-baby-butter-wrap.webp',
    alt: 'Moisturizing natural whipped butter baby wrap and skin pampering',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'baby-bubble-manicure',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Bubble Manicure',
    description: 'Playful warm bubbly soak, gentle nail trimming, soft file, and optional non-toxic water-based peel-off polish for kids.',
    image: '/images/lacrown/luxury-salon/baby-toddler/salon-baby-bubble-manicure.webp',
    alt: 'Fun and safe toddler bubble soak manicure with non-toxic polish',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'baby-soft-cleanse-facial',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Soft Cleanse Facial',
    description: 'Hypoallergenic chamomile and rosewater mist, gentle warm compress, and ultra-mild organic moisturizer massage.',
    image: '/images/lacrown/luxury-salon/baby-toddler/salon-baby-soft-cleanse-facial.webp',
    alt: 'Soothing chamomile gentle cleanse and facial massage for toddlers',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'baby-cut-file-polish',
    section: 'Luxury Salon',
    category: 'Baby & Toddler Pampering',
    categorySlug: 'baby-pampering',
    title: 'Baby Cut, File & Polish',
    description: 'Safe rounded nail clip, gentle glass filing, and non-toxic peelable vibrant child-safe polish application.',
    image: '/images/lacrown/luxury-salon/baby-toddler/salon-baby-cut-file-polish.webp',
    alt: 'Delicate child nail trimming and colorful non-toxic nail polish',
    priceNote: 'Contact us for pricing'
  },

  // 2. Men's Haircut & Grooming (6 cards)
  {
    id: 'mens-haircut-junior',
    section: 'Luxury Salon',
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    title: "Men's Haircut — Junior Stylist",
    description: 'Tailored executive haircut by our junior stylist team including scalp consultation, precision cut, and wash.',
    image: '/images/lacrown/luxury-salon/mens-grooming/mens-haircut-junior-stylist.png',
    alt: "Professional men's haircut and scissor styling session at luxury salon",
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'mens-haircut-senior',
    section: 'Luxury Salon',
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    title: "Men's Haircut — Senior Stylist",
    description: "Expert men's haircut by senior stylists with specialized styling advice, scissor-over-comb texturing, and rinse.",
    image: '/images/lacrown/luxury-salon/mens-grooming/mens-haircut-senior-stylist.png',
    alt: "Senior barber styling executive men's haircut with scissor over comb",
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'mens-haircut-creative',
    section: 'Luxury Salon',
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    title: "Men's Haircut — Creative Director",
    description: "Bespoke architectural men's cut by our creative director, sculpting silhouette, texture, and individual grooming identity.",
    image: '/images/lacrown/luxury-salon/mens-grooming/mens-haircut-creative-director.png',
    alt: 'Creative director sculpting bespoke haircut for sophisticated gentleman',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'beard-trim',
    section: 'Luxury Salon',
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    title: 'Precision Beard Trim & Shape',
    description: 'Clipper and scissor contouring, line-up refinement, cheekbone fading, and premium nourishing beard oil application.',
    image: '/images/lacrown/luxury-salon/mens-grooming/beard-trim.png',
    alt: 'Precision clipper and scissor beard trim and line-up contouring',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'clean-shave',
    section: 'Luxury Salon',
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    title: 'Traditional Clean Shave',
    description: 'Classic straight-razor shave with hot eucalyptus towel prep, rich lathering cream, and soothing aftershave balm.',
    image: '/images/lacrown/luxury-salon/mens-grooming/salon-traditional-clean-shave.webp',
    alt: 'Traditional hot towel straight razor clean shave in luxury barber chair',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'zero-trim',
    section: 'Luxury Salon',
    category: "Men's Haircut & Grooming",
    categorySlug: 'mens-haircut',
    title: 'Zero Fade / Skin Fade',
    description: 'Ultra-smooth skin fade and zero taper transition blending seamlessly from scalp to textured top crown.',
    image: '/images/lacrown/luxury-salon/mens-grooming/salon-zero-fade-skin-fade.webp',
    alt: 'Precision zero fade skin fade taper on gentleman',
    priceNote: 'Contact us for pricing'
  },

  // 3. Women's Haircut, Styling & Texture (21 cards)
  {
    id: 'womens-fringe-bangs',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Fringe & Bangs Styling',
    description: 'Curtain bangs, micro-fringe, or wispy face-framing fringe cut specifically to enhance your facial symmetry and structure.',
    image: '/images/lacrown/luxury-salon/womens-hair/fringe-and-bangs.png',
    alt: 'Hairstylist precision cutting face-framing curtain bangs on woman',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-regular-haircut',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: "Women's Regular Haircut",
    description: 'Clean end trim, split-end removal, subtle layer refreshing, and professional blow-dry styling by our salon team.',
    image: '/images/lacrown/luxury-salon/womens-hair/womens-regular-haircut.png',
    alt: "Professional female hairstylist trimming long glossy brunette hair in salon",
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'womens-creative-haircut',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: "Women's Creative Haircut",
    description: 'Modern textured bobs, shags, wolf cuts, and sculpted long layers personalized to your hair density and movement.',
    image: '/images/lacrown/luxury-salon/womens-hair/womens-creative-haircut.png',
    alt: 'Creative textured bob haircut styling in luxury salon mirror',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-premium-haircut',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: "Women's Premium Director Haircut",
    description: 'Top-tier master director haircut including deep structural hair analysis, bespoke cut, luxury wash, and signature blowout.',
    image: '/images/lacrown/luxury-salon/womens-hair/womens-premium-haircut.png',
    alt: 'Master director styling voluminous luxury blowout haircut on woman',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'blowdry',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Signature Blow Dry',
    description: 'Voluminous bouncy blowout, sleek straight finish, or soft beachy waves using ionic technology and heat protectants.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-blowdry.webp',
    alt: 'Stylist round-brush blow drying shiny voluminous hair with ionic dryer',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'flat-ironing',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Sleek Flat Ironing',
    description: 'Silky glass-hair straight styling with ceramic heat plates, eliminating frizz and imparting a high-gloss mirror shine.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-flat-ironing.webp',
    alt: 'Ceramic flat iron smoothing hair into sleek, reflective glass finish',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'tonging',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Glamour Tonging & Curls',
    description: 'Curling wand barrel styling delivering cascading red-carpet Hollywood waves, romantic ribbons, or relaxed textured curls.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-tonging.webp',
    alt: 'Professional curling iron creating glamorous Hollywood waves in salon',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'crimping',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Micro-Crimping & Root Lift',
    description: 'Micro-textured root crimping creating invisible internal volume and dramatic body for fine hair or elaborate updos.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-crimping.webp',
    alt: 'Micro-crimping textured root volume technique on brunette hair',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'hair-updo',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Artistic Hair Up-Do',
    description: 'Sophisticated chignons, braided crowns, bohemian textured buns, and red-carpet gala updos pinned with flawless hold.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-hair-updo.webp',
    alt: 'Intricate romantic textured bridal updo with delicate pins and highlights',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'womens-hair-wash',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: "Women's Conditioning Hair Wash",
    description: 'Relaxing reclined basin hair wash with clarifying shampoo, acupressure scalp massage, and botanical conditioning rinse.',
    image: '/images/lacrown/luxury-salon/womens-hair/womens-hair-wash-conditioning.png',
    alt: 'Relaxing luxury hair wash and scalp massage at salon shampoo basin',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-hair-spa',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Classic Hair Spa',
    description: 'Deep-conditioning cream mask with ozone micro-mist steam infusion to open hair cuticles and restore moisture to dry locks.',
    image: '/images/lacrown/luxury-salon/womens-hair/womens-hair-spa.png',
    alt: 'Ozone steam micro-mist hair spa treatment with deep moisture mask',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-nourishing-hair-spa',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Nourishing Hair Spa Ritual',
    description: 'Enriched lipid and argan oil mask massaged strand by strand to replenish depleted hair fibers, leaving silk-like suppleness.',
    image: '/images/lacrown/luxury-salon/womens-hair/nourishing-hair-spa.png',
    alt: 'Stylist applying nourishing hair spa mask strand by strand to client',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-repairing-hair-spa',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Repairing Hair Spa Therapy',
    description: 'Intense bond-rebuilding and ceramide treatment repairing damage from bleaching, excessive heat, and environmental stress.',
    image: '/images/lacrown/luxury-salon/womens-hair/repairing-hair-spa.png',
    alt: 'Bond repairing deep hair therapy treatment for chemically treated hair',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-anti-dandruff',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Anti-Dandruff Scalp Treatment',
    description: 'Salicylic scalp exfoliation scrub, zinc pyrithione purifying cleanse, and soothing serum balancing the scalp microbiome.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-dandruff.webp',
    alt: 'Targeted scalp exfoliation and anti-dandruff purifying treatment in salon',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'womens-anti-hairfall',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Anti-Hair Fall Control Spa',
    description: 'Procapil and caffeine peptide scalp serum infusion with micro-circulation massage to fortify weakened roots and reduce shedding.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-hairfall.webp',
    alt: 'Fortifying scalp massage with anti-hair fall peptide serum',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'grey-coverage',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: '100% Grey Coverage Colour',
    description: 'Ammonia-free permanent pigment formulation delivering complete natural grey coverage with rich undertones and multi-dimensional shine.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-grey-coverage.webp',
    alt: 'Precise root application of ammonia-free rich grey coverage colour',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'root-touch-up',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Root Touch-Up',
    description: 'Seamless colour matching applied exclusively to new hair growth regrowth zones for fresh, consistent hair colour maintenance.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-root-touch-up.webp',
    alt: 'Colorist meticulously applying root touch-up dye with brush in salon',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'global-colour',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Global Hair Colour',
    description: 'Uniform all-over hair color transformation from roots to ends with luminous conditioning agents and sealed glossing glaze.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-global-colour.webp',
    alt: 'All-over rich global hair colour transformation on long flowing hair',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'highlights',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Precision Foil Highlights',
    description: 'Micro-fine foil weaves and babylights creating dimensional contrast, lightness, and depth throughout the hair canvas.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-highlights.webp',
    alt: 'Master colorist applying foil weave highlights to hair in salon',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'balayage',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'French Balayage',
    description: 'Artisanal hand-painted sun-kissed gradients blending effortlessly from natural roots to soft honey and caramel ends.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-balayage.webp',
    alt: 'French balayage freehand painting technique with sun-kissed blended tones',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Signature'
  },
  {
    id: 'ombre',
    section: 'Luxury Salon',
    category: "Women's Haircut, Styling & Texture",
    categorySlug: 'womens-haircut',
    title: 'Ombré Colour Melt',
    description: 'Striking two-tone color gradient melting seamlessly from deep chocolate roots to bright, luminous golden ends.',
    image: '/images/lacrown/luxury-salon/womens-hair/salon-ombre.webp',
    alt: 'Smooth ombre color melt gradient from dark roots to golden ends',
    priceNote: 'Contact us for pricing'
  },

  // 4. Threading & Facial Grooming Essentials (8 cards)
  {
    id: 'eyebrow-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Eyebrows Threading & Shaping',
    description: 'Precision 100% antibacterial cotton thread hair removal shaping symmetrical, crisp brow arches tailored to your face.',
    image: '/images/lacrown/luxury-salon/threading/eyebrow-threading.png',
    alt: 'Precision cotton thread eyebrow shaping and arch definition in salon',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'upper-lip-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Upper Lip Threading',
    description: 'Fast, smooth removal of fine upper lip hair from the follicle without chemical irritation, leaving a velvety texture.',
    image: '/images/lacrown/luxury-salon/threading/upper-lip-threading.png',
    alt: 'Gentle upper lip threading hair removal with antibacterial thread',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'lower-lip-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Lower Lip Threading',
    description: 'Delicate removal of stray fuzz and shadow hair beneath the lower lip line for clean skin and smooth lipstick application.',
    image: '/images/lacrown/luxury-salon/threading/lower-lip-threading.png',
    alt: 'Lower lip threading contouring for flawless facial skin canvas',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'chin-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Chin Threading',
    description: 'Targeted removal of stubborn chin and jawline hairs, preventing ingrowns and leaving clean, smooth skin.',
    image: '/images/lacrown/luxury-salon/threading/chin-threading.png',
    alt: 'Clean chin threading hair removal session with calming aloe finish',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'jawline-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Forehead Threading',
    description: 'Refining the hairline and clearing unwanted fine forehead peach fuzz for a bright, open facial appearance.',
    image: '/images/lacrown/luxury-salon/threading/salon-forehead-threading.webp',
    alt: 'Forehead threading defining natural hairline contour and smoothness',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'sidelocks-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Sideburns Threading',
    description: 'Neat sculpting and hair removal on sideburns and temporal contours for elegant side-profile refinement.',
    image: '/images/lacrown/luxury-salon/threading/salon-sides-threading.webp',
    alt: 'Facial sideburns threading and contour shaping session',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'neck-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Neck Threading',
    description: 'Precision clearing of fine baby hairs along the neck and nape, providing a crisp, polished silhouette for updos.',
    image: '/images/lacrown/luxury-salon/threading/salon-neck-threading.webp',
    alt: 'Neck and nape threading creating clean neckline for hairstyles',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'full-face-threading',
    section: 'Luxury Salon',
    category: 'Threading & Facial Grooming Essentials',
    categorySlug: 'threading-grooming',
    title: 'Full Face Threading & Soothing Mask',
    description: 'Complete facial threading covering brows, upper lip, chin, sides, and forehead followed by cooling rose-aloe compress.',
    image: '/images/lacrown/luxury-salon/threading/salon-full-face-threading.webp',
    alt: 'Full face threading service completed with cooling botanical soothe mask',
    priceNote: 'Contact us for pricing',
    featured: true
  },

  // 5. Professional Waxing (9 cards)
  {
    id: 'full-arm-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Full Arms Waxing',
    description: 'Gentle liposoluble chocolate wax hair removal from fingertips to shoulders, leaving soft, smooth skin for up to 4 weeks.',
    image: '/images/lacrown/luxury-salon/waxing/full-arm-waxing.png',
    alt: 'Full arms liposoluble waxing service with soothing botanical post-lotion',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'half-arm-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Half Arms Waxing',
    description: 'Quick, thorough hair removal from wrists to elbows using low-temperature peel-off wax suitable for sensitive skin.',
    image: '/images/lacrown/luxury-salon/waxing/half-arm-waxing.png',
    alt: 'Half arm waxing hair removal on client in comfortable treatment room',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'underarm-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Underarms Waxing',
    description: 'Painless hard stripless wax removing coarse underarm hairs from the root while reducing dark shadow over time.',
    image: '/images/lacrown/luxury-salon/waxing/underarm-waxing.png',
    alt: 'Stripless hard wax underarm hair removal for smooth, clear underarms',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'full-leg-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Full Legs Waxing',
    description: 'Complete leg hair removal from ankles to upper thighs using nourishing wax followed by hydrating massage lotion.',
    image: '/images/lacrown/luxury-salon/waxing/salon-full-legs-waxing.webp',
    alt: 'Full legs waxing treatment leaving silky, hair-free skin finish',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'half-leg-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Half Legs Waxing',
    description: 'Targeted hair removal from feet to above the knee for smooth, bump-free everyday comfort.',
    image: '/images/lacrown/luxury-salon/waxing/salon-half-legs-waxing.webp',
    alt: 'Half leg waxing application with gentle warm wax strip removal',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'face-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Full Front Waxing',
    description: 'Smooth, hygienic hair removal across the torso and abdomen using hypoallergenic wax in a private treatment suite.',
    image: '/images/lacrown/luxury-salon/waxing/face-waxing.png',
    alt: 'Hygienic torso and front waxing in private luxury salon suite',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'back-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Full Back Waxing',
    description: 'Thorough hair removal across the entire back and shoulders with soothing antiseptic tea-tree calming lotion.',
    image: '/images/lacrown/luxury-salon/waxing/salon-full-back-waxing.webp',
    alt: 'Full back waxing treatment with calming tea-tree post-care balm',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'bikini-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Bikini Line / Brazilian Waxing',
    description: 'Ultra-hygienic stripless hot wax administered with utmost privacy and gentle technique for sensitive intimate contours.',
    image: '/images/lacrown/luxury-salon/waxing/salon-bikini-waxing.webp',
    alt: 'Private and gentle bikini line waxing using soothing blue hard wax',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'brazilian-waxing',
    section: 'Luxury Salon',
    category: 'Professional Waxing',
    categorySlug: 'waxing',
    title: 'Full Body Waxing Ritual',
    description: 'Comprehensive head-to-toe waxing package covering arms, legs, back, front, and underarms with nourishing aftercare.',
    image: '/images/lacrown/luxury-salon/waxing/salon-full-body-waxing.webp',
    alt: 'Comprehensive full-body luxury waxing ritual with hydrating post-treatment',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Popular'
  },

  // 6. De-Tan & Skin Bleach (6 cards)
  {
    id: 'face-detan',
    section: 'Luxury Salon',
    category: 'De-Tan & Skin Bleach',
    categorySlug: 'detan-bleach',
    title: 'Face & Neck De-Tan Pack',
    description: 'Kojic and milk protein clarifying mask breaking down sun-induced tan melanin on face and neck for refreshed skin clarity.',
    image: '/images/lacrown/luxury-salon/detan-bleach/face-de-tan.png',
    alt: 'Aesthetician brushing clarifying de-tan milk pack onto face and neck',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'arms-detan',
    section: 'Luxury Salon',
    category: 'De-Tan & Skin Bleach',
    categorySlug: 'detan-bleach',
    title: 'Full Arms De-Tan Therapy',
    description: 'Intense clarifying arm scrub and de-tan wrap restoring natural complexion from shoulder to fingertips after sun exposure.',
    image: '/images/lacrown/luxury-salon/detan-bleach/salon-full-arms-detan.webp',
    alt: 'Full arms clarifying de-tan exfoliation and wrap in luxury salon',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'face-bleach',
    section: 'Luxury Salon',
    category: 'De-Tan & Skin Bleach',
    categorySlug: 'detan-bleach',
    title: 'Half Arms De-Tan',
    description: 'Targeted brightening scrub and pack specifically reversing sun exposure tanning on forearms and hands.',
    image: '/images/lacrown/luxury-salon/detan-bleach/face-bleach.png',
    alt: 'Half arm sun tan reversal treatment with brightening botanical mask',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'full-body-bleach',
    section: 'Luxury Salon',
    category: 'De-Tan & Skin Bleach',
    categorySlug: 'detan-bleach',
    title: 'Full Legs De-Tan Ritual',
    description: 'Full leg exfoliation and de-tan clay mask removing stubborn outdoor tan lines and reviving smooth, even-toned legs.',
    image: '/images/lacrown/luxury-salon/detan-bleach/full-body-bleach.png',
    alt: 'Full legs de-tan mask application and hydrating skin wrap',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'back-detan',
    section: 'Luxury Salon',
    category: 'De-Tan & Skin Bleach',
    categorySlug: 'detan-bleach',
    title: 'Full Back De-Tan & Polishing',
    description: 'Deep-cleansing back scrub, gentle steam, and brightening mask perfect for backless gowns and wedding outfits.',
    image: '/images/lacrown/luxury-salon/detan-bleach/salon-full-back-detan.webp',
    alt: 'Full back clarifying de-tan scrub and polishing for glowing skin',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'full-body-detan',
    section: 'Luxury Salon',
    category: 'De-Tan & Skin Bleach',
    categorySlug: 'detan-bleach',
    title: 'Full Body De-Tan Radiance Ritual',
    description: 'Complete head-to-toe body de-tan exfoliation, brightening body wrap, and steam rinse delivering uniform luminous skin.',
    image: '/images/lacrown/luxury-salon/detan-bleach/full-body-de-tan.png',
    alt: 'Full body luxury de-tan wrap and radiance spa ritual',
    priceNote: 'Contact us for pricing',
    featured: true
  },

  // 7. Luxury Salon Facials & Skin Peels (6 cards)
  {
    id: 'salon-basic-facial',
    section: 'Luxury Salon',
    category: 'Luxury Salon Facials & Skin Peels',
    categorySlug: 'luxury-facials',
    title: 'Express Deep Clean-Up',
    description: 'Essential 45-minute facial including gentle cleansing, enzymatic exfoliation, blackhead extraction, and balancing clay mask.',
    image: '/images/lacrown/luxury-salon/facials/basic-facial.png',
    alt: 'Deep clean-up facial with gentle blackhead extraction and steam',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'salon-brightening-facial',
    section: 'Luxury Salon',
    category: 'Luxury Salon Facials & Skin Peels',
    categorySlug: 'luxury-facials',
    title: 'Organic Fresh Fruit Facial',
    description: 'Enzyme-rich fresh organic fruit pulp pack (papaya, strawberry, orange) replenishing natural vitamins and mild acids.',
    image: '/images/lacrown/luxury-salon/facials/brightening-facial.png',
    alt: 'Organic fresh fruit pulp facial mask nourishing client skin',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'salon-detan-facial',
    section: 'Luxury Salon',
    category: 'Luxury Salon Facials & Skin Peels',
    categorySlug: 'luxury-facials',
    title: 'Skin Radiance Glow Facial',
    description: 'Vitamin C and mulberry extract facial with lymphatic drainage facial massage to brighten dull, fatigued complexions.',
    image: '/images/lacrown/luxury-salon/facials/de-tan-facial.png',
    alt: 'Skin radiance brightening facial massage with citrus vitamin C serum',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'salon-anti-acne-facial',
    section: 'Luxury Salon',
    category: 'Luxury Salon Facials & Skin Peels',
    categorySlug: 'luxury-facials',
    title: '24K Gold Radiance Facial',
    description: 'Opulent gold foil mask, 24K gold serum massage, and thermal mask imparting a rich, regal, celebratory golden radiance.',
    image: '/images/lacrown/luxury-salon/facials/anti-acne-facial.png',
    alt: '24K pure gold leaf luxury facial mask applied to face for bridal glow',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Luxury'
  },
  {
    id: 'salon-luxury-facial',
    section: 'Luxury Salon',
    category: 'Luxury Salon Facials & Skin Peels',
    categorySlug: 'luxury-facials',
    title: 'Diamond Luxury Polishing Facial',
    description: 'Fine diamond dust micro-dermabrasion and cryo-firming mask smoothing coarse skin texture and enhancing light reflection.',
    image: '/images/lacrown/luxury-salon/facials/salon-diamond-luxury-facial.webp',
    alt: 'Diamond micro-dermabrasion polishing wand facial session',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'salon-skin-peel',
    section: 'Luxury Salon',
    category: 'Luxury Salon Facials & Skin Peels',
    categorySlug: 'luxury-facials',
    title: 'Salon Botanical Glow Peel',
    description: 'Superficial fruit acid AHA/BHA peel eliminating dead surface stratum corneum without visible peeling downtime.',
    image: '/images/lacrown/luxury-salon/facials/salon-salon-peel.webp',
    alt: 'Gentle salon botanical AHA skin peel brush application',
    priceNote: 'Contact us for pricing'
  },

  // 8. Anti-Ageing Salon Beauty Treatments (3 cards)
  {
    id: 'salon-anti-ageing-facial',
    section: 'Luxury Salon',
    category: 'Anti-Ageing Salon Beauty Treatments',
    categorySlug: 'anti-ageing-beauty',
    title: 'Cellular Anti-Ageing Facial',
    description: 'Retinol-alternative botanical bakuchiol and ceramide treatment stimulating micro-circulation and smoothing fine lines.',
    image: '/images/lacrown/luxury-salon/anti-ageing/anti-ageing-beauty-facial.png',
    alt: 'Anti-ageing facial treatment with firming massage technique',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'salon-firming-treatment',
    section: 'Luxury Salon',
    category: 'Anti-Ageing Salon Beauty Treatments',
    categorySlug: 'anti-ageing-beauty',
    title: 'Collagen Rejuvenation Facial',
    description: 'Marine collagen biocellulose sheet mask infused with ultrasound waves for deep dermal absorption and plump hydration.',
    image: '/images/lacrown/luxury-salon/anti-ageing/firming-lifting-treatment.png',
    alt: 'Marine collagen sheet mask and ultrasound infusion facial',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'salon-eye-treatment',
    section: 'Luxury Salon',
    category: 'Anti-Ageing Salon Beauty Treatments',
    categorySlug: 'anti-ageing-beauty',
    title: 'Skin Firming & Contour Lift',
    description: 'Microcurrent neuromuscular stimulation and gua sha contouring tightening jawline, cheekbones, and sagging neck tissue.',
    image: '/images/lacrown/luxury-salon/anti-ageing/eye-revitalising-treatment.png',
    alt: 'Microcurrent contouring lifting wand firming jawline and cheeks',
    priceNote: 'Contact us for pricing'
  },

  // 9. Hand & Foot Care (6 cards)
  {
    id: 'basic-manicure',
    section: 'Luxury Salon',
    category: 'Hand & Foot Care',
    categorySlug: 'hand-foot-care',
    title: 'Classic Hand Manicure',
    description: 'Warm essential oil hand soak, cuticle pushing and trimming, nail shaping, light hand massage, and buffing.',
    image: '/images/lacrown/luxury-salon/hand-foot-care/basic-manicure.png',
    alt: 'Classic manicure hand care nail shaping and cuticle treatment',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'spa-manicure',
    section: 'Luxury Salon',
    category: 'Hand & Foot Care',
    categorySlug: 'hand-foot-care',
    title: 'Aromatherapy Spa Manicure',
    description: 'Dead sea salt scrub, rosehip oil soak, moisturizing hand mask with warm electric mitts, and relaxing arm massage.',
    image: '/images/lacrown/luxury-salon/hand-foot-care/spa-manicure.png',
    alt: 'Aromatherapy spa manicure with hand scrub and warm oil massage',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'luxury-manicure',
    section: 'Luxury Salon',
    category: 'Hand & Foot Care',
    categorySlug: 'hand-foot-care',
    title: 'Royal Luxury Paraffin Manicure',
    description: 'Warm therapeutic peach paraffin wax dip sealing in intense moisture, relieving joint tension, and softening hands.',
    image: '/images/lacrown/luxury-salon/hand-foot-care/luxury-manicure.png',
    alt: 'Warm therapeutic paraffin wax hand dip luxury manicure',
    priceNote: 'Contact us for pricing',
    badge: 'Luxury'
  },
  {
    id: 'basic-pedicure',
    section: 'Luxury Salon',
    category: 'Hand & Foot Care',
    categorySlug: 'hand-foot-care',
    title: 'Classic Foot Pedicure',
    description: 'Hydrating bubble foot bath, heel callus buffing, toe nail shaping, cuticle cleanup, and peppermint foot lotion.',
    image: '/images/lacrown/luxury-salon/hand-foot-care/basic-pedicure.png',
    alt: 'Refreshing foot soak and classic pedicure heel callus care',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'spa-pedicure',
    section: 'Luxury Salon',
    category: 'Hand & Foot Care',
    categorySlug: 'hand-foot-care',
    title: 'Aromatherapy Spa Pedicure',
    description: 'Epsom salt soak with lavender petals, volcanic pumice heel scrub, clay foot wrap, and calf acupressure massage.',
    image: '/images/lacrown/luxury-salon/hand-foot-care/salon-spa-pedicure.webp',
    alt: 'Spa pedicure with flower petals foot bath and exfoliating leg scrub',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'luxury-pedicure',
    section: 'Luxury Salon',
    category: 'Hand & Foot Care',
    categorySlug: 'hand-foot-care',
    title: 'Royal Hot Stone Luxury Pedicure',
    description: 'Indulgent volcanic heated stone massage on calves and soles, deep paraffin heel mask, and flawless toenail lacquer.',
    image: '/images/lacrown/luxury-salon/hand-foot-care/salon-luxury-pedicure.webp',
    alt: 'Hot volcanic stone foot massage during luxury pedicure ritual',
    priceNote: 'Contact us for pricing',
    badge: 'Signature'
  },

  // 10. Nails & Nail Art (5 cards)
  {
    id: 'nail-polish',
    section: 'Luxury Salon',
    category: 'Nails & Nail Art',
    categorySlug: 'nails',
    title: 'Nail Cut, File & Polish',
    description: 'Quick nail length reshaping, precision filing, cuticle conditioning oil, and regular long-wear lacquer coat.',
    image: '/images/lacrown/luxury-salon/nails/nail-polish.png',
    alt: 'Nail technician cutting, filing, and applying fresh glossy nail lacquer',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'acrylic-nails',
    section: 'Luxury Salon',
    category: 'Nails & Nail Art',
    categorySlug: 'nails',
    title: 'Classic French Manicure Polish',
    description: 'Timeless sheer nude or baby pink base adorned with crisp, clean white smile-line tip styling on natural or extended nails.',
    image: '/images/lacrown/luxury-salon/nails/acrylic-nails.png',
    alt: 'Elegant classic French polish manicure with clean white tips',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'gel-nails',
    section: 'Luxury Salon',
    category: 'Nails & Nail Art',
    categorySlug: 'nails',
    title: 'High-Gloss Gel Polish',
    description: 'UV/LED light-cured gel enamel delivering chip-resistant mirror shine and 3+ weeks of flawless durability.',
    image: '/images/lacrown/luxury-salon/nails/gel-nails.png',
    alt: 'UV LED curing lamp setting high-gloss chip-resistant gel polish',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'nail-art',
    section: 'Luxury Salon',
    category: 'Nails & Nail Art',
    categorySlug: 'nails',
    title: 'Accent Nail Art (Per Nail)',
    description: 'Hand-painted floral motifs, chrome glaze, foil flakes, Swarovski crystal placement, or minimalist geometric accents.',
    image: '/images/lacrown/luxury-salon/nails/nail-art.png',
    alt: 'Hand-painted delicate nail art design with fine detail brush',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'nail-extensions',
    section: 'Luxury Salon',
    category: 'Nails & Nail Art',
    categorySlug: 'nails',
    title: 'Masterpiece Full Set Nail Art',
    description: 'Custom couture artwork across all 10 fingers: 3D embossing, cat-eye magnetic shimmer, ombre blends, and crystal luxury.',
    image: '/images/lacrown/luxury-salon/nails/salon-full-set-nail-art.webp',
    alt: 'Extravagant couture full set nail art with 3D crystals and gold chrome',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Artistry'
  },

  // 11. Extensions & Lash Artistry (3 cards)
  {
    id: 'salon-eyelash-extensions',
    section: 'Luxury Salon',
    category: 'Extensions & Lash Artistry',
    categorySlug: 'eyelash-hair-extensions',
    title: 'Luxury Lash Extensions',
    description: 'Classic, Hybrid, or Russian Volume silk lash extensions applied strand-by-strand for weightless, fluttery eyes.',
    image: '/images/lacrown/luxury-salon/extensions-lashes/eyelash-extensions.png',
    alt: 'Lash artist placing delicate individual volume lash extensions on client',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'hair-extensions',
    section: 'Luxury Salon',
    category: 'Extensions & Lash Artistry',
    categorySlug: 'eyelash-hair-extensions',
    title: '100% Remy Human Hair Extensions',
    description: 'Seamless tape-in, keratin bond, or micro-bead natural human hair extensions providing instant length and thick fullness.',
    image: '/images/lacrown/luxury-salon/extensions-lashes/hair-extensions.png',
    alt: 'Stylist seamlessly applying 100% Remy human hair tape-in extensions',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'lash-lift',
    section: 'Luxury Salon',
    category: 'Extensions & Lash Artistry',
    categorySlug: 'eyelash-hair-extensions',
    title: 'Keratin Lash Lift & Tint',
    description: 'Perming and tinting natural eyelashes from the root on silicone shields, creating the appearance of longer, darker, curled lashes.',
    image: '/images/lacrown/luxury-salon/extensions-lashes/lash-lift.png',
    alt: 'Keratin lash lift and deep black tint enhancing natural eyelashes',
    priceNote: 'Contact us for pricing'
  },

  // 12. Body Relaxation & Massages (5 cards)
  {
    id: 'head-massage',
    section: 'Luxury Salon',
    category: 'Body Relaxation & Massages',
    categorySlug: 'massages',
    title: 'Ayurvedic Champi Head Massage',
    description: 'Traditional invigorating warm herb-infused oil scalp and neck massage releasing mental tension and encouraging hair growth.',
    image: '/images/lacrown/luxury-salon/massages/head-massage.png',
    alt: 'Traditional relaxing warm herbal oil Indian head massage champi',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'aromatherapy-massage',
    section: 'Luxury Salon',
    category: 'Body Relaxation & Massages',
    categorySlug: 'massages',
    title: 'Back, Neck & Shoulder Relief',
    description: 'Targeted muscular acupressure therapy working out knots and stiffness in the upper back, traps, and cervical neck zone.',
    image: '/images/lacrown/luxury-salon/massages/aromatherapy-massage.png',
    alt: 'Therapist releasing upper back and shoulder knots with acupressure',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'foot-reflexology',
    section: 'Luxury Salon',
    category: 'Body Relaxation & Massages',
    categorySlug: 'massages',
    title: 'Foot Reflexology Massage',
    description: 'Targeted pressure point stimulation on soles and arches that correspond to internal organs, boosting whole-body harmony.',
    image: '/images/lacrown/luxury-salon/massages/salon-foot-reflexology.webp',
    alt: 'Soothing foot reflexology pressure point massage with lavender balm',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'swedish-massage',
    section: 'Luxury Salon',
    category: 'Body Relaxation & Massages',
    categorySlug: 'massages',
    title: 'Swedish Full Body Relaxation Massage',
    description: 'Full-body rhythmic effleurage and petrissage strokes with warm aromatic oils to soothe nervous tension and restore vitality.',
    image: '/images/lacrown/luxury-salon/massages/swedish-massage.png',
    alt: 'Swedish full body relaxation massage with warm aromatic oils',
    priceNote: 'Contact us for pricing',
    featured: true
  },
  {
    id: 'deep-tissue-massage',
    section: 'Luxury Salon',
    category: 'Body Relaxation & Massages',
    categorySlug: 'massages',
    title: 'Deep Tissue Muscle Recovery',
    description: 'Firm, focused pressure and slow deep strokes addressing chronic muscle tightness, athletic strain, and postural tension.',
    image: '/images/lacrown/luxury-salon/massages/deep-tissue-massage.png',
    alt: 'Therapeutic deep tissue muscle massage in serene spa environment',
    priceNote: 'Contact us for pricing',
    featured: true
  },

  // 13. Body Polishing (3 cards)
  {
    id: 'full-body-polish',
    section: 'Luxury Salon',
    category: 'Body Polishing',
    categorySlug: 'body-polishing',
    title: 'Classic Full Body Polishing',
    description: 'Natural walnut and cane sugar full-body scrub sloughing off dead surface cells, followed by a nourishing body butter massage.',
    image: '/images/lacrown/luxury-salon/body-polishing/full-body-polishing.png',
    alt: 'Full body sugar exfoliation scrub and polishing treatment',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'luxury-body-polish',
    section: 'Luxury Salon',
    category: 'Body Polishing',
    categorySlug: 'body-polishing',
    title: '24K Gold Luxury Body Glow Ritual',
    description: 'Opulent colloidal gold body polish and shimmering body oil glaze imparting a velvet texture and radiant luminosity.',
    image: '/images/lacrown/luxury-salon/body-polishing/luxury-body-polishing.png',
    alt: '24K gold shimmering body polish and deep hydration ritual',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Luxury'
  },
  {
    id: 'back-polish',
    section: 'Luxury Salon',
    category: 'Body Polishing',
    categorySlug: 'body-polishing',
    title: 'Signature Bridal Body Polishing',
    description: 'Multi-stage bridal pre-wedding body ritual: micro-crystal scrub, brightening clay mask, warm steam, and floral body cream.',
    image: '/images/lacrown/luxury-salon/body-polishing/back-polishing.png',
    alt: 'Complete pre-wedding bridal body polishing and steam glow session',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Bridal'
  },

  // 14. Makeup & Bridal Beauty (6 cards)
  {
    id: 'party-makeup',
    section: 'Luxury Salon',
    category: 'Makeup & Bridal Beauty',
    categorySlug: 'makeup-bridal',
    title: 'Glam Party Makeup',
    description: 'Sophisticated event makeup tailored for galas, red carpet, and cocktails, featuring flawless skin base, smoky eyes, and pout.',
    image: '/images/lacrown/luxury-salon/bridal-makeup/party-makeup.png',
    alt: 'Glamorous evening party makeup with defined eyes and radiant highlighter',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'engagement-makeup',
    section: 'Luxury Salon',
    category: 'Makeup & Bridal Beauty',
    categorySlug: 'makeup-bridal',
    title: 'Engagement & Sangeet Makeup',
    description: 'Vibrant, camera-ready festive makeup highlighting natural beauty with delicate shimmer, contouring, and long-lasting setting.',
    image: '/images/lacrown/luxury-salon/bridal-makeup/engagement-makeup.png',
    alt: 'Vibrant festive engagement makeup with golden eye shimmer and rose lips',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'reception-makeup',
    section: 'Luxury Salon',
    category: 'Makeup & Bridal Beauty',
    categorySlug: 'makeup-bridal',
    title: 'Wedding Reception Glam Makeup',
    description: 'Modern, high-fashion reception styling pairing glass skin radiance with bold lip luxury and striking eye definition.',
    image: '/images/lacrown/luxury-salon/bridal-makeup/reception-makeup.png',
    alt: 'Couture reception bridal glam with bold lips and sculpted contouring',
    priceNote: 'Contact us for pricing'
  },
  {
    id: 'bridal-makeup',
    section: 'Luxury Salon',
    category: 'Makeup & Bridal Beauty',
    categorySlug: 'makeup-bridal',
    title: 'Signature Royal Bridal Makeup',
    description: 'Bespoke high-definition bridal artistry matching your wedding attire, jewelry, and ceremony lighting for tears-and-sweat-proof perfection.',
    image: '/images/lacrown/luxury-salon/bridal-makeup/bridal-makeup.png',
    alt: 'Royal Indian bride with ornate jewelry and bespoke bridal makeup',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'Signature'
  },
  {
    id: 'airbrush-makeup',
    section: 'Luxury Salon',
    category: 'Makeup & Bridal Beauty',
    categorySlug: 'makeup-bridal',
    title: 'High-Definition Airbrush Bridal Makeup',
    description: 'Micro-fine silicone airbrush foundation delivering weightless, 24-hour waterproof coverage that looks poreless under 4K lenses.',
    image: '/images/lacrown/luxury-salon/bridal-makeup/salon-airbrush-bridal-makeup.webp',
    alt: 'Makeup artist applying flawless airbrush foundation mist on bride',
    priceNote: 'Contact us for pricing',
    featured: true,
    badge: 'HD Airbrush'
  },
  {
    id: 'saree-draping',
    section: 'Luxury Salon',
    category: 'Makeup & Bridal Beauty',
    categorySlug: 'makeup-bridal',
    title: 'Couture Saree Draping & Dupatta Pinning',
    description: 'Flawless pleating and secure pin placement for Kanjeevaram silks, Banarasi weaves, lehengas, and contemporary drape silhouettes.',
    image: '/images/lacrown/luxury-salon/bridal-makeup/salon-saree-draping-styling.webp',
    alt: 'Expert stylist precision pleating and draping silk bridal saree',
    priceNote: 'Contact us for pricing'
  },

  // 15. Memberships & Privileges (2 cards)
  {
    id: 'loyalty-membership',
    section: 'Luxury Salon',
    category: 'Memberships & Privileges',
    categorySlug: 'memberships',
    title: 'Crown Royale Annual VIP Membership',
    description: 'Unlimited access to priority booking, complimentary monthly hair spa & blowout, 20% off all aesthetic procedures, and VIP lounge amenities.',
    image: '/images/lacrown/luxury-salon/memberships/loyalty-membership.png',
    alt: 'Exclusive Crown Royale VIP membership metal keycard on marble counter',
    priceNote: 'Annual subscription',
    featured: true,
    badge: 'VIP Elite'
  },
  {
    id: 'referral-programme',
    section: 'Luxury Salon',
    category: 'Memberships & Privileges',
    categorySlug: 'memberships',
    title: 'Crown Privilege Circle',
    description: 'Curated beauty loyalty circle with 15% off signature salon services, complimentary anniversary pampering, and family service sharing.',
    image: '/images/lacrown/luxury-salon/memberships/referral-programme.png',
    alt: 'Crown Privilege Circle members welcome kit and luxury salon perks',
    priceNote: 'Quarterly / Annual',
    featured: true
  },

  // ==========================================
  // SECTION C: OTHER WEBSITE SECTIONS (15 CARDS)
  // ==========================================
  // 1. Curated Packages & Offers (4 cards)
  {
    id: 'package-bridal-glow',
    section: 'Other Website Sections',
    category: 'Curated Packages & Offers',
    categorySlug: 'packages-offers',
    title: 'The Royal Bridal Glow Ritual',
    description: 'Comprehensive 6-week wedding countdown package: HydraFacial series, full-body polishing, de-tan rituals, luxury hair spa, and trial makeup.',
    image: '/images/lacrown/other/packages/package-royal-bridal-glow.webp',
    alt: 'Luxurious bridal glow package presentation with skincare and orchids',
    priceNote: 'Exclusive package pricing',
    featured: true,
    badge: 'Popular'
  },
  {
    id: 'package-skin-rejuvenation',
    section: 'Other Website Sections',
    category: 'Curated Packages & Offers',
    categorySlug: 'packages-offers',
    title: 'Signature Glass Skin & Hydration Series',
    description: 'Multi-session clinical series combining HydraFacial vortex extraction, Korean Glass Facial infusion, and LED light therapy.',
    image: '/images/lacrown/other/packages/package-signature-glass-skin.webp',
    alt: 'Signature Glass Skin and Hydration series clinical protocol layout',
    priceNote: 'Multi-session bundle',
    featured: true,
    badge: 'Best Value'
  },
  {
    id: 'package-gentlemans-grooming',
    section: 'Other Website Sections',
    category: 'Curated Packages & Offers',
    categorySlug: 'packages-offers',
    title: "The Executive Gentleman's Experience",
    description: 'Full head-to-toe grooming: Director haircut, straight-razor shave, beard spa, purifying skin facial, and scalp massage.',
    image: '/images/lacrown/other/packages/package-executive-gentleman.webp',
    alt: "Executive gentleman's head-to-toe luxury grooming suite presentation",
    priceNote: 'Available Mon - Sun',
    featured: true,
    badge: 'Signature'
  },
  {
    id: 'package-laser-hair-reduction',
    section: 'Other Website Sections',
    category: 'Curated Packages & Offers',
    categorySlug: 'packages-offers',
    title: 'Laser Hair Reduction Complete Course',
    description: 'Special session-bundle pricing for full-body, underarms, or facial laser hair removal courses. Clinically supervised.',
    image: '/images/lacrown/other/packages/package-laser-hair-reduction.webp',
    alt: 'Laser hair removal course package with clinical consultation',
    priceNote: 'Medical assessment included',
    featured: true,
    badge: 'Clinical Course'
  },

  // 2. Academy Professional Training (3 cards)
  {
    id: 'academy-cosmetology-skincare',
    section: 'Other Website Sections',
    category: 'Academy Professional Training',
    categorySlug: 'academy-training',
    title: 'Diploma in Cosmetology & Clinical Skincare',
    description: 'In-depth diploma curriculum covering skin biology, modern aesthetic facial treatments, chemical peel protocols, and salon hygiene standards.',
    image: '/images/lacrown/other/academy/academy-cosmetology-skincare.webp',
    alt: 'Cosmetology academy instructor demonstrating clinical facial technique to students',
    priceNote: 'Modular Certification',
    featured: true
  },
  {
    id: 'academy-spmu-masterclass',
    section: 'Other Website Sections',
    category: 'Academy Professional Training',
    categorySlug: 'academy-training',
    title: 'Masterclass in Semi-Permanent Makeup (SPMU)',
    description: 'Precision artistry certification in microblading hair strokes, lip blush tinting, shading geometry, color theory, and sterilization hygiene.',
    image: '/images/lacrown/other/academy/academy-spmu-masterclass.webp',
    alt: 'Masterclass training session in eyebrow microblading mapping and pigments',
    priceNote: 'Certificate Course',
    featured: true
  },
  {
    id: 'academy-hair-styling-texture',
    section: 'Other Website Sections',
    category: 'Academy Professional Training',
    categorySlug: 'academy-training',
    title: 'Advanced Hair Styling & Texture Transformation',
    description: 'Creative cutting mastery, international French balayage application, keratin smoothing protocols, and executive styling portfolios.',
    image: '/images/lacrown/other/academy/academy-hair-styling-texture.webp',
    alt: 'Professional salon academy students learning balayage color placement',
    priceNote: 'Professional Series',
    featured: true
  },

  // 3. Educational Blog Articles (6 cards)
  {
    id: 'blog-hydrafacial-guide',
    section: 'Other Website Sections',
    category: 'Educational Blog Articles',
    categorySlug: 'blog-articles',
    title: 'Complete Guide to HydraFacial: What to Expect',
    description: 'Learn how HydraFacial patented Vortex-Fusion technology works, who it is suitable for, and what to expect from your treatment session.',
    image: '/images/lacrown/other/blog/blog-hydrafacial-guide.webp',
    alt: 'Editorial photograph of HydraFacial wand treatment for blog article',
    priceNote: '5 min read'
  },
  {
    id: 'blog-laser-hair-removal-facts',
    section: 'Other Website Sections',
    category: 'Educational Blog Articles',
    categorySlug: 'blog-articles',
    title: 'Laser Hair Removal: Facts, Expectations & Aftercare',
    description: 'Considering laser hair removal? This evidence-based guide covers follicular growth cycles, session planning, and essential aftercare.',
    image: '/images/lacrown/other/blog/blog-laser-hair-removal-facts.webp',
    alt: 'Educational illustration of diode laser hair reduction procedure',
    priceNote: '6 min read'
  },
  {
    id: 'blog-professional-hair-care-tips',
    section: 'Other Website Sections',
    category: 'Educational Blog Articles',
    categorySlug: 'blog-articles',
    title: '10 Professional Hair Care Tips from Our Salon Team',
    description: 'Expert advice on maintaining healthy, lustrous, damage-free hair between salon visits from the master stylists at LA CROWN.',
    image: '/images/lacrown/other/blog/blog-professional-hair-care-tips.webp',
    alt: 'Hair care products and styling tools arranged for editorial beauty feature',
    priceNote: '4 min read'
  },
  {
    id: 'blog-bridal-makeup-guide',
    section: 'Other Website Sections',
    category: 'Educational Blog Articles',
    categorySlug: 'blog-articles',
    title: 'Bridal Makeup Consultation: How to Prepare',
    description: 'Everything brides need to know about scheduling trials, skin preparation timelines, and achieving long-wearing wedding glow.',
    image: '/images/lacrown/other/blog/blog-bridal-makeup-guide.webp',
    alt: 'Bridal makeup artist kit with luxury cosmetics and bridal veil in background',
    priceNote: '5 min read'
  },
  {
    id: 'blog-prp-therapy-hair-loss',
    section: 'Other Website Sections',
    category: 'Educational Blog Articles',
    categorySlug: 'blog-articles',
    title: 'PRP Therapy for Hair Loss: Understanding the Treatment',
    description: 'An evidence-based overview of Platelet-Rich Plasma therapy for androgenetic alopecia, hair thinning, and scalp rejuvenation.',
    image: '/images/lacrown/other/blog/blog-prp-therapy-hair-loss.webp',
    alt: 'Clinical PRP centrifuge and hair restoration treatment vial for blog',
    priceNote: '6 min read'
  },
  {
    id: 'blog-skincare-routine-advice',
    section: 'Other Website Sections',
    category: 'Educational Blog Articles',
    categorySlug: 'blog-articles',
    title: 'Building a Skincare Routine: Advice from Our Aestheticians',
    description: 'How to construct an effective daily skincare routine with cleanser, active serums, barrier moisturizer, and broad-spectrum SPF.',
    image: '/images/lacrown/other/blog/blog-skincare-routine-advice.webp',
    alt: 'Minimalist luxury skincare serum bottles and dropper on travertine surface',
    priceNote: '5 min read'
  },

  // 4. Homepage Experience Cards (2 cards)
  {
    id: 'home-aesthetic-clinic-experience',
    section: 'Other Website Sections',
    category: 'Homepage Experience Cards',
    categorySlug: 'homepage-experience',
    title: 'Aesthetic Clinic Experience — Where Beauty Meets Science',
    description: 'Advanced Aesthetic Medicine: Skin Treatments & Medi-Facials, Hair Restoration, Laser Therapies, Anti-Ageing & Body Contouring.',
    image: '/images/lacrown/other/homepage/home-aesthetic-clinic.webp',
    alt: 'Aesthetic Clinic Experience luxury treatment suite with high-tech equipment',
    badge: 'Clinic'
  },
  {
    id: 'home-luxury-salon-experience',
    section: 'Other Website Sections',
    category: 'Homepage Experience Cards',
    categorySlug: 'homepage-experience',
    title: 'Luxury Salon Experience — Artistry, Indulgence & Style',
    description: 'Premium Salon Services: Haircuts, Styling & Colour, Spa & Keratin, Facials, Waxing, Nails, Bridal Beauty & Massages.',
    image: '/images/lacrown/other/homepage/home-luxury-salon.webp',
    alt: 'Luxury Salon Experience elegant interior with warm gold illumination and styling chairs',
    badge: 'Salon'
  }
];

export const TOTAL_REGISTERED_CARDS = CARDS_MANIFEST.length;

export function getCardById(id: string): CardRecord | undefined {
  return CARDS_MANIFEST.find(card => card.id === id);
}

export function getCardsBySection(section: CardRecord['section']): CardRecord[] {
  return CARDS_MANIFEST.filter(card => card.section === section);
}

export function getCardsByCategory(categorySlug: string): CardRecord[] {
  return CARDS_MANIFEST.filter(card => card.categorySlug === categorySlug);
}

export function getCardImage(id: string): string {
  const card = getCardById(id);
  return card ? getAssetUrl(card.image) : '';
}
