const fs = require('fs');

const report = JSON.parse(fs.readFileSync('scratch/verification_report.json', 'utf8'));
const missing = report.cards.filter(c => !c.exists);

const catGroups = {};
missing.forEach(c => {
  catGroups[c.category] = catGroups[c.category] || [];
  catGroups[c.category].push(c);
});

console.log(`=== MISSING CARDS BREAKDOWN (${missing.length} cards) ===`);
for (const [cat, items] of Object.entries(catGroups)) {
  console.log(`\nCategory: ${cat} (${items.length} cards):`);
  items.forEach(it => console.log(`  - [${it.id}] ${it.title} -> ${it.diskPath}`));
}
