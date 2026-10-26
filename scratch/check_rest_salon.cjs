const fs = require('fs');
const salonContent = fs.readFileSync('src/data/salonServices.ts', 'utf8');
const sBlocks = salonContent.split(/\{\s*id:\s*'/).slice(1);
sBlocks.slice(60).forEach(block => {
  const id = block.substring(0, block.indexOf("'"));
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
  console.log(`${id} | ${nameMatch ? nameMatch[1] : id} | ${catMatch ? catMatch[1] : ''}`);
});
