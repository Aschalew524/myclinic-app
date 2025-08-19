# Rivermark Family Clinic

Front desk board for a small family practice on the river. The app is a React client used by reception to run the day: the schedule, clipped clinical notes, the patient roster, waitlist, and provider load.

## What it does

- **Schedule** shows the clinic day in time slots, with visit type chips, room, status, and the clinical note on each card.
- **Patients** is a searchable roster with chart status filters and row selection for reminder work.
- **Staff** summarizes how many visits each provider still has open.
- Opening a visit focuses a dialog. Escape closes it and the listener is removed.

The clinic day in seed data is `2026-08-17`, so the board is stable in tests and local demos.

## Requirements

- Node.js 20
- npm (this repo ships exactly one lockfile: `package-lock.json`)

## Scripts

```bash
npm install
npm run dev
npm test
npm run lint
npm run typecheck
npm run build
```

Tests use Vitest and Testing Library. They read local seed data only: no credentials, no network, no machine-specific files.

## Project layout

```
src/
  components/   schedule cards, roster, notes, waitlist, drawer
  pages/        schedule, patients, staff
  data/seed.ts  providers, patients, appointments, waitlist
  hooks/        selected clinic day and derived lists
```
