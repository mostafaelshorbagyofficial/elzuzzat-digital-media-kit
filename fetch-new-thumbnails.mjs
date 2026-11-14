import fs from 'fs';
import path from 'path';

const baseDir = 'C:/Users/0000/.gemini/antigravity/scratch/promedia-elzuzzat/public/assets/thumbnails';
const sportsDir = path.join(baseDir, 'sports');
const commercialDir = path.join(baseDir, 'commercial');

if (!fs.existsSync(sportsDir)) fs.mkdirSync(sportsDir, { recursive: true });
if (!fs.existsSync(commercialDir)) fs.mkdirSync(commercialDir, { recursive: true });

const items = [
  // Sports (رياضة) - 6 items
  { id: 'DcPBRshOQxk', file: 'sports/sports-1.jpg' },
  { id: 'Dcb-qnDISy6', file: 'sports/sports-2.jpg' },
  { id: 'DfdG9FbuGer', file: 'sports/sports-3.jpg' },
  { id: 'Dc1kLZZusdo', file: 'sports/sports-4.jpg' },
  { id: 'DeucJNxxnih', file: 'sports/sports-5.jpg' },
  { id: 'Dd9cvq3RNF2', file: 'sports/sports-6.jpg' },

  // Commercial Ads (إعلانات مازن) - 11 unique items
  { id: 'Db8x1HOtRhB', file: 'commercial/commercial-1.jpg' },
  { id: 'DcTOJ6SNZCh', file: 'commercial/commercial-2.jpg' },
  { id: 'Dcb2S3oRdos', file: 'commercial/commercial-3.jpg' },
  { id: 'Dc_v8lGxoUD', file: 'commercial/commercial-4.jpg' },
  { id: 'DdHT8mytvMa', file: 'commercial/commercial-5.jpg' },
  { id: 'DYSgeFeNRpk', file: 'commercial/commercial-6.jpg' },
  { id: 'DUUAbkuDZBO', file: 'commercial/commercial-7.jpg' },
  { id: 'DTYOHTZjRY6', file: 'commercial/commercial-8.jpg' },
  { id: 'DRh-ACfDSeg', file: 'commercial/commercial-9.jpg' },
  { id: 'DQ9_yJ7DbmW', file: 'commercial/commercial-10.jpg' },
  { id: 'DNv6D_s2vSy', file: 'commercial/commercial-11.jpg' },
];

async function downloadThumbnail(reelId, destFile) {
  const destPath = path.join(baseDir, destFile);
  try {
    const url = `https://www.instagram.com/reel/${reelId}/`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    });
    
    if (!res.ok) {
      console.warn(`HTTP ${res.status} for ${reelId}`);
      return false;
    }
    
    const text = await res.text();
    const ogMatch = text.match(/<meta\s+(?:property|name)=["']og:image["']\s+content=["']([^"']+)["']/i)
      || text.match(/content=["']([^"']+)["']\s+(?:property|name)=["']og:image["']/i);
      
    if (ogMatch && ogMatch[1]) {
      const imgUrl = ogMatch[1].replace(/&amp;/g, '&');
      console.log(`Found image for ${reelId}: downloading...`);
      const imgRes = await fetch(imgUrl);
      if (imgRes.ok) {
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`Saved ${destFile} (${buffer.byteLength} bytes)`);
        return true;
      }
    }
    console.warn(`No thumbnail found for ${reelId}`);
    return false;
  } catch (err) {
    console.error(`Error downloading for ${reelId}:`, err.message);
    return false;
  }
}

async function run() {
  console.log(`Starting thumbnail downloads for ${items.length} items...`);
  for (const item of items) {
    await downloadThumbnail(item.id, item.file);
    // tiny delay to be gentle with rate limits
    await new Promise(r => setTimeout(r, 600));
  }
  console.log('All downloads completed!');
}

run();
