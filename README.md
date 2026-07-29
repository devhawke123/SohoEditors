# Soho Editors

Training website rebuild (Talent/freelancer website to follow on the same shared backend). See `prd.md`, `architecture.md`, `rules.md`, `design.md`, and `memory.md` for full context — read `memory.md` first, it tracks current progress.

## Structure

```
frontend/   Next.js (TypeScript, Tailwind, App Router)
backend/    FastAPI (Python)
```

## Getting Started

### Frontend
```
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Backend
```
cd backend
# create/activate a virtualenv, then:
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

## Docs

- `prd.md` — requirements
- `architecture.md` — system design
- `rules.md` — best practices / conventions
- `design.md` — design system & screens (filled in once Figma is shared)
- `memory.md` — current progress, updated as work happens
