/**
 * IZAT K3 UP Indramayu - Shared Components
 * Handles: Header injection, Footer injection, Mobile hamburger menu
 */

// Page titles mapping for footer
const pageTitles = {
  'index.html': 'Beranda',
  '01_area_risk.html': 'Analisis Risiko Area',
  '02_team_performance.html': 'Analisis Performa Tim',
  '03_resolution_workflow.html': 'Analisis Alur Penyelesaian',
  '04_shift_analysis.html': 'Analisis Pola Shift & Hari',
  '05_asset_tracking.html': 'Analisis Tracking Aset',
  '06_risk_prediction.html': 'Model Prediksi Risiko - AI/ML Analysis',
  '07_smart_recommendation.html': 'Smart Recommendation Engine - AI/ML Analysis',
  '08_anomaly_detection.html': 'Deteksi Anomali - AI/ML Analysis',
  '09_typo_correction.html': 'Koreksi Typo dengan Fuzzy Matching',
  '10_location_standardization.html': 'Standardisasi Lokasi',
  '11_company_standardization.html': 'Standardisasi Perusahaan',
  '12_date_standardization.html': 'Standardisasi Tanggal & Kolom Waktu Turunan',
  '13_risk_severity.html': 'Risk Severity & Issue Category',
  '14_quality_workload.html': 'Report Quality Score & PIC Workload',
  '15_trend_comparison.html': 'Kolom Tren & Komparasi'
};

// Get current page filename
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return filename;
}

// Generate Header HTML
function getHeaderHTML(activePage) {
  const isBasicActive = ['01_area_risk.html', '02_team_performance.html', '03_resolution_workflow.html', '04_shift_analysis.html', '05_asset_tracking.html'].includes(activePage);
  const isAdvancedActive = ['06_risk_prediction.html', '07_smart_recommendation.html', '08_anomaly_detection.html'].includes(activePage);
  const isCleansingActive = ['09_typo_correction.html', '10_location_standardization.html', '11_company_standardization.html', '12_date_standardization.html', '13_risk_severity.html', '14_quality_workload.html', '15_trend_comparison.html'].includes(activePage);

  return `
    <div class="header-content">
      <div class="logo">
        <img src="assets/images/PLN-Nusantara-Power-sm.png" alt="PLN Nusantara Power" class="logo-img">
        <span class="logo-subtitle">Unit Pembangkitan Indramayu</span>
      </div>

      <!-- Hamburger Menu Button -->
      <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle navigation menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <nav class="nav" id="mainNav">
        <a href="index.html" class="nav-link${activePage === 'index.html' ? ' active' : ''}">Beranda</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-toggle${isCleansingActive ? ' active' : ''}">Data Cleansing</button>
          <div class="nav-dropdown-menu cleansing-menu">
            <a href="09_typo_correction.html"${activePage === '09_typo_correction.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#9999;</span> Koreksi Typo</a>
            <a href="10_location_standardization.html"${activePage === '10_location_standardization.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128205;</span> Standardisasi Lokasi</a>
            <a href="11_company_standardization.html"${activePage === '11_company_standardization.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#127970;</span> Standardisasi Perusahaan</a>
            <a href="12_date_standardization.html"${activePage === '12_date_standardization.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128197;</span> Standardisasi Tanggal</a>
            <a href="13_risk_severity.html"${activePage === '13_risk_severity.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#9888;</span> Risk Severity</a>
            <a href="14_quality_workload.html"${activePage === '14_quality_workload.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128202;</span> Quality & Workload</a>
            <a href="15_trend_comparison.html"${activePage === '15_trend_comparison.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128200;</span> Tren & Komparasi</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-toggle${isBasicActive ? ' active' : ''}">Basic Analysis</button>
          <div class="nav-dropdown-menu">
            <a href="01_area_risk.html"${activePage === '01_area_risk.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128205;</span> Analisis Risiko Area</a>
            <a href="02_team_performance.html"${activePage === '02_team_performance.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128101;</span> Performa Tim</a>
            <a href="03_resolution_workflow.html"${activePage === '03_resolution_workflow.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#9881;</span> Alur Penyelesaian</a>
            <a href="04_shift_analysis.html"${activePage === '04_shift_analysis.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128336;</span> Pola Shift & Hari</a>
            <a href="05_asset_tracking.html"${activePage === '05_asset_tracking.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128295;</span> Tracking Aset</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-toggle${isAdvancedActive ? ' active' : ''}">Advanced Analysis</button>
          <div class="nav-dropdown-menu ai-menu">
            <a href="06_risk_prediction.html"${activePage === '06_risk_prediction.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128202;</span> Model Prediksi Risiko</a>
            <a href="07_smart_recommendation.html"${activePage === '07_smart_recommendation.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128161;</span> Smart Recommendation</a>
            <a href="08_anomaly_detection.html"${activePage === '08_anomaly_detection.html' ? ' class="active"' : ''}><span class="dropdown-icon">&#128269;</span> Deteksi Anomali</a>
          </div>
        </div>
      </nav>
    </div>
  `;
}

