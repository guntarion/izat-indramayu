# Panduan Navigasi Website Analisis Data IZAT K3
## UP Indramayu - PLN Nusantara Power

---

## 📘 Tentang Panduan Ini

Dokumen ini adalah **panduan lengkap navigasi website** Analisis Data IZAT K3 untuk UP Indramayu. Panduan ini menjelaskan struktur website, cara mengakses setiap fitur, dan troubleshooting umum yang berlaku untuk seluruh halaman.

**Untuk pengguna:**
- Management & Leadership: Akses cepat ke insight eksekutif
- HSE Team: Navigasi detail untuk analisis mendalam
- Supervisor & Operator: Panduan praktis untuk monitoring harian
- IT Support: Technical reference untuk troubleshooting

---

## 🏠 Halaman Beranda (Home)

### Akses
**URL:** `laporan/index.html`

### Struktur Halaman Beranda

Halaman beranda adalah pintu masuk utama ke semua analisis. Terdiri dari:

#### 1. Hero Section
**Elemen:**
- **Judul Utama:** "Laporan Analisis Data IZAT"
- **Subtitle:** Unit Pembangkitan Indramayu
- **Periode Badge:** Januari - Oktober 2025
- **4 Kartu Statistik Utama:**

| Statistik | Nilai | Keterangan |
|-----------|-------|------------|
| **Total Temuan** | 5.575 | Jan-Okt 2025 temuan K3 |
| **Close Rate** | 99,2% | Tingkat penyelesaian excellent |
| **Rata-rata Quality Score** | 2,28 | Skor kualitas laporan (skala 0-5) |
| **Detection Rate Unsafe** | 21,9% | Persentase temuan yang actionable |

#### 2. Tentang Laporan Ini
**Konten:**
- Penjelasan singkat tentang IZAT (iZero Accident Assistant)
- Periode pelaporan: Januari hingga Oktober 2025
- Cakupan: 5.575 temuan dari 823 pelapor
- Highlight: 9 perusahaan, 46 area kerja, 5 zona utama
- Close rate: 99,2% - menunjukkan komitmen tinggi terhadap K3

#### 3. Ringkasan Statistik
**6 Kartu Statistik Detail:**
- Total Temuan: 5.575
- Total Pelapor Aktif: 823
- Total Zona Dianalisis: 5
- Temuan Masih Open: 44
- Area Prioritas Tinggi: 16
- Total Vendor/Perusahaan: 9

#### 4. Data Cleansing Pipeline
**7 Tahapan Pembersihan Data:**
1. ✏️ **Fuzzy Matching** - Koreksi typo otomatis
2. 📍 **Standardisasi Lokasi** - Normalisasi zona & area
3. 🏢 **Standardisasi Perusahaan** - Kategorisasi vendor
4. 📅 **Standardisasi Tanggal** - Parsing waktu & shift
5. ⚠️ **Risk Severity** - Scoring tingkat risiko
6. 📊 **Quality & Workload** - Metrik performa
7. 📈 **Tren & Komparasi** - Analisis time-series

**Setiap card memiliki button "Lihat Detail →"** yang link ke halaman pembersihan data spesifik.

#### 5. Jelajahi Laporan Detail
**3 Kategori Analisis:**

**A. Data Cleansing (7 Halaman)**
- Halaman teknis yang menunjukkan proses pembersihan data
- Untuk user yang ingin memahami metodologi

**B. Basic Analysis (5 Halaman)**
- Analisis deskriptif fundamental
- Halaman paling sering diakses

**C. Advanced Analysis (3 Halaman)**
- Analisis berbasis AI/ML
- Untuk insight prediktif dan rekomendasi

#### 6. Analisis Lanjutan (AI/ML)
**3 Card AI Features:**
- 🤖 **Model Prediksi Risiko** - Random Forest prediction
- 💡 **Smart Recommendation** - Actionable suggestions
- 🔍 **Deteksi Anomali** - Pattern anomaly detection

#### 7. Sorotan Utama
**8 Key Findings Cards:**
- Zona risiko tertinggi
- PIC overload issue
- SLA compliance gap
- Shift pattern insights
- Asset tracking needs
- Top performers
- Process bottlenecks
- Anomaly detection cases

#### 8. Metodologi & Teknologi
**Tech Stack:**
- Python, Pandas, Scikit-learn untuk data processing & ML
- HTML, CSS, JavaScript untuk visualization
- Random Forest, TF-IDF, Isolation Forest untuk AI/ML models

