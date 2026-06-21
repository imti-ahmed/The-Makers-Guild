# The Makers Guild

A webring platform where makers submit their personal sites, receive auto-generated embeddable widgets, and get listed in a shared discovery network. It connects indie makers and their projects through a structured, navigable web of sites.

## Stack
- **Framework:** Next.js (App Router)
- **Styles:** CSS Modules
- **Animation:** GSAP
- **Database:** Neon Postgres
- **Hosting / Edge:** Cloudflare

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Neon Postgres connection string and any other required vars

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
Folder structure is built as needed. See `Internal Docs/ARCHITECTURE.md` for the current layout as the project grows.

## Design
See `DESIGN.md` for design tokens, component rules, and aesthetic guidelines. Tokens are imported from Figma — do not hardcode values.

## Development Notes
See `CLAUDE.md` for how Claude works in this project — rules, commit policy, planning process, and update discipline.

## Releases
See `RELEASES.md` for the full public release history.
