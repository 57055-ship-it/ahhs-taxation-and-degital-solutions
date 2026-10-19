export const COMPANY_INFO = {
  name: "AHHS Taxation & Digital Solutions",
  shortName: "AHHS",
  tagline: "Strategic Taxation Meets Cutting-Edge Digital Innovation",
  subTagline: "Your trusted global partner for corporate tax filing, FBR & PRA compliance, SECP registration, and enterprise software engineering.",
  phone1: "+92 306 981 3200",
  phone1Raw: "+923069813200",
  phone2: "+1 (807) 799 9590",
  phone2Raw: "+18077999590",
  email: "ahhstaxtationanddigitalsolution@gmail.com",
  address: "101 Al-Hayat Center Block C, PIA Society, Lahore, Pakistan",
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM (PKT)",
  whatsappUrl: "https://wa.me/923069813200?text=Hello%20AHHS%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  socials: {
    facebook: "https://web.facebook.com/profile.php?id=61575004804467",
    linkedin: "https://www.linkedin.com/company/ahhs-taxation-digital-solutions/",
    instagram: "https://www.instagram.com/ahhs.tax.digital/"
  },
  stats: [
    { label: "Active Corporate Clients", value: "172+", suffix: "+", desc: "Across Pakistan, USA, UK & Middle East" },
    { label: "Client Recommendation Rate", value: "97%", suffix: "%", desc: "Based on verified client feedback" },
    { label: "FBR & SECP Compliance Rate", value: "100%", suffix: "%", desc: "Zero audit penalties incurred" },
    { label: "Industry Accolades & Milestones", value: "46+", suffix: "+", desc: "Recognized for fiscal & tech excellence" }
  ]
};

