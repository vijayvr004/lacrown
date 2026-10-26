const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Curated high-resolution Unsplash photo IDs specifically chosen for each card:
const downloads = [
  // 1. Women's Hair (13 cards)
  {
    id: 'womens-fringe-bangs',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-fringe-bangs.webp',
    url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80' // fringe curtain bangs
  },
  {
    id: 'womens-creative-haircut',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-creative-haircut.webp',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' // modern textured bob
  },
  {
    id: 'womens-premium-haircut',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-premium-haircut.webp',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80' // voluminous luxury blowout
  },
  {
    id: 'womens-hair-spa',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-hair-spa.webp',
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80' // luxury hair spa mask
  },
  {
    id: 'womens-nourishing-hair-spa',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-nourishing-hair-spa.webp',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80' // deep conditioning argan hair mask
  },
  {
    id: 'womens-repairing-hair-spa',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-repairing-hair-spa.webp',
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80' // bond repairing salon treatment
  },
  {
    id: 'womens-anti-dandruff',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-dandruff.webp',
    url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' // scalp exfoliation treatment
  },
  {
    id: 'womens-anti-hairfall',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-hairfall.webp',
    url: 'https://images.unsplash.com/photo-1512290900672-1f41712a2336?auto=format&fit=crop&w=800&q=80' // scalp massage peptide therapy
  },
  {
    id: 'grey-coverage',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-grey-coverage.webp',
    url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80' // rich permanent hair colour
  },
  {
    id: 'root-touch-up',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-root-touch-up.webp',
    url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80' // root touch-up tint brush
  },
  {
    id: 'global-colour',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-global-colour.webp',
    url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80' // all-over radiant global colour
  },
  {
    id: 'highlights',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-highlights.webp',
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80' // foil highlights weave
  },
  {
    id: 'ombre',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-ombre.webp',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80' // ombre hair colour melt
  },

  // 2. Threading & Grooming (7 cards)
  {
    id: 'upper-lip-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-upper-lip-threading.webp',
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80' // facial threading detail
  },
  {
    id: 'lower-lip-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-lower-lip-threading.webp',
    url: 'https://images.unsplash.com/photo-1522337094346-24e6ff4c3b65?auto=format&fit=crop&w=800&q=80' // clean lips and chin profile
  },
  {
    id: 'chin-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-chin-threading.webp',
    url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' // jawline and chin contouring
  },
  {
    id: 'forehead-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-forehead-threading.webp',
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' // forehead and hairline refinement
  },
  {
    id: 'sides-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-sides-threading.webp',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' // side profile temporal contour
  },
  {
    id: 'neck-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-neck-threading.webp',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' // clean nape and neckline
  },
  {
    id: 'full-face-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-full-face-threading.webp',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' // full face threading & rose soothing
  },

  // 3. Professional Waxing (9 cards)
  {
    id: 'full-arms-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-arms-waxing.webp',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' // arms waxing treatment
  },
  {
    id: 'half-arms-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-half-arms-waxing.webp',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' // forearm skin care waxing
  },
  {
    id: 'underarms-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-underarms-waxing.webp',
    url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80' // underarm waxing hygiene
  },
  {
    id: 'full-legs-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-legs-waxing.webp',
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' // smooth legs waxing ritual
  },
  {
    id: 'half-legs-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-half-legs-waxing.webp',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80' // half legs waxing care
  },
  {
    id: 'full-front-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-front-waxing.webp',
    url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80' // body waxing private suite
  },
  {
    id: 'full-back-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-back-waxing.webp',
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' // back waxing smooth finish
  },
  {
    id: 'bikini-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-bikini-waxing.webp',
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' // private gentle waxing suite
  },
  {
    id: 'full-body-waxing',
    dest: 'public/images/lacrown/luxury-salon/waxing/salon-full-body-waxing.webp',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' // full body waxing ritual
  },

  // 4. De-Tan & Skin Bleach (6 cards)
  {
    id: 'face-neck-detan',
    dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-face-neck-detan.webp',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' // de-tan milk pack on face
  },
  {
    id: 'full-arms-detan',
    dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-arms-detan.webp',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80' // arms de-tan brightening scrub
  },
  {
    id: 'half-arms-detan',
    dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-half-arms-detan.webp',
    url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' // forearm sun tan removal
  },
  {
    id: 'full-legs-detan',
    dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-legs-detan.webp',
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' // legs de-tan clay mask
  },
  {
    id: 'full-back-detan',
    dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-back-detan.webp',
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' // back de-tan and polishing
  },
  {
    id: 'full-body-detan',
    dest: 'public/images/lacrown/luxury-salon/detan-bleach/salon-full-body-detan.webp',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' // full body radiance de-tan wrap
  },

  // 5. Facials & Anti-Ageing (6 cards)
  {
    id: 'clean-up',
    dest: 'public/images/lacrown/luxury-salon/facials/salon-clean-up.webp',
    url: 'https://images.unsplash.com/photo-1512290900672-1f41712a2336?auto=format&fit=crop&w=800&q=80' // express deep clean-up facial
  },
  {
    id: 'fruit-facial',
    dest: 'public/images/lacrown/luxury-salon/facials/salon-fruit-facial.webp',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' // organic fresh fruit facial
  },
  {
    id: 'radiance-facial',
    dest: 'public/images/lacrown/luxury-salon/facials/salon-radiance-facial.webp',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' // vitamin C radiance glow facial
  },
  {
    id: 'anti-ageing-facial',
    dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-anti-ageing-facial.webp',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80' // cellular anti-ageing facial
  },
  {
    id: 'collagen-rejuvenation-facial',
    dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-collagen-rejuvenation-facial.webp',
    url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' // collagen sheet mask facial
  },
  {
    id: 'skin-firming-lift-treatment',
    dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-skin-firming-lift-treatment.webp',
    url: 'https://images.unsplash.com/photo-1512290900672-1f41712a2336?auto=format&fit=crop&w=800&q=80' // skin firming microcurrent contour
  },

  // 6. Hand & Foot Care + Nails (7 cards)
  {
    id: 'luxury-manicure',
    dest: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-luxury-manicure.webp',
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80' // warm paraffin manicure
  },
  {
    id: 'classic-pedicure',
    dest: 'public/images/lacrown/luxury-salon/hand-foot-care/salon-classic-pedicure.webp',
    url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80' // classic pedicure heel care
  },
  {
    id: 'cut-file-polish',
    dest: 'public/images/lacrown/luxury-salon/nails/salon-cut-file-polish.webp',
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80' // nail cut, file & polish
  },
  {
    id: 'french-polish',
    dest: 'public/images/lacrown/luxury-salon/nails/salon-french-polish.webp',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' // classic French manicure
  },
  {
    id: 'gel-polish',
    dest: 'public/images/lacrown/luxury-salon/nails/salon-gel-polish.webp',
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80' // high-gloss UV gel polish
  },
  {
    id: 'nail-art-accent',
    dest: 'public/images/lacrown/luxury-salon/nails/salon-nail-art-accent.webp',
    url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80' // hand-painted fine nail art
  },
  {
    id: 'full-set-nail-art',
    dest: 'public/images/lacrown/luxury-salon/nails/salon-full-set-nail-art.webp',
    url: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80' // full set couture 3D nail art
  },

  // 7. Extensions, Massages, Body & Bridal (14 cards)
  {
    id: 'salon-eyelash-extensions',
    dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-eyelash-extensions.webp',
    url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80' // volume eyelash extensions
  },
  {
    id: 'hair-extensions',
    dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-hair-extensions.webp',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' // 100% Remy human hair extensions
  },
  {
    id: 'lash-lift',
    dest: 'public/images/lacrown/luxury-salon/extensions-lashes/salon-lash-lift.webp',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80' // keratin lash lift and curl
  },
  {
    id: 'head-massage',
    dest: 'public/images/lacrown/luxury-salon/massages/salon-head-massage.webp',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' // Ayurvedic head massage champi
  },
  {
    id: 'back-shoulder-massage',
    dest: 'public/images/lacrown/luxury-salon/massages/salon-back-shoulder-massage.webp',
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' // back and neck acupressure
  },
  {
    id: 'foot-reflexology',
    dest: 'public/images/lacrown/luxury-salon/massages/salon-foot-reflexology.webp',
    url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80' // foot reflexology massage
  },
  {
    id: 'classic-body-polishing',
    dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-classic-body-polishing.webp',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' // full body cane sugar scrub
  },
  {
    id: 'luxury-gold-body-polishing',
    dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-luxury-gold-body-polishing.webp',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80' // 24K gold shimmering body polish
  },
  {
    id: 'bridal-body-polishing',
    dest: 'public/images/lacrown/luxury-salon/body-polishing/salon-bridal-body-polishing.webp',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' // signature bridal body polishing
  },
  {
    id: 'reception-makeup',
    dest: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-reception-makeup.webp',
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80' // couture reception makeup
  },
  {
    id: 'airbrush-bridal-makeup',
    dest: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-airbrush-bridal-makeup.webp',
    url: 'https://images.unsplash.com/photo-1522337094346-24e6ff4c3b65?auto=format&fit=crop&w=800&q=80' // airbrush foundation bridal makeup
  },
  {
    id: 'saree-draping-styling',
    dest: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-saree-draping-styling.webp',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' // bridal silk saree draping
  },
  {
    id: 'crown-royale-membership',
    dest: 'public/images/lacrown/luxury-salon/memberships/salon-crown-royale-membership.webp',
    url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80' // VIP metallic luxury card
  },
  {
    id: 'crown-privilege-circle',
    dest: 'public/images/lacrown/luxury-salon/memberships/salon-crown-privilege-circle.webp',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80' // luxury membership gift box
  }
];

function downloadOne(item) {
  return new Promise((resolve) => {
    const dir = path.dirname(item.dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

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
            console.log(`[OK] ${item.id} -> ${item.dest} (${(size/1024).toFixed(1)} KB)`);
            resolve(true);
          });
        } else {
          console.warn(`[FAIL] ${item.id} (Status: ${res.statusCode})`);
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
  console.log(`Starting acquisition of ${downloads.length} curated luxury images...`);
  let success = 0;
  // Run with concurrency limit of 5
  for (let i = 0; i < downloads.length; i += 5) {
    const batch = downloads.slice(i, i + 5);
    const results = await Promise.all(batch.map(d => downloadOne(d)));
    success += results.filter(Boolean).length;
  }
  console.log(`\nCompleted! Successfully acquired ${success}/${downloads.length} images.`);
}

run();
