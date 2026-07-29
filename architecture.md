# Soho Editors — Training Website: Architecture

> Describes the shared platform architecture (built for both Training and future Talent sites) with training-specific detail called out.

## 1. Platform Shape

Two independent frontends, one shared backend/DB:

- **Training website** (this project, first) — courses, sessions, bookings, payments.
- **Talent website** (later) — freelancer roster, work requests, matching.
- **Shared backend** — one FastAPI service, one PostgreSQL database, one admin panel. No duplicated data or business logic; changes to one frontend cannot break the other.

## 2. Core Stack

| Layer | Choice |
|---|---|
| Frontend | React / Next.js (both sites, shared component library) |
| Backend | FastAPI (Python), single shared service |
| Database | PostgreSQL (single instance, shared schema/namespaces) |
| Infra | AWS, hosted in the **client's own AWS account** (dev team does not host prod) |

### AWS Services
- AWS Amplify or Vercel — frontend hosting
- AWS App Runner / EC2 — backend hosting
- Amazon RDS — managed PostgreSQL (automated backups, point-in-time recovery, monitoring)
- Amazon S3 — file storage (images, showreels, PDFs, CVs, course materials — DB stores references only)
- Amazon CloudFront — CDN for file delivery
- Amazon Route 53 — DNS
- Amazon SES — transactional email (booking confirmations, joining instructions, password resets)

### Third-Party (retained, not rebuilt)
- **PayPal** — all payment processing; card data never touches our platform. Orders API + webhooks, Pay in 3.
- **Vimeo (OTT)** — paid tutorial video hosting; platform only shows listing/trailer/price and links out.
- **Google Analytics / Search Console** — tracking codes managed via admin panel.

## 3. Why This Stack

- Next.js: pre-rendering for performance + full SEO crawlability (preserves existing Google rankings during migration), one codebase for desktop/tablet/mobile.
- FastAPI: high performance, modular, auto-generated API docs, and — critically for training — can verify legacy WordPress password hashes directly during login, avoiding a forced password reset for all customers.
- PostgreSQL: models the real relational complexity (courses → many sessions → many bookings, guest bookings without accounts, freelancers on multiple concurrent projects later) far better than WordPress postmeta.

## 4. Database Structure (Training-relevant)

**Training data**
- Software (taxonomy root), Skill, Course, Session, Trainer, Testimonial, Resource, FreeTutorial, ProTutorial, Page, Settings

**Shared data (used by both sites eventually)**
- User accounts, User roles, Orders, Site settings

Key relational rules:
- `Session` is the actual bookable unit (a dated instance of a `Course`); price can override the course-level price.
- `Order` → nullable user FK, so **guest checkout works without retrofitting**.
- Cart line item = `Session` + attendee details + type (`paid` | `pencil`); multi-seat = same session line repeated N times.

## 5. API Architecture

- Single encrypted (HTTPS) API shared by both public frontends and the admin panel.
- Every request: authenticate → check permissions → return data only if authorized.
- One API = one place business rules live, so booking behavior can't diverge between surfaces.
- FastAPI auto-generates API docs (OpenAPI/Swagger) — kept current with no manual maintenance.

## 6. Auth & Security

- HTTPS everywhere.
- Passwords: one-way hashing (bcrypt) — never plaintext, unreadable even to admins.
  - Migration: verify directly against legacy WordPress bcrypt/phpash hashes in FastAPI (no mass reset).
- Every request validated + permission-checked server-side (hidden URLs give no back door).
- DB not reachable from the public internet.
- Form input validated against malformed/malicious input.
- Secrets (DB passwords, API keys, tokens) stored as encrypted secrets, never in code.
- Dependencies kept patched.
- Payment card data never enters the platform — 100% delegated to PayPal.

## 7. File & Media Handling

- Uploads → S3 (not the DB); DB stores only the reference/URL.
- Delivery via CloudFront (nearest-edge caching, reduced origin load).
- Upload flow: select → upload → associate with Course / Trainer / Resource.
- Paid videos: Vimeo OTT hosts the actual video; we show listing/trailer/price and redirect out for playback.

## 8. Admin Panel

Single panel, replaces WordPress dashboard. Training-relevant capabilities:
- CRUD: courses, sessions/dates, trainers, testimonials, resources, tutorials, discount codes.
- Bookings: view, confirm/release pencilled bookings.
- Users, site settings, GA tracking codes.

**Content vs. layout split (load-bearing distinction):**
- Client fully owns *content* (courses, prices, trainers, testimonials, resources, tutorials, bookings, settings) with no developer needed.
- Client does **not** own page *layout* — e.g. "Our Trainers" page layout is fixed/coded; adding a trainer updates the page automatically, but restructuring the page requires a formal change request.
- Static pages (Training Home, Our Trainers, Resources, Free Tutorials, Reviews, Live Online, Bespoke, Certified Pro) — dev-deployed layout, but still render dynamic CMS data.
- Dynamic pages (Course Detail) — content fully driven by the Course entity, no dev needed per-course.

## 9. Hosting & Deployment

- Everything lives in the client's AWS account; dev team never hosts production.
- Staged rollout: build → test in staging → old WordPress site stays live → final approval → DNS cutover → old site kept temporarily for rollback.
- Expected downtime: zero, or a few minutes during DNS switch.

## 10. Scalability & Performance

- Frontend hosting, DB resources, CDN, and S3 all scale independently without architectural changes.
- Shared backend means new features don't require duplicated infrastructure.
- Pre-rendered Next.js pages, CloudFront caching, and DB query optimization (course listings, freelancer search later) replace WordPress plugin overhead.

## 11. Backup & Recovery

- RDS: automatic backups, point-in-time recovery.
- S3: redundant storage, versioning where enabled.
- Migration is one-way gated: new platform only launches after migrated data is verified.
- Old site stays available post-launch for a defined rollback window.

## 12. Build Order (Training)

```
Discovery → Foundation (DB/Auth/Infra skeleton) → Catalogue & Admin →
Accounts & Registration → Cart/Booking/Payments → Pencil Me In →
Bespoke Enquiry → Migration → QA & Launch
```

Rationale: Catalogue first because bookings and migration both read from it. Payments before Pencil, because Pencil is a variant of the cart, not a separate system. Migration late because the schema must be stable first.