#### 9. FAQ & Sorotan Utama
Quick answers untuk pertanyaan umum tentang:
- Data source & quality
- Analysis methodology
- Update frequency
- Access & permissions

---

## 🗂️ Struktur Konten Website

Website terbagi menjadi **3 kategori utama** dengan total **15 halaman analisis**:

### 📂 A. Data Cleansing (7 Halaman)

**Tujuan:** Transparansi proses pembersihan data untuk memastikan kualitas analisis

| # | Halaman | Icon | Deskripsi Singkat | File |
|---|---------|------|-------------------|------|
| 1 | **Koreksi Typo** | ✏️ | Fuzzy matching untuk standardisasi teks | `09_typo_correction.html` |
| 2 | **Standardisasi Lokasi** | 📍 | Parsing zona, area, unit, lantai | `10_location_standardization.html` |
| 3 | **Standardisasi Perusahaan** | 🏢 | Normalisasi nama vendor & kategorisasi | `11_company_standardization.html` |
| 4 | **Standardisasi Tanggal** | 📅 | Parsing tanggal, waktu, shift, resolution days | `12_date_standardization.html` |
| 5 | **Risk Severity** | ⚠️ | Scoring risiko & kategorisasi severity | `13_risk_severity.html` |
| 6 | **Quality & Workload** | 📊 | Metrik kualitas laporan & beban kerja PIC | `14_quality_workload.html` |
| 7 | **Tren & Komparasi** | 📈 | Time-series analysis & benchmarking | `15_trend_comparison.html` |

**Kapan Mengakses:**
- User ingin validasi metodologi
- Academic/research purposes
- Quality assurance review
- Technical documentation reference

---

### 📊 B. Basic Analysis (5 Halaman)

**Tujuan:** Analisis deskriptif untuk insight operasional harian

| # | Halaman | Icon | Deskripsi Singkat | Key Metrics | File |
|---|---------|------|-------------------|-------------|------|
| 1 | **Analisis Risiko Area** | 📍 | Zona & area dengan risiko tertinggi | Risk score, Unsafe rate, Priority score | `01_area_risk.html` |
| 2 | **Performa Tim** | 👥 | Reporter, PIC, Vendor performance | Detection rate, Close rate, Workload | `02_team_performance.html` |
| 3 | **Alur Penyelesaian** | ⚙️ | Workflow & SLA compliance | Close rate, SLA compliance, Resolution time | `03_resolution_workflow.html` |
| 4 | **Pola Shift & Hari** | 🕐 | Pattern temporal untuk optimasi jadwal | Detection rate per shift/hari | `04_shift_analysis.html` |
| 5 | **Tracking Aset** | 🔧 | Equipment health & maintenance needs | Frequency per asset, Issue category | `05_asset_tracking.html` |

**Kapan Mengakses:**
- Daily/weekly monitoring
- Management review meeting
- Operational decision making
- Resource allocation planning

**Halaman Paling Populer:**
1. Analisis Risiko Area (untuk prioritization)
2. Performa Tim (untuk recognition & improvement)
3. Alur Penyelesaian (untuk SLA monitoring)

---

### 🤖 C. Advanced Analysis (3 Halaman)

**Tujuan:** Analisis prediktif berbasis AI/ML untuk strategic planning

| # | Halaman | Icon | Deskripsi Singkat | Model/Algorithm | Output | File |
|---|---------|------|-------------------|-----------------|--------|------|
| 1 | **Model Prediksi Risiko** | 📊 | Forecast probabilitas risiko | Random Forest | Risk probability per zona/shift | `06_risk_prediction.html` |
| 2 | **Smart Recommendation** | 💡 | Rekomendasi tindakan otomatis | TF-IDF Similarity | 3-tier action plan | `07_smart_recommendation.html` |
| 3 | **Deteksi Anomali** | 🔍 | Pattern tidak normal & gaming detection | Isolation Forest, Z-Score | Anomaly alerts & flags | `08_anomaly_detection.html` |

**Kapan Mengakses:**
- Strategic planning session
- Proactive resource allocation
- Process improvement initiative
- Innovation & optimization projects

**Manfaat AI/ML:**
- **Prediktif** (bukan hanya reaktif)
- **Data-driven** (bukan assumption-based)
- **Scalable** (handle 5.575+ data points)
- **Objective** (eliminate bias)

---

## 🧭 Sistem Navigasi Global

Sistem navigasi yang konsisten di **semua 15+ halaman** website.

### 1. Header Navigation Bar

