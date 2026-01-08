/**
 * HTML Slides to PPTX Converter
 *
 * Converts HTML presentation slides to PowerPoint by capturing screenshots
 * and assembling them into a PPTX file.
 *
 * Usage: node scripts/html-slides-to-pptx.js [presentation_folder]
 *
 * If no folder specified, converts all presentations in presentasi-backup/
 */

const { chromium } = require('playwright');
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

// Configuration
const VIEWPORT = { width: 1280, height: 800 }; // 16:10 for better text visibility
const ANIMATION_WAIT = 2500; // ms to wait for animations
const SCREENSHOT_TYPE = 'png';

// Presentation titles mapping
const PRESENTATION_TITLES = {
  'presentasi_01_area_risk': 'Highlight Analisis: Risiko Area',
  'presentasi_02_team_performance': 'Highlight Analisis: Performa Tim',
  'presentasi_03_resolution_workflow': 'Highlight Analisis: Alur Resolusi',
  'presentasi_04_shift_patterns': 'Highlight Analisis: Pola Shift',
  'presentasi_05_asset_tracking': 'Highlight Analisis: Pelacakan Asset',
  'presentasi_06_risk_prediction': 'Highlight Analisis: Model Prediksi Risiko',
  'presentasi_07_smart_recommendation': 'Highlight Analisis: Smart Recommendation',
  'presentasi_08_anomaly_detection': 'Highlight Analisis: Deteksi Anomali',
  'presentasi_09_data_cleansing': 'Pipeline Pembersihan Data IZAT K3'
};

/**
 * Get sorted slide files from a presentation folder
 */
function getSlideFiles(folderPath) {
  const files = fs.readdirSync(folderPath)
    .filter(f => f.startsWith('slide-') && f.endsWith('.html'))
    .sort((a, b) => {
      // Extract slide numbers for proper sorting (slide-01, slide-02, etc.)
      const numA = parseInt(a.match(/slide-(\d+)/)?.[1] || '0');
      const numB = parseInt(b.match(/slide-(\d+)/)?.[1] || '0');
      return numA - numB;
    });
  return files;
}

/**
 * Convert a single presentation folder to PPTX
 */
async function convertPresentationToPptx(presentationFolder, outputPath, browser) {
  const folderName = path.basename(presentationFolder);
  const slideFiles = getSlideFiles(presentationFolder);

  if (slideFiles.length === 0) {
    console.log(`  No slides found in ${folderName}, skipping...`);
    return false;
  }

  console.log(`  Converting ${folderName} (${slideFiles.length} slides)...`);

  // Create presentation
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x10';  // Match our 16:10 viewport
  pptx.author = 'IZAT K3 Analytics - UP Indramayu';
  pptx.company = 'PT PLN Nusantara Power';
  pptx.title = PRESENTATION_TITLES[folderName] || folderName;
  pptx.subject = 'Analisis Data K3';

  // Create browser page
  const page = await browser.newPage();
  await page.setViewportSize(VIEWPORT);

  // Create temp directory for screenshots
  const tempDir = path.join(process.env.TMPDIR || '/tmp', `pptx-${Date.now()}`);
  fs.mkdirSync(tempDir, { recursive: true });

  try {
    for (let i = 0; i < slideFiles.length; i++) {
      const slideFile = slideFiles[i];
      const slidePath = path.resolve(presentationFolder, slideFile);
      const screenshotPath = path.join(tempDir, `${slideFile}.${SCREENSHOT_TYPE}`);

      // Navigate to slide
      await page.goto(`file://${slidePath}`, { waitUntil: 'networkidle' });

      // Wait for animations to complete
      await page.waitForTimeout(ANIMATION_WAIT);

      // Capture screenshot
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
        type: SCREENSHOT_TYPE
      });

      // Add slide with screenshot as full background
      const slide = pptx.addSlide();
      slide.addImage({
        path: screenshotPath,
        x: 0,
        y: 0,
        w: '100%',
        h: '100%'
      });

      // Progress indicator
      process.stdout.write(`    Slide ${i + 1}/${slideFiles.length}\r`);
    }

    console.log(`    Completed ${slideFiles.length} slides`);

    // Save PPTX
    await pptx.writeFile({ fileName: outputPath });
    console.log(`    Saved: ${outputPath}`);

    return true;
  } finally {
    // Cleanup temp files
    await page.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const projectRoot = path.resolve(__dirname, '..');
  const sourceDir = path.join(projectRoot, 'presentasi-backup');
  const outputDir = path.join(projectRoot, 'output', 'pptx');

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Determine which presentations to convert
  let presentations;
  if (args.length > 0) {
    // Convert specific presentation
    presentations = args.map(arg => {
      const name = arg.replace(/\/$/, ''); // Remove trailing slash
      return name.startsWith('presentasi_') ? name : `presentasi_${name}`;
    });
  } else {
    // Convert all presentations
    presentations = fs.readdirSync(sourceDir)
      .filter(f => f.startsWith('presentasi_') && fs.statSync(path.join(sourceDir, f)).isDirectory())
      .sort();
  }

  console.log(`\nHTML to PPTX Converter`);
  console.log(`======================`);
  console.log(`Source: ${sourceDir}`);
  console.log(`Output: ${outputDir}`);
  console.log(`Presentations: ${presentations.length}\n`);

  // Launch browser (use Chrome on macOS for best font rendering)
  const launchOptions = {};
  if (process.platform === 'darwin') {
    launchOptions.channel = 'chrome';
  }

  const browser = await chromium.launch(launchOptions);

  let successCount = 0;
  let failCount = 0;

  try {
    for (const pres of presentations) {
      const inputPath = path.join(sourceDir, pres);
      const outputPath = path.join(outputDir, `${pres}.pptx`);

      if (!fs.existsSync(inputPath)) {
        console.log(`  Skipping ${pres} (folder not found)`);
        failCount++;
        continue;
      }

      try {
        const success = await convertPresentationToPptx(inputPath, outputPath, browser);
        if (success) successCount++;
        else failCount++;
      } catch (error) {
        console.error(`  Error converting ${pres}: ${error.message}`);
        failCount++;
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`\nConversion Complete!`);
  console.log(`  Success: ${successCount}`);
  console.log(`  Failed: ${failCount}`);
  console.log(`  Output: ${outputDir}\n`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
