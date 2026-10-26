const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const fixes = [
  {
    id: 'womens-anti-hairfall',
    dest: 'public/images/lacrown/luxury-salon/womens-hair/salon-womens-anti-hairfall.webp',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lower-lip-threading',
    dest: 'public/images/lacrown/luxury-salon/threading/salon-lower-lip-threading.webp',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clean-up',
    dest: 'public/images/lacrown/luxury-salon/facials/salon-clean-up.webp',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skin-firming-lift-treatment',
    dest: 'public/images/lacrown/luxury-salon/anti-ageing/salon-skin-firming-lift-treatment.webp',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'airbrush-bridal-makeup',
    dest: 'public/images/lacrown/luxury-salon/bridal-makeup/salon-airbrush-bridal-makeup.webp',
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crown-royale-membership',
    dest: 'public/images/lacrown/luxury-salon/memberships/salon-crown-royale-membership.webp',
    url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
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
  console.log(`Fixing remaining ${fixes.length} images...`);
  for (const item of fixes) {
    await downloadOne(item);
  }
  console.log('Done!');
}

run();