**Lokasi:** Fixed di top setiap halaman

**Elemen:**
```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo PLN]  Unit Pembangkitan Indramayu                         │
│                                                                   │
│  [Beranda] [Data Cleansing ▼] [Basic Analysis ▼] [Advanced ▼]  │
└──────────────────────────────────────────────────────────────────┘
```

**Cara Kerja:**
- **Beranda:** Klik untuk kembali ke homepage
- **Data Cleansing ▼:** Hover atau klik untuk dropdown 7 opsi
- **Basic Analysis ▼:** Hover atau klik untuk dropdown 5 opsi
- **Advanced Analysis ▼:** Hover atau klik untuk dropdown 3 opsi

**Visual Indicator:**
- **Menu aktif:** Highlighted dengan warna biru PLN
- **Dropdown aktif:** Background slightly darker
- **Hover effect:** Smooth color transition

### 2. Dropdown Menu Interaction

**Desktop Behavior:**
- **Hover:** Dropdown muncul otomatis (no click needed)
- **Click:** Toggle open/close
- **Outside click:** Auto close

**Mobile/Tablet Behavior:**
- **Tap:** Toggle dropdown
- **Tap outside:** Close dropdown

**Contoh Dropdown - Data Cleansing:**
```
Data Cleansing ▼
├─ ✏️ Koreksi Typo
├─ 📍 Standardisasi Lokasi
├─ 🏢 Standardisasi Perusahaan
├─ 📅 Standardisasi Tanggal
├─ ⚠️ Risk Severity
├─ 📊 Quality & Workload
└─ 📈 Tren & Komparasi
```

**Contoh Dropdown - Basic Analysis:**
```
Basic Analysis ▼
├─ 📍 Analisis Risiko Area
├─ 👥 Performa Tim
├─ ⚙️ Alur Penyelesaian
├─ 🕐 Pola Shift & Hari
└─ 🔧 Tracking Aset
```

**Contoh Dropdown - Advanced Analysis:**
```
Advanced Analysis ▼
├─ 📊 Model Prediksi Risiko
├─ 💡 Smart Recommendation
└─ 🔍 Deteksi Anomali
```

### 3. Breadcrumb Navigation (Jika Ada)
**Format:** Home > Kategori > Halaman Aktif
**Contoh:** Home > Basic Analysis > Analisis Risiko Area

---

## 🔧 Fitur Interaktif Umum

Fitur-fitur berikut tersedia di **hampir semua halaman analisis**:

### 1. Button "Lihat Data Lengkap" (Data Modal)

**Lokasi:** Di header tabel-tabel utama

**Appearance:**
```
┌─────────────────────────────────────────────────┐
│  Tabel Risiko per Zona Operasi                  │
│                                    [📊 Lihat    │
│                                     Data Lengkap]│
└─────────────────────────────────────────────────┘
```

**Cara Menggunakan:**
1. **Klik button** "📊 Lihat Data Lengkap"
2. **Modal popup** muncul dengan overlay gelap
3. **Tabel full data** ditampilkan dalam modal
4. **Scroll** untuk melihat semua baris
5. **Close:**
   - Klik tombol **× (X)** di pojok kanan atas
   - Klik **di luar modal** (overlay area)
   - Tekan **ESC** di keyboard

**Contoh Modal:**
```
┌────────────────────────────────────────────────┐
│  Data Lengkap Risiko per Zona Operasi      [×] │
├────────────────────────────────────────────────┤
│                                                 │
│  [Scrollable Table dengan semua data]          │
│                                                 │
│  Zona | Total | Risk Score | Unsafe Rate | ... │
│  ─────────────────────────────────────────────  │
│  MAIN | 2616  | 1.37       | 14.7%       | ... │
│  COAL | 580   | 1.48       | 21.7%       | ... │
│  ...                                            │
└────────────────────────────────────────────────┘
```

**Manfaat:**
- Lihat data lengkap tanpa scroll panjang di halaman utama
- Export data dengan copy-paste dari modal
- Drill-down untuk detail analysis

**Data yang Bisa Diexport:**
1. Select all text di modal (Ctrl+A / Cmd+A)
2. Copy (Ctrl+C / Cmd+C)
3. Paste ke Excel/Google Sheets
4. Format & analyze lebih lanjut

---

### 2. Lightbox untuk Gambar/Chart

**Lokasi:** Semua grafik dan chart

**Appearance:**
- Gambar normal: Size sedang (~600-800px width)
- Cursor hover: Pointer berubah jadi 🔍 (zoom cursor)
- Border subtle untuk indicate clickable

