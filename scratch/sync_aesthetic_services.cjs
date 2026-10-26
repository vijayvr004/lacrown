const fs = require('fs');

const manifestContent = fs.readFileSync('src/data/cardsManifest.ts', 'utf8');
const cardMatches = [...manifestContent.matchAll(/id:\s*'([^']+)'[\s\S]*?image:\s*['"]([^'"]+)['"]/g)];

const imageMap = {};
cardMatches.forEach(m => {
  imageMap[m[1]] = m[2];
});

let aestheticContent = fs.readFileSync('src/data/aestheticServices.ts', 'utf8');

let updated = 0;
for (const [id, imagePath] of Object.entries(imageMap)) {
  // Replace image in aestheticServices
  const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*)['"][^'"]+['"]`);
  if (regex.test(aestheticContent)) {
    aestheticContent = aestheticContent.replace(regex, `$1'${imagePath}'`);
    updated++;
  }
}

fs.writeFileSync('src/data/aestheticServices.ts', aestheticContent);
console.log(`Updated ${updated} aesthetic services with canonical manifest paths.`);
