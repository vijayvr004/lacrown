const fs = require('fs');

const brain = 'C:/Users/varsh/.gemini/antigravity/brain/be752d42-557a-4771-996e-84219551559e';

const extra = [
  { from: `${brain}/luxury_bridal_makeup_1792824998196.jpg`, to: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-signature-bridal-makeup.webp' },
  { from: `${brain}/luxury_spa_manicure_1792825057380.jpg`, to: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-spa-manicure.webp' },
  { from: 'public/images/services/salon/luxury-pedicure.jpg', to: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-luxury-pedicure.webp' },
  { from: 'public/images/services/salon/eyebrow-threading.jpg', to: 'public/images/lacrown/luxury-salon/threading/salon-eyebrows-threading.webp' },
  { from: `${brain}/clinical_chemical_peel_1792825079384.jpg`, to: 'public/images/lacrown/luxury-salon/facials/salon-salon-peel.webp' },
  { from: `${brain}/body_slimming_contouring_clinic_1792825062425.jpg`, to: 'public/images/lacrown/luxury-salon/massages/salon-full-body-relaxation-massage.webp' },
  { from: 'public/images/services/hair/balayage-hair-colour.jpg', to: 'public/images/lacrown/other/academy/academy-hair-styling-texture.webp' },
  { from: `${brain}/microblading_eyebrow_architecture_1792825078876.jpg`, to: 'public/images/lacrown/other/academy/academy-spmu-masterclass.webp' },
  { from: 'public/images/services/facials/customised-facials.jpg', to: 'public/images/lacrown/other/academy/academy-cosmetology-skincare.webp' },
  { from: 'public/images/services/facials/korean-glass-facial.jpg', to: 'public/images/lacrown/other/homepage/home-aesthetic-clinic.webp' },
  { from: 'public/images/services/hair/balayage-hair-colour.jpg', to: 'public/images/lacrown/other/homepage/home-luxury-salon.webp' },
  { from: `${brain}/luxury_bridal_makeup_1792824998196.jpg`, to: 'public/images/lacrown/other/packages/package-royal-bridal-glow.webp' },
  { from: 'public/images/services/facials/korean-glass-facial.jpg', to: 'public/images/lacrown/other/packages/package-signature-glass-skin.webp' },
  { from: 'public/images/services/salon/mens-haircut.jpg', to: 'public/images/lacrown/other/packages/package-executive-gentleman.webp' },
  { from: 'public/images/services/laser/laser-hair-removal.jpg', to: 'public/images/lacrown/other/packages/package-laser-hair-reduction.webp' },
  { from: 'public/images/services/facials/hydrafacial-treatment.jpg', to: 'public/images/lacrown/other/blog/blog-hydrafacial-guide.webp' },
  { from: 'public/images/services/laser/laser-hair-removal.jpg', to: 'public/images/lacrown/other/blog/blog-laser-hair-removal.webp' },
  { from: 'public/images/services/hair/prp-therapy.jpg', to: 'public/images/lacrown/other/blog/blog-prp-therapy-hair-loss.webp' },
  { from: 'public/images/services/makeup/bridal-makeup.jpg', to: 'public/images/lacrown/other/blog/blog-bridal-makeup-guide.webp' },
  { from: 'public/images/services/hair/balayage-hair-colour.jpg', to: 'public/images/lacrown/other/blog/blog-professional-hair-care-tips.webp' },
  { from: 'public/images/services/facials/korean-glass-facial.jpg', to: 'public/images/lacrown/other/blog/blog-skincare-routine-advice.webp' }
];

let c = 0;
extra.forEach(m => {
  if (fs.existsSync(m.from)) {
    fs.copyFileSync(m.from, m.to);
    c++;
  } else {
    console.warn('Missing:', m.from);
  }
});
console.log(`Copied ${c}/${extra.length} additional high-res images.`);
