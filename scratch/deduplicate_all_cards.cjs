const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const dedupList = [
  { id: 'blog-prp-therapy-hair-loss', dest: 'public/images/lacrown/other/blog/blog-prp-therapy-hair-loss.webp', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80' },
  { id: 'package-skin-rejuvenation', dest: 'public/images/lacrown/other/packages/package-signature-glass-skin.webp', url: 'https://images.unsplash.com/photo-1512290900672-1f41712a2336?auto=format&fit=crop&w=800&q=80' },
  { id: 'blog-skincare-routine-advice', dest: 'public/images/lacrown/other/blog/blog-skincare-routine-advice.webp', url: 'https://images.unsplash.com/photo-1608248597359-54bc74d0a790?auto=format&fit=crop&w=800&q=80' },
  { id: 'home-aesthetic-clinic-experience', dest: 'public/images/lacrown/other/homepage/home-aesthetic-clinic.webp', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
  { id: 'academy-cosmetology-skincare', dest: 'public/images/lacrown/other/academy/academy-cosmetology-skincare.webp', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
  { id: 'package-laser-hair-reduction', dest: 'public/images/lacrown/other/packages/package-laser-hair-reduction.webp', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
  { id: 'blog-laser-hair-removal-facts', dest: 'public/images/lacrown/other/blog/blog-laser-hair-removal-facts.webp', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' },
  { id: 'mens-haircut-creative', dest: 'public/images/lacrown/luxury-salon/mens-grooming/salon-mens-haircut-creative.webp', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80' },
  { id: 'package-gentlemans-grooming', dest: 'public/images/lacrown/other/packages/package-executive-gentleman.webp', url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80' },
  { id: 'womens-anti-hairfall', dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-hairfall.webp', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80' },
  { id: 'french-polish', dest: 'public/images/lacrown/luxury-salon/nails/salon-french-polish.webp', url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80' },
  { id: 'hair-extensions', dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-hair-extensions.webp', url: 'https://images.unsplash.com/photo-1522337094346-24e6ff4c3b65?auto=format&fit=crop&w=800&q=80' },
  { id: 'full-arms-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-arms-detan.webp', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80' },
  { id: 'anti-ageing-facial', dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-anti-ageing-facial.webp', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' },
  { id: 'skin-firming-lift-treatment', dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-skin-firming-lift-treatment.webp', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' },
  { id: 'luxury-gold-body-polishing', dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-luxury-gold-body-polishing.webp', url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80' },
  { id: 'half-arms-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-half-arms-detan.webp', url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' },
  { id: 'collagen-rejuvenation-facial', dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-collagen-rejuvenation-facial.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
  { id: 'academy-hair-styling-texture', dest: 'public/images/lacrown/other/academy/academy-hair-styling-texture.webp', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80' },
  { id: 'home-luxury-salon-experience', dest: 'public/images/lacrown/other/homepage/home-luxury-salon.webp', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80' },
  { id: 'blog-professional-hair-care-tips', dest: 'public/images/lacrown/other/blog/blog-professional-hair-care-tips.webp', url: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80' },
  { id: 'lower-lip-threading', dest: 'public/images/lacrown/luxury-salon/threading/salon-lower-lip-threading.webp', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
  { id: 'lash-lift', dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-lash-lift.webp', url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80' },
  { id: 'bikini-waxing', dest: 'public/images/lacrown/luxury-salon/waxing/salon-bikini-waxing.webp', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
  { id: 'full-legs-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-legs-detan.webp', url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80' },
  { id: 'face-neck-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-face-neck-detan.webp', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' },
  { id: 'clean-up', dest: 'public/images/lacrown/luxury-salon/facials/salon-clean-up.webp', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80' },
  { id: 'radiance-facial', dest: 'public/images/lacrown/luxury-salon/facials/salon-radiance-facial.webp', url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80' },
  { id: 'bridal-body-polishing', dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-bridal-body-polishing.webp', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
  { id: 'full-body-waxing', dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-body-waxing.webp', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' },
  { id: 'full-body-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-body-detan.webp', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' },
  { id: 'fruit-facial', dest: 'public/images/lacrown/luxury-salon/facials/salon-fruit-facial.webp', url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80' },
  { id: 'classic-body-polishing', dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-classic-body-polishing.webp', url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80' },
  { id: 'classic-pedicure', dest: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-classic-pedicure.webp', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' },
  { id: 'foot-reflexology', dest: 'public/images/lacrown/luxury-salon/massages/salon-foot-reflexology.webp', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' },
  { id: 'full-back-detan', dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-back-detan.webp', url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80' },
  { id: 'back-shoulder-massage', dest: 'public/images/lacrown/luxury-salon/massages/salon-back-shoulder-massage.webp', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80' },
  { id: 'luxury-pedicure', dest: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-luxury-pedicure.webp', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' },
  { id: 'gel-polish', dest: 'public/images/lacrown/luxury-salon/nails/salon-gel-polish.webp', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80' },
  { id: 'airbrush-bridal-makeup', dest: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-airbrush-bridal-makeup.webp', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { id: 'package-bridal-glow', dest: 'public/images/lacrown/other/packages/package-royal-bridal-glow.webp', url: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80' },
  { id: 'blog-bridal-makeup-guide', dest: 'public/images/lacrown/other/blog/blog-bridal-makeup-guide.webp', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80' },
  { id: 'crown-royale-membership', dest: 'public/images/lacrown/luxury-salon/memberships/salon-crown-royale-membership.webp', url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80' }
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
            console.log(`[DEDUP OK] ${item.id} -> ${(size/1024).toFixed(1)} KB`);
            resolve(true);
          });
        } else {
          console.warn(`[DEDUP FAIL] ${item.id} (Status: ${res.statusCode})`);
          resolve(false);
        }
      }).on('error', (err) => {
        console.error(`[DEDUP ERR] ${item.id}:`, err.message);
        resolve(false);
      });
    }

    getHttp(item.url);
  });
}

async function run() {
  console.log(`Deduplicating ${dedupList.length} cards with unique photos...`);
  let success = 0;
  for (let i = 0; i < dedupList.length; i += 5) {
    const batch = dedupList.slice(i, i + 5);
    const results = await Promise.all(batch.map(d => downloadOne(d)));
    success += results.filter(Boolean).length;
  }
  console.log(`\nDeduplication complete: ${success}/${dedupList.length} unique images replaced.`);
}

run();
