/**
 * Slide Animations Library
 * PLN Nusantara Power - IZAT Indramayu
 */
const SlideAnimations = {
  config: { defaultDuration: 0.6, defaultEase: 'power2.out', staggerDelay: 0.08, counterDuration: 1.5 },
  init: function() { if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger); },
  createTimeline: function(options = {}) {
    return gsap.timeline({ defaults: { duration: options.duration || this.config.defaultDuration, ease: options.ease || this.config.defaultEase }, ...options });
  },
  staggerCards: function(selector, options = {}) {
    return gsap.from(selector, { y: 40, opacity: 0, scale: 0.95, duration: options.duration || 0.6, stagger: options.stagger || 0.1, ease: options.ease || 'back.out(1.2)', delay: options.delay || 0.2 });
  },
  staggerList: function(selector, options = {}) {
    return gsap.from(selector, { x: options.direction === 'right' ? 30 : -30, opacity: 0, duration: options.duration || 0.5, stagger: options.stagger || this.config.staggerDelay, ease: options.ease || 'power2.out', delay: options.delay || 0.3 });
  },
  countUp: function(selector, options = {}) {
    document.querySelectorAll(selector).forEach(el => {
      const target = parseFloat((el.dataset.value || el.textContent).replace(/[^\d.-]/g, ''));
      const counter = { value: 0 };
      gsap.to(counter, { value: target, duration: options.duration || this.config.counterDuration, ease: 'power1.out', delay: options.delay || 0.3, onUpdate: () => { el.textContent = Math.round(counter.value).toLocaleString('id-ID'); } });
    });
  },
  fadeIn: function(selector, direction = 'up', options = {}) {
    const transforms = { up: { y: 50 }, down: { y: -50 }, left: { x: -50 }, right: { x: 50 } };
    return gsap.from(selector, { ...transforms[direction], opacity: 0, duration: options.duration || this.config.defaultDuration, ease: options.ease || this.config.defaultEase, delay: options.delay || 0 });
  },
  scaleIn: function(selector, options = {}) {
    return gsap.from(selector, { scale: options.scaleFrom || 0.8, opacity: 0, duration: options.duration || 0.6, ease: 'back.out(1.4)', delay: options.delay || 0 });
  },
  popBadge: function(selector, options = {}) {
    return gsap.from(selector, { scale: 0, opacity: 0, duration: options.duration || 0.4, ease: 'back.out(2)', delay: options.delay || 0, stagger: options.stagger || 0.1 });
  },
  float: function(selector, options = {}) {
    return gsap.to(selector, { y: options.distance || -10, duration: options.duration || 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  },
  pulse: function(selector, options = {}) {
    return gsap.to(selector, { scale: options.scale || 1.05, duration: options.duration || 0.8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  },
  setupHoverEffects: function(selector, options = {}) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', () => { gsap.to(el, { y: options.y || -5, scale: options.scale || 1.02, boxShadow: '0 15px 40px rgba(0,0,0,0.15)', duration: 0.3, ease: 'power2.out' }); });
      el.addEventListener('mouseleave', () => { gsap.to(el, { y: 0, scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power2.out' }); });
    });
  }
};
document.addEventListener('DOMContentLoaded', () => { SlideAnimations.init(); });
