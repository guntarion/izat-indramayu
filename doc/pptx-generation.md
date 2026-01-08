# PPTX Generation from HTML Slides

This document explains how to convert HTML presentation slides to PowerPoint (.pptx) format while preserving visual fidelity including gradients, animations, and embedded images.

## Overview

The conversion uses a **screenshot-based approach** that captures HTML slides as high-resolution images and assembles them into PowerPoint presentations using PptxGenJS.

### Why Screenshot-Based?

| Approach | Pros | Cons |
|----------|------|------|
| **Screenshot** | 100% visual fidelity, preserves gradients/animations, no HTML modification needed | Text not editable in PPTX |
| HTML-to-PPTX conversion | Editable text | Requires extensive HTML restructuring, loses CSS gradients, no animation support |

**Result**: Screenshot approach chosen for this project to maintain the beautiful visual effects.

---

## Architecture

```
HTML Slides (1280x800)
    ↓
Playwright (captures screenshots)
    ↓
PNG Images (temp)
    ↓
PptxGenJS (assembles into PPTX)
    ↓
PowerPoint File (16:10 ratio)
```

---

## Dependencies

### 1. Node.js and npm

Required for running the conversion scripts.

```bash
# Check if installed
node --version  # Should be v14 or higher
npm --version
```

### 2. Playwright

Headless browser for rendering HTML and capturing screenshots.

```bash
# Install Playwright
npm install playwright

# Install browser binaries (Chrome)
npx playwright install chrome

# On macOS, the script uses system Chrome for better font rendering
```

**Key Features Used**:
- `chromium.launch()` - Launch browser
- `page.goto()` - Navigate to HTML file
- `page.setViewportSize()` - Set fixed dimensions
- `page.screenshot()` - Capture screenshot

### 3. PptxGenJS

Library for creating PowerPoint presentations programmatically.

```bash
npm install pptxgenjs
```

**Key Features Used**:
- `pptx.layout = 'LAYOUT_16x10'` - Set slide aspect ratio
- `slide.addImage()` - Add screenshot to slide
- `pptx.writeFile()` - Save PPTX file

---

## Project Structure

```
izat-indramayu/
├── scripts/
│   ├── html-slides-to-pptx.js           # Main batch conversion
│   ├── convert-single-presentation.js   # Single presentation converter
│   └── resize-slides-for-pptx.js        # HTML modifier for better text visibility
├── presentasi-backup/                   # Original HTML slides (DO NOT MODIFY)
│   ├── presentasi_01_area_risk/
│   │   ├── slide-01-judul.html
│   │   ├── slide-02-pendahuluan.html
│   │   └── ...
│   └── ...
├── presentasi-for-pptx/                 # Modified HTML (16:10, larger fonts)
│   └── presentasi_01_area_risk/
│       └── ...
├── output/
│   └── pptx/                            # Generated PPTX files
│       ├── presentasi_01_area_risk_v2.pptx
│       └── ...
└── doc/
    └── pptx-generation.md               # This file
```

---

## Conversion Workflow

### Step 1: Prepare HTML Slides

Original slides use viewport-relative sizing (`min-height: 100vh`) which causes inconsistent dimensions. Modify them for PPTX export:

```bash
node scripts/resize-slides-for-pptx.js presentasi-for-pptx/presentasi_01_area_risk
```

**What this does**:
- Sets fixed dimensions: 1280x800px (16:10 ratio)
- Increases font sizes by 40% for better readability
- Adjusts padding to fit content properly

**CSS injected**:
```css
html { font-size: 22px !important; }  /* Base font scaled */
body {
  width: 1280px !important;
  height: 800px !important;
  overflow: hidden !important;
}
h1 { font-size: 2.2rem !important; }
h2 { font-size: 1.6rem !important; }
p, li { font-size: 1.1rem !important; }
```

### Step 2: Convert to PPTX

#### Option A: Single Presentation

```bash
node scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_area_risk_v2.pptx
```

#### Option B: Batch Convert All Presentations

```bash
node scripts/html-slides-to-pptx.js
```

This processes all presentations in `presentasi-backup/` and outputs to `output/pptx/`.

### Step 3: Verify Output

Open the generated PPTX files in PowerPoint, Keynote, or Google Slides to verify:
- Text is readable (not too small)
- Content fits within slide boundaries
- Visual effects are preserved
- Images are included

---

## Scripts Reference

### 1. `resize-slides-for-pptx.js`

**Purpose**: Modify HTML slides for optimal PPTX rendering

**Usage**:
```bash
node scripts/resize-slides-for-pptx.js <presentation_folder>
```

**Example**:
```bash
node scripts/resize-slides-for-pptx.js presentasi-for-pptx/presentasi_02_team_performance
```

**Parameters**:
- `presentation_folder` - Path to presentation folder containing `slide-*.html` files

