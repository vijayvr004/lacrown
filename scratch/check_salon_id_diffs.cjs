const fs = require('fs');

const manifestContent = fs.readFileSync('src/data/cardsManifest.ts', 'utf8');
const cardMatches = [...manifestContent.matchAll(/id:\s*'([^']+)'[\s\S]*?section:\s*'Luxury Salon'[\s\S]*?title:\s*['"]([^'"]+)['"]/g)];

const salonContent = fs.readFileSync('src/data/salonServices.ts', 'utf8');

const missingInFile = [];
cardMatches.forEach(m => {
  const id = m[1];
  const title = m[2];
  if (!salonContent.includes(`id: '${id}'`) && !salonContent.includes(`id: "${id}"`)) {
    missingInFile.push({ id, title });
  }
});

console.log('Manifest salon IDs not found directly in salonServices.ts:', missingInFile.length);
missingInFile.forEach(m => console.log(`  - [${m.id}] ${m.title}`));
