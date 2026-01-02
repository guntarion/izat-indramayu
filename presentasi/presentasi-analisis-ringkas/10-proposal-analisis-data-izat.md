# PROPOSAL
## Jasa Analisis Data Aplikasi IZAT
### UP Indramayu - PLN Nusantara Power

---

**Diajukan oleh:**
**PT JAPO TITIAN BAKAT**
Jl. Brigjen Katamso No.17 Waru Sidoarjo
Telepon: 031-8547857 | Email: japo@jaripotensi.com

---

## 1. LATAR BELAKANG

Aplikasi **IZAT (Zero Accident Assistant)** telah berhasil mengumpulkan ribuan data temuan K3 dari seluruh personel UP Indramayu. Data ini mencakup laporan Positive Observation, Unsafe Condition, Unsafe Action, dan Near Miss yang merupakan **leading indicator** kritis untuk pencegahan kecelakaan kerja.

Namun, tantangan yang dihadapi saat ini adalah:
- **Kualitas data yang bervariasi** – Banyak typo, inkonsistensi penulisan, dan deskripsi yang kurang informatif
- **Data yang under-utilized** – Potensi analisis mendalam belum dimaksimalkan
- **Insight tersembunyi** – Pola-pola risiko dan performa tim belum tergali secara sistematis
- **Akses informasi terbatas** – Belum ada platform terpusat untuk mengakses hasil analisis

Untuk menjawab tantangan ini, diperlukan **proses pembersihan data yang komprehensif**, **analisis mendalam**, dan **platform website** yang dapat menyajikan insight secara interaktif kepada seluruh stakeholder.

---

## 2. TUJUAN PROYEK

1. Meningkatkan kualitas data IZAT melalui proses cleansing dan standardisasi
2. Menghasilkan analisis deskriptif yang komprehensif tentang pola risiko dan performa
3. Membangun model prediktif dan sistem rekomendasi berbasis AI/ML
4. Menyediakan interpretasi dan rekomendasi strategis berbasis AI
5. Mengembangkan website interaktif untuk menampilkan data dan hasil analisis
6. Menyediakan layanan deployment dan hosting website selama 6 bulan

---

## 3. KONSULTAN PELAKSANA

### Akhmad Guntar
**Data Scientist & Analytics Consultant**

Akhmad Guntar adalah praktisi data science dengan pengalaman dalam:
- **Data Analytics & Business Intelligence** – Pengolahan dan visualisasi data untuk pengambilan keputusan
- **Machine Learning & AI** – Pengembangan model prediktif dan sistem rekomendasi
- **Python & Jupyter Ecosystem** – Pandas, Scikit-learn, Matplotlib, Seaborn
- **Web Development** – Pembuatan dashboard dan website interaktif
- **Cloud Deployment** – Hosting dan maintenance aplikasi web

Akhmad Guntar akan bertanggung jawab penuh atas seluruh tahapan teknis proyek ini, dari pengumpulan requirement hingga deployment dan maintenance website.

---

## 4. METODOLOGI

Proyek ini menggunakan pendekatan **CRISP-DM (Cross-Industry Standard Process for Data Mining)** yang terdiri dari:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│   │   Business   │───>│    Data      │───>│    Data      │     │
│   │Understanding │    │Understanding │    │ Preparation  │     │
│   └──────────────┘    └──────────────┘    └──────────────┘     │
│          │                                       │              │
│          │         ┌──────────────┐              │              │
│          │         │  Deployment  │              │              │
│          │         │  & Hosting   │              │              │
│          │         └──────────────┘              │              │
│          │                │                      │              │
│          │                │                      ▼              │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│   │  Evaluation  │<───│   Modeling   │<───│   Analysis   │     │
│   │  & AI Review │    │   (ML/AI)    │    │              │     │
│   └──────────────┘    └──────────────┘    └──────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. LINGKUP PEKERJAAN

