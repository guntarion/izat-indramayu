# Pipeline Pembersihan Data IZAT K3
## 7 Tahapan Transformasi Data Mentah ke Analisis Berkualitas

**Periode:** Januari - Oktober 2025 | **Input:** 5.575 temuan | **Output:** 75 kolom terstruktur

---

### Overview Pipeline Data Cleansing

| Step | Proses | Input Kolom | Output Kolom | Kolom Baru |
|------|--------|-------------|--------------|------------|
| **1** | Koreksi Typo (Fuzzy Matching) | 31 | 37 | 6 kolom `_clean` |
| **2** | Standardisasi Lokasi | 37 | 41 | 4 kolom lokasi terstruktur |
| **3** | Standardisasi Perusahaan | 41 | 44 | 3 kolom perusahaan standar |
| **4** | Standardisasi Tanggal | 44 | 58 | 14 kolom waktu & resolusi |
| **5** | Risk Severity & Issue Category | 58 | 61 | 3 kolom risiko |
| **6** | Quality & Workload Metrics | 61 | 66 | 5 kolom performa |
| **7** | Tren & Komparasi | 66 | 75 | 9 kolom benchmark |

> **Transformasi:** Dari 31 kolom mentah → 75 kolom analitis (141% peningkatan struktur data)

---

## STEP 1: Koreksi Typo dengan Fuzzy Matching

### Masalah Data Mentah

**Contoh Variasi Typo yang Ditemukan:**
- **APAR:** apar, appar, aper, aphar, ready, redy, rady (12+ variasi)
- **Baik:** baik, baikk, bik, bagus, okay, oke, ok (8+ variasi)
- **Bocor:** bocor, bocir, bocora, leak, retak (6+ variasi)

**Dampak:**
- Analisis frequency tidak akurat (APAR vs apar dihitung terpisah)
- Filter & search tidak efektif
- Dashboard visualization tidak konsisten

---

### Metode Fuzzy Matching

![Gambar](assets/images/step1_fuzzy_matching_example.png) (jika ada)

**Algoritma:** RapidFuzz library dengan Levenshtein distance

**Field yang Dikoreksi:**
- `judul` → `judul_clean` (contoh: "apar russk" → "apar rusak")
- `kondisi` → `kondisi_clean` (contoh: "bocor" → "bocor")
- `rekomendasi` → `rekomendasi_clean` (contoh: "segera perbaiki" → "segera perbaiki")

**Threshold:** Similarity score > 80% untuk auto-correction

---

### Hasil Koreksi Typo

| Metrik | Sebelum | Sesudah | Improvement |
|--------|---------|---------|-------------|
| **Unique variants "APAR"** | 12 variasi | 1 standar | -92% |
| **Unique variants "baik"** | 8 variasi | 1 standar | -88% |
| **Total unique words** | 3.247 kata | 1.892 kata | -42% |
| **Data quality score** | 2,1 / 5 | 3,8 / 5 | +81% |

> **Impact:** Analisis frekuensi kata kunci menjadi 42% lebih akurat. Kata "APAR" yang sebelumnya tersebar di 12 variasi, kini terkonsolidasi untuk analisis yang lebih presisi.

---

## STEP 2: Standardisasi Lokasi

### Struktur Lokasi Terstandarisasi

**Parsing:** `nama_lokasi` → 4 komponen terstruktur

| Komponen | Contoh Value | Jumlah Unique |
|----------|--------------|---------------|
| **lokasi_zona** | MAIN_UNIT, COAL_HANDLING, UTILITY, SUPPORT, UNKNOWN | 5 zona |
| **lokasi_area** | BOILER, TURBINE, COAL YARD, POS, ADMIN | 46 area |
| **lokasi_unit_number** | #1, #2, #3 | 3 unit |
| **lokasi_lantai** | LANTAI 1, LANTAI 2, ... LANTAI 7 | 7 lantai |

**Contoh Parsing:**
- Input: "BOILER #1 LANTAI 3"
- Output: Zona=MAIN_UNIT | Area=BOILER | Unit=#1 | Lantai=LANTAI 3

---

### Distribusi Zona Operasional

![Gambar](assets/images/step2_zona_distribution.png)

| Zona | Total Temuan | % Total | Karakteristik Utama |
|------|--------------|---------|---------------------|
| **MAIN_UNIT** | 2.616 | 47% | Boiler, Turbine, Generator - critical operations |
| **SUPPORT** | 1.708 | 31% | Admin, POS, Workshop, Medical - facilities |
| **COAL_HANDLING** | 580 | 10% | Coal Yard, Conveyor, Crusher - material handling |
| **UTILITY** | 602 | 11% | WTP, WWTP, CWP, Fire Station - supporting utilities |
| **UNKNOWN** | 69 | 1% | Lokasi tidak dapat diparsing - need review |

