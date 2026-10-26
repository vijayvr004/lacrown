const fs = require('fs');

const salonData = JSON.parse(fs.readFileSync('scratch/all_147_cards.json', 'utf8')).filter(c => c.section === 'Luxury Salon');

console.log('Men cards:');
salonData.filter(c => c.category.startsWith('Men')).forEach((c, i) => console.log(`  [M${i+1}] ${c.id}: ${c.name}`));

console.log('\nWomen cards:');
salonData.filter(c => c.category.startsWith('Women')).forEach((c, i) => console.log(`  [W${i+1}] ${c.id}: ${c.name}`));

console.log('\nKids cards:');
salonData.filter(c => c.category.startsWith('Kids')).forEach((c, i) => console.log(`  [K${i+1}] ${c.id}: ${c.name}`));
