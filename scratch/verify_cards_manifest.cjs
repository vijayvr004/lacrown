const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Read manifest source file
const manifestContent = fs.readFileSync('src/data/cardsManifest.ts', 'utf8');

// Parse cards from manifest
const cardMatches = [...manifestContent.matchAll(/id:\s*'([^']+)'[\s\S]*?section:\s*'([^']+)'[\s\S]*?category:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?image:\s*['"]([^'"]+)['"]/g)];

console.log(`Parsed ${cardMatches.length} cards from CARDS_MANIFEST`);

const results = [];
const fileHashMap = new Map();
let existingCount = 0;
let missingCount = 0;

cardMatches.forEach((m, idx) => {
  const [_, id, section, category, title, rawImage] = m;
  const diskPath = path.join('public', rawImage.replace(/^\/images\//, 'images/'));
  const exists = fs.existsSync(diskPath);

  let hash = null;
  if (exists) {
    existingCount++;
    const buffer = fs.readFileSync(diskPath);
    hash = crypto.createHash('sha256').update(buffer).digest('hex');
    if (!fileHashMap.has(hash)) {
      fileHashMap.set(hash, []);
    }
    fileHashMap.get(hash).push({ id, title, path: diskPath });
  } else {
    missingCount++;
  }

  results.push({
    index: idx + 1,
    id,
    section,
    category,
    title,
    image: rawImage,
    diskPath,
    exists,
    hash
  });
});

console.log('\n=== CARDS VERIFICATION REPORT ===');
console.log(`Total Registered Cards: ${results.length} / 147`);
console.log(`Cards with Existing Images: ${existingCount}`);
console.log(`Cards Missing Images: ${missingCount}`);

// Find duplicate file contents
let dupGroups = 0;
for (const [hash, cards] of fileHashMap.entries()) {
  if (cards.length > 1) {
    dupGroups++;
  }
}
console.log(`Unique Image Hashes: ${fileHashMap.size}`);
console.log(`Duplicate Image Groups: ${dupGroups}`);

fs.writeFileSync('scratch/verification_report.json', JSON.stringify({
  summary: {
    total: results.length,
    existing: existingCount,
    missing: missingCount,
    uniqueHashes: fileHashMap.size,
    duplicateGroups: dupGroups
  },
  cards: results
}, null, 2));

console.log('\nSaved verification report to scratch/verification_report.json');