// Generate Footer HTML
function getFooterHTML(pageTitle) {
  return `
    <div class="container">
      <div class="footer-content">
        <div class="logo-text">PT PLN Nusantara Power - UP Indramayu</div>
        <p>Laporan Analisis Lanjutan Data IZAT K3</p>
        <p>${pageTitle}</p>
        <p style="margin-top: 1rem; font-size: 0.8rem; opacity: 0.8;">
          UP Indramayu &copy; 2025 | GTR | Intended for Internal Use Only
        </p>
      </div>
    </div>
  `;
}

// Initialize hamburger menu functionality
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (!hamburgerBtn || !mainNav) return;

  // Create overlay element - must be inside header for stacking context
  // Header has z-index which creates a stacking context, so overlay must share it
  const header = document.querySelector('header.header');
  let overlay = document.getElementById('mobileNavOverlay');
  if (!overlay && header) {
    overlay = document.createElement('div');
    overlay.id = 'mobileNavOverlay';
    overlay.className = 'mobile-nav-overlay';
    header.appendChild(overlay);
  } else if (!overlay) {
    // Fallback to body if header not found
    overlay = document.createElement('div');
    overlay.id = 'mobileNavOverlay';
    overlay.className = 'mobile-nav-overlay';
    document.body.appendChild(overlay);
  }

  // Function to close menu
  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    mainNav.classList.remove('mobile-open');
    overlay.classList.remove('active');
    document.body.classList.remove('nav-open');
  }

  // Function to open menu
  function openMenu() {
    hamburgerBtn.classList.add('active');
    mainNav.classList.add('mobile-open');
    overlay.classList.add('active');
    document.body.classList.add('nav-open');
  }

  // Toggle menu on hamburger click
  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (mainNav.classList.contains('mobile-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', function(e) {
    e.stopPropagation();
    closeMenu();
  });

  // Close menu when clicking on a navigation link (not dropdown toggle)
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        // Small delay to allow navigation
        setTimeout(closeMenu, 100);
      }
    });
  });

  // Handle dropdown toggles on mobile
  const dropdownToggles = mainNav.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = this.parentElement;

        // Close other dropdowns
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            otherToggle.parentElement.classList.remove('mobile-expanded');
          }
        });

        dropdown.classList.toggle('mobile-expanded');
      }
    });
  });

  // Prevent clicks inside nav from closing menu
  mainNav.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('mobile-open')) {
      closeMenu();
    }
  });
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = getCurrentPage();
  const pageTitle = pageTitles[currentPage] || 'IZAT K3 UP Indramayu';

  // Inject header content if placeholder exists
  const headerElement = document.querySelector('header.header');
  if (headerElement && headerElement.dataset.component === 'header') {
    headerElement.innerHTML = getHeaderHTML(currentPage);
  }

  // Inject footer content if placeholder exists
  const footerElement = document.querySelector('footer.footer');
  if (footerElement && footerElement.dataset.component === 'footer') {
    footerElement.innerHTML = getFooterHTML(pageTitle);
  }

  // Initialize hamburger menu
  initHamburgerMenu();
});