> **Insight:** MAIN_UNIT mendominasi 47% temuan, mengindikasikan focus inspeksi di area operasional kritis. UNKNOWN zone hanya 1% menunjukkan data quality baik.

---

### Mapping Zona ke Area Kritikal

![Gambar](assets/images/step2_area_mapping.png)

**MAIN_UNIT Areas (High Risk):**
- BOILER: 1.725 temuan - highest volume
- TURBINE: 562 temuan - critical equipment

**COAL_HANDLING Areas (Mechanical Risk):**
- JETTY: 233 temuan - loading/unloading operations
- CONVEYOR: 26 temuan - material transfer

**SUPPORT Areas (Infrastructure):**
- POS Security: 515 temuan - patrol findings
- ADMIN: 550 temuan - office facilities

---

## STEP 3: Standardisasi Perusahaan

### Normalisasi Nama Vendor

**Masalah:** 1 perusahaan punya 5-10 variasi nama
- PT RBU: "rbu", "PT RBU", "RBU", "PT. RBU", "RAMAYANA BANDAR UTAMA"
- PT PLN NP Services: "PLN NP", "Services", "PT PLN NP Services", "PLN SERVICES"

**Solusi:** Fuzzy matching + manual mapping → nama standar

**Output Kolom:**
- `perusahaan_clean` - Nama standar formal
- `perusahaan_kategori` - PLN, VENDOR, OTHER

---

### Distribusi Perusahaan

| Kategori | Perusahaan | Total Temuan | % Total | Reporter Aktif |
|----------|------------|--------------|---------|----------------|
| **VENDOR** | PT PLN NP Services | 1.836 | 33% | 278 |
| **VENDOR** | PT RBU | 1.000 | 18% | 152 |
| **VENDOR** | PT Garda Bangsa (Security) | 809 | 15% | 84 |
| **VENDOR** | PT MKP | 725 | 13% | 105 |
| **PLN** | PT PLN Nusantara Power (Internal) | 165 | 3% | 33 |
| **OTHER** | 4 perusahaan lainnya | 1.040 | 18% | 171 |

> **Takeaway:** Vendor mendominasi 82% reporting volume. PT PLN NP Services memiliki engagement tertinggi dengan 278 reporter aktif.

---

## STEP 4: Standardisasi Tanggal & Waktu

### Parsing Tanggal & Waktu

**Input Format Inconsistent:**
- "16/01/25"
- "16/01/25 15.07"
- "2025-01-16"

**Output Standardized:**
- `tanggal_parsed` - YYYY-MM-DD format
- `created_parsed` - Full datetime dengan timezone
- `close_parsed` - Datetime penutupan

**Kolom Turunan Waktu (11 kolom baru):**
- `year`, `month`, `quarter` - Temporal grouping
- `day_of_week` - Senin-Minggu
- `hour_of_day` - 0-23
- `shift` - PAGI (06-14), SIANG (14-22), MALAM (22-06)

---

### Metrik Resolusi Temuan

**Kolom Kunci:** `resolution_days` = `close_at` - `created_at`

| Kategori Waktu | Range (Hari) | Jumlah Temuan | % Total | Avg Resolution |
|----------------|--------------|---------------|---------|----------------|
| **Same Day** | 0 hari | 128 | 2,3% | Express response |
| **< 7 Hari** | 1-7 hari | 421 | 7,6% | Fast resolution |
| **7-30 Hari** | 8-30 hari | 1.247 | 22,5% | Standard |
| **1-6 Bulan** | 31-180 hari | 2.891 | 52,1% | Slow |
| **> 6 Bulan** | 181+ hari | 844 | 15,5% | Very slow |

> **Critical Finding:** 67,6% temuan butuh lebih dari 1 bulan untuk diselesaikan. Rata-rata resolution time: 220 hari - jauh dari target SLA 14 hari untuk LOW risk.

---

### Pattern Shift & Hari

![Gambar](assets/images/step4_shift_pattern.png)

**Shift Distribution:**
- **Shift PAGI:** 2.833 temuan (51%) - dominan
- **Shift SIANG:** 1.589 temuan (28%) - detection rate tertinggi 27,6%
- **Shift MALAM:** 1.153 temuan (21%) - underutilized

**Day of Week Pattern:**
- **Senin:** 1.454 temuan (26%) - highest volume tapi detection rate rendah 13,5%
- **Rabu & Kamis:** Detection rate 30%+ - optimal awareness
- **Minggu:** 658 temuan tapi detection rate terendah 9,3%

> **Actionable Insight:** Schedule critical inspections di Rabu-Kamis shift Siang untuk maximize detection effectiveness.

---