**Configuration**:
```javascript
const TARGET_WIDTH = 1280;
const TARGET_HEIGHT = 800;   // 16:10 ratio
const FONT_SCALE = 1.4;      // 40% larger fonts
```

### 2. `convert-single-presentation.js`

**Purpose**: Convert a single presentation to PPTX

**Usage**:
```bash
node scripts/convert-single-presentation.js <source_folder> [output_file]
```

**Example**:
```bash
node scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/my_presentation.pptx
```

**Parameters**:
- `source_folder` - Path to presentation folder
- `output_file` (optional) - Output PPTX path (defaults to `output/pptx/<folder_name>.pptx`)

**Configuration**:
```javascript
const VIEWPORT = { width: 1280, height: 800 };  // Screenshot dimensions
const ANIMATION_WAIT = 2500;  // ms to wait for CSS/GSAP animations
const SCREENSHOT_TYPE = 'png';
```

### 3. `html-slides-to-pptx.js`

**Purpose**: Batch convert all presentations

**Usage**:
```bash
# Convert all presentations
node scripts/html-slides-to-pptx.js

# Convert specific presentations
node scripts/html-slides-to-pptx.js presentasi_01_area_risk presentasi_02_team_performance
```

**Configuration**: Same as `convert-single-presentation.js`

---

## Common Issues and Solutions

### Issue 1: Text Too Small

**Problem**: Text is barely readable in PowerPoint

**Solution**: Increase `FONT_SCALE` in `resize-slides-for-pptx.js`

```javascript
const FONT_SCALE = 1.6;  // Try 60% larger instead of 40%
```

Then re-run the resize script and regenerate PPTX.

### Issue 2: Content Cut Off

**Problem**: Text or elements extend beyond slide boundaries

**Solution 1**: Reduce font sizes for specific elements

Edit the CSS in the affected slide:
```css
/* Add to the PPTX Export Overrides section */
.specific-class { font-size: 0.9rem !important; }
```

**Solution 2**: Reduce padding

```css
.content { padding: 1rem 1.5rem !important; }
```

### Issue 3: Animations Not Captured

**Problem**: Slides appear before animations complete

**Solution**: Increase `ANIMATION_WAIT` in conversion scripts

```javascript
const ANIMATION_WAIT = 3500;  // Wait 3.5 seconds instead of 2.5
```

### Issue 4: Fonts Don't Match

**Problem**: Fonts in PPTX look different from browser

**Solution**: Ensure Google Fonts (Inter, Poppins) are installed on your system

```bash
# macOS: Install via Font Book
# Windows: Download from fonts.google.com and install
# Linux: Install via package manager
```

### Issue 5: Images Missing

**Problem**: Embedded images don't appear in slides

**Solution**: Check image paths in HTML are correct. Images should be accessible via the `assets` symlink:

```bash
ls -la presentasi-for-pptx/presentasi_01_area_risk/assets
```

---

## Customization Guide

### Change Aspect Ratio

To use 16:9 instead of 16:10:

1. **Update viewport** in conversion scripts:
```javascript
const VIEWPORT = { width: 1920, height: 1080 };  // 16:9
```

2. **Update layout**:
```javascript
pptx.layout = 'LAYOUT_16x9';
```

3. **Update resize script**:
```javascript
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;
```

### Adjust Font Sizes Globally

Edit `resize-slides-for-pptx.js`:

```javascript
const PPTX_CSS = `
h1 { font-size: 2.5rem !important; }  /* Larger titles */
h2 { font-size: 1.8rem !important; }
p, li { font-size: 1.2rem !important; }
`;
```

### Add Slide Numbers

Modify the conversion script to add slide numbers:

```javascript
// After adding image to slide
slide.addText(`${i + 1}`, {
  x: '90%',
  y: '90%',
  w: '8%',
  h: '8%',
  fontSize: 12,
  color: '666666',
  align: 'right'
});
```

---

## Performance Considerations

### Screenshot Resolution

Higher resolution = larger file sizes but better quality when zoomed.

| Resolution | Quality | File Size (per slide) | Use Case |
|-----------|---------|----------------------|----------|
| 1280x800 | Good | ~150-250 KB | Standard presentations |
| 1920x1200 | Better | ~300-400 KB | High-quality presentations |
| 2560x1600 | Best | ~500-700 KB | Large displays, printing |

**Current setting**: 1280x800 (good balance)

### Conversion Speed

- **Single slide**: ~2-3 seconds (includes animation wait)
- **20-slide presentation**: ~50-60 seconds
- **9 presentations (117 slides)**: ~5-6 minutes

**Bottleneck**: Animation wait time (2.5 seconds per slide)

### Batch Processing

To speed up batch conversion, reduce animation wait for slides without animations:

```javascript
// In conversion script, detect if slide has animations
const hasAnimations = await page.evaluate(() => {
  return document.querySelector('script[src*="gsap"]') !== null;
});

const waitTime = hasAnimations ? ANIMATION_WAIT : 500;
await page.waitForTimeout(waitTime);
```