### BAGIAN A: DATA CLEANSING & STANDARDIZATION

**Durasi:** Minggu 1-2

| No | Aktivitas | Output |
|----|-----------|--------|
| A.1 | **Fuzzy Matching untuk Typo Correction** – Identifikasi dan koreksi typo pada field judul, kondisi, dan rekomendasi | Dataset dengan kolom `_clean` yang sudah terstandarisasi |
| A.2 | **Standardisasi Lokasi** – Parsing komponen lokasi (area, unit number, lantai) dan kategorisasi zona | Kolom `lokasi_zona`, `lokasi_area`, `lokasi_unit_number`, `lokasi_lantai` |
| A.3 | **Standardisasi Perusahaan** – Normalisasi nama perusahaan dan kategorisasi vendor | Kolom `perusahaan_clean`, `perusahaan_kategori` |
| A.4 | **Standardisasi Tanggal/Waktu** – Parsing format tanggal dan kalkulasi waktu turunan | Kolom `resolution_days`, `shift`, `day_of_week`, `month_year` |

**Deliverables Bagian A:**
- 4 Jupyter Notebooks (.ipynb) untuk setiap tahap cleansing
- Dataset hasil cleansing dalam format CSV
- Dokumentasi proses dan hasil cleansing

---

### BAGIAN B: ANALISIS DATA INTERAKTIF

**Durasi:** Minggu 3-4

| No | Aktivitas | Output |
|----|-----------|--------|
| B.1 | **Analisis Risiko Area** – Risk heatmap per zona, identifikasi hotspot, trend per lokasi | Visualisasi heatmap, ranking area, trend chart |
| B.2 | **Analisis Performa Tim** – Leaderboard reporter, PIC performance, vendor comparison | Ranking table, performance metrics, comparison chart |
| B.3 | **Analisis Workflow Resolusi** – Funnel analysis, bottleneck identification, SLA compliance | Funnel diagram, backlog report, SLA dashboard |
| B.4 | **Analisis Pola Shift & Waktu** – Pattern by shift, day of week, seasonality | Pattern visualization, correlation analysis |
| B.5 | **Tracking Aset & Equipment** – Asset-linked findings, frequency analysis | Asset health summary, equipment issue log |

**Deliverables Bagian B:**
- 5 Jupyter Notebooks (.ipynb) untuk setiap analisis
- Visualisasi interaktif untuk setiap modul analisis
- File CSV hasil agregasi dan summary statistics

---

### BAGIAN C: ANALISIS MACHINE LEARNING

**Durasi:** Minggu 5

| No | Aktivitas | Output |
|----|-----------|--------|
| C.1 | **Risk Prediction Model** – Model machine learning untuk prediksi probabilitas risiko per area/shift menggunakan Random Forest | Model terlatih, feature importance, prediction output |
| C.2 | **Smart Recommendation Engine** – Sistem rekomendasi tindakan berbasis similarity dan knowledge base historis | Recommendation logic, best practices database |
| C.3 | **Anomaly Detection** – Deteksi pola reporting tidak biasa, gaming detection menggunakan Isolation Forest | Anomaly flags, alert rules, monitoring insight |

**Deliverables Bagian C:**
- 3 Jupyter Notebooks (.ipynb) untuk setiap model/sistem
- Model yang dapat digunakan kembali
- Dokumentasi metodologi dan interpretasi hasil

---

### BAGIAN D: INTERPRETASI & REKOMENDASI AI

**Durasi:** Minggu 5-6

| No | Aktivitas | Output |
|----|-----------|--------|
| D.1 | **AI-Powered Insight Generation** – Penggunaan Large Language Model untuk menginterpretasi hasil analisis | Narrative insight untuk setiap modul |
| D.2 | **Strategic Recommendation** – Rekomendasi actionable berbasis data untuk manajemen | Dokumen rekomendasi strategis |
| D.3 | **Executive Summary** – Ringkasan eksekutif dengan highlight temuan utama | One-pager summary untuk leadership |