## STEP 5: Risk Severity & Issue Category

### Scoring Risiko Otomatis

**Algoritma Risk Score (0-6+):**
1. **Base score dari kategori temuan:**
   - Near Miss: +3
   - Unsafe Action: +2
   - Unsafe Condition: +1,5
   - Positive: +0,5

2. **+Keyword severity dalam deskripsi:**
   - "bocor", "api", "patah", "retak": +1 each
   - "rusak", "mati", "hilang": +0,5 each

3. **+Lokasi high-risk:**
   - Boiler, Turbine, Coal Yard: +1
   - UNKNOWN zone: +0,5

---

### Distribusi Risk Severity

![Gambar](assets/images/step5_risk_severity_distribution.png)

| Risk Severity | Risk Score Range | Jumlah | % Total | SLA Target | Prioritas |
|---------------|------------------|--------|---------|------------|-----------|
| **CRITICAL** | 5,0+ | 107 | 1,9% | 1 hari | 🔴 Immediate |
| **HIGH** | 3,0-4,99 | 255 | 4,6% | 2 hari | 🔴 Urgent |
| **MEDIUM** | 2,0-2,99 | 1.215 | 21,8% | 5 hari | 🟡 High Priority |
| **LOW** | < 2,0 | 3.998 | 71,7% | 14 hari | 🟢 Standard |

> **Alert:** 6,5% temuan (362 findings) dikategorikan HIGH/CRITICAL memerlukan response cepat, tapi actual SLA compliance 0% - tidak ada satu pun yang diselesaikan on-time!

---

### Issue Category Classification

**8 Kategori Issue Otomatis:**

| Issue Category | % Total | Top 3 Keywords | Zona Dominan |
|----------------|---------|----------------|---------------|
| **FIRE_SAFETY** | 22,4% | apar, hydrant, fire alarm | MAIN_UNIT, COAL_HANDLING |
| **STRUCTURAL** | 12,0% | retak, bocor, rusak | SUPPORT |
| **HOUSEKEEPING** | 11,0% | kotor, berantakan, sampah | All zones |
| **ELECTRICAL** | 7,7% | kabel, panel, listrik | MAIN_UNIT |
| **MECHANICAL** | 8,5% | pump, motor, bearing | COAL_HANDLING |
| **PPE_SAFETY** | 6,2% | helm, safety shoes, gloves | All zones |
| **PATROL_ROUTINE** | 24,3% | ready, aman, normal | All zones (Positive findings) |
| **OTHER** | 7,9% | Tidak terkategori | Mixed |

> **Strategic Insight:** 22,4% temuan terkait Fire Safety - perlu audit menyeluruh APAR dan hydrant di seluruh area operasional.

---

## STEP 6: Quality & Workload Metrics

### Report Quality Scoring

**Skor Kualitas Laporan (0-5):**
- **Judul:** Ada & informatif? (+1)
- **Kondisi:** Deskripsi detail? (+1,5)
- **Rekomendasi:** Actionable suggestion? (+1,5)
- **Foto:** Attachment ada? (+1)

**Grade Distribution:**

| Quality Grade | Score Range | Jumlah | % Total | Karakteristik |
|---------------|-------------|--------|---------|---------------|
| **A (Excellent)** | 4,5-5,0 | 892 | 16% | Lengkap, detail, actionable |
| **B (Good)** | 3,5-4,49 | 1.671 | 30% | Informasi cukup |
| **C (Fair)** | 2,5-3,49 | 2.013 | 36% | Basic info only |
| **D (Poor)** | < 2,5 | 999 | 18% | Incomplete/vague |

> **Quality Issue:** 54% laporan grade C atau lebih rendah - perlu training untuk improve completeness & clarity.

---

### PIC Workload Analysis

![Gambar](assets/images/step6_pic_workload.png)

**Kolom Metrik PIC:**
- `pic_total_findings` - Total temuan assigned
- `pic_avg_resolution_days` - Efisiensi resolusi
- `pic_workload_category` - LOW/NORMAL/HIGH/OVERLOADED

**Top 4 PIC by Workload:**

| PIC | Total Temuan | % dari Total | Avg Resolution | Workload Status |
|-----|--------------|--------------|----------------|-----------------|
| **Andrian Denofan** | 2.613 | 47% | 110 hari | 🔴 **OVERLOADED** |
| **Taufiq Ismail** | 951 | 17% | 188 hari | 🟡 HIGH |
| **Asep Setyawan** | 696 | 12% | 348 hari | 🟡 HIGH |
| **Dovan Pahalatua** | 553 | 10% | 234 hari | 🟡 HIGH |
| **12 PIC Lainnya** | 762 | 14% | Varied | 🟢 NORMAL |