**Cara Menggunakan:**
1. **Klik pada gambar/chart** manapun
2. **Lightbox aktif:**
   - Background overlay gelap (opacity 80%)
   - Gambar zoom ke full screen (max 90% viewport)
   - Caption tetap terlihat di bawah
3. **Close:**
   - Klik tombol **× (X)** di pojok kanan atas
   - Klik **di luar gambar** (overlay gelap)
   - Tekan **ESC** di keyboard

**Contoh Lightbox:**
```
┌──────────────────────────────────────────────────┐
│                                              [×]  │
│                                                   │
│                                                   │
│        ┌───────────────────────────┐             │
│        │                           │             │
│        │   [CHART FULL SCREEN]     │             │
│        │                           │             │
│        └───────────────────────────┘             │
│                                                   │
│   Gambar 1: Distribusi Risiko per Zona           │
│                                                   │
└──────────────────────────────────────────────────┘
```

**Tips Penggunaan:**
- **Untuk Presentasi:** Lightbox mode ideal untuk present ke layar besar
- **Untuk Analisis Detail:** Zoom untuk lihat detail legend, axis label, data points
- **Untuk Screenshot:** Capture dari lightbox mode untuk dokumentasi

**Troubleshooting:**
- **Gambar tidak zoom:** Klik tepat di area gambar (bukan di figcaption/label)
- **Lightbox tidak muncul:** Refresh halaman (F5) dan coba lagi
- **Image blur:** Gambar PNG high-res, tunggu beberapa detik untuk full load

---

### 3. Progress Bar & Visual Indicators

**Lokasi:** Dalam tabel untuk metric percentage

**Jenis Progress Bar:**

**A. Standard Progress Bar:**
```
Detection Rate: 28.5%
[████████░░░░░░░░░░░] 28.5%
```

**B. Color-Coded Progress Bar:**
- **🟢 Hijau (Success):** > 70% - Excellent performance
- **🟡 Kuning (Warning):** 40-70% - Moderate, needs attention
- **🔴 Merah (Danger):** < 40% - Poor, immediate action needed

**C. Multi-Segment Bar (untuk SLA Compliance):**
```
SLA Status:
[██Met██|░░░░░Missed░░░░░]
  12.9%      87.1%
```

**Manfaat:**
- **Visual at-a-glance:** Tidak perlu baca angka detail
- **Color psychology:** Instant understanding dari warna
- **Comparison easy:** Bandingkan antar baris dengan cepat

---

### 4. Badge & Status Indicators

**Badge System untuk Kategori:**

| Badge Type | Color | Usage Example |
|------------|-------|---------------|
| **🥇 GOLD** | Yellow/Gold | Top tier vendor/reporter |
| **🥈 SILVER** | Silver | Mid tier performance |
| **🥉 BRONZE** | Bronze | Entry tier |
| **🔴 CRITICAL** | Red | High severity/urgent |
| **🟡 HIGH/WARNING** | Orange | Medium priority |
| **🔵 MEDIUM/INFO** | Blue | Standard info |
| **🟢 LOW/SUCCESS** | Green | Good performance |

**Contoh dalam Tabel:**
```
┌────────────────────────────────────────┐
│ Area      | Status                     │
├────────────────────────────────────────┤
│ WORKSHOP  | 🔴 KRITIS                 │
│ BOILER    | 🟡 VOLUME TINGGI          │
│ UTILITY   | 🟢 BAIK                   │
└────────────────────────────────────────┘
```

---

## 🎯 Tips Navigasi

### Navigasi Horizontal (Antar Halaman)

**Best Practice:**
1. **Gunakan dropdown menu** di header - tercepat & paling intuitif
2. **Breadcrumb** (jika ada) untuk back navigation
3. **Link di footer** untuk quick access

**Keyboard Shortcut (jika supported):**
- **Alt + H:** Home
- **Alt + D:** Data Cleansing dropdown
- **Alt + B:** Basic Analysis dropdown
- **Alt + A:** Advanced Analysis dropdown

### Navigasi Vertikal (Dalam Halaman)

**Best Practice:**
1. **Scroll smooth:** Gunakan mouse wheel atau touchpad
2. **Section headers:** Orientasi dengan H2/H3 headers
3. **Jump to section:** Beberapa halaman punya quick-link di atas

**Keyboard Scroll:**
- **Space:** Scroll down 1 viewport
- **Shift + Space:** Scroll up 1 viewport
- **Home:** Jump to top halaman
- **End:** Jump to bottom halaman
- **Page Up/Down:** Scroll by page

