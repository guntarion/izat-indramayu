---
name: create-html-for-presentation
description: Converts markdown to beautiful animated HTML slides with PLN theme. Splits by H3 headers (configurable), creates individual HTML files with CSS animations and JavaScript effects. Includes slide browser for navigation. Activate when user wants to create HTML presentation slides from markdown.
---

# Create HTML for Presentation

Transforms markdown into stunning animated HTML slides with modern CSS effects and smooth transitions.

## Quick Workflow

1. **Analyze** markdown and identify split points (H3 by default)
2. **Condense** content for presentation (keep it succinct!)
3. **Generate** individual HTML files with animations
4. **Create** slide browser for navigation

## Key Features

- **Full-width layout** - slides fill the entire viewport (no max-width/aspect-ratio constraints)
- **Image support** - charts, graphs, and visual assets with proper layout
- CSS animations, gradients, glassmorphism
- JavaScript for interactive elements
- **Nav-overlay pattern** - hover zones with reveal navigation arrows
- **Laser pointer** for presentations (toggle with L key or button)
- Thumbnail strip with slide preview
- Progress bar and keyboard navigation

## Image Handling

When markdown contains image references (e.g., `**Referensi:** Gambar 1 - \`filename.png\``):
1. Detect image filename from reference
2. Use `assets/images/` as default image path
3. Apply appropriate slide template (Image Slide, Image Full-Width, or Multi-Image)
4. Include narration/insights alongside the image

## Defaults

- **Split by:** H3 (`###`) headers
- **Theme:** PLN color palette
- **Naming:** `slide-NN-judul.html`
- **Browser:** `index.html` with navigation

**For theme & CSS variables**, see [pln-theme-html.md](./pln-theme-html.md)
**For HTML templates**, see [slide-templates.md](./slide-templates.md)
**For detailed guide**, see [reference.md](./reference.md)
