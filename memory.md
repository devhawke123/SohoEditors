# Soho Editors — Project Memory

> Living progress file. Every agent working on this repo should read this first and update it as work happens. Keep entries short and dated — this is a log + current-state snapshot, not a design doc (that's `architecture.md`/`prd.md`).

## Current State (2026-07-29)

- **Phase:** Pre-build — planning docs just created. No code written yet.
- **Docs reviewed:** `Overall System Architecture.pdf` (technical & dev approach), `SohoEditor's training Module's Execution Plan.docx` (training-specific execution plan).
- **Docs authored this session:** `prd.md`, `architecture.md`, `rules.md`, `design.md`, this file.
- **Which site first:** Training website. Talent/freelancer website is a later phase on the same shared backend.

## Key Decisions Already Made (source: client docs)

- Stack: Next.js (frontend) + FastAPI (backend) + PostgreSQL, all on AWS in the **client's** AWS account.
- PayPal retained for payments; Vimeo OTT retained for paid video (outbound links only, no entitlement logic).
- Guest checkout is required — orders must support a nullable user reference from day one.
- Admin/client owns content, not layout — declining page-builder-style requests is expected behavior, not a compromise.
- Legacy WordPress password hashes will be verified directly in FastAPI (no forced reset).
- Build order: Discovery → Foundation → Catalogue & Admin → Accounts → Cart/Booking/Payments → Pencil Me In → Bespoke → Migration → QA/Launch.

## Open Questions (blocking Discovery/Phase 0 — see `prd.md` §9)

- [ ] Are bundles / rewards / guarantee features still live or dead? Needs written answer from client.
- [ ] Full Pencil Me In state machine — needs a recorded walkthrough with the bookings team.
- [ ] Historical orders: full migration or archive-only?
- [ ] Field-level content inventory from the existing Kahuna CMS not yet done.

Intentionally deferred: these are not yet written into `prd.md` as firm requirements — they'll be added there once their scope is actually resolved with the client, not before. Don't fill in `prd.md` §9 with assumed answers.

## Not Started Yet

- No Figma designs received — `design.md` is a placeholder.
- No repo scaffolding (Next.js app, FastAPI service, DB schema/migrations) exists yet.
- No AWS resources provisioned yet.

## Log

- **2026-07-29** — Reviewed both source docs; created `prd.md`, `architecture.md`, `rules.md`, `design.md`, `memory.md`. No code yet — next step is Phase 0 Discovery (content inventory + booking flow trace) before any schema/scaffolding work starts.
