/**
 * IZAT K3 UP Indramayu - Premium Animations
 * GSAP + ScrollTrigger powered animations
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all animations
  initBackgroundEffects();
  initHeaderScroll();
  initScrollAnimations();
  initCounterAnimations();
  initHoverEnhancements();
  initParallaxEffects();
  initDropdownEnhancements();
});

/**
 * Create floating shapes and particles background
 */
function initBackgroundEffects() {
  // Create container
  const container = document.createElement('div');
  container.className = 'bg-effects-container';

  // Create gradient mesh overlay
  const meshOverlay = document.createElement('div');
  meshOverlay.className = 'bg-mesh-overlay';
  container.appendChild(meshOverlay);

  // Create floating shapes (circles)
  for (let i = 0; i < 6; i++) {
    const shape = document.createElement('div');
    shape.className = 'bg-shape';
    container.appendChild(shape);
  }

  // Create particles container
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  container.appendChild(particlesContainer);

  // Create particles
  createParticles(particlesContainer, 25);

  // Create corner decorations
  const cornerTopLeft = document.createElement('div');
  cornerTopLeft.className = 'corner-decoration top-left';

  const cornerBottomRight = document.createElement('div');
  cornerBottomRight.className = 'corner-decoration bottom-right';

  // Insert at beginning of body
  document.body.insertBefore(container, document.body.firstChild);
  document.body.appendChild(cornerTopLeft);
  document.body.appendChild(cornerBottomRight);
}

/**
 * Create floating particles
 */
function createParticles(container, count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    // Random size (2-6px)
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random animation duration (10-25s)
    const duration = Math.random() * 15 + 10;
    particle.style.animationDuration = duration + 's';

    // Random animation delay
    particle.style.animationDelay = -(Math.random() * 20) + 's';

    // Random opacity (0.3-0.8)
    particle.style.opacity = Math.random() * 0.5 + 0.3;

    container.appendChild(particle);

    // Add custom animation for each particle
    animateParticle(particle);
  }
}

/**
 * Animate individual particle with random movement
 */
function animateParticle(particle) {
  const moveX = (Math.random() - 0.5) * 200;
  const moveY = (Math.random() - 0.5) * 200;
  const duration = Math.random() * 10 + 8;

  particle.animate([
    { transform: 'translate(0, 0)', opacity: particle.style.opacity },
    { transform: `translate(${moveX}px, ${moveY}px)`, opacity: Math.random() * 0.5 + 0.2 },
    { transform: 'translate(0, 0)', opacity: particle.style.opacity }
  ], {
    duration: duration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out'
  });
}

/**
 * Enhanced dropdown menu interactions
 */
function initDropdownEnhancements() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    const items = menu ? menu.querySelectorAll('a') : [];

    // Stagger animation for menu items on hover
    dropdown.addEventListener('mouseenter', () => {
      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';

        setTimeout(() => {
          item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, 50 + index * 40);
      });
    });

    dropdown.addEventListener('mouseleave', () => {
      items.forEach(item => {
        item.style.opacity = '';
        item.style.transform = '';
        item.style.transition = '';
      });
    });

    // Icon animation on item hover
    items.forEach(item => {
      const icon = item.querySelector('.dropdown-icon');
      if (icon) {
        item.addEventListener('mouseenter', () => {
          icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        item.addEventListener('mouseleave', () => {
          icon.style.transform = '';
        });
      }
    });
  });
}

/**
 * Header scroll effect - glassmorphism on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  // Throttle scroll event
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  handleScroll();
}

/**
 * Scroll-triggered fade animations using Intersection Observer
 */
function initScrollAnimations() {
  // Elements to animate
  const animateElements = document.querySelectorAll(
    '.stat-card, .nav-card, .card, .image-card, .insight-item, ' +
    '.analysis-box, .recommendation-box, .section-header, ' +
    '.intro-text, .hero-stat, .ml-feature-card, .anomaly-alert'
  );

  if (animateElements.length === 0) return;

  // Add animation classes
  animateElements.forEach((el, index) => {
    el.classList.add('animate-on-scroll');
    // Add stagger delay based on position in grid
    const staggerIndex = (index % 4) + 1;
    el.classList.add(`stagger-${staggerIndex}`);
  });

  // Create observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements
  animateElements.forEach(el => observer.observe(el));
}

/**
 * Number counter animation
 */