**Deliverables Bagian D:**
- Insight narrative terintegrasi di website
- Dokumen rekomendasi strategis
- Executive summary presentation

---

### BAGIAN E: PENGEMBANGAN WEBSITE

**Durasi:** Minggu 6-7

| No | Aktivitas | Output |
|----|-----------|--------|
| E.1 | **Design & Development** – Pengembangan website dengan tema PLN dan navigasi intuitif | Website responsif dengan HTML/CSS/JavaScript |
| E.2 | **Dashboard Integration** – Integrasi seluruh visualisasi dan analisis ke dalam website | Dashboard interaktif multi-halaman |
| E.3 | **Data Exploration Features** – Fitur untuk eksplorasi data dan drill-down | Modal popup untuk detail data |
| E.4 | **Mobile Responsiveness** – Optimasi tampilan untuk akses via mobile | Layout responsif |

**Deliverables Bagian E:**
- Website lengkap dengan 8+ halaman analisis
- Source code HTML/CSS/JavaScript
- Aset grafis dan data pendukung

**Struktur Website:**
```
├── index.html              (Landing page dengan ringkasan)
├── 01_area_risk.html       (Analisis Risiko Area)
├── 02_team_performance.html (Performa Tim)
├── 03_resolution_workflow.html (Workflow Resolusi)
├── 04_shift_analysis.html  (Analisis Shift)
├── 05_asset_tracking.html  (Tracking Aset)
├── 06_risk_prediction.html (Prediksi Risiko ML)
├── 07_smart_recommendation.html (Rekomendasi Cerdas)
├── 08_anomaly_detection.html (Deteksi Anomali)
└── assets/
    ├── css/style.css       (PLN Theme)
    ├── js/                  (Interactive scripts)
    ├── images/              (Visualisasi & grafik)
    └── data/                (CSV untuk interaktivitas)
```

---

### BAGIAN F: DEPLOYMENT & HOSTING

**Durasi:** Minggu 7 + 6 bulan maintenance

| No | Aktivitas | Output |
|----|-----------|--------|
| F.1 | **Domain & Hosting Setup** – Konfigurasi hosting dan domain (subdomain/custom) | Website online dan accessible |
| F.2 | **SSL Certificate** – Pemasangan sertifikat keamanan HTTPS | Koneksi aman |
| F.3 | **Performance Optimization** – Optimasi kecepatan loading | Load time < 3 detik |
| F.4 | **6 Bulan Hosting** – Layanan hosting dan maintenance selama 6 bulan | Uptime guarantee 99% |
| F.5 | **Technical Support** – Dukungan teknis untuk masalah yang muncul | Response dalam 24 jam kerja |

**Deliverables Bagian F:**
- Website live dan accessible
- SSL certificate aktif
- 6 bulan layanan hosting
- Technical support

---

## 6. DELIVERABLES LENGKAP

### 6.1 Source Code

| Tipe | Jumlah | Keterangan |
|------|--------|------------|
| Jupyter Notebooks (.ipynb) | 12+ files | Fully documented dengan commentary |
| Python utility scripts | Sesuai kebutuhan | Helper functions, pipeline scripts |
| HTML/CSS/JavaScript | Complete set | Website source code |

### 6.2 Website & Platform

| Tipe | Keterangan |
|------|------------|
| Website Interaktif | 8+ halaman dengan visualisasi dan insight |
| Dashboard Analytics | Grafik interaktif dengan JavaScript |
| Data Explorer | Modal popup untuk drill-down data |
| Mobile Responsive | Optimasi untuk akses mobile |

### 6.3 Data Output

| Tipe | Format | Keterangan |
|------|--------|------------|
| Cleaned Dataset | CSV | Data hasil cleansing lengkap (75+ kolom) |
| Aggregated Data | CSV | Data ringkasan per dimensi analisis |
| Model Artifacts | Sesuai format | Model ML yang dapat digunakan kembali |

