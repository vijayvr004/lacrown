const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/verification_report.json', 'utf8'));

const hashMap = {};
report.cards.forEach(c => {
  if (c.hash) {
    hashMap[c.hash] = hashMap[c.hash] || [];
    hashMap[c.hash].push(c);
  }
});

console.log('=== DUPLICATE HASH GROUPS ===');
let dupCount = 0;
for (const [hash, group] of Object.entries(hashMap)) {
  if (group.length > 1) {
    dupCount++;
    console.log(`\nGroup ${dupCount} (Hash: ${hash.substring(0, 10)}... | Count: ${group.length}):`);
    group.forEach(it => {
      console.log(`  - [${it.id}] (${it.category}) ${it.title} -> ${it.diskPath}`);
    });
  }
}
console.log(`\nTotal duplicate groups: ${dupCount}`);