### Keyboard Shortcuts Global

| Shortcut | Fungsi | Berlaku Di |
|----------|--------|------------|
| **ESC** | Close modal/lightbox | Semua modal & lightbox |
| **Tab** | Navigate antar elemen interaktif | Semua halaman |
| **Shift + Tab** | Navigate mundur | Semua halaman |
| **Enter** | Activate button/link yang di-focus | Semua interactive elements |

**Accessibility:**
- Website support keyboard navigation penuh
- Tab order logical (top-to-bottom, left-to-right)
- Focus indicator jelas (blue outline)

---

## ⚠️ Common Troubleshooting

### 1. Modal Tidak Muncul Saat Klik Button

**Gejala:**
- Click "Lihat Data Lengkap" tapi tidak ada response
- Modal kadang muncul, kadang tidak

**Penyebab Umum:**
- JavaScript belum sepenuhnya load
- Browser compatibility issue
- Ad-blocker interference

**Solusi:**
1. **Refresh halaman** (F5 atau Ctrl+R / Cmd+R)
2. **Hard refresh** jika masih error (Ctrl+Shift+R / Cmd+Shift+R)
3. **Clear browser cache:**
   - Chrome: Settings > Privacy > Clear browsing data > Cached images
   - Firefox: Options > Privacy > Clear Data > Cached content
4. **Disable ad-blocker** sementara untuk website ini
5. **Try different browser:**
   - Recommended: Chrome 90+, Firefox 88+, Edge 90+
   - Not recommended: IE11 (not supported)

**Jika masih error:** Contact IT support dengan info:
- Browser name & version
- Screenshot error (jika ada)
- Console error message (F12 > Console tab)

---

### 2. Gambar Tidak Memperbesar Saat Diklik

**Gejala:**
- Klik gambar tapi lightbox tidak muncul
- Gambar hanya reload tanpa zoom

**Penyebab Umum:**
- Klik di area figcaption (bukan gambar)
- JavaScript lightbox library error
- Image lazy-load belum complete

**Solusi:**
1. **Pastikan klik tepat di area gambar** (bukan di caption di bawah)
2. **Wait for full page load** - tunggu sampai semua gambar fully loaded
3. **Alternative:**
   - Klik kanan pada gambar
   - Pilih **"Open Image in New Tab"**
   - Gambar akan open di tab baru dengan size penuh
4. **Refresh halaman** dan coba lagi

**Workaround untuk Presentasi:**
- Save image dulu: Klik kanan > Save image as
- Open saved image dengan image viewer
- Project ke layar presentasi

---

### 3. Gambar Sulit Dibaca / Blur

**Gejala:**
- Chart legend terlalu kecil
- Text di grafik tidak terbaca
- Warna sulit dibedakan

**Penyebab Umum:**
- Monitor resolution rendah
- Browser zoom level tidak optimal
- Image loading belum complete (progressive load)

**Solusi:**
1. **Gunakan Lightbox untuk memperbesar:**
   - Klik gambar → Lightbox mode
   - Gambar akan full screen dengan resolution tinggi
2. **Browser zoom:**
   - Zoom in: Ctrl + Plus (+) / Cmd + Plus
   - Zoom out: Ctrl + Minus (-) / Cmd + Minus
   - Reset: Ctrl + 0 / Cmd + 0
   - Optimal: 100% atau 110% untuk layar 1920x1080
3. **Perhatikan legend warna:**
   - Legend selalu ada di samping atau bawah chart
   - Cross-reference dengan angka di tabel
4. **High-DPI monitor:**
   - Jika monitor 4K, set browser zoom 125-150%
   - Gambar PNG sudah high-res, tidak akan pixelated

**Tips Presentasi:**
- Test sebelumnya di projector/monitor yang akan dipakai
- Jika warna sulit dibedakan di projector, refer ke angka di tabel
- Print handout untuk detail reference

---

### 4. Halaman Load Lambat

**Gejala:**
- Website lama banget load (> 10 detik)
- Gambar muncul bertahap (progressive)
- Interaktivitas delay

**Penyebab Umum:**
- Koneksi internet lambat (< 5 Mbps)
- Banyak PNG image (total 9 gambar per halaman ~4-5 MB)
- Browser cache penuh
- Multiple tabs open

**Solusi:**