### 6.4 Dokumentasi & Insight

| Tipe | Keterangan |
|------|------------|
| AI-Generated Insights | Interpretasi narratif untuk setiap analisis |
| Strategic Recommendations | Rekomendasi actionable untuk manajemen |
| Technical Documentation | Dokumentasi metodologi dan penggunaan |

---

## 7. TIMELINE

| Minggu | Aktivitas | Milestone |
|--------|-----------|-----------|
| **1** | Kick-off, Data Collection, Fuzzy Matching | Data typo-corrected |
| **2** | Standardisasi Lokasi, Perusahaan, Tanggal | Dataset bersih lengkap |
| **3** | Analisis Risiko Area, Performa Tim | Analisis Part 1 selesai |
| **4** | Analisis Workflow, Shift, Asset | Analisis Part 2 selesai |
| **5** | Machine Learning Models, AI Interpretation | Model & Insight selesai |
| **6** | Website Development | Website siap |
| **7** | Deployment, Testing, Handover | **GO LIVE** |
| **8-32** | Hosting & Maintenance (6 bulan) | Ongoing support |

**Total Durasi Pengembangan: 7 Minggu**
**Layanan Hosting: 6 Bulan**

---

## 8. INVESTASI

### Rincian Biaya

| No | Bagian | Deskripsi | Biaya |
|----|--------|-----------|-------|
| 1 | **A** | Data Cleansing & Standardization | Rp 2.500.000,- |
| 2 | **B** | Analisis Data Interaktif (5 modul) | Rp 3.500.000,- |
| 3 | **C** | Analisis Machine Learning (3 model) | Rp 3.000.000,- |
| 4 | **D** | Interpretasi & Rekomendasi AI | Rp 1.500.000,- |
| 5 | **E** | Pengembangan Website | Rp 2.500.000,- |
| 6 | **F** | Deployment & Hosting 6 Bulan | Rp 2.000.000,- |
| | | **TOTAL** | **Rp 15.000.000,-** |

### Catatan:
- Harga sudah termasuk seluruh deliverables sebagaimana disebutkan di atas
- Harga sudah termasuk pajak yang berlaku
- Pembayaran dapat dilakukan secara bertahap:
  - **50%** di muka (Rp 7.500.000)
  - **50%** saat handover dan go-live (Rp 7.500.000)

---

## 9. SYARAT DAN KETENTUAN

1. **Data Input:** Klien menyediakan file data IZAT dalam format CSV/Excel
2. **Komunikasi:** Progress update mingguan via email/meeting virtual
3. **Revisi:** Maksimal 2 kali revisi minor setelah penyerahan deliverables
4. **Hak Cipta:** Seluruh deliverables menjadi milik klien setelah pembayaran lunas
5. **Kerahasiaan:** Konsultan menjaga kerahasiaan data klien
6. **Hosting:** Layanan hosting berlaku 6 bulan sejak go-live, perpanjangan dengan biaya terpisah
7. **Domain:** Jika menggunakan custom domain, biaya domain ditanggung klien

---

## 10. PENUTUP

Data IZAT adalah aset strategis yang berpotensi memberikan insight mendalam untuk mendukung budaya Zero Accident di UP Indramayu. Dengan kombinasi **data cleansing yang teliti**, **analisis machine learning yang canggih**, **interpretasi AI yang informatif**, dan **platform website yang accessible**, kami yakin proyek ini akan memberikan nilai signifikan bagi pengelolaan K3.

Kami berharap dapat bekerja sama dengan UP Indramayu dalam proyek yang bermakna ini.

---

**PT JAPO TITIAN BAKAT**

Surabaya, 30 Desember 2024

&nbsp;

**Ameilia Hernawati**
*Direktur*

---

*Proposal ini berlaku selama 30 hari sejak tanggal penerbitan.*
