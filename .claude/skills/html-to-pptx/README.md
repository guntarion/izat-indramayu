# HTML to PPTX Skill

Convert HTML presentation slides to PowerPoint format with 100% visual fidelity.

## Overview

This skill provides a screenshot-based approach to convert HTML slides into PowerPoint presentations, preserving all visual effects including CSS gradients, animations, and custom styling.

## Skill Structure

```
.claude/skills/html-to-pptx/
├── SKILL.md              # Concise skill description (loaded by Claude)
├── README.md             # This file
├── reference.md          # Complete documentation
├── examples.md           # Usage examples and workflows
└── scripts/
    ├── resize-slides-for-pptx.js         # Optimize HTML for PPTX
    ├── convert-single-presentation.js    # Convert one presentation
    └── html-slides-to-pptx.js            # Batch converter
```

## Quick Start

### Via Claude Code

Simply mention the skill in your conversation:

```
User: Use the html-to-pptx skill to convert presentasi_01_area_risk
```

Claude will:
1. Apply PPTX optimizations (16:10 ratio, larger fonts)
2. Convert to PPTX using screenshots
3. Report the output location

### Manual Usage

```bash
# Single presentation
node .claude/skills/html-to-pptx/scripts/resize-slides-for-pptx.js \
  presentasi-for-pptx/presentasi_01_area_risk

node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
  presentasi-for-pptx/presentasi_01_area_risk

# Batch (all presentations)
node .claude/skills/html-to-pptx/scripts/html-slides-to-pptx.js
```

## Documentation

- **SKILL.md** - Quick overview (Claude reads this first)
- **reference.md** - Complete technical reference
- **examples.md** - Practical usage examples
- **../../doc/pptx-generation.md** - Project-level documentation

## Dependencies

```bash
npm install playwright pptxgenjs
npx playwright install chrome
```

## Key Features

- ✅ Preserves CSS gradients and animations
- ✅ 16:10 aspect ratio (configurable)
- ✅ Automatic font size optimization (+40%)
- ✅ Batch processing support
- ✅ No HTML modification required for source files

## Common Tasks

### Convert Single Presentation
```bash
node scripts/convert-single-presentation.js presentasi-for-pptx/presentasi_01_area_risk
```

### Convert All Presentations
```bash
node scripts/html-slides-to-pptx.js
```

### Fix Text Size Issues
Edit `scripts/resize-slides-for-pptx.js`:
```javascript
const FONT_SCALE = 1.6;  // Increase from 1.4
```

## Support

1. Check [reference.md](./reference.md) for detailed documentation
2. See [examples.md](./examples.md) for common scenarios
3. Review troubleshooting section in reference
4. Check project documentation at `../../doc/pptx-generation.md`

## Last Updated

January 2026