**A. Immediate (Quick Fix):**
1. **Close tabs lain** yang tidak diperlukan
2. **Disable browser extensions** sementara
3. **Wait patiently** - total 9 gambar akan load sequential
4. **Progress indicator:** Lihat loading icon di browser tab

**B. Connection Optimization:**
1. **Check internet speed:**
   - Minimum: 5 Mbps download
   - Recommended: 10+ Mbps
   - Test di speedtest.net
2. **Switch to wired connection** jika pakai WiFi
3. **Close bandwidth-heavy apps:** YouTube, streaming, download

**C. Browser Optimization:**
1. **Enable cache:**
   - Chrome: Settings > Privacy > Preload pages for faster loading
   - Firefox: Options > Network Settings > Use caching
2. **Clear cache periodically:**
   - Paradox: Cache help 2nd visit, tapi kalau terlalu penuh malah slow
   - Clear every 2-3 minggu
3. **Use modern browser:**
   - Chrome, Firefox, Edge (latest version)
   - Avoid IE11 atau browser lama

**D. For Slow Connection (< 5 Mbps):**
1. **Load halaman satu per satu** - jangan buka multiple tabs sekaligus
2. **Scroll down slowly** - biarkan gambar load sebelum scroll ke gambar berikutnya
3. **Prioritize table over chart** - tabel load cepat, chart image load lambat
4. **Export data for offline analysis:**
   - Copy data dari modal
   - Paste ke Excel
   - Analyze offline tanpa perlu load website

**Benchmark Load Time (10 Mbps connection):**
- Homepage: ~2-3 detik
- Basic Analysis page: ~3-5 detik (9 images)
- Advanced Analysis page: ~4-6 detik (kompleks visualization)

**Jika Extremely Slow (> 30 detik):**
- Kemungkinan server issue atau network firewall
- Contact IT support
- Check company network policy (apakah website di-block?)

---

### 5. Dropdown Menu Tidak Menutup

**Gejala:**
- Dropdown tetap open meski sudah klik di luar
- Multiple dropdown open bersamaan
- Menu stuck

**Solusi:**
1. **Click exactly di luar dropdown area** (di background putih)
2. **ESC key** untuk force close semua dropdown
3. **Refresh halaman** jika stuck
4. **Hover ke menu lain** - should auto-close previous

---

### 6. Text Terlalu Kecil / Terlalu Besar

**Gejala:**
- Font size tidak nyaman dibaca
- Layout broken karena zoom

**Solusi:**
1. **Browser zoom optimal:**
   - Monitor 1920x1080: 100% zoom
   - Monitor 4K: 125-150% zoom
   - Laptop 13-14": 110-125% zoom
2. **Operating system display scaling:**
   - Windows: Settings > Display > Scale 100-125%
   - macOS: System Preferences > Displays > Scaled
3. **Accessibility mode:**
   - Windows: Magnifier (Win + Plus)
   - macOS: Zoom (Option + Cmd + 8)

**Recommended Settings:**
| Device | OS Scaling | Browser Zoom | Result |
|--------|------------|--------------|--------|
| Desktop 24" 1920x1080 | 100% | 100% | Perfect |
| Desktop 27" 4K | 125-150% | 100% | Perfect |
| Laptop 14" FHD | 100-125% | 110% | Comfortable |
| Laptop 13" HD | 100% | 125% | Readable |

---

### 7. Print / PDF Export Issues

**Gejala:**
- Chart terpotong saat print
- Layout berantakan di PDF

**Solusi:**
1. **Print to PDF best practice:**
   - Ctrl+P / Cmd+P
   - Destination: Save as PDF
   - Layout: Portrait
   - Margins: Default atau Narrow
   - Options: ✅ Background graphics
2. **Print section tertentu:**
   - Select area yang mau di-print
   - Ctrl+P > Print Selection
3. **Export chart individual:**
   - Right-click gambar > Save image as
   - Save as PNG high-res
   - Insert ke Word/PowerPoint manual

**Alternative untuk Documentation:**
- Screenshot halaman (Win+Shift+S / Cmd+Shift+4)
- Paste ke Word document
- Combine multiple screenshot untuk full report

---

## 🌐 Browser Compatibility

### Fully Supported (Recommended)

| Browser | Version | Performance | Notes |
|---------|---------|-------------|-------|
| **Google Chrome** | 90+ | ⭐⭐⭐⭐⭐ | Best performance, recommended |
| **Mozilla Firefox** | 88+ | ⭐⭐⭐⭐⭐ | Excellent, privacy-focused |
| **Microsoft Edge** | 90+ | ⭐⭐⭐⭐⭐ | Chromium-based, fast |
| **Safari** | 14+ | ⭐⭐⭐⭐ | Good, macOS/iOS only |

