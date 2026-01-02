#!/usr/bin/env node
/**
 * HTML Presentation Generator
 *
 * Generates beautiful HTML slides from a slides registry.
 * This script creates the index.html browser with the correct slide list.
 *
 * Usage:
 *   node generate-slides.js
 *
 * Prerequisites:
 *   - Individual slide HTML files must already exist
 *   - Slides should be named: slide-NN-slug.html
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  outputDir: process.cwd(),
  presentationTitle: 'Presentasi PLN Nusantara Power',
  slidePattern: /^slide-\d{2}-.*\.html$/
};

// Find all slide files
function findSlides(dir) {
  const files = fs.readdirSync(dir);
  const slides = files
    .filter(f => config.slidePattern.test(f))
    .sort(); // Sort alphabetically (which sorts by number due to NN prefix)

  return slides;
}

// Generate index.html with the slide list
function generateBrowser(slides, title) {
  const slidesJson = JSON.stringify(slides, null, 6);

  const browserHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --pln-light-blue: #00AFF0;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      height: 100%;
      font-family: 'Inter', sans-serif;
      background: #1a1a2e;
      overflow: hidden;
    }
    .presentation-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    .nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1.5rem;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .nav-title {
      color: #fff;
      font-size: 0.9rem;
      font-weight: 500;
      opacity: 0.9;
    }
    .nav-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .slide-counter {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      font-weight: 500;
      min-width: 80px;
      text-align: center;
    }
    .nav-btn {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-btn:hover {
      background: var(--pln-primary-blue);
      transform: scale(1.05);
    }
    .nav-btn:active { transform: scale(0.95); }
    .nav-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .nav-btn:disabled:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: none;
    }
    .fullscreen-btn {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .fullscreen-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--pln-primary-blue);
    }
    .progress-container {
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
    }
    .progress-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--pln-primary-blue), var(--pln-green));
      transition: width 0.3s ease;
      width: 0%;
    }
    .slide-viewer {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      position: relative;
    }
    .slide-frame {
      width: 100%;
      max-width: 1200px;
      aspect-ratio: 16 / 9;
      border: none;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      background: #fff;
      transition: transform 0.3s ease;
    }
    .slide-frame.transitioning {
      transform: scale(0.98);
      opacity: 0.8;
    }
    .side-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
      height: 60px;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }
    .side-nav:hover {
      background: var(--pln-primary-blue);
      transform: translateY(-50%) scale(1.1);
    }
    .side-nav.prev { left: 2rem; }
    .side-nav.next { right: 2rem; }
    .side-nav:disabled { opacity: 0.2; cursor: not-allowed; }
    .side-nav:disabled:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-50%);
    }
    .thumbnails-toggle {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 12px;
      background: var(--pln-primary-blue);
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 20px rgba(0, 162, 185, 0.4);
      z-index: 100;
    }
    .thumbnails-toggle:hover { transform: scale(1.1); }
    .thumbnails-panel {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(20px);
      padding: 1.5rem;
      transform: translateY(100%);
      transition: transform 0.3s ease;
      z-index: 90;
      max-height: 200px;
      overflow-x: auto;
      overflow-y: hidden;
    }
    .thumbnails-panel.open { transform: translateY(0); }
    .thumbnails-list {
      display: flex;
      gap: 1rem;
      padding-bottom: 0.5rem;
    }
    .thumbnail {
      flex-shrink: 0;
      width: 160px;
      aspect-ratio: 16 / 9;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      background: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    .thumbnail:hover {
      border-color: var(--pln-primary-blue);
      transform: scale(1.05);
    }
    .thumbnail.active {
      border-color: var(--pln-green);
      box-shadow: 0 0 20px rgba(53, 185, 113, 0.5);
    }
    .thumbnail-number {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      font-size: 0.7rem;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
    }
    .shortcuts-hint {
      position: fixed;
      bottom: 1rem;
      left: 1rem;
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.75rem;
    }
    .shortcuts-hint kbd {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      margin: 0 0.1rem;
    }
    @media (max-width: 768px) {
      .side-nav { display: none; }
      .slide-viewer { padding: 1rem; }
      .shortcuts-hint { display: none; }
      .thumbnail { width: 120px; }
    }
  </style>
</head>
<body>
  <div class="presentation-container">
    <nav class="nav-bar">
      <div class="nav-title"><span id="presentationTitle">${title}</span></div>
      <div class="nav-controls">
        <button class="nav-btn" id="prevBtn" title="Sebelumnya (←)">←</button>
        <span class="slide-counter">
          <span id="currentSlide">1</span> / <span id="totalSlides">1</span>
        </span>
        <button class="nav-btn" id="nextBtn" title="Selanjutnya (→)">→</button>
        <button class="nav-btn fullscreen-btn" id="fullscreenBtn" title="Layar Penuh (F)">⛶</button>
      </div>
    </nav>
    <div class="progress-container">
      <div class="progress-bar" id="progressBar"></div>
    </div>
    <div class="slide-viewer">
      <button class="side-nav prev" id="prevBtnSide" title="Sebelumnya">←</button>
      <iframe class="slide-frame" id="slideFrame" src=""></iframe>
      <button class="side-nav next" id="nextBtnSide" title="Selanjutnya">→</button>
    </div>
  </div>
  <button class="thumbnails-toggle" id="thumbnailsToggle" title="Tampilkan thumbnail">☷</button>
  <div class="thumbnails-panel" id="thumbnailsPanel">
    <div class="thumbnails-list" id="thumbnailsList"></div>
  </div>
  <div class="shortcuts-hint">
    <kbd>←</kbd> <kbd>→</kbd> Navigasi | <kbd>Home</kbd> <kbd>End</kbd> Awal/Akhir | <kbd>F</kbd> Layar Penuh
  </div>
  <script>
    const slides = ${slidesJson};
    let currentIndex = 0;
    const slideFrame = document.getElementById('slideFrame');
    const currentSlideEl = document.getElementById('currentSlide');
    const totalSlidesEl = document.getElementById('totalSlides');
    const progressBar = document.getElementById('progressBar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtnSide = document.getElementById('prevBtnSide');
    const nextBtnSide = document.getElementById('nextBtnSide');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const thumbnailsToggle = document.getElementById('thumbnailsToggle');
    const thumbnailsPanel = document.getElementById('thumbnailsPanel');
    const thumbnailsList = document.getElementById('thumbnailsList');

    function init() {
      totalSlidesEl.textContent = slides.length;
      generateThumbnails();
      goToSlide(0);
    }

    function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;
      slideFrame.classList.add('transitioning');
      setTimeout(() => {
        currentIndex = index;
        slideFrame.src = slides[currentIndex];
        currentSlideEl.textContent = currentIndex + 1;
        const progress = ((currentIndex + 1) / slides.length) * 100;
        progressBar.style.width = progress + '%';
        updateButtonStates();
        updateThumbnailActive();
        slideFrame.classList.remove('transitioning');
      }, 150);
    }

    function nextSlide() { if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1); }
    function prevSlide() { if (currentIndex > 0) goToSlide(currentIndex - 1); }

    function updateButtonStates() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === slides.length - 1;
      prevBtnSide.disabled = currentIndex === 0;
      nextBtnSide.disabled = currentIndex === slides.length - 1;
    }

    function generateThumbnails() {
      thumbnailsList.innerHTML = '';
      slides.forEach((slide, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        thumb.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#035B71,#00A2B9);color:#fff;font-size:1.5rem;font-weight:bold;">' + (index + 1) + '</div><span class="thumbnail-number">' + (index + 1) + '</span>';
        thumb.addEventListener('click', () => { goToSlide(index); thumbnailsPanel.classList.remove('open'); });
        thumbnailsList.appendChild(thumb);
      });
    }

    function updateThumbnailActive() {
      document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
      });
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    prevBtnSide.addEventListener('click', prevSlide);
    nextBtnSide.addEventListener('click', nextSlide);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    thumbnailsToggle.addEventListener('click', () => thumbnailsPanel.classList.toggle('open'));

    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight': case 'PageDown': case ' ': e.preventDefault(); nextSlide(); break;
        case 'ArrowLeft': case 'PageUp': e.preventDefault(); prevSlide(); break;
        case 'Home': e.preventDefault(); goToSlide(0); break;
        case 'End': e.preventDefault(); goToSlide(slides.length - 1); break;
        case 'f': case 'F': e.preventDefault(); toggleFullscreen(); break;
        case 'Escape': thumbnailsPanel.classList.remove('open'); break;
      }
    });

    let touchStartX = 0, touchEndX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); }
    });

    init();
  </script>
</body>
</html>`;

  return browserHtml;
}

// Main execution
function main() {
  console.log('🎨 HTML Presentation Generator');
  console.log('================================');

  // Find slides
  const slides = findSlides(config.outputDir);

  if (slides.length === 0) {
    console.log('⚠️  No slide files found matching pattern: slide-NN-*.html');
    console.log('   Create slide files first, then run this script.');
    process.exit(1);
  }

  console.log(`📑 Found ${slides.length} slides:`);
  slides.forEach((s, i) => console.log(`   ${i + 1}. ${s}`));

  // Generate browser HTML
  const browserHtml = generateBrowser(slides, config.presentationTitle);
  const outputPath = path.join(config.outputDir, 'index.html');

  fs.writeFileSync(outputPath, browserHtml, 'utf-8');
  console.log(`\n✅ Generated: ${outputPath}`);
  console.log(`\n🚀 Open index.html in your browser to view the presentation.`);
}

main();