export const SERVICES_DATA = [
  // --- TAX & FINANCIAL SERVICES ---
  {
    id: "income-tax-filing",
    division: "tax",
    title: "Income Tax Return Filing",
    badge: "Most Requested",
    icon: "Calculator",
    summary: "Precision tax filing covering salaried individuals, business executives, remote freelancers, AOPs, and corporate enterprises.",
    description: "Navigating FBR income tax compliance requires precision to safeguard your assets and optimize legitimate tax credits. AHHS handles end-to-end income tax declarations, wealth statement reconciliations, foreign remittance disclosures, and deductions optimization.",
    features: [
      "Salaried Personnel, Executive & Director Filings",
      "Freelancer & Remote IT Worker IT Exemption Submissions",
      "Wealth Statement & Asset Reconciliation (Form 116)",
      "Foreign Remittance & PRC Verification",
      "Active Taxpayer List (ATL) Immediate 24h Activation"
    ],
    timeline: "24 – 48 Hours",
    deliverables: "Stamped FBR Acknowledgement, Wealth Statement computation sheet, CPR voucher."
  },
  {
    id: "sales-tax-filing",
    division: "tax",
    title: "Monthly Sales Tax Return (FBR & PRA)",
    badge: "Monthly Retainer",
    icon: "FileSpreadsheet",
    summary: "Complete monthly sales tax return filing with FBR, PRA, SRB, and KPRA, ensuring input/output reconciliation without penalties.",
    description: "Avoid crippling penalties, audit flags, and blocked STRN accounts. Our team handles sales tax return submissions on the 15th and 18th of every month, reconciling sales invoices, purchase invoices, and provincial sales tax credits.",
    features: [
      "FBR Federal Sales Tax Returns (Goods)",
      "Provincial Services Returns (PRA, SRB, KPRA, BRA)",
      "Input Tax Credit Optimization & Verification",
      "E-Invoicing and FBR Digital Invoicing Alignment",
      "Annexure-C and Annexure-A Reconciliation"
    ],
    timeline: "Monthly by 15th & 18th",
    deliverables: "Monthly Filed CPR, Annexure validation, Monthly Tax Liability Summary."
  },
  {
    id: "company-registration",
    division: "tax",
    title: "Company & SECP Registration",
    badge: "Business Setup",
    icon: "Building2",
    summary: "End-to-end legal business formation: SECP Private Limited, Single Member Companies (SMC), AOPs, and Sole Proprietorships.",
    description: "Launch your legal entity with complete security. We handle digital name reservation, drafting Memorandum and Articles of Association (MOA/AOA), SECP e-services submission, digital signatures, and immediate corporate bank account resolution.",
    features: [
      "SECP Private Limited & Single Member Company (SMC)",
      "Partnership / Association of Persons (AOP) Deed Registration",
      "Sole Proprietorship Commercial Setup",
      "Corporate Digital Signatures (NIFT / SECP)",
      "Corporate Bank Account Resolution Pack"
    ],
    timeline: "3 – 5 Business Days",
    deliverables: "SECP Certificate of Incorporation, Approved MOA & AOA, Form II, Corporate NTN."
  },
  {
    id: "ntn-registration",
    division: "tax",
    title: "NTN Registration & Tax Profiling",
    badge: "Essential",
    icon: "ShieldCheck",
    summary: "Swift National Tax Number (NTN) registration for individuals, businesses, and foreign investors with FBR Iris integration.",
    description: "Get registered legally with zero red tape. We ensure your business profile in FBR Iris accurately reflects your business activities, registered utilities, bank accounts, and principal business places to avoid future compliance friction.",
    features: [
      "Individual Salaried & Business NTN Issuance",
      "Corporate & AOP NTN Creation",
      "Iris Profile Modification & Business Address Linking",
      "Biometric Facilitation Support",
      "Immediate Active Taxpayer Status Validation"
    ],
    timeline: "Same Day (24 Hours)",
    deliverables: "Official FBR NTN Certificate & Iris Login Credentials."
  },
  {
    id: "tax-compliance-advisory",
    division: "tax",
    title: "Tax Compliance & Notice Defense",
    badge: "Legal Protection",
    icon: "Scale",
    summary: "Defense against FBR audit notices (Sec 122, 177, 214C), withholding tax audits, penalty waivers, and advance tax computations.",
    description: "Receiving a tax notice can threaten business continuity. Led by our Chairman Hasnain Abbas (FCCA - LTBA) and CEO Hassan Shahzad (LLB), we draft robust legal replies, represent you before commissioners, and challenge unlawful tax demands.",
    features: [
      "Notice Defense under Section 122, 177, 161, 214C",
      "Withholding Tax Statements (Sec 165) Submission",
      "Quarterly Advance Tax Calculations (Sec 147)",
      "Appeals before Commissioner Inland Revenue (Appeals)",
      "Withholding Exemption Certificate Processing"
    ],
    timeline: "Urgent 24/7 Response",
    deliverables: "Legal written reply, case brief, commissioner representation, order sheets."
  },
  {
    id: "accounts-financials",
    division: "tax",
    title: "Accounts & Financial Statements",
    badge: "Core Finance",
    icon: "Receipt",
    summary: "Preparation of GAAP & IFRS compliant financial statements, balance sheets, profit & loss reports, and computerized bookkeeping.",
    description: "Maintain clear financial visibility for stakeholders, lenders, and tax authorities. We build reliable books of accounts, perform bank reconciliations, and formulate audited-ready financial statements for corporate review.",
    features: [
      "Balance Sheet & Income Statement Preparation",
      "Cash Flow Statements & Equity Changes",
      "Cloud Bookkeeping Setup (QuickBooks, Xero, ERP)",
      "Fixed Asset Register & Depreciation Schedules",
      "Financial Analysis for Bank Loan / Investor Pitching"
    ],
    timeline: "Weekly / Monthly Retainer",
    deliverables: "IFRS-Compliant Financial Statements, Management Accounts, Ledger Reconciliations."
  },
  {
    id: "audit-assurance",
    division: "tax",
    title: "Audit & Assurance Services",
    badge: "Certification",
    icon: "Award",
    summary: "Independent statutory audits, internal financial controls evaluation, tax audits, and forensic accounting reviews.",
    description: "Ensure total compliance and eliminate internal financial leakage. Our audit division executes rigorous verification of internal controls, revenue recognition, inventory management, and statutory tax reporting.",
    features: [
      "Statutory Annual Financial Audits",
      "Internal Controls & Risk Assessment Review",
      "FBR Tax Audit & Monitoring Facilitation",
      "Forensic & Due Diligence Reviews for M&A",
      "Compliance Verification for SECP & FBR"
    ],
    timeline: "Project Based",
    deliverables: "Independent Auditor's Report, Management Letter, Risk Matrix."
  },
  {
    id: "debt-recovery",
    division: "tax",
    title: "Commercial Debt Recovery",
    badge: "Financial Recovery",
    icon: "BadgeDollarSign",
    summary: "Ethical, systematic legal and corporate debt recovery to restore cash flow and resolve overdue accounts receivable.",
    description: "Unpaid invoices and bad debts starve business growth. We combine legal demand notices, structured dispute mediation, and commercial litigation backing to recover locked capital swiftly.",
    features: [
      "Corporate Accounts Receivable Audit",
      "Formal Legal Demand Notices (Advocate High Court)",
      "Structured Out-of-Court Settlement Negotiation",
      "Summary Suit / Recovery Suit Legal Preparation",
      "No-Harassment, Strictly Legal Ethical Recovery"
    ],
    timeline: "Case Dependent",
    deliverables: "Recovery roadmap, legal notice copies, settlement deeds, recovered funds."
  },

  // --- DIGITAL & SOFTWARE SERVICES ---
  {
    id: "web-development",
    division: "digital",
    title: "Enterprise Web Development",
    badge: "Full-Stack Tech",
    icon: "Globe",
    summary: "High-performance, bespoke web platforms, SaaS apps, corporate portals, and e-commerce stores built in React, Next.js, and Node.js.",
    description: "Ditch slow, vulnerable legacy templates. We build modern, blazing-fast web applications designed for conversion, SEO dominance, and effortless scalability. Fully responsive across smartphones, tablets, and ultra-wide screens.",
    features: [
      "Next.js / React Modern Architectures",
      "FBR POS & Digital Payment Gateway Integration",
      "Ultra-Fast Core Web Vitals & Sub-Second Loading",
      "Bespoke Responsive UI/UX with Micro-Interactions",
      "Headless CMS & Custom Admin Dashboards"
    ],
    timeline: "2 – 4 Weeks",
    deliverables: "Source code repository, staging & live production deploy, SSL, responsive design system."
  },
  {
    id: "mobile-development",
    division: "digital",
    title: "Mobile App Development",
    badge: "iOS & Android",
    icon: "Smartphone",
    summary: "Native and cross-platform iOS & Android mobile applications engineered for smooth performance and intuitive user journeys.",
    description: "Turn your business process or startup concept into a high-rating mobile app. From offline data synchronization and biometric logins to push notifications and integrated payment processing, we craft enterprise-grade mobile solutions.",
    features: [
      "Flutter & React Native Cross-Platform Excellence",
      "Native iOS (Swift) & Android (Kotlin) Optimization",
      "Biometric Authentication & Offline Data Sync",
      "Real-Time Push Notifications & Cloud Webhooks",
      "App Store & Google Play Publishing Compliance"
    ],
    timeline: "4 – 8 Weeks",
    deliverables: "Tested APK/AAB and IPA builds, App Store submission support, API integration specs."
  },
  {
    id: "software-development",
    division: "digital",
    title: "Custom Software & ERP Systems",
    badge: "Automation",
    icon: "Code2",
    summary: "Bespoke ERPs, billing engines, CRM software, and inventory management tailored specifically to your workflows.",
    description: "Off-the-shelf software rarely fits intricate business workflows. We engineer tailor-made ERP platforms that connect your inventory, payroll, accounting, sales pipelines, and automated tax reporting into a single central nervous system.",
    features: [
      "Custom ERP & CRM Architecture",
      "Automated Tax & Withholding Calculation Engines",
      "Warehouse & Multi-Branch Inventory Tracking",
      "Role-Based Access Control (RBAC) & Audit Trails",
      "API Integrations with Banking & Shipping APIs"
    ],
    timeline: "Custom Scope",
    deliverables: "Fully deployed software system, database schema, user manuals, staff training sessions."
  },
  {
    id: "digital-marketing",
    division: "digital",
    title: "Performance Marketing & Branding",
    badge: "Revenue Growth",
    icon: "TrendingUp",
    summary: "High-converting paid advertising, social media campaigns, brand identity design, and lead-generation funnels.",
    description: "Digital presence without conversions is wasted capital. We plan and manage high-ROI performance marketing across Meta, Google Ads, and LinkedIn, supported by distinctive brand guidelines and persuasive sales copy.",
    features: [
      "Targeted Meta (Facebook & Instagram) Ad Campaigns",
      "Google Search & Intent-Based Performance Ads",
      "LinkedIn B2B Lead Generation & Account Targeting",
      "Corporate Brand Identity & Visual Stylebooks",
      "Conversion Rate Optimization (CRO) & Funnel Design"
    ],
    timeline: "Monthly Growth Sprint",
    deliverables: "Weekly ROI reports, ad creative assets, targeting cohorts, live performance dashboards."
  },
  {
    id: "seo-content",
    division: "digital",
    title: "SEO & Authority Content Writing",
    badge: "Organic Dominance",
    icon: "Search",
    summary: "Dominate search engine rankings with semantic on-page SEO, technical architecture fixes, and high-authority industry content.",
    description: "Capture clients at the exact moment they search for your solutions. We execute in-depth technical SEO, build keyword dominance strategies, and author authoritative content that builds unshakeable domain authority.",
    features: [
      "Comprehensive Technical & Speed SEO Audits",
      "High-Intent Commercial Keyword Strategy",
      "Content Architecture & Thought-Leadership Articles",
      "Google Local Business Pack Dominance",
      "Authoritative High-Trust Backlink Acquisition"
    ],
    timeline: "3 – 6 Month Compounding Sprint",
    deliverables: "Monthly ranking reports, Google Search Console audit, published authority content."
  },
  {
    id: "developer-accounts",
    division: "digital",
    title: "Developer Accounts Setup & Verification",
    badge: "App Publishing",
    icon: "Sparkles",
    summary: "Official Google Play Console and Apple Developer program account setup, corporate D-U-N-S verification, and policy clearance.",
    description: "Google and Apple have introduced stringent corporate verification guidelines. We assist companies, startups, and solo developers in obtaining, configuring, and verifying developer accounts with zero rejection hurdles.",
    features: [
      "Google Play Console Organization Account Setup",
      "Apple Developer Program & D-U-N-S Number Assistance",
      "Identity & Business Address Verification Clearance",
      "App Store Policy Compliance Review",
      "Merchant Account & In-App Purchase Setup"
    ],
    timeline: "3 – 7 Business Days",
    deliverables: "Verified, active Google Play / Apple Developer accounts ready for production app launches."
  },
  {
    id: "database-cloud",
    division: "digital",
    title: "Database Architecture & Cloud Setup",
    badge: "Infrastructure",
    icon: "Database",
    summary: "Secure cloud database design, automated backups, PostgreSQL / MySQL configuration, and DevOps server hardening.",
    description: "Your business data is your most critical asset. We architect fault-tolerant, encrypted databases on AWS, Google Cloud, and private servers, establishing continuous replication, real-time failovers, and rigorous security barriers.",
    features: [
      "Relational & NoSQL Database Optimization (Postgres, Mongo)",
      "Automated Daily Encrypted Cloud Backups",
      "Cloud Server Provisioning (AWS, DigitalOcean, VPS)",
      "Zero-Downtime Migration & Data Integrity Checks",
      "SSL/TLS Security Hardening & Firewall Configuration"
    ],
    timeline: "3 – 5 Days",
    deliverables: "Configured cloud database, backup scripts, disaster recovery documentation."
  }
];

