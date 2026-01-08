# HTML to PPTX - Reference Documentation

Complete reference for converting HTML presentation slides to PowerPoint format.

## Table of Contents

1. [Overview](#overview)
2. [When to Use This Skill](#when-to-use-this-skill)
3. [Architecture](#architecture)
4. [Dependencies](#dependencies)
5. [Quick Start](#quick-start)
6. [Script Reference](#script-reference)
7. [Workflow](#workflow)
8. [Configuration](#configuration)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Topics](#advanced-topics)

---

## Overview

This skill converts HTML presentation slides to PowerPoint (.pptx) format using a **screenshot-based approach** that preserves 100% visual fidelity including:
- CSS gradients and animations
- GSAP animations (captured at final state)
- Custom fonts and styling
- Embedded images

### Why Screenshot-Based?

| Approach | Visual Fidelity | Text Editable | HTML Modification |
|----------|----------------|---------------|-------------------|
| **Screenshot** | 100% | ❌ | None required |
| HTML-to-PPTX | ~60% | ✅ | Extensive required |

The screenshot approach was chosen because:
1. Preserves all CSS gradients (not supported in PPTX)
2. Captures animations at their final state
3. No need to rewrite HTML structure
4. Works with any HTML/CSS complexity

---

## When to Use This Skill

**Use this skill when:**
- Converting existing HTML slides to PPTX for distribution
- HTML slides use CSS gradients, animations, or complex styling
- You need pixel-perfect visual matching
- Text editability in PPTX is not required

**Don't use if:**
- You need editable text in PowerPoint (use ppt-management skill instead)
- Slides are simple and can be created directly in PPTX
- File size is critical constraint (screenshots are larger than text)

---

## Architecture

```
HTML Slides (presentasi-backup/)
    ↓
[Step 1: Resize Script]
    ↓
Modified HTML (presentasi-for-pptx/)
- Fixed 1280x800 dimensions (16:10)
- Larger fonts (+40%)
    ↓
[Step 2: Playwright]
- Launch headless browser
- Navigate to HTML
- Wait for animations (2.5s)
- Capture screenshot
    ↓
PNG Images (temp)
    ↓
[Step 3: PptxGenJS]
- Create presentation
- Add images as slides
- Set 16:10 layout
    ↓
PowerPoint File (.pptx)
```

---

## Dependencies

### Required Packages

```bash
npm install playwright pptxgenjs
npx playwright install chrome
```

**Playwright** - Headless browser for rendering HTML and capturing screenshots
- Version: Latest
- Browser: Chrome (best font rendering on macOS)

**PptxGenJS** - PowerPoint generation library
- Version: Latest
- Features used: 16:10 layout, image slides

### System Requirements

- Node.js v14 or higher
- Chrome browser (installed by Playwright)
- 500MB free disk space (for temp screenshots)

---

## Quick Start

### Invoke via Claude Code

```
User: Use the html-to-pptx skill to convert presentasi_01_area_risk
```

Claude will:
1. Check if HTML needs resizing
2. Apply PPTX optimizations (16:10, larger fonts)
3. Convert to PPTX
4. Show output location

### Manual Invocation

```bash
# Step 1: Prepare HTML (if not already done)
node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
  presentasi-for-pptx/presentasi_01_area_risk

# Step 2: Convert to PPTX
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/my_presentation.pptx
```

---

## Script Reference

### 1. resize-slides-for-pptx.js

**Purpose**: Prepare HTML slides for optimal PPTX rendering

**What it does**:
- Injects CSS overrides for fixed dimensions (1280x800)
- Scales base font size by 1.4x (40% larger)
- Adjusts padding and margins
- Ensures content fits within slide boundaries

**Usage**:
```bash
node scripts/resize-slides-for-pptx.js <presentation_folder>
```

**Example**:
```bash
node scripts/resize-slides-for-pptx.js presentasi-for-pptx/presentasi_02_team_performance
```

**Configuration**:
```javascript
const TARGET_WIDTH = 1280;    // 16:10 aspect ratio
const TARGET_HEIGHT = 800;
const FONT_SCALE = 1.4;       // 40% larger fonts
```

**CSS Injected**:
```css
html { font-size: 22px !important; }
body {
  width: 1280px !important;
  height: 800px !important;
  overflow: hidden !important;
}
h1 { font-size: 2.2rem !important; }
h2 { font-size: 1.6rem !important; }
p, li { font-size: 1.1rem !important; }
```

**Idempotency**: Safe to run multiple times (checks for existing modifications)

---

### 2. convert-single-presentation.js

**Purpose**: Convert a single presentation folder to PPTX

**What it does**:
1. Launch Playwright browser
2. For each slide:
   - Navigate to HTML file
   - Wait for animations (2.5s)
   - Capture screenshot
   - Add to PPTX
3. Save PPTX file

**Usage**:
```bash
node scripts/convert-single-presentation.js <source_folder> [output_file]
```

**Example**:
```bash
node scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/area_risk_final.pptx
```

**Configuration**:
```javascript
const VIEWPORT = { width: 1280, height: 800 };  // Screenshot size
const ANIMATION_WAIT = 2500;   // Wait time for animations (ms)
const SCREENSHOT_TYPE = 'png'; // Image format
```

**Output**:
- Creates PPTX with 16:10 layout
- Each slide is a full-bleed screenshot
- Metadata: Author, Company, Title

---

### 3. html-slides-to-pptx.js

**Purpose**: Batch convert multiple presentations

**What it does**:
- Process all presentations in presentasi-backup/
- Or process specific presentations by name
- Uses same conversion logic as single converter

**Usage**:
```bash
# Convert all presentations
node scripts/html-slides-to-pptx.js

# Convert specific presentations
node scripts/html-slides-to-pptx.js presentasi_01_area_risk presentasi_02_team_performance
```

**Output**:
```
Converting 9 presentations...
  presentasi_01_area_risk (20 slides) ✓
  presentasi_02_team_performance (29 slides) ✓
  ...
Success: 9/9
```

---

## Workflow

### Full Conversion Workflow

```bash
# 1. Copy original slides to working directory
cp -r presentasi-backup/presentasi_01_area_risk presentasi-for-pptx/

# 2. Apply PPTX optimizations
node scripts/resize-slides-for-pptx.js presentasi-for-pptx/presentasi_01_area_risk

# 3. Convert to PPTX
node scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_area_risk_v2.pptx

# 4. Verify output
open output/pptx/presentasi_01_area_risk_v2.pptx
```

### Updating Existing Presentations

```bash
# 1. Modify HTML in presentasi-backup/
vim presentasi-backup/presentasi_01_area_risk/slide-03-key-metrics.html

# 2. Copy to working directory
cp -r presentasi-backup/presentasi_01_area_risk presentasi-for-pptx/

# 3. Re-apply optimizations
node scripts/resize-slides-for-pptx.js presentasi-for-pptx/presentasi_01_area_risk

# 4. Regenerate PPTX
node scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_area_risk_v3.pptx
```

---

## Configuration

### Change Aspect Ratio

To use 16:9 instead of 16:10:

**In resize script**:
```javascript
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;
```

**In conversion scripts**:
```javascript
const VIEWPORT = { width: 1920, height: 1080 };
pptx.layout = 'LAYOUT_16x9';
```

### Adjust Font Sizes

**Increase fonts more** (e.g., 60% larger):
```javascript
const FONT_SCALE = 1.6;
```

**Per-element overrides** in resize script:
```javascript
const PPTX_CSS = `
h1 { font-size: 2.8rem !important; }  /* Even larger */
.stat-number { font-size: 3.5rem !important; }
`;
```

### Animation Wait Time

If animations are cut off:
```javascript
const ANIMATION_WAIT = 3500;  // 3.5 seconds
```

If slides have no animations:
```javascript
const ANIMATION_WAIT = 500;   // 0.5 seconds (faster)
```

### Screenshot Quality

**Higher resolution** (better quality, larger files):
```javascript
const VIEWPORT = { width: 1920, height: 1200 };
```

**JPEG compression** (smaller files, slight quality loss):
```javascript
const SCREENSHOT_TYPE = 'jpeg';

await page.screenshot({
  path: screenshotPath,
  type: 'jpeg',
  quality: 90  // 0-100
});
```

---

## Troubleshooting

### Text Too Small

**Symptom**: Text barely readable in PowerPoint

**Solution**: Increase font scale
```javascript
// In resize-slides-for-pptx.js
const FONT_SCALE = 1.6;  // Try 60% instead of 40%
```

Re-run resize and conversion.

---

### Content Cut Off

**Symptom**: Text extends beyond slide boundaries

**Solution 1**: Reduce specific element sizes

Add to the slide's CSS:
```css
.specific-element { font-size: 0.9rem !important; }
```

**Solution 2**: Reduce padding globally
```javascript
const PPTX_CSS = `
.header { padding: 1rem 1.5rem !important; }
.content { padding: 1rem 1.5rem !important; }
`;
```

---

### Animations Not Captured

**Symptom**: Slides show pre-animation state

**Solution**: Increase wait time
```javascript
const ANIMATION_WAIT = 4000;  // 4 seconds
```

---

### Fonts Don't Match

**Symptom**: Fonts in PPTX look different

**Solution**: Install Google Fonts on your system
```bash
# macOS: Download from fonts.google.com
# Install via Font Book
# Fonts needed: Inter, Poppins
```

---

### Module Not Found

**Symptom**: `Cannot find module 'playwright'`

**Solution**:
```bash
cd /path/to/project
npm install playwright pptxgenjs
npx playwright install chrome
```

---

## Advanced Topics

### Parallel Processing

Convert multiple presentations simultaneously:

```javascript
// Create batch-parallel.js
const presentations = ['presentasi_01', 'presentasi_02', 'presentasi_03'];
const promises = presentations.map(pres =>
  convertPresentation(pres)
);
await Promise.all(promises);
```

**Benefit**: 3x faster for batch conversions

---

### CI/CD Integration

Automatically generate PPTX on git push:

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
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npx playwright install chrome --with-deps
      - run: node scripts/html-slides-to-pptx.js
      - uses: actions/upload-artifact@v3
        with:
          name: pptx-files
          path: output/pptx/*.pptx
```

---

### Custom Slide Numbering

Add page numbers to slides:

```javascript
// In conversion script, after adding image
slide.addText(`${i + 1}`, {
  x: '90%',
  y: '90%',
  w: '8%',
  h: '8%',
  fontSize: 14,
  color: '666666',
  align: 'right',
  valign: 'bottom'
});
```

---

### Performance Optimization

**File size reduction**:
```javascript
// Use Sharp for compression
const sharp = require('sharp');

await sharp(screenshotPath)
  .png({ quality: 85, compressionLevel: 9 })
  .toFile(compressedPath);
```

**Speed optimization**:
- Reduce ANIMATION_WAIT for simple slides
- Use lower resolution for drafts
- Parallel browser instances for batch

---

## Related Documentation

- Main documentation: [../../doc/pptx-generation.md](../../doc/pptx-generation.md)
- Playwright docs: https://playwright.dev/
- PptxGenJS docs: https://gitbrent.github.io/PptxGenJS/
- Project structure: See repository root

---

## Support

**For issues**:
1. Check this reference
2. Review troubleshooting section
3. Check main documentation
4. Review script source code
5. Create issue in repository

**Last Updated**: January 2026
