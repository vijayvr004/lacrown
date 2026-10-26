const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scratch/all_147_cards.json', 'utf8'));
const salon = data.filter(c => c.section === 'Luxury Salon');

const catCounts = {};
salon.forEach(c => {
  catCounts[c.category] = (catCounts[c.category] || 0) + 1;
});

console.log('Salon Categories & Counts in file:');
for (const [cat, count] of Object.entries(catCounts)) {
  console.log(`- ${cat}: ${count}`);
}
console.log('Total in file:', salon.length);