export const COMPLIANCE_CALENDAR = [
  {
    period: "15th of Every Month",
    title: "Monthly Sales Tax E-Filing Annexures",
    authority: "FBR & Provincial Authorities (PRA/SRB)",
    category: "Sales Tax",
    urgency: "High",
    description: "Annexure-C submission of sales invoices and purchase reconciliation to claim eligible input tax credits."
  },
  {
    period: "18th of Every Month",
    title: "Monthly Sales Tax Payment & Return CPR",
    authority: "FBR / PRA / SRB / KPRA",
    category: "Sales Tax",
    urgency: "High",
    description: "Final sales tax liability payment into National Bank / State Bank via generated CPR and return submission."
  },
  {
    period: "Quarterly (Oct, Jan, Apr, Jun)",
    title: "Advance Income Tax Installment (Sec 147)",
    authority: "Federal Board of Revenue (FBR)",
    category: "Income Tax",
    urgency: "Medium",
    description: "Mandatory quarterly advance tax liability calculation based on turnover for companies and individuals."
  },
  {
    period: "30th September",
    title: "Annual Income Tax Returns (Individuals & AOP)",
    authority: "FBR Iris Portal",
    category: "Income Tax",
    urgency: "Critical",
    description: "Filing of annual tax returns and wealth statements for salaried individuals, freelancers, and AOP partnerships."
  },
  {
    period: "31st December",
    title: "Corporate Annual Tax Returns (Companies)",
    authority: "FBR & SECP",
    category: "Corporate",
    urgency: "Critical",
    description: "Statutory audited returns and corporate tax computation for Private Limited and Public Companies."
  },
  {
    period: "Annually within 30 Days of AGM",
    title: "SECP Form 29 & Form A Corporate Filing",
    authority: "Securities & Exchange Commission of Pakistan",
    category: "SECP",
    urgency: "Medium",
    description: "Annual corporate compliance, director updates, shareholding status, and statutory register maintenance."
  }
];

