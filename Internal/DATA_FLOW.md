# Data & User Flow — The Makers Guild

_Map out how data moves through the system and how users move through the app. Update as flows are built or changed._

## User Journeys

### Journey 1 — Site Submission
1. Maker visits the site and finds the submission form.
2. Maker enters their site URL and basic info (name, description, tags).
3. Submission is validated and stored in the database as pending.
4. Once approved, the maker's site is added to the ring and a widget is auto-generated.
5. Maker receives their embeddable widget code to place on their own site.

### Journey 2 — Discovery / Browsing
1. Visitor lands on the discovery network page.
2. They browse the grid of submitted maker sites.
3. They click through to a maker's profile or visit the maker's actual site directly.
4. If a visitor lands on a maker's site with the widget embedded, they can navigate to the next/previous site in the ring.

### Journey 3 — Widget Navigation
1. A visitor is on a maker's site and sees The Makers Guild widget.
2. They click "next" or "previous" in the widget.
3. The widget calls The Makers Guild to get the adjacent site in the ring.
4. The visitor is sent to the next maker's site.

## Data Flow
- **Submission:** Maker submits a site → stored in Postgres as a pending entry → approved manually or automatically → added to the active ring.
- **Widget generation:** On approval, a unique widget snippet is generated and associated with the maker's record in the database.
- **Ring navigation:** Widget requests hit a lightweight API endpoint that queries Postgres for the next/previous site in the ordered ring.

## Auth Flow
Not yet defined.
