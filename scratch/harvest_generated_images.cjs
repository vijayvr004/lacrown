const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/varsh/.gemini/antigravity/brain/be752d42-557a-4771-996e-84219551559e';
const manifestFile = 'src/data/cardsManifest.ts';

const manifestContent = fs.readFileSync(manifestFile, 'utf8');
const cardMatches = [...manifestContent.matchAll(/id:\s*'([^']+)'[\s\S]*?image:\s*['"]([^'"]+)['"]/g)];

const imageTargets = {};
cardMatches.forEach(m => {
  const id = m[1];
  const image = m[2];
  const basename = path.basename(image, path.extname(image));
  imageTargets[basename] = image;
});

// Scan brain dir for all jpg files
const files = fs.readdirSync(brainDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

let matched = 0;
files.forEach(f => {
  // Strip trailing timestamp e.g. salon_flat_ironing_1792991512345.jpg -> salon_flat_ironing or salon-flat-ironing
  const baseWithoutExt = path.basename(f, path.extname(f));
  const normalized = baseWithoutExt.replace(/_\d+$/, '').replace(/_/g, '-');

  if (imageTargets[normalized]) {
    const targetRel = imageTargets[normalized];
    const targetFull = path.join('public', targetRel.replace(/^\/images\//, 'images/'));
    const targetDir = path.dirname(targetFull);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    // Copy file
    const srcFull = path.join(brainDir, f);
    fs.copyFileSync(srcFull, targetFull);
    matched++;
    console.log(`Matched & Copied: ${f} -> ${targetFull}`);
  }
});

console.log(`\nHarvested ${matched} generated images.`);
