const fs = require('fs');

// The mapping between manifest IDs and salonServices.ts IDs:
const idReplacements = {
  // Threading
  'eyebrows-threading': 'eyebrow-threading',
  'forehead-threading': 'jawline-threading',
  'sides-threading': 'sidelocks-threading',

  // Waxing
  'full-arms-waxing': 'full-arm-waxing',
  'half-arms-waxing': 'half-arm-waxing',
  'underarms-waxing': 'underarm-waxing',
  'full-legs-waxing': 'full-leg-waxing',
  'half-legs-waxing': 'half-leg-waxing',
  'full-front-waxing': 'face-waxing',
  'full-back-waxing': 'back-waxing',
  'full-body-waxing': 'brazilian-waxing',

  // De-Tan
  'face-neck-detan': 'face-detan',
  'full-arms-detan': 'arms-detan',
  'half-arms-detan': 'face-bleach',
  'full-legs-detan': 'full-body-bleach',
  'full-back-detan': 'back-detan',

  // Facials
  'clean-up': 'salon-basic-facial',
  'fruit-facial': 'salon-brightening-facial',
  'radiance-facial': 'salon-detan-facial',
  'gold-radiance-facial': 'salon-anti-acne-facial',
  'diamond-luxury-facial': 'salon-luxury-facial',
  'salon-peel': 'salon-skin-peel',

  // Anti-Ageing
  'anti-ageing-facial': 'salon-anti-ageing-facial',
  'collagen-rejuvenation-facial': 'salon-firming-treatment',
  'skin-firming-lift-treatment': 'salon-eye-treatment',

  // Hand & Foot
  'classic-manicure': 'basic-manicure',
  'classic-pedicure': 'basic-pedicure',

  // Nails
  'cut-file-polish': 'nail-polish',
  'french-polish': 'acrylic-nails',
  'gel-polish': 'gel-nails',
  'nail-art-accent': 'nail-art',
  'full-set-nail-art': 'nail-extensions',

  // Massages
  'back-shoulder-massage': 'aromatherapy-massage',
  'full-body-relaxation-massage': 'swedish-massage',

  // Body Polishing
  'classic-body-polishing': 'full-body-polish',
  'luxury-gold-body-polishing': 'luxury-body-polish',
  'bridal-body-polishing': 'back-polish',

  // Makeup
  'signature-bridal-makeup': 'bridal-makeup',
  'airbrush-bridal-makeup': 'airbrush-makeup',
  'saree-draping-styling': 'saree-draping',

  // Memberships
  'crown-royale-membership': 'loyalty-membership',
  'crown-privilege-circle': 'referral-programme'
};

let manifest = fs.readFileSync('src/data/cardsManifest.ts', 'utf8');

for (const [oldId, newId] of Object.entries(idReplacements)) {
  const r1 = new RegExp(`id:\\s*'${oldId}'`, 'g');
  manifest = manifest.replace(r1, `id: '${newId}'`);
}

fs.writeFileSync('src/data/cardsManifest.ts', manifest);
console.log('Successfully aligned cardsManifest.ts IDs with salonServices.ts');
