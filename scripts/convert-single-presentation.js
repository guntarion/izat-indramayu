/**
 * Convert a single presentation folder to PPTX
 *
 * Usage: node scripts/convert-single-presentation.js <source_folder> [output_file]
 */

const { chromium } = require('playwright');
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

// Configuration - 16:10 for better text visibility
const VIEWPORT = { width: 1280, height: 800 };
const ANIMATION_WAIT = 2500;
const SCREENSHOT_TYPE = 'png';

/**
 * Get sorted slide files from a presentation folder
 */
function getSlideFiles(folderPath) {
  return fs.readdirSync(folderPath)
    .filter(f => f.startsWith('slide-') && f.endsWith('.html'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/slide-(\d+)/)?.[1] || '0');
      const numB = parseInt(b.match(/slide-(\d+)/)?.[1] || '0');
      return numA - numB;
    });
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('Usage: node convert-single-presentation.js <source_folder> [output_file]');
    process.exit(1);
  }

  const sourceFolder = path.resolve(args[0]);
  const folderName = path.basename(sourceFolder);
  const outputFile = args[1]
    ? path.resolve(args[1])
    : path.join(path.dirname(sourceFolder), '..', 'output', 'pptx', `${folderName}.pptx`);

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });

  const slideFiles = getSlideFiles(sourceFolder);
  if (slideFiles.length === 0) {
    console.error('No slide files found');
    process.exit(1);
  }

  console.log(`\nConverting: ${folderName}`);
  console.log(`Slides: ${slideFiles.length}`);
  console.log(`Viewport: ${VIEWPORT.width}x${VIEWPORT.height} (16:10)`);
  console.log(`Output: ${outputFile}\n`);

  // Create presentation
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x10';
  pptx.author = 'IZAT K3 Analytics - UP Indramayu';
  pptx.company = 'PT PLN Nusantara Power';
  pptx.title = folderName;
  pptx.subject = 'Analisis Data K3';

  // Launch browser
  const launchOptions = {};
  if (process.platform === 'darwin') {
    launchOptions.channel = 'chrome';
  }
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewportSize(VIEWPORT);

  // Temp directory for screenshots
  const tempDir = path.join(process.env.TMPDIR || '/tmp', `pptx-${Date.now()}`);
  fs.mkdirSync(tempDir, { recursive: true });

  try {
    for (let i = 0; i < slideFiles.length; i++) {
      const slideFile = slideFiles[i];
      const slidePath = path.resolve(sourceFolder, slideFile);
      const screenshotPath = path.join(tempDir, `${slideFile}.${SCREENSHOT_TYPE}`);

      // Navigate and wait for animations
      await page.goto(`file://${slidePath}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(ANIMATION_WAIT);

      // Capture screenshot
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
        type: SCREENSHOT_TYPE
      });

      // Add slide
      const slide = pptx.addSlide();
      slide.addImage({
        path: screenshotPath,
        x: 0,
        y: 0,
        w: '100%',
        h: '100%'
      });

      process.stdout.write(`  Slide ${i + 1}/${slideFiles.length}\r`);
    }

    console.log(`  Completed ${slideFiles.length} slides`);

    // Save PPTX
    await pptx.writeFile({ fileName: outputFile });
    console.log(`\nSaved: ${outputFile}\n`);

  } finally {
    await page.close();
    await browser.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
