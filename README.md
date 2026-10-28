# LA CROWN® Luxury Aesthetic Clinic & Salon — Website Redesign

Redesigned, responsive, luxury digital experience and administrative portal for **LA CROWN® Luxury Aesthetic Clinic Pvt. Ltd.** located in Jayanagar, Bengaluru.

---

## 1. Verified Brand & Business Information

- **Brand:** LA CROWN® Luxury Aesthetic Clinic Pvt. Ltd.
- **Location:** No. 37, First Floor, Ashoka Pillar Road, 10th Main Road, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011
- **Telephone:** +91 96061 51079
- **Email:** lacrownaesthetics1111@gmail.com
- **Operating Hours:** Monday – Sunday, 10:30 AM – 9:00 PM (Open 7 Days)
- **Founder:** Sunitha Devaraj (Internationally recognized cosmetologist and nutrition expert)
- **Medical Director & Doctors:** Published under professional supervision with verified credentials.

---

## 2. Key Architectural Features

### A. Design System & Luxury Editorial Aesthetics
- **Color Palette:**
  - Deep Crown Burgundy: `#900000`
  - Royal Gold: `#C5A05A`
  - Champagne Gold: `#DCC49A`
  - Warm Ivory: `#FAF6ED`
  - Soft Cream: `#F4EEE3`
  - Premium Charcoal: `#303030`
  - Warm Taupe: `#8A8177`
- **Typography:** Playfair Display (Editorial Serif for Headings) + DM Sans (Clean Sans for Body & Forms) + Dancing Script (Restrained decorative accents).
- **Responsive Layout:** Mobile-first architecture with custom breakpoint styling (320px to 1440px+).

### B. Distinct Experiences & Complete Catalogues
- **Aesthetic Clinic:** Medically supervised procedures across Hair Restoration (Hair Transplant, Bio FUE, PRP, GFC, Mesotherapy, Stem Cell), Skin Care, Laser Treatments (Laser Hair Removal with body area breakdowns, Pico, CO2, Tattoo/Mole/Wart Removal), Medi-Facials (HydraFacial, Korean Glass, BB Glow, Vampire), Chemical Peels, Anti-Ageing (Botox, Dermal Fillers, Thread Lift, IV Glutathione), Body Slimming (EMSculpt, Lipo Laser, HIFU), and Semi-Permanent Makeup.
- **Luxury Salon:** Complete 2026 catalogue covering Men's Grooming (Stylist tiers, beard spa, keratin, rebonding, hair care), Women's Styling & Colour (Balayage, ombré, global, root touch-up, highlights), Threading & Waxing, De-Tan & Bleach, Salon Luxury Facials, Hand & Foot Spa, Gel/Acrylic Nails, Extensions, Body Relaxation & Massages, Bridal & Airbrush Makeup, and Baby & Kids' Pampering.

### C. Appointment Booking Journey
- Dynamic category-to-service filtering.
- Client validation (10-digit mobile, date, time slots, consent).
- Unique reference generation (`LCR-TIMESTAMP-RANDOM`).
- Clear confirmation screen with direct WhatsApp and phone options.
- Explicit notification that requests undergo staff scheduling verification.

### D. Administrative Request Management Console
- Route: `/admin/login` -> `/admin/dashboard`
- Protected authentication check.
- Real-time KPI summary counters (Total, Pending, In Progress, Completed, Cancelled, Today).
- Searchable, filterable client request table.
- Detailed modal view with status workflow lifecycle, status change logs, and internal staff notes.
- One-click CSV export.

---

## 3. Technology Stack

- **Framework:** React 19 + TypeScript (Strict Mode)
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS 3.4 + Custom PostCSS Design Tokens
- **Icons:** Lucide React
- **Routing:** React Router DOM 7
- **SEO:** Pre-configured `sitemap.xml`, `robots.txt`, OpenGraph tags, semantic schema tags.

---

## 4. Getting Started

### Prerequisites
Node.js (v18 or higher recommended) and npm.

