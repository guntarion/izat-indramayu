# Create HTML for Presentation - Reference Guide

## Table of Contents

1. [Overview](#overview)
2. [Full-Width Layout](#full-width-layout-default)
3. [Splitting Strategy](#splitting-strategy)
4. [Content Condensation](#content-condensation)
5. [Animation Guidelines](#animation-guidelines)
6. [File Naming Convention](#file-naming-convention)
7. [Browser Navigation](#browser-navigation)
8. [Generation Workflow](#generation-workflow)
9. [Best Practices](#best-practices)

---

## Overview

This skill creates beautiful, animated HTML slides from markdown content. Unlike PPTX generation, there are no size constraints—we can use:

- CSS animations and transitions
- Gradients and glassmorphism effects
- JavaScript for interactivity
- Responsive layouts
- Custom fonts and icons

**Key Principle:** Content must still be **condensed for presentation**—we're not dumping raw markdown into HTML.

---

## Full-Width Layout (Default)

**IMPORTANT:** Slides must fill the entire viewport. Do NOT use constrained layouts.

### Avoid These Constraints

```css
/* DON'T use these - they create a "frame" that wastes screen space */
.slide-frame {
  max-width: 1200px;      /* NO */
  aspect-ratio: 16 / 9;   /* NO */
  padding: 1.5rem;        /* NO */
  border-radius: 8px;     /* NO */
  box-shadow: ...;        /* NO */
}
```

### Use Full-Width Pattern

```css
/* Slide Viewer - Full Width */
.slide-viewer {
  flex: 1;
  position: relative;
  background: #0d0d1a;
}
.slide-frame {
  width: 100%;
  height: 100%;
  border: none;
}
```

### Nav-Overlay Pattern

The navigation uses hover-reveal zones instead of always-visible buttons:

```html
<div class="slide-viewer" id="slideViewer">
  <iframe id="slideFrame" class="slide-frame" src="slide-01.html"></iframe>
  <div class="nav-overlay">
    <div class="nav-zone left" onclick="prevSlide()">
      <button class="nav-btn" id="prevBtn">←</button>
    </div>
    <div class="nav-zone center"></div>
    <div class="nav-zone right" onclick="nextSlide()">
      <button class="nav-btn" id="nextBtn">→</button>
    </div>
  </div>
  <div class="laser-capture" id="laserCapture"></div>
</div>
```

```css
/* Navigation Overlay */
.nav-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  pointer-events: none;
}
.nav-zone {
  flex: 1;
  display: flex;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nav-zone:hover {
  background: rgba(255,255,255,0.05);
}
.nav-zone:hover .nav-btn {
  opacity: 1;
  transform: scale(1);
}
.nav-zone.left { justify-content: flex-start; padding-left: 2rem; }
.nav-zone.right { justify-content: flex-end; padding-right: 2rem; }
.nav-zone.center { cursor: default; pointer-events: none; }
.nav-btn {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.3);
  color: #fff;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}
```

### Laser Mode Integration

When laser pointer is active, disable nav-overlay:

```css
.slide-viewer.laser-active .laser-capture {
  display: block;
}
.slide-viewer.laser-active .nav-overlay {
  pointer-events: none;
  z-index: 1;
}
```

---

## Splitting Strategy

### Default: Split by H3 (`###`)

By default, each H3 header starts a new slide:

```markdown
# Document Title
## Section 1
### Topic A          <!-- Slide 1 -->
Content...

### Topic B          <!-- Slide 2 -->
Content...

## Section 2
### Topic C          <!-- Slide 3 -->
Content...
```

### Alternative Split Levels

Users can specify different split levels:

| Split By | Use Case |
|----------|----------|
| H1 (`#`) | Major chapters only |
| H2 (`##`) | Section-level slides |
| H3 (`###`) | Topic-level slides (default) |
| Custom marker | `<!-- slide -->` comments |

### Configuring Split Level

When invoking the skill, specify:
```
Split by: H2
```

Or use explicit markers in markdown:
```markdown
<!-- slide -->
Content for this slide...

<!-- slide -->
Next slide content...
```

---

## Content Condensation

Even though we have no overflow constraints, **content must be condensed** for effective presentation.

### Condensation Rules

| Original | Condensed |
|----------|-----------|
| Long paragraph explaining a concept in detail with multiple clauses | 3-4 bullet points with key phrases |
| Complex technical explanation | Visual diagram + brief description |
| Numbered list with 10+ items | Group into 3-4 categories |

### Keep vs Remove

**Keep:**
- Key statistics and numbers
- Action verbs and outcomes
- Technical terms (with brief definitions)
- Visual hierarchy cues

**Remove:**
- Redundant explanations
- Filler words ("actually", "basically")
- Passive constructions
- Excessive adjectives

### Target Word Count

| Slide Type | Max Words | Max Bullets |
|------------|-----------|-------------|
| Title | 20 | - |
| Content | 80 | 5-6 |
| Stats | 40 | - |
| Cards | 60 | - |
| Closing | 15 | - |

---

## Animation Guidelines

### Entrance Animations

Use subtle entrance animations for elements:

```css
/* Fade in from bottom */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Staggered Animations

Apply delays for sequential reveals:

```css
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
.item:nth-child(4) { animation-delay: 0.4s; }
```

### Hover Effects

Interactive elements should respond to hover:

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
```

### Animation Do's and Don'ts

**Do:**
- Use subtle, purposeful animations
- Keep duration between 0.3s - 0.8s
- Use `ease-out` for entrances
- Stagger multiple elements

**Don't:**
- Animate everything
- Use bouncy/jarring effects
- Make animations longer than 1s
- Use animations that distract from content

---

## File Naming Convention

### Ordered Naming Pattern

Files must be named for correct sequencing:

```
slide-01-judul.html
slide-02-latar-belakang.html
slide-03-tujuan.html
...
slide-15-penutup.html
index.html (browser)
```

### Naming Rules

1. **Prefix:** `slide-` for all content slides
2. **Number:** Two-digit sequence (`01`, `02`, ... `99`)
3. **Slug:** Indonesian title, lowercase, hyphens
4. **Extension:** `.html`

### Slug Generation

| Indonesian Title | Slug |
|------------------|------|
| Latar Belakang | `latar-belakang` |
| Tujuan Penyusunan | `tujuan-penyusunan` |
| Temuan Signifikan | `temuan-signifikan` |
| Terima Kasih | `terima-kasih` |

---

## Browser Navigation

### index.html Features

The browser (`index.html`) provides:

1. **Slide display** via iframe
2. **Left/Right navigation** - click zones on slide area
3. **Keyboard shortcuts** - full navigation support
4. **Slide counter** (e.g., "3 / 15")
5. **Thumbnail strip** at bottom with active state
6. **Progress bar** with gradient
7. **Laser pointer** for presentations
8. **Fullscreen mode**

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `↑` `PageUp` | Previous slide |
| `→` `↓` `Space` `PageDown` | Next slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| `L` | Toggle laser pointer |
| `?` | Toggle shortcuts help |

### Laser Pointer

The laser pointer feature allows presenters to highlight content:

- **Toggle:** Click "◉ Laser" button or press `L` key
- **Use:** Move mouse over slide area - red laser dot follows cursor
- **Click navigation:** While laser is active:
  - Click left 20% of slide → Previous slide
  - Click right 20% of slide → Next slide
- **Auto-hide:** Laser hides when mouse leaves slide area

### Navigation Implementation

```javascript
// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'Home') goToSlide(0);
  if (e.key === 'End') goToSlide(slides.length - 1);
  if (e.key === 'l' || e.key === 'L') toggleLaser();
  if (e.key === 'f' || e.key === 'F') toggleFullscreen();
});
```

### Slide Registry

The browser needs a list of slides:

```javascript
const slides = [
  'slide-01-judul.html',
  'slide-02-latar-belakang.html',
  'slide-03-tujuan.html',
  // ... more slides
];
```

---

## Generation Workflow

### Step 1: Create Output Directory

**IMPORTANT:** The output folder name MUST match the input markdown filename (without `.md` extension).

| Input File | Output Folder |
|------------|---------------|
| `01-metodologi-big-picture.md` | `01-metodologi-big-picture/` |
| `02-pengembangan-dirkom.md` | `02-pengembangan-dirkom/` |
| `03-generate-learning-path.md` | `03-generate-learning-path/` |

```bash
# Extract folder name from input file
INPUT_FILE="02-pengembangan-dirkom.md"
FOLDER_NAME="${INPUT_FILE%.md}"  # Removes .md extension
mkdir -p <project>/${FOLDER_NAME}
```

### Step 2: Analyze Markdown

Read the source markdown and identify:
- Split points (H3 by default)
- Content per slide
- Slide types needed

### Step 3: Condense Content

For each slide:
- Extract key points
- Convert prose to bullets
- Apply word count limits

### Step 4: Generate HTML Files

Create each slide using templates from `slide-templates.md`:
- Apply PLN theme from `pln-theme-html.md`
- Add appropriate animations
- Use responsive layouts

### Step 5: Generate Browser

Create `index.html` with:
- Slide registry (list of all slides)
- Navigation controls
- Keyboard handlers

### Step 6: Test

Open `index.html` in browser and verify:
- All slides load correctly
- Navigation works (buttons + keyboard)
- Animations are smooth
- Content is readable

---

## Best Practices

### Visual Design

1. **Consistent spacing** - Use CSS variables for margins/padding
2. **Visual hierarchy** - Larger fonts for titles, smaller for body
3. **White space** - Don't overcrowd slides
4. **Color usage** - Follow PLN palette strictly

### Performance

1. **Optimize images** - Use WebP, compress PNGs
2. **Minimal JavaScript** - Only for navigation and animations
3. **CSS over JS** - Prefer CSS animations when possible
4. **Lazy loading** - Load slides on demand if many

### Accessibility

1. **Contrast ratios** - Ensure text is readable
2. **Keyboard navigation** - All controls accessible via keyboard
3. **Focus indicators** - Visible focus states
4. **Semantic HTML** - Use proper heading hierarchy

### Mobile Responsiveness

1. **Viewport meta** - Include in all slides
2. **Flexible layouts** - Use flexbox/grid
3. **Touch navigation** - Swipe support in browser
4. **Readable fonts** - Minimum 16px on mobile

---

## Image Handling

### Image References in Markdown

When source markdown contains image references, include them in the generated slides.

**Markdown patterns to detect:**
```markdown
**Referensi:** Gambar 1 - `filename.png`
![Alt text](path/to/image.png)
**Gambar:** `filename.png`
```

### Image Path Convention

Images should be placed in `assets/images/` relative to the output folder:

```
presentasi/
├── output-folder/
│   ├── index.html
│   ├── slide-01-judul.html
│   ├── slide-02-chart.html
│   └── assets/
│       └── images/
│           ├── chart-1.png
│           └── chart-2.png
```

**OR** use symlink/copy from project root:
```
presentasi/
├── output-folder/
│   ├── index.html
│   ├── slide-01-judul.html
│   └── assets -> ../../assets  (symlink)
```

### Image Slide Types

| Type | Use Case | Template |
|------|----------|----------|
| Image Slide | Chart/graph with bullet points | `slide-templates.md#image-slide` |
| Image Full-Width | Large visualization focus | `slide-templates.md#image-full-width-slide` |
| Multi-Image | Comparing 2-4 charts | `slide-templates.md#multi-image-slide` |

### Best Practices for Images

1. **Keep aspect ratios** - Don't stretch images
2. **Add captions** - Brief description below image
3. **High contrast** - Ensure readability when projected
4. **File size** - Optimize for web (< 500KB per image)
5. **Naming** - Use descriptive filenames (e.g., `risk_heatmap_zona.png`)

---

## Related Files

- [pln-theme-html.md](./pln-theme-html.md) - CSS variables and theme
- [slide-templates.md](./slide-templates.md) - HTML templates with animations
- [templates/browser.html](./templates/browser.html) - Navigation browser template
