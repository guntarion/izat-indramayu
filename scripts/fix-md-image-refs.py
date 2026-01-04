#!/usr/bin/env python3
"""
Fix Markdown Image References

Converts text-based image references to proper markdown image syntax.

Before: **Referensi:** Gambar 1 - `II.1.1_zona_distribution.png`
After:  ![Gambar 1 - Distribusi Volume per Zona](assets/images/II.1.1_zona_distribution.png)

Usage:
    python scripts/fix-md-image-refs.py <file.md or folder>
"""

import re
import sys
from pathlib import Path

# Image path prefix
IMAGE_PATH_PREFIX = "assets/images/"

# Pattern to match: **Referensi:** Gambar X - `filename.png`
# Also handles variations like "Chart #1:" or just the filename
PATTERNS = [
    # Pattern 1: **Referensi:** Gambar X.Y.Z - `filename.png` (decimal numbering)
    (
        r'\*\*Referensi:\*\*\s*Gambar\s+([\d.]+)\s*[-–]\s*`([^`]+\.png)`',
        lambda m: f'![Gambar {m.group(1)}]({IMAGE_PATH_PREFIX}{m.group(2)})'
    ),
    # Pattern 2: **Referensi:** `filename.png`
    (
        r'\*\*Referensi:\*\*\s*`([^`]+\.png)`',
        lambda m: f'![Gambar]({IMAGE_PATH_PREFIX}{m.group(1)})'
    ),
    # Pattern 3: Gambar X or X.Y.Z - `filename.png` (without Referensi)
    (
        r'(?<!\[)Gambar\s+([\d.]+)\s*[-–]\s*`([^`]+\.png)`',
        lambda m: f'![Gambar {m.group(1)}]({IMAGE_PATH_PREFIX}{m.group(2)})'
    ),
]


def fix_image_references(content: str) -> tuple[str, int]:
    """
    Fix image references in markdown content.

    Args:
        content: Markdown content

    Returns:
        Tuple of (fixed_content, count_of_fixes)
    """
    total_fixes = 0

    for pattern, replacement in PATTERNS:
        # Count matches before replacement
        matches = re.findall(pattern, content)
        if matches:
            total_fixes += len(matches)
            content = re.sub(pattern, replacement, content)

    return content, total_fixes


def process_file(file_path: Path) -> int:
    """
    Process a single markdown file.

    Args:
        file_path: Path to the markdown file

    Returns:
        Number of fixes made
    """
    print(f"Processing: {file_path}")

    content = file_path.read_text(encoding='utf-8')
    fixed_content, fix_count = fix_image_references(content)

    if fix_count > 0:
        file_path.write_text(fixed_content, encoding='utf-8')
        print(f"  ✓ Fixed {fix_count} image reference(s)")
    else:
        print(f"  - No changes needed")

    return fix_count


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("\nFiles to process:")
        files = [
            "presentasi/presentasi-analisis-ringkas/01-highlight-analisis-risiko-area.md",
            "presentasi/presentasi-analisis-ringkas/02-highlight-performa-tim.md",
            "presentasi/presentasi-analisis-ringkas/03-highlight-alur-penyelesaian.md",
            "presentasi/presentasi-analisis-ringkas/04-highlight-analisis-pola-shift.md",
            "presentasi/presentasi-analisis-ringkas/05-highlight-tracking-aset.md",
            "presentasi/presentasi-analisis-ringkas/06-highlight-prediksi-risiko.md",
            "presentasi/presentasi-analisis-ringkas/07-highlight-smart-recommendation.md",
            "presentasi/presentasi-analisis-ringkas/08-highlight-deteksi-anomali.md",
            "presentasi/presentasi-analisis-ringkas/09-data-cleansing.md",
        ]
        for f in files:
            print(f"  - {f}")
        print("\nRun with 'all' to process all files:")
        print("  python scripts/fix-md-image-refs.py all")
        sys.exit(0)

    input_arg = sys.argv[1]

    if input_arg == "all":
        # Process all predefined files
        files = [
            Path("presentasi/presentasi-analisis-ringkas/01-highlight-analisis-risiko-area.md"),
            Path("presentasi/presentasi-analisis-ringkas/02-highlight-performa-tim.md"),
            Path("presentasi/presentasi-analisis-ringkas/03-highlight-alur-penyelesaian.md"),
            Path("presentasi/presentasi-analisis-ringkas/04-highlight-analisis-pola-shift.md"),
            Path("presentasi/presentasi-analisis-ringkas/05-highlight-tracking-aset.md"),
            Path("presentasi/presentasi-analisis-ringkas/06-highlight-prediksi-risiko.md"),
            Path("presentasi/presentasi-analisis-ringkas/07-highlight-smart-recommendation.md"),
            Path("presentasi/presentasi-analisis-ringkas/08-highlight-deteksi-anomali.md"),
            Path("presentasi/presentasi-analisis-ringkas/09-data-cleansing.md"),
        ]
    else:
        input_path = Path(input_arg)
        if input_path.is_dir():
            files = list(input_path.glob("*.md"))
        else:
            files = [input_path]

    print("=" * 60)
    print("Fix Markdown Image References")
    print("=" * 60)

    total_fixes = 0
    for file_path in files:
        if file_path.exists():
            total_fixes += process_file(file_path)
        else:
            print(f"⚠ File not found: {file_path}")

    print("=" * 60)
    print(f"Total: {total_fixes} image reference(s) fixed in {len(files)} file(s)")
    print("=" * 60)


if __name__ == "__main__":
    main()