### Installation
```bash
cd "lacrown exp1"
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 5. Administrative Credentials (Development Mode)

- **URL:** `/admin/login`
- **Username / Email:** `admin@lacrown.in`
- **Password:** `LaCrown@2024`
*(Use the convenient "Auto-fill demo credentials" button on the login screen for quick inspection)*

---

## 6. Full-Stack Architecture & Backend Integration

The project features a decoupled, production-ready full-stack architecture:

- **Frontend:** React 19 + TypeScript + Vite 8 SPA (Deployable to Vercel).
- **Backend Service:** Node.js + Express 4.22 REST API located in `backend/` (Deployable to Render).
- **Database:** Neon Serverless PostgreSQL with auto-migrated schema (`backend/db/schema.sql`).
- **Email Service:** Resend Transactional Email API for executive manager alerts & patient confirmations.

```
Website Frontend (React 19 / Vite)
        |
        | HTTP/HTTPS JSON Requests (VITE_API_BASE_URL)
        v
Backend REST API (Node.js / Express)
        |
        +---> Neon Serverless PostgreSQL (Queries, Insertions, Updates)
        |
        +---> Resend Email API (Manager Dispatch & Client Confirmations)
```

### Active API Endpoints

| Method | Route | Description | Auth / Security |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` / `/api/health` | Service uptime, DB connectivity, Resend status | Public |
| `POST` | `/api/appointments` | Book consultation, save to DB, send emails | Rate-Limited |
| `GET` | `/api/appointments` | List all appointments | `X-Admin-Key` |
| `PATCH`| `/api/appointments/:id/status` | Update appointment status | `X-Admin-Key` |
| `PATCH`| `/api/appointments/:id/notes` | Update staff internal notes | `X-Admin-Key` |
| `POST` | `/api/enquiries/franchise` | Submit franchise expression of interest | Rate-Limited |
| `GET` | `/api/enquiries/franchise` | List franchise inquiries | `X-Admin-Key` |
| `PATCH`| `/api/enquiries/franchise/:id/status` | Update franchise inquiry status | `X-Admin-Key` |
| `POST` | `/api/enquiries/contact` | Submit general message or clinical query | Rate-Limited |
| `GET` | `/api/enquiries/contact` | List general contact messages | `X-Admin-Key` |
| `POST` | `/api/admin/login` | Verify administrator credentials | Secure Verification |
| `GET` | `/api/admin/overview` | Aggregated metrics, recent bookings & inquiries | `X-Admin-Key` |

---

## 7. Local Development Guide

### Quick Start (Both Frontend & Backend)

1. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm run backend:install
   ```

3. **Configure Environment:**
   - In root, copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - In `backend/`, copy `.env.example` to `.env`:
     ```bash
     cd backend && cp .env.example .env && cd ..
     ```

4. **Start Backend Server:**
   ```bash
   npm run backend
   # or with live file watcher:
   npm run backend:dev
   ```
   Server runs on `http://localhost:8000`.

5. **Start Frontend Dev Server (in a second terminal):**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`. Requests to `/api` and `/health` automatically proxy to `http://localhost:8000`.

6. **Run Backend Verification Tests:**
   ```bash
   npm --prefix backend test
   ```

---

## 8. Production Deployment Guide

### A. Deploy Backend to Render
1. Push this repository to GitHub.
2. In [Render Dashboard](https://dashboard.render.com), create a new **Web Service**.
3. Set **Root Directory** to `backend`.
4. Build Command: `npm install` | Start Command: `npm start`.
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `DATABASE_URL` = *(Your Neon PostgreSQL connection string)*
   - `RESEND_API_KEY` = *(Your Resend API Key)*
   - `MANAGER_EMAIL` = `lacrownaesthetics1111@gmail.com`
   - `EMAIL_FROM` = `La Crown Concierge <onboarding@resend.dev>`
   - `CLIENT_ORIGIN` = `https://lacrown-pink.vercel.app`
   - `ADMIN_SECRET_KEY` = *(A secure random secret token)*

### B. Deploy Frontend to Vercel
1. In [Vercel Dashboard](https://vercel.com), import your repository.
2. Root Directory: `./` (Root).
3. Framework Preset: **Vite**.
4. In **Environment Variables**, set:
   - `VITE_API_BASE_URL` = `https://<your-render-backend-url>.onrender.com/api`
5. Deploy. All forms, appointment bookings, franchise proposals, contact queries, and the administrative dashboard will immediately connect to your live backend.
