# IZAT K3 Analytics Poster - Implementation Plan

## Project Overview
**Goal:** Create a comprehensive A3-style poster HTML page showcasing all IZAT K3 analysis results for UP Indramayu.

**Design Philosophy:**
- Single HTML page that looks like a professional infographic poster
- Print-ready dimensions (A3: ~297mm x 420mm vertical)
- Static content (no animations) for image capture
- PLN corporate theme colors
- Modular sections assembled into one cohesive design

---

## Poster Dimensions & Layout

### Target Dimensions
- **Width:** 297mm / ~1123px @96dpi
- **Height:** 420mm / ~1587px @96dpi (or longer, scrollable)
- **For web display:** 1200px width, auto height (poster-style scrolling)

### Grid Layout (12-column grid)
```
+-------------------------------------------+
|              HEADER (Hero)                | 100px
|  Title, Logo, Key Stats (5.575 findings)  |
+-------------------------------------------+
|         PRELIMINARY PROCESSING            |
|        [00_data_cleansing - 2col]         | ~300px
+-------------------------------------------+
|           BASIC ANALYSIS (5 topics)       |
| [01_area_risk][02_team][03_resolution]    | ~300px
| [04_shift_patterns][05_asset_tracking]    | ~300px
+-------------------------------------------+
|          ADVANCED ANALYSIS (3 topics)     |
| [06_risk_pred][07_smart_rec][08_anomaly]  | ~250px
+-------------------------------------------+
|              FOOTER                       | 80px
|   Prepared by, Date, Logo, Contact        |
+-------------------------------------------+
```

---

## Color Palette (PLN Theme)

```css
:root {
  --pln-dark-blue: #035B71;
  --pln-primary-blue: #00A2B9;
  --pln-green: #35B971;
  --pln-light-blue: #00AFF0;
  --pln-yellow: #FFFF00;
  --bg-light: #f8fafc;
  --text-dark: #1e293b;
  --text-muted: #64748b;
}
```

---

## Section Content Summary

### Section 00: Data Cleansing Pipeline
**Key Points:**
- 7 transformation steps
- 31 raw columns → 75 analytical columns
- +81% data quality improvement
- Fuzzy matching, standardization

**Visual:** Pipeline diagram / step summary

**Image:** None specific, use icons or diagram

---

### Section 01: Area Risk Analysis
**Key Points:**
- 5 operational zones analyzed
- UNKNOWN zone: highest risk (1.75)
- MAIN_UNIT: 47% volume (2,616 findings)
- 7 priority areas identified

**Visual:** Zone distribution, risk heatmap

**Images:**
- II.1.1_zona_distribution.png
- II.1.1_risk_heatmap_zona.png

---

### Section 02: Team Performance
**Key Points:**
- 652 active reporters from 15 companies
- Top reporter: Suparman (34 reports)
- PIC Andrian: 47% workload (CRITICAL!)
- 100% close rate all PICs

**Visual:** Leaderboard, workload pie

**Images:**
- II.2.1_reporter_leaderboard_combined.png
- II.2.2_pic_workload_overview.png

---

### Section 03: Resolution Workflow
**Key Points:**
- 99.2% close rate (excellent)
- 0% SLA compliance for CRITICAL (terrible!)
- Avg resolution: 220 days (target: 14-90 days)
- Paradox: Complete but always late

**Visual:** Funnel, SLA gap bars

**Images:**
- II.3.1_workflow_funnel.png
- II.3.1_resolution_by_risk.png

---

### Section 04: Shift Patterns
**Key Points:**
- Shift A (Pagi): 63% volume
- Shift C (Malam): Best quality (25.7% detection)
- Monday Effect: High volume, low quality
- Rabu-Kamis: Peak performance

**Visual:** Shift comparison, heatmap

**Images:**
- II.4.1_shift_performance_overview.png
- II.4.2_day_shift_heatmap.png

---

### Section 05: Asset Tracking
**Key Points:**
- APAR: ~800 findings (critical!)
- Pump, Panel: 250-300 findings each
- Predictive maintenance opportunity
- Asset-specific intervention enabled

**Visual:** Asset category breakdown

**Images:**
- II.5_asset_category_distribution.png
- II.5_fire_safety_analysis.png

---

### Section 06: Risk Prediction (ML)
**Key Points:**
- Model accuracy: 75-80%
- Top feature: Zona (30% importance)
- High-risk scenario: COAL_HANDLING + Malam + Weekend
- Location > Time for risk prediction

**Visual:** Feature importance, prediction heatmap

**Images:**
- feature_importance.png
- daily_risk_prediction.png

---

### Section 07: Smart Recommendation
**Key Points:**
- AI-powered action recommendations
- 5,575 historical cases in knowledge base
- 70-85% similarity matching
- 3-tier recommendations (Immediate/Short/Preventive)

**Visual:** Example recommendation flow

**Images:**
- IV.2_smart_recommendation_resolution_analysis.png

---

### Section 08: Anomaly Detection
**Key Points:**
- 12 volume spike instances
- 3 gaming behavior cases detected
- Early warning 2-5 days faster
- System downtime detection

**Visual:** Anomaly timeline

**Images:**
- IV.3_anomaly_detection_anomaly_timeline.png
- IV.3_anomaly_detection_reporter_analysis.png

---

## Implementation Checklist

### Phase 1: Setup & Planning
- [x] Create poster/plan/ directory
- [x] Create implementation plan (this document)
- [ ] Create shared CSS file (poster/styles.css)

### Phase 2: Section HTML Files
- [ ] 00_data_cleansing.html
- [ ] 01_area_risk.html
- [ ] 02_team_performance.html
- [ ] 03_resolution_workflow.html
- [ ] 04_shift_patterns.html
- [ ] 05_asset_tracking.html
- [ ] 06_risk_prediction.html
- [ ] 07_smart_recommendation.html
- [ ] 08_anomaly_detection.html

### Phase 3: Assembly
- [ ] Create poster/index.html with all sections
- [ ] Test at different zoom levels
- [ ] Verify image paths
- [ ] Print preview check

### Phase 4: Finalization
- [ ] Screenshot/PDF export test
- [ ] Final review

---

## File Structure

```
poster/
├── plan/
│   └── implementation-plan.md (this file)
├── 00_data_cleansing.html
├── 01_area_risk.html
├── 02_team_performance.html
├── 03_resolution_workflow.html
├── 04_shift_patterns.html
├── 05_asset_tracking.html
├── 06_risk_prediction.html
├── 07_smart_recommendation.html
├── 08_anomaly_detection.html
└── index.html (main poster)
```

**Image References:** All images from `../assets/images/`

---

## Technical Notes

### CSS Strategy
- Inline CSS in index.html for standalone portability
- CSS Grid for layout
- Flexbox for components
- No external dependencies (self-contained)

### Image Handling
- Relative paths: `../assets/images/filename.png`
- Max-width constraints for fitting
- Border-radius for visual polish

### Print Optimization
- Use `@media print` for clean output
- Avoid breaking sections across pages
- High contrast for readability

---

**Created:** 2026-01-02
**Status:** Planning Complete, Ready for Implementation
