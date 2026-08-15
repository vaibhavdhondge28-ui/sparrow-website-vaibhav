import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

// 1. Sparrow Logo SVG (1:1 Square Canvas, Transparent Background, 512x512 ViewBox)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" fill="none">
  <g transform="translate(64, 64) scale(10.666667)">
    <!-- Primary Soaring Wing -->
    <path
      d="M5 24C13 10 25 5 33 7C25 17 17 23 5 24Z"
      fill="#0066FF"
    />
    <!-- Secondary Precision Wing -->
    <path
      d="M11 31C18 21 27 16 35 17C29 25 21 29 11 31Z"
      fill="#38BDF8"
      opacity="0.95"
    />
    <!-- Apex Accent Dot -->
    <circle cx="31" cy="6" r="2.5" fill="#0066FF" />
  </g>
</svg>`;

// 2. Sparrow Wordmark SVG (Transparent Background, 1200x320 ViewBox)
const wordmarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="100%" height="100%" fill="none">
  <style>
    .title {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 900;
      font-size: 130px;
      fill: #0B2540;
      letter-spacing: -2px;
    }
    .subtitle {
      font-family: 'JetBrains Mono', 'Space Grotesk', monospace, sans-serif;
      font-weight: 700;
      font-size: 38px;
      fill: #0066FF;
      letter-spacing: 12px;
    }
  </style>

  <!-- Logo Mark Graphic -->
  <g transform="translate(40, 30) scale(7.2)">
    <path
      d="M5 24C13 10 25 5 33 7C25 17 17 23 5 24Z"
      fill="#0066FF"
    />
    <path
      d="M11 31C18 21 27 16 35 17C29 25 21 29 11 31Z"
      fill="#38BDF8"
      opacity="0.95"
    />
    <circle cx="31" cy="6" r="2.5" fill="#0066FF" />
  </g>

  <!-- Brand Typography -->
  <text x="340" y="165" class="title">SPARROW</text>
  <text x="344" y="240" class="subtitle">IT &amp; DIGITAL SOLUTIONS</text>
</svg>`;

// Write SVGs to public folder
const logoSvgPath = path.join(publicDir, 'sparrow-logo.svg');
const wordmarkSvgPath = path.join(publicDir, 'sparrow-wordmark.svg');

fs.writeFileSync(logoSvgPath, logoSvg, 'utf8');
fs.writeFileSync(wordmarkSvgPath, wordmarkSvg, 'utf8');

console.log('Saved SVG files:');
console.log(' - public/sparrow-logo.svg');
console.log(' - public/sparrow-wordmark.svg');
