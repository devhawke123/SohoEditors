# Soho Editors — Development Rules & Best Practices

Rules for any agent/developer working on this codebase. Read alongside `architecture.md` (system design) and `prd.md` (requirements).

## Process

- All code is version controlled. Every change goes through peer/code review before merge.
- Rollback must always remain possible — no changes that make reverting a deploy hard.
- Testing environment mirrors production configuration.
- PayPal integration runs in **sandbox mode from day one** — never bolt it on at the end; it is the highest-risk integration.
- Follow the build order in `architecture.md` §12 — don't build Payments before Cart, don't build Migration before the schema is stable, don't skip Discovery.

## Content vs. Layout (hold this line)

- The client gets full CRUD over **content** (courses, sessions, prices, trainers, testimonials, resources, tutorials, bookings, settings) with zero dev involvement.
- The client does **not** get to restructure **page layout**. Any request for a bespoke one-off layout ("just this one course page should look different") is a page-builder request in disguise — decline it once, clearly, and route it through a formal change request instead.
- Content fields for the client are **rich text with a constrained toolbar** (headings, bold, lists, links) rendered into the fixed layout — never a raw HTML field, never a page builder. A raw HTML field will get pasted-in Word markup within a month and break the design.

## Data Model Rules

- `Order.user_id` (and any customer-linked booking data) must be **nullable** — guest checkout is a first-class case, not a retrofit. Design every booking/order-adjacent table with this from the start.
- `Session` (a dated instance of a `Course`) is the actual cart-line/bookable unit, not `Course` itself.
- Multi-seat bookings = the same session line repeated N times (matches existing business behavior — don't "fix" this into a quantity field without checking with the client first).
- Money/VAT: keep Subtotal / VAT / Discount / Total as separate, itemised values — don't collapse them into a single computed total, since the current checkout displays each line and invoices must reconcile against them.

## Auth & Security

- Passwords: one-way hashing only, never plaintext or reversible encryption.
- Migrated users: verify against the legacy WordPress bcrypt/phpass hash directly in FastAPI — do not force a mass password reset.
- Every API request is authenticated and permission-checked server-side, on every action — never rely on hiding a URL or a frontend route guard alone.
- No payment card data ever touches our servers or database — that boundary is PayPal's, full stop.
- Secrets (DB credentials, API keys, tokens) live in encrypted secret storage, never hardcoded or committed.
- Keep dependencies patched; don't defer security updates.

## Pencil Me In (handle with care)

- This is an undocumented, human-in-the-loop state machine already in production use — do not guess its states. Get the full flow in writing (from a recorded walkthrough) before implementing.
- It is a cart-level line item, not a separate booking flow — coexists with paid items in the same cart, and must NOT be modeled as a bolt-on outside the normal booking pipeline.
- Needs explicit admin tooling to confirm or release a pencilled booking.

## Migration

- Open the WordPress SQL dump / postmeta early — it will be messier than expected, and that discovery should happen in Phase 0, not mid-build.
- Preserve password hashes, don't force resets.
- Ask the client explicitly whether historical orders need full migration or an archive-only (read-only) table — don't assume.
- 301 redirects + sitemap + SEO metadata must be carried over before cutover, to protect existing search rankings.

## Launch Gate (do not launch without these)

- Full booking flow tested in PayPal sandbox, then verified with one real low-value live transaction.
- VAT arithmetic checked against real historical invoices.
- Pencil Me In workflow tested with the actual bookings team, not just engineering.
- Redirects verified against the full old sitemap.
- Old WordPress site kept live/warm as rollback for a defined window (≥1 week) after cutover.

## General Engineering

- Reuse the shared component library (buttons, forms, cards, nav) across both training and future talent frontends — don't fork UI per site.
- Don't build features PayPal already provides for free (e.g. Pay in 3) — that's a reason PayPal is being retained.
- Don't build video hosting/streaming — Vimeo OTT stays the source of truth for paid video; we only link out.
- New functionality should extend the shared backend, not spin up parallel services/infrastructure per frontend.
