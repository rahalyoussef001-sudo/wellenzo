/**
 * Quiet Focus PDF Exporter
 * 
 * This script uses Puppeteer (via Google Chrome or Microsoft Edge) to render the 
 * offline HTML ebook ("ebook en/quiet-focus-EN.html") into a print-ready A4 PDF 
 * stored in the "exports/" folder. It is independent of the main site landing pages.
 */
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

function getChromePath() {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
    // Fallback to Edge since it is chromium-based and always present on Windows
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Microsoft\\Edge\\Application\\msedge.exe'),
  ];
  
  for (const p of paths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

(async () => {
  try {
    const chromePath = getChromePath();
    if (!chromePath) {
      console.error('[X] Error: Could not find Google Chrome or Microsoft Edge. Please install Chrome or Edge to run PDF exports.');
      process.exit(1);
    }
    
    console.log(`[i] Using browser engine at: ${chromePath}`);
    
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true
    });
    
    const page = await browser.newPage();
    
    const sourceHtml = path.resolve(__dirname, '../ebook en/quiet-focus-EN.html');
    const targetPdf = path.resolve(__dirname, '../exports/quiet-focus-EN.pdf');
    
    console.log(`[i] Loading source: ${sourceHtml}`);
    await page.goto('file:///' + sourceHtml.replace(/\\/g, '/'), {
      waitUntil: 'networkidle0'
    });
    
    console.log(`[i] Exporting PDF...`);
    
    const exportsDir = path.dirname(targetPdf);
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }
    
    await page.pdf({
      path: targetPdf,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      }
    });
    
    console.log('[OK] PDF export completed successfully!');
    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error(`[X] Export failed: ${error.message}`);
    process.exit(1);
  }
})();