export const LEADERSHIP_DATA = [
  {
    name: "Hasnain Abbas",
    title: "Chairman & Senior Partner",
    credentials: "FCCA • LTBA Advocate",
    specialization: "Corporate Taxation, High-Stakes Fiscal Strategy & Cross-Border Compliance",
    photo: "/hasnain-abbas.jpeg",
    bio: "Fellow of the Association of Chartered Certified Accountants (FCCA) and esteemed advocate at the Lahore Tax Bar Association (LTBA). Hasnain possesses over a decade of distinguished experience guiding blue-chip corporations, multinational setups, and high-net-worth individuals through complex tax legislation, transfer pricing, and strategic wealth preservation.",
    quote: "Precision in taxation isn't just about avoiding penalties—it is the strategic engine that unleashes corporate expansion and preserves legacy wealth."
  },
  {
    name: "Hassan Shahzad",
    title: "Chief Executive Officer (CEO)",
    credentials: "BSCS • LLB",
    specialization: "Digital Systems Architecture, Cyber Law & Enterprise Technology",
    photo: "/hassan-shahzad.jpeg",
    linkedin: "https://www.linkedin.com/in/hassan-shahzad-8bba3035a/",
    bio: "Uniquely holding credentials in Computer Science (BSCS) and Jurisprudence (LLB), Hassan serves as the visionary bridge between modern technology engineering and regulatory governance. Under his leadership, AHHS develops cutting-edge software ecosystems that are legally compliant by design, transforming how modern enterprises scale.",
    quote: "We don't merely write code or file papers; we build sovereign, compliant digital engines that elevate our clients into market leaders."
  }
];

