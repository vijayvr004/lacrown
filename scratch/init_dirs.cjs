const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/lacrown/aesthetic-clinic/hair-restoration',
  'public/images/lacrown/aesthetic-clinic/skin-grooming',
  'public/images/lacrown/aesthetic-clinic/facials',
  'public/images/lacrown/aesthetic-clinic/laser-treatments',
  'public/images/lacrown/aesthetic-clinic/chemical-peels',
  'public/images/lacrown/aesthetic-clinic/anti-ageing',
  'public/images/lacrown/aesthetic-clinic/body-contouring',
  'public/images/lacrown/aesthetic-clinic/spmu',
  'public/images/lacrown/luxury-salon/baby-toddler',
  'public/images/lacrown/luxury-salon/mens-grooming',
  'public/images/lacrown/luxury-salon/womens-hair',
  'public/images/lacrown/luxury-salon/threading',
  'public/images/lacrown/luxury-salon/waxing',
  'public/images/lacrown/luxury-salon/detan-bleach',
  'public/images/lacrown/luxury-salon/facials',
  'public/images/lacrown/luxury-salon/anti-ageing',
  'public/images/lacrown/luxury-salon/hand-foot-care',
  'public/images/lacrown/luxury-salon/nails',
  'public/images/lacrown/luxury-salon/extensions-lashes',
  'public/images/lacrown/luxury-salon/massages',
  'public/images/lacrown/luxury-salon/body-polishing',
  'public/images/lacrown/luxury-salon/bridal-makeup',
  'public/images/lacrown/luxury-salon/memberships',
  'public/images/lacrown/other/packages',
  'public/images/lacrown/other/academy',
  'public/images/lacrown/other/blog',
  'public/images/lacrown/other/homepage'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log(`Created ${dirs.length} organized directories under public/images/lacrown/`);
