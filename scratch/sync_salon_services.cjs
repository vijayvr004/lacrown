const fs = require('fs');

const manifestContent = fs.readFileSync('src/data/cardsManifest.ts', 'utf8');
const cardMatches = [...manifestContent.matchAll(/id:\s*'([^']+)'[\s\S]*?image:\s*['"]([^'"]+)['"]/g)];

const imageMap = {};
cardMatches.forEach(m => {
  imageMap[m[1]] = m[2];
});

let salonContent = fs.readFileSync('src/data/salonServices.ts', 'utf8');

// Parse all service blocks in salonServices.ts
const blocks = salonContent.split(/(?={\s*id:\s*['"])/);
let matchedCount = 0;

const updatedBlocks = blocks.map(block => {
  const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
  if (!idMatch) return block;
  const id = idMatch[1];
  if (imageMap[id]) {
    matchedCount++;
    const targetImg = imageMap[id];
    if (/image:\s*['"][^'"]+['"]/.test(block)) {
      return block.replace(/image:\s*['"][^'"]+['"]/, `image: '${targetImg}'`);
    } else {
      // Add image property before priceNote or at end of object
      if (block.includes('priceNote:')) {
        return block.replace(/(priceNote:)/, `image: '${targetImg}',\n    $1`);
      } else {
        return block.replace(/(}\s*,?\s*$)/, `  image: '${targetImg}',\n$1`);
      }
    }
  }
  return block;
});

fs.writeFileSync('src/data/salonServices.ts', updatedBlocks.join(''));
console.log(`Updated ${matchedCount} salon services in salonServices.ts with canonical images.`);
