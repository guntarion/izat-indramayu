# HTML to PPTX - Usage Examples

Practical examples for common scenarios.

## Table of Contents

1. [Basic Usage](#basic-usage)
2. [Common Workflows](#common-workflows)
3. [Troubleshooting Scenarios](#troubleshooting-scenarios)
4. [Advanced Use Cases](#advanced-use-cases)

---

## Basic Usage

### Example 1: Convert Single Presentation

**Scenario**: You have one presentation to convert to PPTX.

```bash
# Step 1: Prepare HTML
node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
  presentasi-for-pptx/presentasi_01_area_risk

# Step 2: Convert
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk

# Output: output/pptx/presentasi_01_area_risk.pptx
```

**Expected output**:
```
Converting: presentasi_01_area_risk
Slides: 20
Viewport: 1280x800 (16:10)
Output: output/pptx/presentasi_01_area_risk.pptx

  Slide 1/20  Slide 2/20  ... Slide 20/20
  Completed 20 slides

Saved: output/pptx/presentasi_01_area_risk.pptx
```

---

### Example 2: Batch Convert All Presentations

**Scenario**: Convert all 9 presentations at once.

```bash
# Option A: Using batch script
node .claude/skills/html-to-pptx/scripts/html-slides-to-pptx.js

# Option B: Loop through presentations
for pres in presentasi_0{1..9}*; do
  node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
    "presentasi-for-pptx/$pres"
done

node .claude/skills/html-to-pptx/scripts/html-slides-to-pptx.js
```

**Expected output**:
```
HTML to PPTX Converter
======================
Source: presentasi-backup
Output: output/pptx
Presentations: 9

  Converting presentasi_01_area_risk (20 slides)... ✓
  Converting presentasi_02_team_performance (29 slides)... ✓
  Converting presentasi_03_resolution_workflow (13 slides)... ✓
  ...

Conversion Complete!
  Success: 9
  Failed: 0
  Output: output/pptx
```

---

### Example 3: Convert Specific Presentations

**Scenario**: Only convert presentations 1, 2, and 5.

```bash
node .claude/skills/html-to-pptx/scripts/html-slides-to-pptx.js \
  presentasi_01_area_risk \
  presentasi_02_team_performance \
  presentasi_05_asset_tracking
```

---

## Common Workflows

### Workflow 1: First-Time Setup

**Starting from scratch:**

```bash
# 1. Install dependencies (one-time)
npm install playwright pptxgenjs
npx playwright install chrome

# 2. Create working directory
mkdir -p presentasi-for-pptx
mkdir -p output/pptx

# 3. Copy original slides
cp -r presentasi-backup/presentasi_01_area_risk presentasi-for-pptx/

# 4. Prepare and convert
node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
  presentasi-for-pptx/presentasi_01_area_risk

node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk

# 5. Verify
open output/pptx/presentasi_01_area_risk.pptx
```

---

### Workflow 2: Update After HTML Changes

**You modified slide-03 in presentasi_01, need to regenerate PPTX:**

```bash
# 1. Update HTML in presentasi-backup
vim presentasi-backup/presentasi_01_area_risk/slide-03-key-metrics.html

# 2. Copy to working directory
cp presentasi-backup/presentasi_01_area_risk/slide-03-key-metrics.html \
   presentasi-for-pptx/presentasi_01_area_risk/

# 3. Re-apply PPTX optimizations
node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
  presentasi-for-pptx/presentasi_01_area_risk

# 4. Regenerate PPTX
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_area_risk_v3.pptx

# 5. Compare versions
open output/pptx/presentasi_01_area_risk_v2.pptx
open output/pptx/presentasi_01_area_risk_v3.pptx
```

---

### Workflow 3: Create Draft vs Final

**Quick draft** (low quality, fast):

```bash
# Edit conversion script temporarily
# VIEWPORT = { width: 960, height: 600 };
# ANIMATION_WAIT = 1000;

node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_draft.pptx
```

**Final version** (high quality):

```bash
# Edit conversion script
# VIEWPORT = { width: 1920, height: 1200 };
# ANIMATION_WAIT = 3000;

node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_final.pptx
```

---

## Troubleshooting Scenarios

### Scenario 1: Text Too Small After Conversion

**Problem**: Generated PPTX has tiny, unreadable text.

**Solution**:

```bash
# 1. Increase font scale
# Edit .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js
# Change: const FONT_SCALE = 1.6;  (was 1.4)

# 2. Re-apply to ALL presentations
for pres in presentasi-for-pptx/presentasi_*/; do
  # Remove old PPTX CSS
  rm -rf "$pres"
  cp -r "presentasi-backup/$(basename $pres)" presentasi-for-pptx/

  # Apply new scale
  node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js "$pres"
done

# 3. Regenerate PPTX
node .claude/skills/html-to-pptx/scripts/html-slides-to-pptx.js
```

---

### Scenario 2: Content Overflows Slide

**Problem**: Slide 03 has text cut off at the bottom.

**Solution A**: Fix specific slide

```bash
# 1. Edit the problematic slide
vim presentasi-for-pptx/presentasi_01_area_risk/slide-03-key-metrics.html

# Add at the end of PPTX CSS section:
# .metric-card { padding: 1rem !important; }
# h2 { font-size: 1.4rem !important; }

# 2. Regenerate only that presentation
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk
```

**Solution B**: Reduce padding globally

```javascript
// Edit resize-slides-for-pptx.js, in PPTX_CSS:
.content { padding: 1rem 1.5rem !important; }  // was 1.5rem 2rem
.metric-card { margin-bottom: 0.75rem !important; }  // was 1rem
```

---

### Scenario 3: Animations Not Fully Loaded

**Problem**: Slides show elements in wrong positions.

**Solution**:

```bash
# 1. Increase wait time
# Edit convert-single-presentation.js
# Change: const ANIMATION_WAIT = 3500;  (was 2500)

# 2. Regenerate
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk
```

---

### Scenario 4: Missing Images in PPTX

**Problem**: Charts/images don't appear in PowerPoint.

**Debug**:

```bash
# Check if symlink is valid
ls -la presentasi-for-pptx/presentasi_01_area_risk/assets

# Should show: assets -> ../../assets

# If broken, recreate
rm presentasi-for-pptx/presentasi_01_area_risk/assets
ln -s ../../assets presentasi-for-pptx/presentasi_01_area_risk/assets
```

---

## Advanced Use Cases

### Use Case 1: Different Aspect Ratios

**16:9 for wide screens:**

```javascript
// 1. Edit resize-slides-for-pptx.js
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;

// 2. Edit convert-single-presentation.js
const VIEWPORT = { width: 1920, height: 1080 };
pptx.layout = 'LAYOUT_16x9';

// 3. Convert
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_16x9.pptx
```

**4:3 for classic projectors:**

```javascript
// Edit scripts
const TARGET_WIDTH = 1024;
const TARGET_HEIGHT = 768;
const VIEWPORT = { width: 1024, height: 768 };
pptx.layout = 'LAYOUT_4x3';
```

---

### Use Case 2: Add Slide Numbers

**Modify conversion script to add page numbers:**

```javascript
// In convert-single-presentation.js, after slide.addImage():

// Add slide number
slide.addText(`${i + 1}`, {
  x: '88%',
  y: '92%',
  w: '10%',
  h: '6%',
  fontSize: 14,
  color: '666666',
  align: 'right',
  valign: 'bottom',
  bold: false
});

// Add total pages
slide.addText(`/ ${slideFiles.length}`, {
  x: '92%',
  y: '92%',
  w: '6%',
  h: '6%',
  fontSize: 12,
  color: '999999',
  align: 'left',
  valign: 'bottom'
});
```

---

### Use Case 3: Compress Output for Email

**Reduce file size using JPEG:**

```javascript
// Edit convert-single-presentation.js
const SCREENSHOT_TYPE = 'jpeg';

await page.screenshot({
  path: screenshotPath,
  type: 'jpeg',
  quality: 85  // 0-100, lower = smaller file
});
```

**Result**: ~60% smaller files (4MB → 1.6MB)

---

### Use Case 4: Parallel Batch Processing

**Convert 9 presentations simultaneously:**

Create `batch-parallel.js`:

```javascript
const { execSync } = require('child_process');
const presentations = [
  'presentasi_01_area_risk',
  'presentasi_02_team_performance',
  'presentasi_03_resolution_workflow',
  // ... all 9
];

// Process 3 at a time
const chunks = [];
for (let i = 0; i < presentations.length; i += 3) {
  chunks.push(presentations.slice(i, i + 3));
}

for (const chunk of chunks) {
  const promises = chunk.map(pres => {
    return new Promise((resolve) => {
      execSync(
        `node scripts/convert-single-presentation.js presentasi-for-pptx/${pres}`,
        { stdio: 'inherit' }
      );
      resolve();
    });
  });
  await Promise.all(promises);
}
```

**Time savings**: 9 presentations in ~2 minutes instead of 6 minutes.

---

### Use Case 5: Custom Output Naming

**Generate PPTX with date suffix:**

```bash
# Using shell variable
DATE=$(date +%Y%m%d)
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  "output/pptx/presentasi_01_${DATE}.pptx"

# Result: presentasi_01_20260108.pptx
```

---

### Use Case 6: CI/CD Automation

**GitHub Actions workflow:**

```yaml
# .github/workflows/generate-pptx.yml
name: Auto-Generate PPTX

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
        run: |
          npm install
          npx playwright install chrome --with-deps

      - name: Apply PPTX optimizations
        run: |
          for pres in presentasi-for-pptx/*/; do
            node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js "$pres"
          done

      - name: Generate PPTX files
        run: node .claude/skills/html-to-pptx/scripts/html-slides-to-pptx.js

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: pptx-presentations
          path: output/pptx/*.pptx
          retention-days: 30
```

**Trigger**: Every time you push changes to HTML slides, PPTX files are auto-generated.

---

## Tips and Tricks

### Tip 1: Preview Before Full Conversion

Convert just the first slide to test settings:

```javascript
// Temporarily modify convert-single-presentation.js
const slideFiles = getSlideFiles(sourceFolder).slice(0, 1); // Only first slide
```

### Tip 2: Batch Resize Check

Check which presentations need resizing:

```bash
for pres in presentasi-for-pptx/*/slide-01*.html; do
  if ! grep -q "PPTX Export Overrides" "$pres"; then
    echo "Needs resize: $(dirname $pres)"
  fi
done
```

### Tip 3: Compare Before/After

```bash
# Keep originals
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-backup/presentasi_01_area_risk \
  output/pptx/presentasi_01_original.pptx

# Generate optimized
node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
  presentasi-for-pptx/presentasi_01_area_risk
node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk \
  output/pptx/presentasi_01_optimized.pptx

# Compare
open output/pptx/presentasi_01_original.pptx
open output/pptx/presentasi_01_optimized.pptx
```

---

## Next Steps

- Review [reference.md](./reference.md) for complete documentation
- Check [SKILL.md](./SKILL.md) for quick overview
- See project [doc/pptx-generation.md](../../doc/pptx-generation.md) for context

**Need help?** Create an issue or consult the troubleshooting section in reference.md.
