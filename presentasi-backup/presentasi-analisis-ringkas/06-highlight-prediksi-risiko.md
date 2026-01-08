# Highlight Analisis: Model Prediksi Risiko
## Presentasi Ringkasan Eksekutif

---

## 📊 Overview
Machine Learning model (Random Forest) untuk prediksi probabilitas risiko berdasarkan zona, shift, hari, dan 10+ variabel lainnya.

---

## 🤖 Model Performance

| Metric | Value | Interpretation |
|--------|-------|----------------|
| **Accuracy** | 75-80% | Good predictive power |
| **Precision** | 70-75% | Dari prediksi high-risk, 70%+ akurat |
| **Recall** | 65-70% | Detect 65%+ actual high-risk scenarios |
| **Training Data** | 5.575 findings | Jan-Okt 2025 |

---

## 🔍 Feature Importance (Top 5)

1. **Zona** (30%) - MAIN_UNIT vs COAL_HANDLING vs SUPPORT
2. **Area** (25%) - BOILER vs TURBINE vs specific location
3. **Historical Unsafe Rate** (20%) - Past performance per zona
4. **Shift** (10%) - Pagi/Siang/Malam pattern
5. **Hari** (8%) - Weekday vs weekend effect

**Insight:** Geographic factors (zona, area) 2x lebih penting dari temporal factors (shift, hari).

---

## 💡 KEY TAKEAWAYS

### 1️⃣ **Predictive Scheduling Works**
Model dapat forecast high-risk scenarios dengan 75%+ accuracy. Ini enable **proactive** (bukan reactive) resource allocation.

### 2️⃣ **Top 3 High-Risk Scenarios Identified**
Berdasarkan model prediction:
1. **COAL_HANDLING + Shift Malam + Weekend** = 78% high-risk probability
2. **UNKNOWN zone + Any Shift + Senin** = 72% probability
3. **SUPPORT area + Shift Pagi + Senin** = 68% probability

### 3️⃣ **Location Matters Most**
Feature importance analysis shows zona & area contribute 55% to prediction - far more than time-based factors. **Where** matters more than **when**.

---

## 🎯 REKOMENDASI

### Operational Application
1. **Daily Briefing** - Check model prediction untuk shift hari ini, extra vigilance di zona predicted high-risk
2. **Weekly Planning** - Allocate HSE officer based on 7-day forecast
3. **Resource Optimization** - Reduce patrol frequency di consistently predicted low-risk zones

### Model Maintenance
4. **Quarterly Retrain** - Update model dengan data 3 bulan terbaru
5. **Performance Monitoring** - Track actual vs predicted, jika accuracy drop < 70% → investigate

---

## 🗣️ Narasi Presentasi

> "Machine learning model kita achieve 75-80% accuracy dalam memprediksi risiko. Artinya, 3 dari 4 prediction kita akurat. Model menunjukkan kombinasi COAL_HANDLING + Shift Malam + Weekend memiliki 78% probability high-risk - ini actionable insight untuk scheduling patrol."

> "Yang menarik: lokasi (zona+area) 2x lebih penting dari waktu (shift+hari) dalam menentukan risk level. This validates our Area Risk analysis - we need to focus on WHERE, not just WHEN."

---

**Prepared by:** PT JAPO TITIAN BAKAT
**Date:** Desember 2025
