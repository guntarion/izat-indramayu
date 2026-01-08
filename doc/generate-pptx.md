✅ Skill Created: html-to-pptx

  Skill Structure

  .claude/skills/html-to-pptx/
  ├── SKILL.md                           # Concise description (~50 tokens)
  ├── README.md                          # Quick overview
  ├── reference.md                       # Complete documentation
  ├── examples.md                        # Practical usage examples
  └── scripts/
      ├── resize-slides-for-pptx.js      # HTML optimizer
      ├── convert-single-presentation.js # Single converter
      └── html-slides-to-pptx.js         # Batch converter

  How to Use the Skill

  Option 1: Via Claude Code (Recommended)

  Simply mention the skill in conversation:

  User: Use the html-to-pptx skill to convert presentasi_01_area_risk

  I will:
  1. Apply PPTX optimizations automatically
  2. Convert to PPTX using the scripts
  3. Show progress and output location

  Option 2: Direct Script Access

  # Single presentation
  node .claude/skills/html-to-pptx/scripts/convert-single-presentation.js \
    presentasi-for-pptx/presentasi_01_area_risk

  # Batch conversion
  node .claude/skills/html-to-pptx/scripts/html-to-pptx.js

  Documentation Hierarchy

  1. SKILL.md - Quick reference (what Claude reads first)
  2. README.md - Skill overview and quick start
  3. reference.md - Complete technical documentation
  4. examples.md - Real-world usage scenarios
  5. doc/pptx-generation.md - Project-level context

  Files Ready to Commit

  M  .gitignore                                    # Updated to track skill
  ?? .claude/skills/html-to-pptx/                  # New skill (will be tracked)
  ?? doc/pptx-generation.md                        # Project documentation
  ?? package.json                                  # Dependencies
  ?? scripts/*                                     # Original scripts (keep both)
  ?? presentasi-backup/                            # Source HTML

  Key Improvements from Standalone Scripts
  ┌───────────────┬────────────────────────┬────────────────────────┐
  │    Feature    │       Standalone       │       With Skill       │
  ├───────────────┼────────────────────────┼────────────────────────┤
  │ Invocation    │ node scripts/...       │ Natural language       │
  ├───────────────┼────────────────────────┼────────────────────────┤
  │ Discovery     │ Read docs manually     │ Built into Claude      │
  ├───────────────┼────────────────────────┼────────────────────────┤
  │ Assistance    │ Manual troubleshooting │ Claude can help debug  │
  ├───────────────┼────────────────────────┼────────────────────────┤
  │ Organization  │ Scattered              │ Self-contained         │
  ├───────────────┼────────────────────────┼────────────────────────┤
  │ Documentation │ Separate file          │ Progressive disclosure │
  └───────────────┴────────────────────────┴────────────────────────┘
  What's Different?

  - Original scripts still work in scripts/ directory
  - Skill version in .claude/skills/html-to-pptx/scripts/ (copied)
  - Both are tracked in git for flexibility
  - Skill follows Claude Code best practices