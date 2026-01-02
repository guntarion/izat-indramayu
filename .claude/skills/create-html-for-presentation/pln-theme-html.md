# PLN Theme for HTML Presentations

Advanced CSS theme with variables, animations, and modern effects.

## CSS Variables

Include this in every slide's `<style>`:

```css
:root {
  /* Primary Colors */
  --pln-dark-blue: #035B71;
  --pln-primary-blue: #00A2B9;
  --pln-green: #35B971;
  --pln-light-blue: #00AFF0;

  /* Neutral Colors */
  --white: #FFFFFF;
  --light-gray: #F8F9FA;
  --text-gray: #333333;
  --text-light: #666666;
  --border-gray: #E0E0E0;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #035B71 0%, #00A2B9 100%);
  --gradient-accent: linear-gradient(135deg, #00A2B9 0%, #35B971 100%);
  --gradient-hero: linear-gradient(135deg, #035B71 0%, #00A2B9 50%, #35B971 100%);

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.15);
  --shadow-glow: 0 0 30px rgba(0,162,185,0.3);

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Poppins', var(--font-primary);

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

---

## Base Styles

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  background: var(--white);
  color: var(--text-gray);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');
```

---

## Animation Library

### Entrance Animations

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Down */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Left */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Fade In Right */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Blur In */
@keyframes blurIn {
  from {
    opacity: 0;
    filter: blur(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}
```

### Animation Classes

```css
.animate-fade-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fade-down {
  opacity: 0;
  animation: fadeInDown 0.6s ease-out forwards;
}

.animate-fade-left {
  opacity: 0;
  animation: fadeInLeft 0.6s ease-out forwards;
}

.animate-fade-right {
  opacity: 0;
  animation: fadeInRight 0.6s ease-out forwards;
}

.animate-scale {
  opacity: 0;
  animation: scaleIn 0.5s ease-out forwards;
}

.animate-blur {
  opacity: 0;
  animation: blurIn 0.8s ease-out forwards;
}

/* Stagger delays */
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }
.delay-6 { animation-delay: 0.6s; }
```

### Hover Effects

```css
/* Lift on hover */
.hover-lift {
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

/* Glow on hover */
.hover-glow {
  transition: box-shadow var(--transition-normal);
}
.hover-glow:hover {
  box-shadow: var(--shadow-glow);
}

/* Scale on hover */
.hover-scale {
  transition: transform var(--transition-fast);
}
.hover-scale:hover {
  transform: scale(1.02);
}
```

---

## Component Styles

### Glassmorphism Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
}
```

### Gradient Header

```css
.gradient-header {
  background: var(--gradient-primary);
  padding: var(--space-xl) var(--space-2xl);
  position: relative;
  overflow: hidden;
}

.gradient-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
  pointer-events: none;
}

.gradient-header h1 {
  color: var(--white);
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}
```

### Accent Bar

```css
.accent-bar-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--gradient-accent);
}

.accent-bar-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--gradient-accent);
}
```

### Stats Card

```css
.stat-card {
  background: var(--light-gray);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  text-align: center;
  border-bottom: 4px solid var(--pln-primary-blue);
  transition: all var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--pln-dark-blue);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-light);
}
```

### Feature Card

```css
.feature-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border-top: 4px solid var(--pln-primary-blue);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.feature-card:nth-child(2) { border-top-color: var(--pln-dark-blue); }
.feature-card:nth-child(3) { border-top-color: var(--pln-green); }
.feature-card:nth-child(4) { border-top-color: var(--pln-light-blue); }

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-card h3 {
  color: var(--pln-dark-blue);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.feature-card p {
  color: var(--text-gray);
  font-size: 0.95rem;
  line-height: 1.6;
}
```

### Badge/Tag

```css
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--pln-primary-blue);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-xl);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-outline {
  background: transparent;
  border: 2px solid var(--pln-primary-blue);
  color: var(--pln-primary-blue);
}
```

### Progress Bar

```css
.progress-bar {
  height: 8px;
  background: var(--border-gray);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: var(--radius-xl);
  transition: width 0.5s ease;
}
```

---

## Layout Utilities

```css
/* Flexbox */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-sm { gap: var(--space-sm); }
.gap-md { gap: var(--space-md); }
.gap-lg { gap: var(--space-lg); }

/* Grid */
.grid { display: grid; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Spacing */
.p-sm { padding: var(--space-sm); }
.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }
.p-xl { padding: var(--space-xl); }

.m-auto { margin: auto; }
.text-center { text-align: center; }
```

---

## Color Cycling

For multiple cards, cycle through brand colors:

```css
.card:nth-child(4n+1) { border-color: var(--pln-primary-blue); }
.card:nth-child(4n+2) { border-color: var(--pln-dark-blue); }
.card:nth-child(4n+3) { border-color: var(--pln-green); }
.card:nth-child(4n+4) { border-color: var(--pln-light-blue); }
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px) {
  /* sm: tablets */
}

@media (min-width: 1024px) {
  /* lg: desktops */
}

@media (min-width: 1280px) {
  /* xl: large screens */
}
```