function initCounterAnimations() {
  const statValues = document.querySelectorAll('.stat-value, .hero-stat-value');
  if (statValues.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, observerOptions);

  statValues.forEach(el => observer.observe(el));
}

/**
 * Animate a single counter element
 */
function animateCounter(element) {
  const text = element.textContent.trim();

  // Parse the number from text (handle formats like "5.575", "99,2%", "2,28")
  const numericMatch = text.match(/[\d.,]+/);
  if (!numericMatch) return;

  const numericStr = numericMatch[0];
  const prefix = text.substring(0, text.indexOf(numericStr));
  const suffix = text.substring(text.indexOf(numericStr) + numericStr.length);

  // Determine if it uses comma as decimal separator (Indonesian format)
  const usesCommaDecimal = numericStr.includes(',') && !numericStr.includes('.');
  const usesDotThousand = numericStr.includes('.') && numericStr.indexOf('.') < numericStr.length - 3;

  let targetValue;
  let decimalPlaces = 0;

  if (usesCommaDecimal) {
    // Format: 99,2 or 2,28
    const parts = numericStr.split(',');
    targetValue = parseFloat(numericStr.replace(',', '.'));
    decimalPlaces = parts[1] ? parts[1].length : 0;
  } else if (usesDotThousand) {
    // Format: 5.575 (thousand separator)
    targetValue = parseInt(numericStr.replace(/\./g, ''), 10);
    decimalPlaces = 0;
  } else {
    targetValue = parseFloat(numericStr);
    const decMatch = numericStr.match(/\.(\d+)/);
    decimalPlaces = decMatch ? decMatch[1].length : 0;
  }

  if (isNaN(targetValue)) return;

  const duration = 1500; // ms
  const startTime = performance.now();
  const startValue = 0;

  function formatNumber(num) {
    if (usesCommaDecimal) {
      return num.toFixed(decimalPlaces).replace('.', ',');
    } else if (usesDotThousand) {
      return num.toLocaleString('id-ID');
    } else {
      return num.toFixed(decimalPlaces);
    }
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out-expo)
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

    const currentValue = startValue + (targetValue - startValue) * easeProgress;
    element.textContent = prefix + formatNumber(currentValue) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Ensure final value is exact
      element.textContent = text;
    }
  }

  requestAnimationFrame(update);
}

/**
 * Enhanced hover effects
 */
function initHoverEnhancements() {
  // Card tilt effect on mouse move
  const cards = document.querySelectorAll('.nav-card, .stat-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Button ripple effect
  const buttons = document.querySelectorAll('.btn-data-view, .hero-badge, .ai-badge');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
        pointer-events: none;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple keyframe if not exists
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(20);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Parallax effects for hero section
 */
function initParallaxEffects() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const heroContent = hero.querySelector('.hero-content');
  if (!heroContent) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroHeight) {
          const parallaxValue = scrolled * 0.3;
          const opacityValue = 1 - (scrolled / heroHeight) * 0.5;

          heroContent.style.transform = `translateY(${parallaxValue}px)`;
          heroContent.style.opacity = opacityValue;
        }

        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Progress bar animation
 */
function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  if (progressBars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = '0%';

        setTimeout(() => {
          bar.style.transition = 'width 1s ease-out';
          bar.style.width = width;
        }, 100);

        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => observer.observe(bar));
}

// Initialize progress bars after a short delay
setTimeout(initProgressBars, 500);

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/**
 * Image lazy loading enhancement
 */
function initLazyImages() {
  const images = document.querySelectorAll('.image-card img');

  images.forEach(img => {
    // Add loading class
    img.classList.add('lazy-image');

    // Create wrapper if needed
    const wrapper = img.parentElement;
    if (!wrapper.classList.contains('image-wrapper')) {
      wrapper.style.position = 'relative';
      wrapper.style.overflow = 'hidden';
    }

    // Handle load event
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });

  // Add lazy image styles if not exists
  if (!document.getElementById('lazy-style')) {
    const style = document.createElement('style');
    style.id = 'lazy-style';
    style.textContent = `
      .lazy-image {
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .lazy-image.loaded {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize lazy images
initLazyImages();

/**
 * Add loading animation to page
 */
function initPageTransition() {
  // Add page loaded class after a short delay
  window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
  });

  // Add styles for page transition
  if (!document.getElementById('page-transition-style')) {
    const style = document.createElement('style');
    style.id = 'page-transition-style';
    style.textContent = `
      body {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      body.page-loaded {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize page transition
initPageTransition();