export const COMPARISON_DATA = [
  {
    metric: "Tax & Financial Mastery",
    traditional: "Basic local tax filing with minimal strategic planning",
    techAgency: "Zero taxation knowledge; treats finance as an afterthought",
    ahhs: "FCCA & LTBA advocate led; deep fiscal structuring & audit defense"
  },
  {
    metric: "Software & Digital Capability",
    traditional: "Non-existent; relies on outdated spreadsheets & paper logs",
    techAgency: "Good at building visuals, but ignores business regulatory logic",
    ahhs: "Full-Stack React, Cloud & Mobile engineering integrated with business logic"
  },
  {
    metric: "FBR & SECP Digital Invoicing",
    traditional: "Struggles with modern e-invoicing and digital portals",
    techAgency: "Cannot integrate POS/ERP with FBR APIs without external consultants",
    ahhs: "Direct seamless integration of software systems with FBR & PRA portals"
  },
  {
    metric: "Turnaround Time & Response",
    traditional: "Days of waiting, missed deadlines, last-minute rushes",
    techAgency: "Unpredictable delivery dates and scope creep",
    ahhs: "Guaranteed SLA timelines with direct WhatsApp and portal communication"
  },
  {
    metric: "Corporate Accountability",
    traditional: "Fragmented accountability with hidden surprise costs",
    techAgency: "Passes the blame when compliance issues arise",
    ahhs: "Unified dual-division synergy: 100% accountability under one roof"
  }
];

