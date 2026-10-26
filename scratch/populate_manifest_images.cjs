const fs = require('fs');
const path = require('path');

// Mappings from old paths to new canonical manifest paths:
const mappings = [
  // Aesthetic: Hair
  { from: 'public/images/services/hair/hair-transplant.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-hair-transplant.webp' },
  { from: 'public/images/services/hair/bio-fue.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-bio-fue.webp' },
  { from: 'public/images/services/hair/prp-therapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-prp-therapy.webp' },
  { from: 'public/images/services/hair/gfc-therapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-gfc-therapy.webp' },
  { from: 'public/images/services/hair/mesotherapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-mesotherapy.webp' },
  { from: 'public/images/services/hair/stem-cell-therapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-stem-cell-therapy.webp' },
  { from: 'public/images/services/hair/scalp-micro-pigmentation.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-scalp-micro-pigmentation.webp' },
  { from: 'public/images/services/hair/high-frequency-therapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/hair-restoration/aesthetic-high-frequency-therapy.webp' },

  // Aesthetic: Skin Grooming
  { from: 'public/images/services/facials/aesthetic-grooming-essentials.jpg', to: 'public/images/lacrown/aesthetic-clinic/skin-grooming/aesthetic-grooming-essentials.webp' },

  // Aesthetic: Facials
  { from: 'public/images/services/facials/hydrafacial.jpg', to: 'public/images/lacrown/aesthetic-clinic/facials/aesthetic-hydrafacial.webp' },
  { from: 'public/images/services/facials/korean-glass-facial.jpg', to: 'public/images/lacrown/aesthetic-clinic/facials/aesthetic-korean-glass-facial.webp' },
  { from: 'public/images/services/facials/bb-glow-facial.jpg', to: 'public/images/lacrown/aesthetic-clinic/facials/aesthetic-bb-glow-facial.webp' },
  { from: 'public/images/services/facials/vampire-facial.jpg', to: 'public/images/lacrown/aesthetic-clinic/facials/aesthetic-vampire-facial.webp' },
  { from: 'public/images/services/facials/collagen-boost-facial.jpg', to: 'public/images/lacrown/aesthetic-clinic/facials/aesthetic-collagen-boost-facial.webp' },
  { from: 'public/images/services/facials/customised-facials.jpg', to: 'public/images/lacrown/aesthetic-clinic/facials/aesthetic-customised-facials.webp' },

  // Aesthetic: Laser
  { from: 'public/images/services/laser/laser-hair-removal.jpg', to: 'public/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-laser-hair-removal.webp' },
  { from: 'public/images/services/laser/pico-laser.jpg', to: 'public/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-pico-laser.webp' },
  { from: 'public/images/services/laser/co2-laser.jpg', to: 'public/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-co2-laser.webp' },
  { from: 'public/images/services/laser/mole-removal.jpg', to: 'public/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-mole-removal.webp' },
  { from: 'public/images/services/laser/wart-removal.jpg', to: 'public/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-wart-removal.webp' },
  { from: 'public/images/services/laser/tattoo-removal.jpg', to: 'public/images/lacrown/aesthetic-clinic/laser-treatments/aesthetic-tattoo-removal.webp' },

  // Aesthetic: Chemical Peels
  { from: 'public/images/services/facials/chemical-peels.jpg', to: 'public/images/lacrown/aesthetic-clinic/chemical-peels/aesthetic-chemical-peels.webp' },

  // Aesthetic: Anti-Ageing
  { from: 'public/images/services/aesthetic/vitamin-therapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-vitamin-therapy.webp' },
  { from: 'public/images/services/aesthetic/iv-glutathione.jpg', to: 'public/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-iv-glutathione.webp' },
  { from: 'public/images/services/aesthetic/iv-cocktail-therapy.jpg', to: 'public/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-iv-cocktail-therapy.webp' },
  { from: 'public/images/services/aesthetic/thread-lift.jpg', to: 'public/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-thread-lift.webp' },
  { from: 'public/images/services/aesthetic/dermal-fillers.jpg', to: 'public/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-dermal-fillers.webp' },
  { from: 'public/images/services/aesthetic/botox.jpg', to: 'public/images/lacrown/aesthetic-clinic/anti-ageing/aesthetic-botox.webp' },

  // Aesthetic: Body Slimming
  { from: 'public/images/services/aesthetic/emsculpt.jpg', to: 'public/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-emsculpt.webp' },
  { from: 'public/images/services/aesthetic/lipo-laser.jpg', to: 'public/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-lipo-laser.webp' },
  { from: 'public/images/services/aesthetic/hifu.jpg', to: 'public/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-hifu.webp' },
  { from: 'public/images/services/aesthetic/cool-sculpting.jpg', to: 'public/images/lacrown/aesthetic-clinic/body-contouring/aesthetic-cool-sculpting.webp' },

  // Aesthetic: SPMU
  { from: 'public/images/services/aesthetic/lip-tinting.jpg', to: 'public/images/lacrown/aesthetic-clinic/spmu/aesthetic-lip-tinting.webp' },
  { from: 'public/images/services/aesthetic/microblading.jpg', to: 'public/images/lacrown/aesthetic-clinic/spmu/aesthetic-microblading.webp' },
  { from: 'public/images/services/aesthetic/eyelash-extensions.jpg', to: 'public/images/lacrown/aesthetic-clinic/spmu/aesthetic-eyelash-extensions.webp' },

  // Salon: Baby & Toddler (8)
  { from: 'public/images/services/salon/baby-haircut.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-haircut.webp' },
  { from: 'public/images/services/salon/royal-baby-massage.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-royal-baby-massage.webp' },
  { from: 'public/images/services/salon/baby-milk-bath.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-milk-bath.webp' },
  { from: 'public/images/services/salon/baby-oil-massage.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-oil-massage.webp' },
  { from: 'public/images/services/salon/baby-butter-wrap.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-butter-wrap.webp' },
  { from: 'public/images/services/salon/baby-bubble-manicure.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-bubble-manicure.webp' },
  { from: 'public/images/services/salon/baby-soft-cleanse-facial.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-soft-cleanse-facial.webp' },
  { from: 'public/images/services/salon/baby-cut-file-polish.jpg', to: 'public/images/lacrown/luxury-salon/baby-toddler/salon-baby-cut-file-polish.webp' },

  // Salon: Men (6)
  { from: 'public/images/services/salon/executive-haircut.jpg', to: 'public/images/lacrown/luxury-salon/mens-grooming/salon-executive-haircut.webp' },
  { from: 'public/images/services/salon/mens-haircut.jpg', to: 'public/images/lacrown/luxury-salon/mens-grooming/salon-mens-haircut-senior.webp' },
  { from: 'public/images/services/salon/mens-haircut.jpg', to: 'public/images/lacrown/luxury-salon/mens-grooming/salon-mens-haircut-creative.webp' },
  { from: 'public/images/services/salon/beard-trim-shape.jpg', to: 'public/images/lacrown/luxury-salon/mens-grooming/salon-beard-trim-shape.webp' },
  { from: 'public/images/services/salon/traditional-clean-shave.jpg', to: 'public/images/lacrown/luxury-salon/mens-grooming/salon-traditional-clean-shave.webp' },
  { from: 'public/images/services/salon/zero-fade-skin-fade.jpg', to: 'public/images/lacrown/luxury-salon/mens-grooming/salon-zero-fade-skin-fade.webp' },

  // Salon: Generated Women's Hair
  { from: 'C:/Users/varsh/.gemini/antigravity/brain/be752d42-557a-4771-996e-84219551559e/salon_womens_regular_haircut_1792991254634.jpg', to: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-regular-haircut.webp' },
  { from: 'C:/Users/varsh/.gemini/antigravity/brain/be752d42-557a-4771-996e-84219551559e/salon_blowdry_1792991417573.jpg', to: 'public/images/lacrown/luxury-salon/womens-hair/salon-blowdry.webp' },
  { from: 'C:/Users/varsh/.gemini/antigravity/brain/be752d42-557a-4771-996e-84219551559e/salon_hair_updo_1792991437510.jpg', to: 'public/images/lacrown/luxury-salon/womens-hair/salon-hair-updo.webp' },
  { from: 'public/images/services/hair/balayage-hair-colour.jpg', to: 'public/images/lacrown/luxury-salon/womens-hair/salon-balayage.webp' }
];

let copied = 0;
mappings.forEach(m => {
  if (fs.existsSync(m.from)) {
    const dir = path.dirname(m.to);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(m.from, m.to);
    copied++;
  } else {
    console.warn('Source file not found:', m.from);
  }
});

console.log(`Copied ${copied}/${mappings.length} images into clean canonical structure.`);
