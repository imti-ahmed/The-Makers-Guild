# Architecture — The Makers Guild

_Document the overall system architecture here. Update as the project evolves._

## Overview
The Makers Guild is a Next.js web application running on Cloudflare. The frontend handles maker profiles, site submission, widget generation, and the discovery network. Neon Postgres stores all maker and site data. The app is server-rendered where possible for performance and SEO.

## Key Systems

| System | Purpose |
|--------|---------|
| Frontend (Next.js) | Renders all pages — homepage, discovery network, maker profiles, submission flow |
| Database (Neon Postgres) | Stores maker accounts, submitted sites, widget configurations, and ring membership |
| Edge / Hosting (Cloudflare) | Serves the app globally, handles caching and edge routing |
| Widget System | Auto-generates embeddable HTML/JS snippets for each approved maker site |

## Data Storage
- **Neon Postgres** — primary data store for all application data (makers, sites, widgets, ring membership).
- No other storage systems defined yet.

## External Services
Not yet defined — to be documented as integrations are added.

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Neon Postgres connection string |

_Add new variables here as they are introduced. Never put actual values in this file._