export const INDUSTRIES_SERVED = [
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    icon: "Stethoscope",
    summary: "Doctors, private clinics, diagnostic labs, and hospital groups.",
    detail: "We manage provincial sales tax exemptions on healthcare services, individual tax returns for medical specialists, and seamless medical billing systems."
  },
  {
    id: "tech-startups",
    name: "Technology & SaaS",
    icon: "Cpu",
    summary: "Software houses, freelance IT exporters, and venture-backed SaaS startups.",
    detail: "Expertise in 100% IT export income tax exemptions, PSEB registration, cross-border equity structuring, and scalable cloud application development."
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Digital Brands",
    icon: "ShoppingCart",
    summary: "Online direct-to-consumer stores, Amazon/Shopify sellers, and marketplaces.",
    detail: "Multi-provincial sales tax compliance, automated payment gateway reconciliations, and custom Shopify/Next.js store engineering."
  },
  {
    id: "retail",
    name: "Retail & Distribution",
    icon: "Store",
    summary: "Wholesalers, retail outlets, supermarket chains, and FMCG distributors.",
    detail: "FBR digital POS tier-1 invoicing integration, inventory ERP systems, sales tax return filing, and withholding tax certificates."
  },
  {
    id: "construction",
    name: "Construction & Real Estate",
    icon: "HardHat",
    summary: "Builders, contractors, architects, and real estate development firms.",
    detail: "FBR Section 7E land tax advisory, fixed tax regime calculations for builders, sales tax on services (PRA), and contractor project management portals."
  },
  {
    id: "education",
    name: "Education & EdTech",
    icon: "GraduationCap",
    summary: "Private school networks, universities, academies, and online course platforms.",
    detail: "Tax exemption filings for non-profit educational trusts, SECP Section 42 company registrations, and learning management system (LMS) development."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Tariq Mahmood",
    role: "Managing Director",
    company: "MediCare Specialty Clinics",
    division: "Taxation & Financial Advisory",
    stars: 5,
    text: "Managing tax compliance across four diagnostic clinics used to be a chronic headache until we brought in AHHS. Hasnain Abbas and his team audited our filings, unlocked substantial legitimate tax deductions we had missed for years, and keep our PRA sales tax in flawless standing."
  },
  {
    name: "Zainab Al-Hussaini",
    role: "CEO & Co-Founder",
    company: "TechNexus Global Solutions",
    division: "Digital & Tax Synergy",
    stars: 5,
    text: "AHHS is the only firm we found capable of handling both our US/Pakistan cross-border corporate structure and re-architecting our web application. Hassan Shahzad's dual background in law and computer science is an absolute gamechanger for tech founders."
  },
  {
    name: "Kamran Siddiqui",
    role: "Head of Operations",
    company: "Apex Retail Distribution",
    division: "Digital ERP & Sales Tax",
    stars: 5,
    text: "When FBR mandated Tier-1 POS integration, other vendors gave us weeks of downtime. AHHS integrated our retail points directly into the FBR portal in under 72 hours, while their tax department smoothly handled all our monthly withholding statements."
  }
];

export const FAQ_DATA = [
  {
    question: "Why should I choose AHHS instead of hiring a separate tax firm and dev agency?",
    answer: "Most businesses suffer from a critical communication disconnect between their accountants and their software developers. Your software generates financial data that must strictly align with tax laws (such as FBR digital invoicing, withholding rules, and sales tax reconciliations). At AHHS, our FCCA tax experts work directly beside our senior software engineers, delivering a single, unified solution that saves you immense time, money, and legal risk."
  },
  {
    question: "How quickly can you get me onto the FBR Active Taxpayer List (ATL)?",
    answer: "For individuals and businesses who need urgent Active Taxpayer status to avoid doubled withholding tax deductions on banking and property transactions, we can prepare, calculate, and e-file your returns within 24 hours, updating your status on the official FBR Iris portal immediately."
  },
  {
    question: "What documents are required to register a Private Limited Company with SECP?",
    answer: "To register a Private Limited Company or Single Member Company (SMC), you need: CNIC/Passport copies of directors and shareholders, 3 proposed company names, registered office address in Pakistan, principal business objective, and phone/email for digital verification. Our team manages the entire process from name reservation to incorporation certificate in 3 to 5 business days."
  },
  {
    question: "What technologies do you use for web and software development?",
    answer: "We engineer enterprise-grade solutions using modern stacks: React, Next.js, Node.js, Python, Flutter, PostgreSQL, and cloud infrastructure on AWS and Google Cloud. We prioritize sub-second loading speeds, robust security encryption, clean code architecture, and mobile-first responsiveness."
  },
  {
    question: "Can you represent my company if FBR issues an audit notice?",
    answer: "Yes, absolutely. Our Chairman Hasnain Abbas is an FCCA and an active advocate at the Lahore Tax Bar Association (LTBA). We draft legally sound responses to audit notices under sections 122, 177, 161, and 214C, and provide representation before Commissioners and Appellate Tribunals."
  },
  {
    question: "How do we get started with a consultation?",
    answer: "You can book a private consultation directly through our website booking form, call our direct office line at +92 306 981 3200, or send an instant WhatsApp message to +1 (807) 799 9590 / +92 306 981 3200. Our partners respond promptly with tailored guidance."
  }
];
