const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const root = process.cwd();
const packDir = path.join(root, 'site-pack');
const parts = fs.readdirSync(packDir)
  .filter((name) => name.endsWith('.b64'))
  .sort();

if (!parts.length) throw new Error('No site-pack chunks found');

const base64 = parts.map((name) => fs.readFileSync(path.join(packDir, name), 'utf8').trim()).join('');
const zipBuffer = Buffer.from(base64, 'base64');
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
new AdmZip(zipBuffer).extractAllTo(dist, true);

if (!fs.existsSync(path.join(dist, 'index.html'))) throw new Error('index.html missing after extraction');
console.log(`Built Rostikson site from ${parts.length} chunks (${zipBuffer.length} bytes)`);
