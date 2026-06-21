# DESIGN.md — The Makers Guild

## Source of Truth
Design tokens are imported from Figma. The Figma file is not yet complete — this section will be updated once tokens are exported and defined in `globals.css` (or equivalent token file).

Until Figma tokens are imported, **do not hardcode any color, font, spacing, or shadow values in component files.**

## How to Use (once tokens are imported)
- Colors → `var(--color-*)`
- Typography → `var(--font-*)`
- Spacing → `var(--space-*)`
- Shadows → `var(--shadow-*)`
- Border radius → `var(--radius-*)`
- Always check `globals.css` before writing any new styles.
- If a token doesn't exist for something, flag it and ask before inventing a new value.

## Design Philosophy

The Makers Guild is built around structure, clarity, and a hint of the past.

- **Grid-first:** Everything lives on a grid. Layouts are boxy, defined, and deliberate. No fluid organic shapes.
- **Minimal palette:** Black, white, greys, and blues only. Color is used sparingly — it signals something, it doesn't decorate.
- **Retro-computerized:** The aesthetic recalls early web, terminal UIs, and 90s software interfaces — structured, utilitarian, and slightly cold. Not nostalgic kitsch, just honest function.
- **Typography as structure:** Type is part of the grid. Font choices reinforce the computerized feel — expect monospace or geometric sans-serif influences.
- **Restrained animation:** GSAP is used purposefully. Transitions should feel mechanical and precise — not bouncy or playful. Grid reveals, slide-ins, and deliberate state changes.

## Anticipated Token Categories
These will be populated from Figma once the design file is ready:

| Token Group | Examples |
|-------------|---------|
| `--color-*` | background, surface, border, text-primary, text-secondary, accent-blue |
| `--font-family-*` | heading, body, mono |
| `--font-size-*` | xs, sm, md, lg, xl, 2xl |
| `--font-weight-*` | regular, medium, bold |
| `--space-*` | 4, 8, 12, 16, 24, 32, 48, 64 (4px base scale) |
| `--radius-*` | none, sm, md |
| `--shadow-*` | sm, md, hard (sharp box shadows, retro feel) |
| `--border-*` | default, strong |

## Rules
- No inline styles.
- No hardcoded hex, rgb, or rem values outside of `globals.css`.
- No external UI libraries unless explicitly approved.
- Every new component must use existing tokens only.
- If a token doesn't exist for what you need, **flag it and ask** — do not invent values.
- When Figma tokens are imported, update the token table above to reflect the real values.
