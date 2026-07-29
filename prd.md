# Soho Editors — Training Website: PRD

> Scope of this document: the **Training website** only. The Talent/freelancer website is a later phase and is out of scope here except where the shared backend/DB is affected.

## 1. Background

Soho Editors currently runs training + talent agency on one WordPress site. We are splitting into two independent frontends on one shared backend/DB, starting with **Training**.

- **Payments:** PayPal is retained (Orders API, webhooks, Pay in 3). No card data ever touches our platform.
- **Video:** Paid tutorials stay on Vimeo OTT. We only show listings/trailers/pricing and link out — no entitlement logic to build.
- **Admin panel:** replaces the WordPress dashboard, single panel for both websites eventually.

## 2. Goals

- Let visitors browse courses, pick a session date, and book + pay online (as guest or registered user).
- Give the Soho Editors team a CMS-like admin panel to manage all training content without developer help, while page **layouts** stay fixed/coded.
- Preserve existing users (WordPress password hashes) and SEO (redirects, sitemap) through migration.
- Support the existing "Pencil Me In" (provisional/zero-cost booking) workflow — this is a real, human-in-the-loop business process, not a nice-to-have.

## 3. Non-Goals (current scope)

- Talent agency website and freelancer workflows (future phase, shares backend/DB only).
- Client invoicing / freelancer payouts.
- Hosting or building custom video streaming (stays on Vimeo).
- Page-builder / free-form layout editing for clients (explicitly rejected — see rules.md).

## 4. User Roles (training-relevant)

| Role | Can do |
|---|---|
| Visitor | Browse courses, view trainers, resources, tutorials |
| Training Customer | Book courses (guest or registered), view own bookings, request date changes |
| Trainer | Manage own profile/bio |
| Administrator | Full CRUD on all training content, bookings, users, site settings |

## 5. Content Entities (Catalogue)

| Entity | Notes |
|---|---|
| Software | Taxonomy root (Premiere, After Effects, Resolve, …) |
| Skill | Tagging for courses and trainers |
| Course | Overview, objectives, outline, level, duration, price, trailer, images |
| Session | A dated instance of a course: date, duration, mode (classroom/live online), location, price override — this is the cart line item |
| Trainer | Profile, bio, specialities, linked software |
| Testimonial | Written + YouTube video variants |
| Resource | Free downloads (templates, manuals, funding guides) — S3 files |
| FreeTutorial | YouTube embed |
| ProTutorial | Title, trailer, price, outbound Vimeo OTT URL — link only, no entitlement |
| Page | Generic page for bespoke landing pages |
| Settings | Tracking codes (GA, verification tags) |

Public pages this unlocks: Training Home, Courses, Course Detail, Our Trainers, Resources, Free Tutorials, Reviews, Certified Pro Tutorials.

## 6. Core Flows

### 6.1 Booking / Cart
- Server-side cart, session-backed so **guest checkout works** (orders can exist without a user account — nullable FK by design).
- Line item = Session + attendee details + type (`paid` | `pencil`).
- Multi-seat = same session added N times (matches current behavior).
- Attendee capture per line item, optional, defaults to purchaser.
- Coupon codes: cart-level, percentage or fixed, expiry, usage cap.
- VAT: 20%, itemised as its own line (Subtotal / VAT / Discount / Total), matching current checkout display.

### 6.2 Pencil Me In
- Zero-cost line item that coexists with paid items in the same cart.
- Produces a booking in a **pencilled** state.
- Needs admin tooling to **confirm** or **release** pencilled bookings.
- Must be spec'd from the client's actual walkthrough before building — it is a state machine, not a checkbox.

### 6.3 Payments
- PayPal Orders API + webhooks, guest-friendly.
- Pay in 3 comes free with PayPal.
- Sandbox mode configured from day one of development, not bolted on later.

### 6.4 Accounts
- Registration, login, email verification, password reset.
- Guest checkout must always work independent of accounts.
- User migration: verify against existing WordPress bcrypt/phpass hashes directly in FastAPI (no forced password reset).
- "My Profile" / "My Bookings" — view bookings, request date/timing changes.

### 6.5 Bespoke Training Enquiries
- Simple form → enquiry record → admin inbox → email notification. No booking/payment flow.

## 7. Admin Panel Requirements

Client (without developer help) can manage:
- Courses, course dates/sessions, prices, trainers, testimonials, resources, tutorials
- Bookings (view, confirm/release pencils), coupon/discount codes
- Site settings, GA tracking codes
- Users

Client **cannot** change page layouts — that requires a formal change request (see rules.md).

## 8. Migration Requirements

- Users with password hashes preserved.
- Courses, sessions, trainers, testimonials, resources.
- Media → S3, with all references rewritten.
- Historical orders: ask client — full migration if needed, else read-only archive table.
- 301 redirects, sitemap, SEO metadata preserved (protects existing Google rankings).

## 9. Open Questions (resolve in Discovery, do not skip)

- Bundles / rewards / guarantee: still live features or dead? Needs a written answer.
- Full Pencil Me In state machine, recorded from a walkthrough.
- Whether historical orders need full migration or archive-only.
- Full field-level content inventory from existing Kahuna CMS.

## 10. Acceptance Bar for Launch

- Full booking flow tested in PayPal sandbox, then a real £1 live transaction.
- VAT arithmetic verified against real invoices.
- Pencil workflow tested with the actual bookings team.
- 301 redirects verified against the old sitemap.
- Old WordPress site kept warm as rollback for at least a week.
