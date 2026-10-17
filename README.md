# AHHS Taxation & Digital Solutions — Corporate Web Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.469-F59E0B?logo=lucide&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-0A2540)](#)

> A modern, high-performance corporate platform and interactive fintech suite redesigned from the ground up for **AHHS Taxation & Digital Solutions**—a premier consultancy led by FCCA (UK) fellows and Lahore Tax Bar Association advocates.

---

## 🌟 Key Features

### ⚡ 1. Interactive Quote & Compliance Estimator
- Dynamically estimates turnaround times, senior partner review allocations, and compliance guarantees based on entity structure (*Private Limited, SMC, Freelancers, Sole Proprietors, Salaried*).
- Multi-service selection across FBR ATL, SECP, PRA Sales Tax, and Cloud Engineering.
- Automated 1-click WhatsApp deep-linking with pre-filled scope payloads.

### 🌓 2. Executive Dual-Theme Engine (Light & Dark Mode)
- **Light Mode (Default)**: Aligned with the AHHS crest logo palette (Deep Navy `#0A2540`, Royal Gold `#C59B27`, Ocean Blue `#0284C7`, Crisp White `#FFFFFF`).
- **Dark Mode**: High-end midnight obsidian aesthetic (`#070D18` canvas, `#0E1B33` glass cards, `#F8FAFC` luminous headings, `#F59E0B` radiant gold, `#38BDF8` tech cyan).
- **Zero FOUC (Flash of Unstyled Content)**: Pre-hydration theme detection script with persistent `localStorage` synchronization.

### 🏛️ 3. Dual-Division Services Matrix
- **Taxation & Corporate Law**: Income tax returns, FBR Active Taxpayer List (ATL) maintenance, Punjab Revenue Authority (PRA/SRB) sales tax, SECP company incorporation, and FBR audit defense.
- **Digital & Software Engineering**: Custom web apps, full-stack software development, FBR Tier-1 POS digital invoicing integration, cloud ERPs, and automation pipelines.

### 📅 4. FBR & SECP Sovereign Compliance Roadmap
- Interactive quarterly and annual regulatory calendar (Withholding Tax Statements, Monthly Sales Tax Returns, Annual Audits, SECP Form 29 & A filings).

### ⚖️ 5. Comparative Value Matrix (The AHHS Advantage)
- Side-by-side comparative analysis contrasting traditional accountants vs. isolated software agencies vs. the AHHS dual-power approach.

### 📞 6. Direct Client Intake & Concierge
- Interactive contact hub with quick copy-to-clipboard for head office coordinates.
- Case booking modals with tailored service pre-selection.
- Floating 24/7 WhatsApp advisory concierge.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6 (sub-second HMR & 334ms production bundling)
- **Styling**: Vanilla Modern CSS with CSS Custom Property Design Tokens & Glassmorphism
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Outfit* for headings, *Plus Jakarta Sans* for body)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/57055-ship-it/ahhs-taxation-and-degital-solutions.git

# Navigate to project directory
cd ahhs-taxation-and-degital-solutions

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at `http://localhost:5173`.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
AHHS Website/
├── public/                 # Static assets (icon.png, hero images, badges)
├── src/
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx              # Responsive header with theme toggle
│   │   ├── Hero.jsx                # Interactive hero with live dashboard preview
│   │   ├── QuoteCalculator.jsx     # Real-time scope & fee estimator
│   │   ├── ServicesSection.jsx     # Dual-division services grid
│   │   ├── ServiceModal.jsx        # Deep-dive scope & protocol modal
│   │   ├── ComplianceRoadmap.jsx   # FBR & SECP regulatory roadmap
│   │   ├── WhyUsSection.jsx        # Comparative benchmark matrix
│   │   ├── IndustriesSection.jsx   # Vertical-specific blueprints
│   │   ├── LeadershipSection.jsx   # FCCA & LLB executive advisory board
│   │   ├── TestimonialsSection.jsx # Client reviews & trust signals
│   │   ├── FaqSection.jsx          # Interactive accordions
│   │   ├── ContactSection.jsx      # Booking form & direct coordinates
│   │   ├── NewsletterSection.jsx   # Regulatory alerts subscription
│   │   ├── ConsultationModal.jsx   # Global consultation modal
│   │   ├── FloatingWhatsApp.jsx    # Sticky concierge button
│   │   └── Footer.jsx              # Corporate footer
│   ├── data/
│   │   └── websiteData.js  # Centralized business data & compliance timelines
│   ├── App.jsx             # Root application & global theme management
│   ├── index.css           # Design tokens, themes & typography
│   └── main.jsx            # Application entrypoint
├── index.html              # HTML shell with zero-FOUC theme detector
├── LINKEDIN_PROJECT.md     # LinkedIn portfolio description & launch post
├── package.json
└── vite.config.js
```

---

## 📄 License & Credits

Designed & Engineered for **AHHS Taxation & Digital Solutions**.  
All rights reserved.
