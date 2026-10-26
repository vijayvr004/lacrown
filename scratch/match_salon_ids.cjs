const fs = require('fs');

const salonContent = fs.readFileSync('src/data/salonServices.ts', 'utf8');

const sBlocks = salonContent.split(/\{\s*id:\s*'/).slice(1);
const salonServicesInFile = sBlocks.map(block => {
  const id = block.substring(0, block.indexOf("'"));
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
  return { id, name: nameMatch ? nameMatch[1] : id, category: catMatch ? catMatch[1] : '' };
});

console.log('Total services in salonServices.ts:', salonServicesInFile.length);
salonServicesInFile.slice(30, 70).forEach(s => console.log(`  ${s.id} | ${s.name} | ${s.category}`));
