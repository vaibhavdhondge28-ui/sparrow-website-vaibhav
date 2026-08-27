const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');

async function optimize() {
  const images = [
    { input: 'skillverse-poster.jpg', output: 'skillverse-poster.webp', quality: 80, width: 800 },
    { input: 'ib-poster.jpg', output: 'ib-poster.webp', quality: 80, width: 800 },
    { input: 'og-image.jpg', output: 'og-image.webp', quality: 85, width: 1200 },
  ];

  for (const img of images) {
    const inputPath = path.join(publicDir, img.input);
    const outputPath = path.join(publicDir, img.output);

    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const oldStats = fs.statSync(inputPath);
      const newStats = fs.statSync(outputPath);
      console.log(`Converted ${img.input} (${Math.round(oldStats.size/1024)}KB) -> ${img.output} (${Math.round(newStats.size/1024)}KB)`);
    }
  }
}

optimize().catch(console.error);