### Partially Supported

| Browser | Version | Performance | Limitations |
|---------|---------|-------------|-------------|
| **Opera** | 75+ | ⭐⭐⭐⭐ | Minor CSS issues |
| **Brave** | 1.25+ | ⭐⭐⭐⭐ | May need disable shields |

### Not Supported

| Browser | Reason |
|---------|--------|
| **Internet Explorer 11** | Outdated JavaScript, CSS Grid tidak support |
| **Safari < 14** | Flexbox & Grid issues |
| **Chrome < 80** | Missing ES6 features |

**Recommendation:**
- **Update browser ke latest version** untuk best experience
- If corporate policy restrict update, use Chrome 90+ atau Edge 90+

---

## 📱 Mobile & Tablet Support

### Responsive Design
Website **fully responsive** untuk mobile & tablet.

**Breakpoints:**
- **Desktop:** > 1024px (optimal)
- **Tablet:** 768-1024px (good)
- **Mobile Large:** 480-768px (usable)
- **Mobile Small:** < 480px (basic support)

### Mobile Navigation Differences

**Desktop:**
```
[Dropdown on Hover]
```

**Mobile:**
```
☰ [Hamburger Menu]
```

**Tap Behavior:**
- Single tap: Open dropdown
- Tap outside: Close dropdown
- Tap menu item: Navigate

### Mobile Optimization Tips

**For Best Mobile Experience:**
1. **Portrait orientation** untuk halaman dengan banyak tabel
2. **Landscape orientation** untuk view chart/grafik
3. **Pinch-to-zoom** supported di semua chart
4. **Swipe left/right** untuk scroll table horizontal

**Limitations on Mobile:**
- Modal popup mungkin fullscreen (by design)
- Table dengan banyak kolom perlu horizontal scroll
- Lightbox tetap work, tapi gambar full screen

**Recommended Devices:**
- Tablet 10" atau lebih: ✅ Excellent
- Smartphone 6-7": ⚠️ Usable untuk view, tapi tidak untuk detail analysis
- Smartphone < 6": ❌ Terlalu kecil, gunakan desktop

---

## 🎓 Tips untuk User Berbeda

### Untuk Management/Leadership

**Recommended Flow:**
1. **Start:** Homepage untuk overview statistics
2. **Deep Dive:** Basic Analysis - pilih modul sesuai focus area
3. **Decision Making:** Advanced Analysis untuk strategic insight
4. **Documentation:** Screenshot insight kunci untuk meeting deck

**Time Allocation:**
- Homepage: 5 menit
- 2-3 Basic Analysis: 15-20 menit
- 1 Advanced Analysis: 10 menit
- **Total: 30-40 menit untuk comprehensive understanding**

**Focus Areas:**
- Key Takeaways di setiap halaman
- Insight boxes (highlight)
- Recommendation sections
- Success metrics & KPIs

---

### Untuk HSE Team

**Recommended Flow:**
1. **Daily:** Check Alur Penyelesaian untuk SLA monitoring
2. **Weekly:** Review Performa Tim & Area Risk
3. **Monthly:** Deep dive semua Basic Analysis + Deteksi Anomali
4. **Quarterly:** Advanced Analysis untuk strategic planning

**Power User Features:**
- Export data dari modal untuk pivot analysis
- Cross-reference antar modul (Area Risk ↔ Team Performance)
- Drill-down dengan lightbox untuk detail chart
- Bookmark critical pages untuk quick access

**Integration dengan Tools Lain:**
- Export data ke Excel untuk custom pivot
- Screenshot chart untuk weekly report
- Copy insight text untuk presentation slides

---

### Untuk Supervisor/PIC Lapangan

**Recommended Flow:**
1. **Focus:** Halaman yang relevan dengan area/shift Anda
2. **Monitor:** Performance metrics pribadi (PIC Performance)
3. **Improve:** Lihat best practice dari top performers

**Quick Access:**
1. Bookmark halaman favorit:
   - Performa Tim → Find your name in PIC table
   - Pola Shift → Check your shift pattern
   - Area Risk → Monitor your area status
2. Weekly check (10 menit):
   - Apakah area Anda masuk high-risk list?
   - Bagaimana performa vs PIC lain?
   - Ada anomali di shift Anda?

---

### Untuk IT Support

**Technical Reference:**

