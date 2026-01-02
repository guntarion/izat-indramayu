# Slide Templates - Animated HTML

Beautiful, animated HTML templates for presentation slides.

## Table of Contents

1. [Title Slide](#title-slide)
2. [Content Slide](#content-slide)
3. [Two-Column Slide](#two-column-slide)
4. [Stats Slide](#stats-slide)
5. [Cards Slide](#cards-slide)
6. [Timeline Slide](#timeline-slide)
7. [Quote Slide](#quote-slide)
8. [Closing Slide](#closing-slide)

---

## Title Slide

Hero-style title with gradient background and animated text.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Judul Presentasi</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --gradient-hero: linear-gradient(135deg, #035B71 0%, #00A2B9 50%, #35B971 100%);
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: var(--gradient-hero);
      position: relative;
      overflow: hidden;
    }
    /* Animated background circles */
    .bg-circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      animation: float 20s infinite ease-in-out;
    }
    .bg-circle:nth-child(1) { width: 400px; height: 400px; top: -100px; right: -100px; animation-delay: 0s; }
    .bg-circle:nth-child(2) { width: 300px; height: 300px; bottom: -50px; left: -50px; animation-delay: -5s; }
    .bg-circle:nth-child(3) { width: 200px; height: 200px; top: 50%; left: 20%; animation-delay: -10s; }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(180deg); }
    }
    .content {
      text-align: center;
      z-index: 10;
      padding: 2rem;
    }
    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 3.5rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 1rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }
    .subtitle {
      font-size: 1.5rem;
      color: rgba(255,255,255,0.9);
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.4s forwards;
    }
    .org {
      font-size: 1.1rem;
      color: rgba(255,255,255,0.8);
      font-weight: 500;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.6s forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* Bottom accent bar */
    .accent-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, var(--pln-primary-blue), var(--pln-green));
    }
  </style>
</head>
<body>
  <div class="bg-circle"></div>
  <div class="bg-circle"></div>
  <div class="bg-circle"></div>
  <div class="content">
    <h1>Judul Presentasi</h1>
    <p class="subtitle">Deskripsi singkat atau tagline</p>
    <p class="org">PT PLN Nusantara Power</p>
  </div>
  <div class="accent-bar"></div>
</body>
</html>
```

---

## Content Slide

Standard content with animated bullet points.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Konten</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --light-gray: #F8F9FA;
      --text-gray: #333333;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2.5rem 3rem;
      position: relative;
      overflow: hidden;
    }
    .header::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 300px; height: 100%;
      background: radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%);
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      position: relative;
      z-index: 1;
      opacity: 0;
      animation: fadeInDown 0.6s ease-out forwards;
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .content {
      flex: 1;
      padding: 2.5rem 3rem;
    }
    ul {
      list-style: none;
    }
    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem 0;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--text-gray);
      border-bottom: 1px solid #eee;
      opacity: 0;
      animation: fadeInLeft 0.5s ease-out forwards;
    }
    li:last-child { border-bottom: none; }
    li:nth-child(1) { animation-delay: 0.2s; }
    li:nth-child(2) { animation-delay: 0.3s; }
    li:nth-child(3) { animation-delay: 0.4s; }
    li:nth-child(4) { animation-delay: 0.5s; }
    li:nth-child(5) { animation-delay: 0.6s; }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    li::before {
      content: '';
      width: 8px;
      height: 8px;
      background: var(--pln-primary-blue);
      border-radius: 50%;
      margin-top: 0.5rem;
      flex-shrink: 0;
    }
    li:nth-child(2)::before { background: var(--pln-dark-blue); }
    li:nth-child(3)::before { background: var(--pln-green); }
    li:nth-child(4)::before { background: var(--pln-primary-blue); }
    li:nth-child(5)::before { background: var(--pln-dark-blue); }
    strong { color: var(--pln-dark-blue); }
  </style>
</head>
<body>
  <div class="header">
    <h1>Judul Slide</h1>
  </div>
  <div class="content">
    <ul>
      <li><span><strong>Poin pertama:</strong> Penjelasan singkat tentang poin pertama</span></li>
      <li><span><strong>Poin kedua:</strong> Penjelasan singkat tentang poin kedua</span></li>
      <li><span><strong>Poin ketiga:</strong> Penjelasan singkat tentang poin ketiga</span></li>
      <li><span><strong>Poin keempat:</strong> Penjelasan singkat tentang poin keempat</span></li>
    </ul>
  </div>
</body>
</html>
```

---

## Two-Column Slide

Side-by-side comparison with hover effects.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Dua Kolom</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --light-gray: #F8F9FA;
      --text-gray: #333333;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2.5rem 3rem;
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      opacity: 0;
      animation: fadeIn 0.6s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .content {
      flex: 1;
      padding: 2rem 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .column {
      opacity: 0;
    }
    .column:nth-child(1) { animation: fadeInLeft 0.6s ease-out 0.2s forwards; }
    .column:nth-child(2) { animation: fadeInRight 0.6s ease-out 0.3s forwards; }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .column-header {
      padding: 1rem 1.5rem;
      border-radius: 12px 12px 0 0;
      color: #fff;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .column:nth-child(1) .column-header { background: var(--pln-primary-blue); }
    .column:nth-child(2) .column-header { background: var(--pln-green); }
    .column-body {
      background: var(--light-gray);
      padding: 1.5rem;
      border-radius: 0 0 12px 12px;
      min-height: 300px;
    }
    .column-body ul {
      list-style: none;
    }
    .column-body li {
      padding: 0.75rem 0;
      font-size: 1rem;
      color: var(--text-gray);
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .column-body li:last-child { border-bottom: none; }
    .column-body li::before {
      content: '→';
      color: var(--pln-primary-blue);
      font-weight: bold;
    }
    .column:nth-child(2) .column-body li::before {
      color: var(--pln-green);
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Perbandingan Dua Aspek</h1>
  </div>
  <div class="content">
    <div class="column">
      <div class="column-header">Kolom Kiri</div>
      <div class="column-body">
        <ul>
          <li>Item pertama kolom kiri</li>
          <li>Item kedua kolom kiri</li>
          <li>Item ketiga kolom kiri</li>
          <li>Item keempat kolom kiri</li>
        </ul>
      </div>
    </div>
    <div class="column">
      <div class="column-header">Kolom Kanan</div>
      <div class="column-body">
        <ul>
          <li>Item pertama kolom kanan</li>
          <li>Item kedua kolom kanan</li>
          <li>Item ketiga kolom kanan</li>
          <li>Item keempat kolom kanan</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Stats Slide

Big numbers with counting animation.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Statistik</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --pln-light-blue: #00AFF0;
      --light-gray: #F8F9FA;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2.5rem 3rem;
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
    }
    .content {
      flex: 1;
      padding: 3rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      align-content: center;
    }
    .stat-card {
      background: var(--light-gray);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      border-bottom: 5px solid var(--pln-primary-blue);
      opacity: 0;
      transform: translateY(30px);
      animation: popIn 0.5s ease-out forwards;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    }
    .stat-card:nth-child(1) { animation-delay: 0.1s; }
    .stat-card:nth-child(2) { animation-delay: 0.2s; border-color: var(--pln-green); }
    .stat-card:nth-child(3) { animation-delay: 0.3s; border-color: var(--pln-light-blue); }
    .stat-card:nth-child(4) { animation-delay: 0.4s; border-color: var(--pln-dark-blue); }
    .stat-card:nth-child(5) { animation-delay: 0.5s; border-color: var(--pln-primary-blue); }
    .stat-card:nth-child(6) { animation-delay: 0.6s; border-color: var(--pln-green); }
    @keyframes popIn {
      from { opacity: 0; transform: translateY(30px) scale(0.9); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .stat-number {
      font-family: 'Poppins', sans-serif;
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--pln-dark-blue);
      line-height: 1;
      margin-bottom: 0.5rem;
    }
    .stat-label {
      font-size: 1rem;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Statistik Utama</h1>
  </div>
  <div class="content">
    <div class="stat-card">
      <div class="stat-number">220</div>
      <div class="stat-label">Jabatan Tercakup</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">12</div>
      <div class="stat-label">Domain Kompetensi</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">188</div>
      <div class="stat-label">Item Kompetensi</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">85%</div>
      <div class="stat-label">Coverage Survei</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">3.000+</div>
      <div class="stat-label">Tugas Teridentifikasi</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">94%</div>
      <div class="stat-label">Relevansi KKJ</div>
    </div>
  </div>
</body>
</html>
```

---

## Cards Slide

Feature cards with hover lift effect.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fitur/Prinsip</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --pln-light-blue: #00AFF0;
      --light-gray: #F8F9FA;
      --text-gray: #333333;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, #fff 0%, var(--light-gray) 100%);
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2.5rem 3rem;
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
    }
    .content {
      flex: 1;
      padding: 2rem 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      align-content: start;
    }
    .card {
      background: #fff;
      border-radius: 16px;
      padding: 1.5rem;
      border-top: 4px solid var(--pln-primary-blue);
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      opacity: 0;
      animation: fadeInUp 0.5s ease-out forwards;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.12);
    }
    .card:nth-child(1) { animation-delay: 0.1s; }
    .card:nth-child(2) { animation-delay: 0.2s; border-color: var(--pln-dark-blue); }
    .card:nth-child(3) { animation-delay: 0.3s; border-color: var(--pln-green); }
    .card:nth-child(4) { animation-delay: 0.4s; border-color: var(--pln-light-blue); }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .card-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: var(--pln-primary-blue);
      color: #fff;
      font-size: 0.7rem;
      font-weight: 600;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.75rem;
    }
    .card:nth-child(2) .card-badge { background: var(--pln-dark-blue); }
    .card:nth-child(3) .card-badge { background: var(--pln-green); }
    .card:nth-child(4) .card-badge { background: var(--pln-light-blue); }
    .card h3 {
      color: var(--pln-dark-blue);
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    .card p {
      color: var(--text-gray);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Prinsip Utama</h1>
  </div>
  <div class="content">
    <div class="card">
      <span class="card-badge">Prinsip 1</span>
      <h3>Judul Prinsip Pertama</h3>
      <p>Penjelasan singkat tentang prinsip pertama yang diterapkan dalam metodologi ini.</p>
    </div>
    <div class="card">
      <span class="card-badge">Prinsip 2</span>
      <h3>Judul Prinsip Kedua</h3>
      <p>Penjelasan singkat tentang prinsip kedua yang menjadi landasan penting.</p>
    </div>
    <div class="card">
      <span class="card-badge">Prinsip 3</span>
      <h3>Judul Prinsip Ketiga</h3>
      <p>Penjelasan singkat tentang prinsip ketiga yang memastikan kualitas hasil.</p>
    </div>
    <div class="card">
      <span class="card-badge">Prinsip 4</span>
      <h3>Judul Prinsip Keempat</h3>
      <p>Penjelasan singkat tentang prinsip keempat yang mendukung implementasi.</p>
    </div>
  </div>
</body>
</html>
```

---

## Timeline Slide

Process timeline with connected steps.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timeline/Tahapan</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --pln-light-blue: #00AFF0;
      --light-gray: #F8F9FA;
      --text-gray: #333333;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2.5rem 3rem;
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
    }
    .content {
      flex: 1;
      padding: 3rem;
      display: flex;
      gap: 0;
      align-items: flex-start;
      justify-content: center;
    }
    .timeline-item {
      flex: 1;
      max-width: 200px;
      text-align: center;
      position: relative;
      opacity: 0;
      animation: fadeInUp 0.5s ease-out forwards;
    }
    .timeline-item:nth-child(1) { animation-delay: 0.1s; }
    .timeline-item:nth-child(2) { animation-delay: 0.2s; }
    .timeline-item:nth-child(3) { animation-delay: 0.3s; }
    .timeline-item:nth-child(4) { animation-delay: 0.4s; }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .timeline-item::after {
      content: '';
      position: absolute;
      top: 30px;
      right: -50%;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, var(--pln-primary-blue), var(--pln-green));
      z-index: 0;
    }
    .timeline-item:last-child::after { display: none; }
    .timeline-number {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--pln-primary-blue), var(--pln-green));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      position: relative;
      z-index: 1;
      box-shadow: 0 5px 20px rgba(0,162,185,0.3);
    }
    .timeline-item:nth-child(2) .timeline-number { background: linear-gradient(135deg, var(--pln-dark-blue), var(--pln-primary-blue)); }
    .timeline-item:nth-child(3) .timeline-number { background: linear-gradient(135deg, var(--pln-green), var(--pln-light-blue)); }
    .timeline-item:nth-child(4) .timeline-number { background: linear-gradient(135deg, var(--pln-light-blue), var(--pln-primary-blue)); }
    .timeline-title {
      font-weight: 600;
      color: var(--pln-dark-blue);
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .timeline-desc {
      font-size: 0.85rem;
      color: var(--text-gray);
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Tahapan Proses</h1>
  </div>
  <div class="content">
    <div class="timeline-item">
      <div class="timeline-number">1</div>
      <div class="timeline-title">Fase Pertama</div>
      <div class="timeline-desc">Deskripsi singkat aktivitas pada fase pertama</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-number">2</div>
      <div class="timeline-title">Fase Kedua</div>
      <div class="timeline-desc">Deskripsi singkat aktivitas pada fase kedua</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-number">3</div>
      <div class="timeline-title">Fase Ketiga</div>
      <div class="timeline-desc">Deskripsi singkat aktivitas pada fase ketiga</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-number">4</div>
      <div class="timeline-title">Fase Keempat</div>
      <div class="timeline-desc">Deskripsi singkat aktivitas pada fase keempat</div>
    </div>
  </div>
</body>
</html>
```

---

## Quote Slide

Highlight quote with elegant styling.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kutipan</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 3rem;
    }
    .quote-container {
      max-width: 800px;
      text-align: center;
      opacity: 0;
      animation: fadeIn 0.8s ease-out 0.2s forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .quote-mark {
      font-size: 6rem;
      color: var(--pln-primary-blue);
      opacity: 0.3;
      line-height: 1;
      font-family: Georgia, serif;
    }
    blockquote {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--pln-dark-blue);
      line-height: 1.6;
      margin: 1rem 0 2rem;
      font-style: italic;
    }
    .quote-source {
      font-size: 1rem;
      color: #666;
    }
    .quote-source strong {
      color: var(--pln-dark-blue);
    }
    /* Decorative elements */
    .accent-line {
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, var(--pln-primary-blue), var(--pln-green));
      margin: 0 auto 2rem;
      border-radius: 2px;
    }
  </style>
</head>
<body>
  <div class="quote-container">
    <div class="quote-mark">"</div>
    <blockquote>
      Learning Path bukan sekadar daftar pelatihan, melainkan jalur pembelajaran yang tersegmentasi berdasarkan tingkat kebutuhan dan prioritas.
    </blockquote>
    <div class="accent-line"></div>
    <p class="quote-source">— <strong>Metodologi PLN Nusantara Power</strong></p>
  </div>
</body>
</html>
```

---

## Closing Slide

Thank you slide with animated elements.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terima Kasih</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      position: relative;
      overflow: hidden;
    }
    /* Animated circles */
    .circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
    }
    .circle:nth-child(1) { width: 500px; height: 500px; top: -150px; right: -150px; animation: pulse 4s ease-in-out infinite; }
    .circle:nth-child(2) { width: 400px; height: 400px; bottom: -100px; left: -100px; animation: pulse 4s ease-in-out infinite 1s; }
    .circle:nth-child(3) { width: 200px; height: 200px; top: 30%; right: 10%; animation: pulse 4s ease-in-out infinite 2s; }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.05; }
      50% { transform: scale(1.1); opacity: 0.1; }
    }
    .content {
      text-align: center;
      z-index: 10;
    }
    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 4rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 1rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }
    .subtitle {
      font-size: 1.3rem;
      color: rgba(255,255,255,0.9);
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.4s forwards;
    }
    .org {
      font-size: 1.1rem;
      color: rgba(255,255,255,0.8);
      font-weight: 600;
      opacity: 0;
      animation: fadeInUp 0.8s ease-out 0.6s forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* Bottom accent */
    .accent-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(90deg, var(--pln-primary-blue) 0%, var(--pln-green) 50%, var(--pln-primary-blue) 100%);
    }
  </style>
</head>
<body>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="content">
    <h1>Terima Kasih</h1>
    <p class="subtitle">Metodologi Penyusunan Learning Path</p>
    <p class="org">PT PLN Nusantara Power</p>
  </div>
  <div class="accent-bar"></div>
</body>
</html>
```

---

## Image Slide

Content slide with a prominent image and supporting text.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide dengan Gambar</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --light-gray: #F8F9FA;
      --text-gray: #333333;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2rem 3rem;
      position: relative;
      overflow: hidden;
    }
    .header::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 300px; height: 100%;
      background: radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%);
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: #fff;
      position: relative;
      z-index: 1;
      opacity: 0;
      animation: fadeInDown 0.6s ease-out forwards;
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .content {
      flex: 1;
      padding: 2rem 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }
    .image-container {
      opacity: 0;
      animation: fadeInLeft 0.6s ease-out 0.2s forwards;
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
      transition: transform 0.3s ease;
    }
    .image-container img:hover {
      transform: scale(1.02);
    }
    .image-caption {
      margin-top: 0.75rem;
      font-size: 0.85rem;
      color: #666;
      text-align: center;
      font-style: italic;
    }
    .text-content {
      opacity: 0;
      animation: fadeInRight 0.6s ease-out 0.3s forwards;
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .text-content h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--pln-dark-blue);
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid var(--pln-primary-blue);
    }
    .text-content ul {
      list-style: none;
    }
    .text-content li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 0.75rem 0;
      font-size: 1rem;
      line-height: 1.5;
      color: var(--text-gray);
      border-bottom: 1px solid #eee;
    }
    .text-content li:last-child { border-bottom: none; }
    .text-content li::before {
      content: '▸';
      color: var(--pln-primary-blue);
      font-weight: bold;
      flex-shrink: 0;
    }
    .highlight {
      background: linear-gradient(120deg, rgba(0,162,185,0.1) 0%, rgba(53,185,113,0.1) 100%);
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      border-left: 4px solid var(--pln-green);
    }
    .highlight p {
      font-size: 0.95rem;
      color: var(--pln-dark-blue);
      font-weight: 500;
    }
    strong { color: var(--pln-dark-blue); }
  </style>
</head>
<body>
  <div class="header">
    <h1>Judul Slide dengan Gambar</h1>
  </div>
  <div class="content">
    <div class="image-container">
      <img src="assets/images/nama-gambar.png" alt="Deskripsi gambar">
      <p class="image-caption">Gambar 1: Keterangan gambar</p>
    </div>
    <div class="text-content">
      <h2>Temuan Utama</h2>
      <ul>
        <li><span><strong>Poin pertama:</strong> Penjelasan singkat tentang poin pertama</span></li>
        <li><span><strong>Poin kedua:</strong> Penjelasan singkat tentang poin kedua</span></li>
        <li><span><strong>Poin ketiga:</strong> Penjelasan singkat tentang poin ketiga</span></li>
      </ul>
      <div class="highlight">
        <p>"Narasi atau insight penting yang perlu disampaikan."</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Image Full-Width Slide

Slide with large centered image and minimal text overlay.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Gambar Penuh</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #f8f9fa;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 1.5rem 3rem;
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      opacity: 0;
      animation: fadeIn 0.6s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .image-wrapper {
      max-width: 90%;
      max-height: 70vh;
      opacity: 0;
      animation: scaleIn 0.6s ease-out 0.2s forwards;
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .image-wrapper img {
      max-width: 100%;
      max-height: 65vh;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }
    .caption {
      margin-top: 1.5rem;
      text-align: center;
      opacity: 0;
      animation: fadeInUp 0.5s ease-out 0.4s forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .caption h3 {
      font-size: 1.1rem;
      color: var(--pln-dark-blue);
      margin-bottom: 0.5rem;
    }
    .caption p {
      font-size: 0.9rem;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Judul Slide Gambar</h1>
  </div>
  <div class="content">
    <div class="image-wrapper">
      <img src="assets/images/nama-gambar.png" alt="Deskripsi gambar">
    </div>
    <div class="caption">
      <h3>Keterangan Gambar</h3>
      <p>Deskripsi singkat atau insight dari gambar ini</p>
    </div>
  </div>
</body>
</html>
```

---

## Multi-Image Slide

Slide with 2-4 images in a grid layout.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slide Multi Gambar</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pln-dark-blue: #035B71;
      --pln-primary-blue: #00A2B9;
      --pln-green: #35B971;
      --light-gray: #F8F9FA;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    .header {
      background: linear-gradient(135deg, var(--pln-dark-blue) 0%, var(--pln-primary-blue) 100%);
      padding: 2rem 3rem;
    }
    .header h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: #fff;
    }
    .content {
      flex: 1;
      padding: 2rem 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      align-content: start;
    }
    .image-card {
      background: var(--light-gray);
      border-radius: 12px;
      padding: 1rem;
      opacity: 0;
      animation: fadeInUp 0.5s ease-out forwards;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .image-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    }
    .image-card:nth-child(1) { animation-delay: 0.1s; }
    .image-card:nth-child(2) { animation-delay: 0.2s; }
    .image-card:nth-child(3) { animation-delay: 0.3s; }
    .image-card:nth-child(4) { animation-delay: 0.4s; }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .image-card img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .image-card .label {
      margin-top: 0.75rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--pln-dark-blue);
    }
    .image-card .desc {
      font-size: 0.8rem;
      color: #666;
      margin-top: 0.25rem;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Judul Multi Gambar</h1>
  </div>
  <div class="content">
    <div class="image-card">
      <img src="assets/images/gambar-1.png" alt="Gambar 1">
      <p class="label">Gambar 1</p>
      <p class="desc">Deskripsi singkat gambar 1</p>
    </div>
    <div class="image-card">
      <img src="assets/images/gambar-2.png" alt="Gambar 2">
      <p class="label">Gambar 2</p>
      <p class="desc">Deskripsi singkat gambar 2</p>
    </div>
    <div class="image-card">
      <img src="assets/images/gambar-3.png" alt="Gambar 3">
      <p class="label">Gambar 3</p>
      <p class="desc">Deskripsi singkat gambar 3</p>
    </div>
    <div class="image-card">
      <img src="assets/images/gambar-4.png" alt="Gambar 4">
      <p class="label">Gambar 4</p>
      <p class="desc">Deskripsi singkat gambar 4</p>
    </div>
  </div>
</body>
</html>
```

---

## Usage Notes

1. **Copy the template** for each slide type you need
2. **Replace placeholder content** with actual condensed content
3. **Adjust animations** as needed (delays, durations)
4. **Keep files ordered** with `slide-NN-slug.html` naming
5. **Test in browser** before finalizing
6. **Image paths:** Use relative paths like `assets/images/filename.png`
7. **Image optimization:** Ensure images are web-optimized for faster loading
