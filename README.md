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

## 6. Backend Integration Layer Specification

The mock adapter in `src/data/mockApi.ts` is structured to seamlessly plug into a production backend. The recommended REST API endpoints are:

- `POST /api/requests` — Submit new appointment request.
- `GET /api/admin/requests` — Retrieve filtered request table.
- `GET /api/admin/requests/:id` — Request detail and history trail.
- `PATCH /api/admin/requests/:id/status` — Update status with audit note.
- `PATCH /api/admin/requests/:id/notes` — Save internal clinic notes.
- `POST /api/admin/auth/login` — Authenticate staff with JWT/session cookie.
- `POST /api/admin/auth/logout` — Revoke administrative session.
