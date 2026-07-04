# Shravani Mela Design System Guidelines

This document outlines the color palette, typography, and layout spacing rules extracted from the **shravaniMela** Figma design file. The portal is designed as a desktop-oriented web application supporting pilgrims on their devotional journey to Deoghar (Baba Baidyanath Temple).

---

## 🎨 Color Palette

The color system combines a spiritual saffron/orange theme (associated with Shiva and the Kanwar Yatra) with a deep, rich purple primary brand color, supported by neutral surfaces and clean semantic signaling.

### 1. Brand Primary (Purple Tones)
*   **Primary Accent (`#4F1C9E`):** The primary color used for major branding elements, active navigation highlights, and prominent call-to-actions.
*   **Light Primary/Container (`#EBDDFF`):** A soft purple tint used for active state background mapping and container cards.
*   **Primary Border/Inactive (`#CCC3D5`):** A muted lavender grey used for input borders, inactive lines, and structural dividers.
*   **Dark Primary (`#250059`):** An ultra-dark purple for heavy contrast elements.
*   **Secondary/Soft Brand (`#673AB7` / `#D8C2FF`):** Supplementary purple shades for UI depth.

### 2. Brand Secondary (Saffron / Spiritual Tones)
*   **Saffron Accent (`#FF9800`):** The spiritual core color, used for high-visibility highlights, devotional badges, and decorative accents.
*   **Saffron Tint (`#FFDCBE`):** A warm peach-saffron tint used for warning/alert cards and informational surfaces.
*   **Amber Accent/Brown (`#8B5000`):** Darker contrast shade for saffron typography and borders.
*   **Dark Amber (`#2C1600` / `#693C00` / `#653900`):** Very dark brown-saffron tones for text headers and background structures within warm containers.

### 3. Neutral Palette (Surfaces & Text)
*   **Pure White (`#FFFFFF`):** Base canvas background, sidebar container fill, and contrast text.
*   **Dark Neutral (`#1A1C1D`):** Primary text color and heavy dark surfaces.
*   **Secondary Neutral (`#4A4453`):** Subtitle text, inactive icons, and secondary borders.
*   **Warm Off-white (`#F9F9FB` / `#F3F3F5`):** Soft backgrounds for grids, panels, and input fields.
*   **Cool Off-white (`#EEEEF0` / `#E8E8EA` / `#E2E2E4`):** Background dividers and decorative section backdrops.

### 4. Semantic Colors
*   **Error/Alert Red (`#BA1A1A`):** Used for error states, emergency action items, and critical alerts.
*   **Error Container (`#FFD9DE` / `#FFDAD6`):** Soft red background fills for emergency panels.
*   **Success Green (`#22C55E` / `#16A34A`):** Used for verified registration steps and positive status highlights.

---

## 📝 Typography

The typography scale utilizes **Manrope** for structure and body content, **Work Sans** for action-oriented UI metadata, and **Liberation Mono** for technical code/tokens.

### 1. Headings (Manrope)
*   **H1 (Hero Bold):** `40px` | Weight: `800` (Extra Bold) | Line Height: `48px` (used for major banner introductions)
*   **H1 (Page Title):** `32px` | Weight: `800` (Extra Bold) | Line Height: `40px`
*   **H2 (Section Header):** `24px` | Weight: `700` (Bold) | Line Height: `32px`
*   **H3 (Container Title):** `20px` | Weight: `700` (Bold) or `600` (Semi-Bold) | Line Height: `28px`
*   **H4 (Card Sub-header):** `18px` | Weight: `400` (Regular) | Line Height: `28px`

### 2. Body Text (Manrope)
*   **Body Large / Lead:** `18px` | Weight: `400` (Regular) | Line Height: `28px`
*   **Body Medium (Regular):** `16px` | Weight: `400` (Regular) | Line Height: `24px`
*   **Body Medium (Bold):** `16px` | Weight: `700` (Bold) | Line Height: `24px`
*   **Body Small (Regular):** `14px` | Weight: `400` (Regular) | Line Height: `20px`
*   **Body Small (Bold):** `14px` | Weight: `700` (Bold) | Line Height: `20px`

### 3. UI, Metadata & Action Elements (Work Sans)
*   **Button / Nav Link:** `14px` | Weight: `500` (Medium) | Line Height: `20px`
*   **Caption (Bold):** `12px` | Weight: `600` (Semi-Bold) or `700` (Bold) | Line Height: `16px`
*   **Metadata (Small):** `12px` | Weight: `400` (Regular) | Line Height: `16px`
*   **Badge (Micro Label):** `10px` | Weight: `700` (Bold) | Line Height: `15px`

### 4. Code / Monospace (Liberation Mono)
*   **Code Text:** `16px` | Weight: `700` (Bold) | Line Height: `24px`

---

## 📐 Layout & Spacing Rules

All layouts adhere to a clean geometric grid, driven by auto-layout structures to ensure responsive flexibility.

### 1. Page-Level Grid Structure
The standard viewport width is **1280px**, structured as a split layout:
*   **Sidebar Navigation Drawer:** Fixed Width: `320px` | Height: Viewport-fill (`100%`)
*   **Main Content Canvas:** Fluid Width: `960px` (`1280px - 320px`) | Height: Auto-scroll

### 2. Auto-Layout Spacing Scale
Layout spacings are structured around an 8pt grid with minor micro-spacers:
*   **`4px` (xxs):** Used for tightly-grouped elements (e.g., icons next to labels, title-to-description gaps).
*   **`8px` (xs):** Used for intermediate element list gaps (e.g., items in the sidebar list).
*   **`12px` (sm):** Used for secondary details, small card spacing.
*   **`16px` (md):** **Main spacing token.** Standard distance between primary components, buttons in groups, form inputs, and secondary headers.
*   **`20px` (lg):** Intermediate spacing for text groupings and metadata margins.
*   **`24px` (xl):** Spacing for card content margins and form fields.
*   **`32px` (xxl):** Structural gap between major section rows (e.g., distance between the Hero section and status sections).

### 3. Padding Guidelines
*   **Dense Padding (`12px` / `16px`):** Used inside compact blocks, links, list items, and form elements.
*   **Standard Padding (`24px`):** The default padding for cards, banners, and primary container containers.
*   **Section Padding (`32px` / `64px`):** Major margins around page contents (e.g., `64px` around registration forms, `32px` on sidebar headers).

---

## 🏗️ Structural Component Specifications

### 1. Navigation Drawer (Sidebar)
*   **Width:** `320px`
*   **Border:** `1px` solid (`#CCC3D5`)
*   **Header Section (`HorizontalBorder`):** Padding: `32px` | Bottom Margin: `16px`. Displays "Devotional Journey 2026".
*   **Link Elements:** Height: `48px` | Layout: Horizontal Auto-layout | Spacing: `16px` | Padding: `12px 16px`
    *   *Active Link State:* Background fill (`#EBDDFF`) with active state text color.
*   **Footer Info Widget (Weather):** Padding: `24px` | Contains background panel with `16px` padding and `4px` child spacing.

### 2. Registration Form Area
*   **Width:** `448px`
*   **Padding:** `32px` all sides.
*   **Auto-Layout:** Vertical flow with `32px` spacing between primary sections.
*   **Form Controls:** Vertical flow with `24px` spacing between individual inputs (Personal Info).

### 3. Side Informational Cards (Guidelines & Support)
*   **Width:** `320px`
*   **Padding:** `24px` all sides.
*   **Auto-Layout:** Vertical flow with `16px` spacing between headers and content.