**Server Requirements:**
- Web server: Apache/Nginx (static hosting)
- No backend required (pure HTML/CSS/JS)
- No database connection needed

**File Structure:**
```
laporan/
├── index.html (Homepage)
├── 01-08_*.html (Analysis pages)
├── 09-15_*.html (Data cleansing pages)
├── assets/
│   ├── css/style.css (PLN theme)
│   ├── images/ (PNG charts ~500KB each)
│   └── data/ (CSV untuk modal)
└── README.md
```

**Common Issues:**
1. **Modal not working:** Check JavaScript load order
2. **Lightbox broken:** Verify image paths
3. **CSS not loading:** Check MIME type settings
4. **Slow load:** Optimize PNG images (compression)

**Debug Mode:**
- F12 > Console untuk JavaScript errors
- F12 > Network untuk load time analysis
- F12 > Elements untuk DOM inspection

---

## 📞 Support & Feedback

### Internal Support

**For Technical Issues:**
- IT Helpdesk UP Indramayu
- Email: it-support@upindramayu.pln.co.id (example)
- Ext: xxxx

**For Content/Data Issues:**
- HSE Department
- PIC: Bapak/Ibu [HSE Manager]

### External Support (Vendor)

**For Major Issues or Feature Request:**
- **PT JAPO TITIAN BAKAT**
- Email: japo@jaripotensi.com
- Telepon: 031-8547857
- PIC: Akhmad Guntar (Data Consultant)

**Response Time:**
- Minor issues: 1-2 hari kerja
- Major bugs: Same day (jika reported sebelum 15:00)
- Feature requests: Akan didiskusikan untuk next update

---

## 🔄 Update & Maintenance

### Update Schedule

**Data Update:**
- **Monthly:** Setiap awal bulan (data bulan sebelumnya)
- **Quarterly:** Deep analysis update
- **Annually:** Full review & methodology update

**System Maintenance:**
- **Planned downtime:** Announced 1 minggu sebelumnya
- **Duration:** Typically < 2 jam
- **Schedule:** Weekend malam (minimal disruption)

**Version History:**
- Current version: 1.0 (Desember 2025)
- Check footer untuk version info

---

## ✅ Best Practices Summary

### Do's ✅

1. **Update browser** ke latest version
2. **Use Chrome/Firefox/Edge** untuk best performance
3. **Enable JavaScript & cookies**
4. **Allow popups** untuk modal functionality
5. **Stable internet** minimum 5 Mbps
6. **Bookmark** halaman favorit
7. **Use lightbox** untuk detail analysis
8. **Export data** untuk offline analysis
9. **Report issues** segera ke IT support

### Don'ts ❌

1. **Jangan gunakan IE11** - tidak supported
2. **Jangan disable JavaScript** - website tidak functional
3. **Jangan multiple heavy tabs** bersamaan jika connection lambat
4. **Jangan click spam** jika website lag - tunggu load complete
5. **Jangan modify URL** manual - gunakan navigation menu

---

## 📋 Quick Reference Card

**Print & tempel di workspace untuk quick reference!**

```
╔══════════════════════════════════════════════════════════╗
║          WEBSITE IZAT K3 - QUICK REFERENCE              ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  🏠 URL: laporan/index.html                              ║
║                                                          ║
║  📂 STRUKTUR:                                            ║
║  ├─ Data Cleansing (7 halaman) - Metodologi             ║
║  ├─ Basic Analysis (5 halaman) - Daily ops              ║
║  └─ Advanced Analysis (3 halaman) - Strategic           ║
║                                                          ║
║  🎯 NAVIGASI:                                            ║
║  • Dropdown menu di header                               ║
║  • ESC = close modal/lightbox                            ║
║  • Click gambar = zoom lightbox                          ║
║  • "Lihat Data Lengkap" = full data modal                ║
║                                                          ║
║  ⚠️ TROUBLESHOOT:                                        ║
║  • Modal tidak muncul? → Refresh (F5)                    ║
║  • Load lambat? → Wait atau close tabs lain              ║
║  • Gambar blur? → Gunakan lightbox (click gambar)        ║
║                                                          ║
║  💻 BROWSER: Chrome 90+ / Firefox 88+ / Edge 90+        ║
║                                                          ║
║  📞 SUPPORT: IT Helpdesk Ext. xxxx                       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

**Terakhir diperbarui:** Desember 2025
**Versi:** 1.0
**Maintained by:** PT JAPO TITIAN BAKAT

---

**Selamat menggunakan Website Analisis Data IZAT K3!** 🎉