> **CRITICAL:** Andrian Denofan menangani 47% workload sendirian - 2,7x beban rata-rata PIC. Urgent redistribusi diperlukan untuk prevent burnout.

---

## STEP 7: Tren & Komparasi

### Time-Series Analysis

**Kolom Temporal Benchmark:**
- `year_month` - Periode YYYY-MM untuk grouping
- `month_findings_count` - Volume per bulan
- `month_unsafe_rate` - % unsafe per bulan
- `mom_change_pct` - Month-over-Month change
- `mom_trend` - UP/DOWN/STABLE indicator

**Tren Bulanan 2025:**

| Bulan | Total Temuan | Unsafe Rate | MoM Change | Trend |
|-------|--------------|-------------|------------|-------|
| Januari | 758 | 15,8% | - | Baseline |
| Februari | 319 | 18,2% | -58% | ⬇️ DROP |
| Maret | 691 | 22,1% | +117% | ⬆️ SURGE |
| April | 317 | 19,6% | -54% | ⬇️ DROP |
| Mei | 803 | 24,3% | +153% | ⬆️ SURGE |
| Juni | 322 | 20,5% | -60% | ⬇️ DROP |
| Juli | 794 | 23,7% | +147% | ⬆️ SURGE |
| Agustus | 519 | 21,1% | -35% | ⬇️ Moderate |
| September | 594 | 19,3% | +14% | ➡️ STABLE |
| Oktober | 458 | 16,8% | -23% | ⬇️ Moderate |

> **Pattern:** Fluktuasi tinggi volume temuan (variance 58-153%) mengindikasikan activity cyclical - kemungkinan terkait shutdown maintenance schedule.

---

### Zona Benchmarking

**Kolom Komparasi per Zona:**
- `zona_avg_quality` - Benchmark quality score zona
- `zona_avg_risk` - Baseline risk score zona
- `zona_avg_resolution` - Standard resolution time zona
- `quality_vs_zona`, `risk_vs_zona`, `resolution_vs_zona` - Individual performance vs zona average

**Zona Performance Benchmark:**

| Zona | Avg Quality | Avg Risk Score | Avg Resolution (Hari) | Best Practice Area |
|------|-------------|----------------|----------------------|-------------------|
| **MAIN_UNIT** | 2,35 | 1,37 | 149 | Inspection intensity |
| **COAL_HANDLING** | 2,48 | 1,48 | 201 | Mechanical awareness |
| **SUPPORT** | 2,19 | 1,16 | 267 | Need improvement |
| **UTILITY** | 2,52 | 0,92 | 184 | ✅ Best practice model |
| **UNKNOWN** | 2,31 | 1,75 | 287 | Categorization needed |

> **Best Practice:** UTILITY zone memiliki lowest risk score (0,92) dan highest quality (2,52) - model untuk replicate ke zona lain.

---

### Cross-Category Correlation

![Gambar](assets/images/step7_correlation_heatmap.png)

**Key Correlations Discovered:**
- **Quality Score ↔ Detection Rate:** +0,67 correlation - higher quality reports = more actionable findings
- **PIC Workload ↔ Resolution Time:** -0,31 correlation - surprisingly, overloaded PIC (Andrian) faster than others
- **Zona Risk ↔ Close Rate:** -0,12 weak correlation - high-risk zones not necessarily slower to close

> **Data-Driven Insight:** Quality training untuk reporters dapat improve detection rate significantly (67% correlation). Focus pada completeness & detail deskripsi.

---

### Summary: Data Transformation Impact

**Sebelum Cleansing:**
- 31 kolom mentah, banyak typo & inkonsistensi
- Analisis manual, time-consuming
- Insight terbatas, subjective interpretation

**Sesudah Cleansing:**
- 75 kolom terstruktur & analytics-ready
- Automated scoring & categorization
- Dashboard interaktif dengan 15+ halaman analisis
- Predictive models (ML) enabled

**Business Value:**
| Aspek | Improvement |
|-------|-------------|
| **Data Quality** | +81% (from 2,1 to 3,8 score) |
| **Analysis Speed** | 10x faster (automated vs manual) |
| **Insight Depth** | 3 categories: Basic, Advanced, AI/ML |
| **Decision Support** | Real-time dashboard, actionable metrics |

> **ROI:** 7 minggu data cleansing investment enable ongoing monthly insights untuk strategic K3 management. One-time effort, continuous value.

---

**Pipeline Completion:** 7 tahap selesai dalam 7 minggu | **Quality Assurance:** Manual validation 10% sample per step | **Reproducible:** Jupyter notebooks dokumentasi lengkap untuk future updates

---

**Prepared by:** PT JAPO TITIAN BAKAT - Akhmad Guntar | **Date:** Desember 2025 | **Version:** 1.0
