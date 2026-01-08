/**
 * Resize HTML Slides for PPTX Export
 *
 * Modifies HTML slides to use fixed 16:10 dimensions and larger font sizes
 * for better readability in PowerPoint presentations.
 *
 * Usage: node scripts/resize-slides-for-pptx.js <presentation_folder>
 */

const fs = require('fs');
const path = require('path');

// Configuration
const TARGET_WIDTH = 1280;
const TARGET_HEIGHT = 800;  // 16:10 ratio
const FONT_SCALE = 1.4;  // 40% larger fonts

// CSS to inject at the start of each HTML file
const PPTX_CSS = `
/* PPTX Export Overrides - Fixed 16:10 dimensions with larger fonts */
html {
  font-size: ${Math.round(16 * FONT_SCALE)}px !important;  /* Scale base font */
}
body {
  width: ${TARGET_WIDTH}px !important;
  height: ${TARGET_HEIGHT}px !important;
  min-height: ${TARGET_HEIGHT}px !important;
  max-height: ${TARGET_HEIGHT}px !important;
  overflow: hidden !important;
  margin: 0 !important;
}
/* Scale down padding/margins slightly to fit more content */
.header {
  padding: 1.5rem 2rem !important;
}
.content {
  padding: 1.5rem 2rem !important;
}
/* Ensure text wraps properly */
h1 { font-size: 2.2rem !important; }
h2 { font-size: 1.6rem !important; }
h3 { font-size: 1.3rem !important; }
p, li { font-size: 1.1rem !important; line-height: 1.5 !important; }
/* Scale stat numbers */
.stat-number { font-size: 2.8rem !important; }
.stat-label { font-size: 1rem !important; }
/* Scale badges */
.badge, .header-badge, .priority-badge, .period-badge {
  font-size: 0.95rem !important;
  padding: 0.4rem 0.9rem !important;
}
/* Cards and boxes */
.intro-box, .goal-box, .action-card, .insight-card, .metric-card {
  padding: 1.5rem !important;
  margin-bottom: 1rem !important;
}
/* Target areas */
.target-value { font-size: 1.05rem !important; }
.target-label { font-size: 0.85rem !important; }
/* Action content */
.action-content h3 { font-size: 1.2rem !important; }
.action-content p { font-size: 1rem !important; }
`;

/**
 * Process a single HTML file
 */
function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already processed
  if (content.includes('PPTX Export Overrides')) {
    console.log(`  Skipping (already processed): ${path.basename(filePath)}`);
    return false;
  }

  // Find the closing </style> tag and inject our CSS before it
  // Or if there's a <style> tag, add to it
  const styleEndMatch = content.match(/<\/style>/i);

  if (styleEndMatch) {
    // Inject our CSS before the first </style>
    const insertPos = content.indexOf('</style>');
    content = content.slice(0, insertPos) + PPTX_CSS + content.slice(insertPos);
  } else {
    // No style tag found, add one in the head
    const headEndMatch = content.match(/<\/head>/i);
    if (headEndMatch) {
      const insertPos = content.indexOf('</head>');
      content = content.slice(0, insertPos) + `<style>${PPTX_CSS}</style>` + content.slice(insertPos);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  Modified: ${path.basename(filePath)}`);
  return true;
}

/**
 * Process all HTML slides in a folder
 */
function processFolder(folderPath) {
  const files = fs.readdirSync(folderPath)
    .filter(f => f.startsWith('slide-') && f.endsWith('.html'))
    .sort();

  console.log(`Processing ${files.length} slides in ${path.basename(folderPath)}...`);

  let modified = 0;
  for (const file of files) {
    if (processHtmlFile(path.join(folderPath, file))) {
      modified++;
    }
  }

  console.log(`\nDone! Modified ${modified} files.`);
  return modified;
}

// Main execution
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node resize-slides-for-pptx.js <presentation_folder>');
  console.log('Example: node resize-slides-for-pptx.js presentasi-for-pptx/presentasi_01_area_risk');
  process.exit(1);
}

const folderPath = path.resolve(args[0]);
if (!fs.existsSync(folderPath)) {
  console.error(`Folder not found: ${folderPath}`);
  process.exit(1);
}

processFolder(folderPath);
