# Wellenzo Global Design System (MASTER.md)

This document outlines the visual identity and layout tokens for Wellenzo. Every page must respect these rules to preserve a premium, cohesive, and neuro-affirming brand experience.

## Brand Identity & Aesthetic
Wellenzo presents a **Zen / Minimalist / Premium** direction:
- Calming natural tones to lower cognitive friction.
- Generous, intentional whitespace (breathing room) to minimize visual overwhelm.
- No emojis as UI icons; only clean SVG paths.
- Smooth transitions on all hover states; no sudden shifts.

---

## 1. Color Palette

### CSS Variables
```css
:root {
  /* Brand Core Colors */
  --color-primary: #1A2F25;        /* Deep Forest Green (headings, text, dark backgrounds) */
  --color-accent: #10B981;         /* Fresh Sage/Mint Green (primary buttons, active accents) */
  --color-accent-light: rgba(16, 185, 129, 0.05); /* Soft background tint */
  --color-accent-mid: #0C9467;     /* Darker sage for icons and mid contrast */
  --color-accent-dark: #096F4D;    /* Dark Sage for button hover states */

  /* Neutral System */
  --color-bg: #F5F2EB;             /* Premium Light Cream (Page background) */
  --color-card-bg: #FCFAF6;        /* Soft Cream-White (Cards, FAQ, Modals background) */
  --color-surface: #EAE5DB;        /* Slightly darker warm cream (Trust bar, active regions) */
  --color-border: #DFD9CE;         /* Warm border tint */
  --color-text: #1A2F25;           /* Primary Body Text (Forest Green for visual harmony) */
  --color-text-secondary: #3D4F45; /* Muted Body Text */
  --color-text-muted: #6B7C72;     /* Disabled/Muted Labels */
  
  /* Layout Metrics */
  --radius-lg: 20px;               /* Bento cards, hero container */
  --radius-md: 12px;               /* Regular buttons, items */
  --radius-sm: 8px;                /* Tag labels, small elements */
  
  --shadow-sm: 0 4px 12px rgba(26, 47, 37, 0.02);
  --shadow-md: 0 10px 30px rgba(26, 47, 37, 0.04);
  --shadow-lg: 0 15px 40px rgba(26, 47, 37, 0.08);
}
```

---

## 2. Typography

We use the **Outfit** typeface from Google Fonts.

### Hierarchy Guidelines
- **Headings (`h1`, `h2`, `h3`)**: Large, bold, slightly negative tracking (`letter-spacing: -0.02em` or `-0.03em`) for a premium print feel.
- **Body Text**: Generous line-height (`line-height: 1.6` or `1.7`) for high readability.
- **Labels/Tags**: `letter-spacing: 0.08em`, uppercase, small size, bold weight.

```css
body {
  font-family: 'Outfit', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
```

---

## 3. Interactive Mechanics

- **Transitions**: All hover, focus, and modal triggers must animate using smooth, fast curves.
  ```css
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  ```
- **Clickable cursor**: Apply `cursor: pointer` explicitly on buttons, accordion headers, custom inputs, and card triggers.
- **Card Hover Elevation**: Hovering on Bento cards should slightly lift them and enrich their shadow:
  ```css
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  ```

---

## 4. Layout Constraints

- **Main Container**: Centered layout using `max-width: 960px` (`max-w-4xl`) for the core sections. Keeps content dense and comfortable to read without side-to-side eye strain.
- **Bento Grid**: Structured as an asymmetric layout:
  - Desktop: 2-column or 3-column layouts.
  - Mobile: Collapse to a single-column layout with standard `1rem` paddings.
