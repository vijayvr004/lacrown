const fs = require('fs');

// 1. Aesthetic Services
const aestheticText = fs.readFileSync('src/data/aestheticServices.ts', 'utf8');
const aRegex = /{\s*id:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*name:\s*(['"][^'"]+['"]),\s*category:\s*(['"][^'"]+['"])/g;
let match;
const aestheticServices = [];
while ((match = aRegex.exec(aestheticText)) !== null) {
  aestheticServices.push({
    id: match[1],
    slug: match[2],
    name: match[3].replace(/['"]/g, ''),
    category: match[4].replace(/['"]/g, '')
  });
}

// 2. Salon Services
const salonText = fs.readFileSync('src/data/salonServices.ts', 'utf8');
const sRegex = /{\s*id:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*name:\s*(['"][^'"]+['"]),\s*category:\s*(['"][^'"]+['"])/g;
const salonServices = [];
while ((match = sRegex.exec(salonText)) !== null) {
  salonServices.push({
    id: match[1],
    slug: match[2],
    name: match[3].replace(/['"]/g, ''),
    category: match[4].replace(/['"]/g, '')
  });
}

// 3. Offers
const offersText = fs.readFileSync('src/pages/OffersPage.tsx', 'utf8');
// Let's inspect packages/offers in OffersPage.tsx
const oMatches = [...offersText.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/g)];
const offers = oMatches.map(m => ({ id: m[1], title: m[2] }));

// 4. Academy
const academyText = fs.readFileSync('src/pages/AcademyPage.tsx', 'utf8');
const acMatches = [...academyText.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/g)];
const academy = acMatches.map(m => ({ id: m[1], title: m[2] }));

// 5. Blog
const blogText = fs.readFileSync('src/pages/BlogPage.tsx', 'utf8');
const bMatches = [...blogText.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/g)];
const blogs = bMatches.map(m => ({ id: m[1], title: m[2] }));

console.log('=== CARD INVENTORY SUMMARY ===');
console.log(`1. Aesthetic Clinic Services: ${aestheticServices.length} (Target: 35)`);
console.log(`2. Luxury Salon Services: ${salonServices.length} (Target: 97)`);
console.log(`3. Curated Packages & Offers: ${offers.length} (Target: 4)`);
console.log(`4. Academy Training Courses: ${academy.length} (Target: 3)`);
console.log(`5. Educational Blog Articles: ${blogs.length} (Target: 6)`);
console.log(`6. Homepage Experience Cards: 2 (Target: 2)`);
const total = aestheticServices.length + salonServices.length + offers.length + academy.length + blogs.length + 2;
console.log(`\nTotal Registered Cards: ${total} (Target: 147)`);

fs.writeFileSync('scratch/inventory_dump.json', JSON.stringify({
  aesthetic: aestheticServices,
  salon: salonServices,
  offers,
  academy,
  blogs
}, null, 2));