---

## File Size Management

### Typical Sizes

| Presentation | Slides | Size |
|-------------|--------|------|
| presentasi_01 | 20 | 3.9 MB |
| presentasi_02 | 29 | 4.5 MB |
| presentasi_09 | 11 | 2.2 MB |

**Average**: ~150-200 KB per slide

### Reduce File Size

If file sizes are too large:

1. **Compress screenshots** before adding to PPTX:

```javascript
// Add Sharp dependency
const sharp = require('sharp');

// Compress screenshot
await sharp(screenshotPath)
  .png({ quality: 80, compressionLevel: 9 })
  .toFile(screenshotPath);
```

2. **Use JPEG instead of PNG** (lossy compression):

```javascript
const SCREENSHOT_TYPE = 'jpeg';

await page.screenshot({
  path: screenshotPath,
  type: 'jpeg',
  quality: 90  // 0-100
});
```

3. **Lower screenshot resolution**:

```javascript
const VIEWPORT = { width: 1024, height: 640 };  // Smaller
```

---

## Maintenance

### Updating Presentations

**Workflow**:
1. Modify HTML slides in `presentasi-backup/`
2. Copy to `presentasi-for-pptx/`
3. Run resize script
4. Regenerate PPTX

**Example**:
```bash
# Update HTML
vim presentasi-backup/presentasi_01_area_risk/slide-03-key-metrics.html

# Copy to working directory
cp -r presentasi-backup/presentasi_01_area_risk presentasi-for-pptx/

# Apply PPTX optimizations
node scripts/resize-slides-for-pptx.js presentasi-for-pptx/presentasi_01_area_risk

# Regenerate PPTX
node scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_area_risk_v2.pptx
```

### Version Control

**Recommended `.gitignore` entries**:
```
node_modules/
output/pptx/*.pptx
presentasi-for-pptx/
package-lock.json
```

**What to commit**:
- ✅ Scripts (`scripts/*.js`)
- ✅ Original HTML (`presentasi-backup/`)
- ✅ Documentation (`doc/*.md`)
- ❌ Generated PPTX files (too large)
- ❌ Modified HTML (`presentasi-for-pptx/`) - can be regenerated

---

## Advanced: CI/CD Integration

To automatically generate PPTX files on every commit:

### GitHub Actions Example

```yaml
# .github/workflows/generate-pptx.yml
name: Generate PPTX

on:
  push:
    paths:
      - 'presentasi-backup/**/*.html'

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Install Playwright browsers
        run: npx playwright install chrome --with-deps

      - name: Generate PPTX files
        run: node scripts/html-slides-to-pptx.js

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: pptx-files
          path: output/pptx/*.pptx
```

---

## Troubleshooting

### Error: "Cannot find module 'playwright'"

**Solution**:
```bash
npm install playwright
npx playwright install chrome
```

### Error: "Browser not found"

**Solution**:
```bash
npx playwright install chrome --with-deps
```

### Error: "Font not found"

**Solution**: Install Google Fonts locally
```bash
# macOS
open https://fonts.google.com/specimen/Inter
open https://fonts.google.com/specimen/Poppins
# Download and install via Font Book
```

### Screenshot is blank/white

**Cause**: HTML file path incorrect or animations not loaded

**Solution**:
1. Check file path is absolute
2. Increase `ANIMATION_WAIT`
3. Check browser console for errors (see script output)

---

## References

### Documentation
- [Playwright Documentation](https://playwright.dev/)
- [PptxGenJS Documentation](https://gitbrent.github.io/PptxGenJS/)
- [GSAP Animation Library](https://greensock.com/gsap/)

### Related Files
- `scripts/html-slides-to-pptx.js` - Main conversion script
- `scripts/resize-slides-for-pptx.js` - HTML modifier
- `scripts/convert-single-presentation.js` - Single converter
- `poster/plan/produce-pptx-from-presentation.md` - Original planning document

---

## Future Improvements

### Potential Enhancements

1. **Smart Animation Detection**
   - Detect slides with/without animations
   - Adjust wait time dynamically
   - Reduce total conversion time by 50%

2. **Interactive Mode**
   - Preview each slide before capture
   - Adjust wait time per slide
   - Skip/retry individual slides

3. **Template Support**
   - Apply PowerPoint master slides
   - Add consistent headers/footers
   - Corporate branding

4. **Parallel Processing**
   - Convert multiple presentations simultaneously
   - Use worker threads
   - Reduce total time for batch conversion

5. **PDF Export**
   - Generate both PPTX and PDF
   - Better for distribution
   - Smaller file sizes

---

## Contact and Support

For issues or questions:
1. Check this documentation first
2. Review error messages carefully
3. Consult the scripts' source code
4. Create an issue in the repository

**Last Updated**: January 2026
**Author**: IZAT K3 Analytics Team
