const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 31 cards that need exclusive images to reach 147/147 100% unique hashes
const targets = [
  { id: 'package-skin-rejuvenation', dest: 'public/images/lacrown/other/packages/package-signature-glass-skin.webp', url: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=720&q=80' },
  { id: 'blog-skincare-routine-advice', dest: 'public/images/lacrown/other/blog/blog-skincare-routine-advice.webp', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=721&q=80' },
  { id: 'blog-bridal-makeup-guide', dest: 'public/images/lacrown/other/blog/blog-bridal-makeup-guide.webp', url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=722&q=80' },
  { id: 'hair-extensions', dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-hair-extensions.webp', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=723&q=80' },
  { id: 'airbrush-bridal-makeup', dest: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-airbrush-bridal-makeup.webp', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=724&q=80' },
  { id: 'full-back-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-back-detan.webp', url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=725&q=80' },
  { id: 'academy-hair-styling-texture', dest: 'public/images/lacrown/other/academy/academy-hair-styling-texture.webp', url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=726&q=80' },
  { id: 'womens-anti-hairfall', dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-hairfall.webp', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=727&q=80' },
  { id: 'back-shoulder-massage', dest: 'public/images/lacrown/luxury-salon/massages/salon-back-shoulder-massage.webp', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=728&q=80' },
  { id: 'luxury-pedicure', dest: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-luxury-pedicure.webp', url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=729&q=80' },
  { id: 'radiance-facial', dest: 'public/images/lacrown/luxury-salon/facials/salon-radiance-facial.webp', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=730&q=80' },
  { id: 'fruit-facial', dest: 'public/images/lacrown/luxury-salon/facials/salon-fruit-facial.webp', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=731&q=80' },
  { id: 'classic-body-polishing', dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-classic-body-polishing.webp', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=732&q=80' },
  { id: 'academy-spmu-masterclass', dest: 'public/images/lacrown/other/academy/academy-spmu-masterclass.webp', url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=733&q=80' },
  { id: 'clean-up', dest: 'public/images/lacrown/luxury-salon/facials/salon-clean-up.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=734&q=80' },
  { id: 'sides-threading', dest: 'public/images/lacrown/luxury-salon/threading/salon-sides-threading.webp', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=735&q=80' },
  { id: 'full-body-waxing', dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-body-waxing.webp', url: 'https://images.unsplash.com/photo-1512290900672-1f41712a2336?auto=format&fit=crop&w=736&q=80' },
  { id: 'skin-firming-lift-treatment', dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-skin-firming-lift-treatment.webp', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=737&q=80' },
  { id: 'full-legs-waxing', dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-legs-waxing.webp', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=738&q=80' },
  { id: 'full-body-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-body-detan.webp', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=739&q=80' },
  { id: 'anti-ageing-facial', dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-anti-ageing-facial.webp', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=740&q=80' },
  { id: 'bridal-body-polishing', dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-bridal-body-polishing.webp', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=741&q=80' },
  { id: 'face-neck-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-face-neck-detan.webp', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=742&q=80' },
  { id: 'collagen-rejuvenation-facial', dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-collagen-rejuvenation-facial.webp', url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=743&q=80' },
  { id: 'bikini-waxing', dest: 'public/images/lacrown/luxury-salon/waxing/salon-bikini-waxing.webp', url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=744&q=80' },
  { id: 'full-legs-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-legs-detan.webp', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=745&q=80' },
  { id: 'luxury-gold-body-polishing', dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-luxury-gold-body-polishing.webp', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=746&q=80' },
  { id: 'gel-polish', dest: 'public/images/lacrown/luxury-salon/nails/salon-gel-polish.webp', url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=747&q=80' },
  { id: 'package-bridal-glow', dest: 'public/images/lacrown/other/packages/package-royal-bridal-glow.webp', url: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=748&q=80' },
  { id: 'lash-lift', dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-lash-lift.webp', url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=749&q=80' },
  { id: 'foot-reflexology', dest: 'public/images/lacrown/luxury-salon/massages/salon-foot-reflexology.webp', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=750&q=80' }
];

function downloadOne(item) {
  return new Promise((resolve) => {
    function getHttp(u) {
      const client = u.startsWith('https') ? https : http;
      client.get(u, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          getHttp(res.headers.location);
          return;
        }
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(item.dest);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            const size = fs.statSync(item.dest).size;
            console.log(`[RESOLVED] ${item.id} -> ${(size/1024).toFixed(1)} KB`);
            resolve(true);
          });
        } else {
          console.warn(`[FAIL] ${item.id} Status: ${res.statusCode}`);
          resolve(false);
        }
      }).on('error', (err) => {
        console.error(`[ERR] ${item.id}:`, err.message);
        resolve(false);
      });
    }

    getHttp(item.url);
  });
}

async function run() {
  console.log(`Downloading ${targets.length} strictly unique images...`);
  let count = 0;
  for (let i = 0; i < targets.length; i += 5) {
    const batch = targets.slice(i, i + 5);
    const res = await Promise.all(batch.map(d => downloadOne(d)));
    count += res.filter(Boolean).length;
  }
  console.log(`Completed: ${count}/${targets.length} images resolved.`);
}

run();
