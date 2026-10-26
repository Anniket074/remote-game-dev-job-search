# Skill: Standardized Application Dossier Template

**Purpose:** Consistent, complete application packet structure for every role — ensures nothing is missed and enables rapid customization.

**Philosophy:** One canonical resume + role-tailored cover letter + portable portfolio link + GitHub + standardized metadata.

---

## 📦 Standard Packet Contents

| Asset | Format | Naming Convention | Required? |
|-------|--------|-------------------|-----------|
| **Resume** | PDF (text-layer) | `Anniket_Resume.pdf` | ✅ Always |
| **Cover Letter** | PDF (text-layer) | `Anniket_Cover_Letter_{CompanySlug}_{RoleSlug}.pdf` | ✅ For ATS (Greenhouse, Ashby, etc.) |
| **Cover Letter** | HTML (source) | `Anniket_Cover_Letter_{CompanySlug}_{RoleSlug}.html` | ✅ For regeneration |
| **Portfolio** | URL | `https://portfolio-web-pi-inky.vercel.app/` | ✅ Always in form + cover letter |
| **GitHub** | URL | `https://github.com/Anniket074` | ✅ Always in form + cover letter |
| **LinkedIn** | URL | `https://linkedin.com/in/anniket1912` | ✅ Always in form |
| **Complete Dossier** | Markdown | `Anniket_Complete_Profile_Dossier.md` | Reference only |

---

## 📄 Resume Specification (`Anniket_Resume.pdf`)

**Single canonical version** — never customize per role. ATS reads this first.

### Content Sections (in order)
1. **Header** — Name, target titles, contact, portfolio, GitHub, LinkedIn
2. **Professional Summary** — 3 lines: 50+ Unity titles, 35+ Quest VR @ 90+ FPS, multiplayer/shaders/systems
3. **Core Competencies** — Keywords for ATS: Unity, C#, Unreal Engine, C++, VR/AR/MR, Multiplayer (Photon, WebSockets, TCP/UDP), HLSL/GLSL Shaders, Graphics Programming, Performance Optimization, Gameplay Systems, AI/Behavior Trees, CI/CD, Git
4. **Professional Experience** — Reverse chronological, quantified achievements
5. **Key Projects** — 5-7 highlight projects with tech stack + metrics
6. **Education** — B.Tech Computer Science
7. **Technical Skills** — Categorized: Engines, Languages, Graphics, Networking, Tools, Platforms

### ATS Optimization Rules
- Standard section headers (no creative names)
- No columns, tables, text boxes, graphics
- Keywords from job description naturally integrated
- Quantified metrics everywhere (50+, 35+, 90+ FPS, sub-11ms, 8+ years)
- File size: ~250KB (under typical 500KB limits)
- Text selectable (not scanned/image)

---

## 📝 Cover Letter Specification

### One per ATS application (Greenhouse, Ashby, Lever, Workable, JazzHR, Recruitee, etc.)
### NOT needed for: LinkedIn Easy Apply, Indeed SmartApply, simple email applications

### Structure (from `pdf-generation-pipeline.md` template)
```
Header: Name | Target Title | Contact Block (6 lines)
Date + Hiring Team + Company
Subject Line: "Application for {Exact Role Title}"
Salutation: "Dear {Hiring Team / Company Name} Team,"
Opening: 1 paragraph — hook + shipped metrics + company alignment
Body: 1 paragraph — transition to highlights
Highlights: 4 bullet points, each: <strong>Title:</strong> Description with tech specifics
Closing: 1 paragraph — portfolio link + call to action
Signoff: Name, degree, contact, portfolio, LinkedIn
```

### Role-Specific Highlight Database

| Role Archetype | Highlight 1 | Highlight 2 | Highlight 3 | Highlight 4 |
|----------------|-------------|-------------|-------------|-------------|
| **Gameplay Engineer / Systems** | Core Gameplay Frameworks & Extensible Architecture | Multiplayer Replication & RPC Architecture | Performance Profiling & 90+ FPS Optimization | Technical Leadership & Mentorship |
| **Rendering / Graphics Engineer** | Custom HLSL/GLSL Shaders & Compute | GPU Profiling (RenderDoc/PIX/Unreal Insights) | Real-Time Lighting & PBR Pipelines | Sub-11ms Frame Budgets on Mobile VR |
| **VR/AR/XR Engineer** | 35+ Quest Titles @ 90+ FPS | Single-Pass Stereo & Fixed Foveated Rendering | Input/Interaction Systems (Hands, Controllers, Eye Tracking) | OpenXR / Meta XR SDK Mastery |
| **Technical Game Designer** | Data-Driven Systems (Abilities, Progression, Economy) | Rapid Prototyping → Production Pipeline | Cross-Disciplinary Pod Leadership | Balance Matrices & Telemetry-Driven Tuning |
| **Level Designer** | Blockout → Polish Pipeline | Tension Curves & Environmental Pacing | Technical Scripting (Triggers, Events, Streaming) | Playtesting & Iteration Leadership |
| **AI / Gameplay Programmer** | Behavior Trees & Utility AI | Navigation & Crowd Systems | Combat AI (Tactical, Boss Patterns) | Performance at Scale (50+ agents) |
| **Engine / Tools Programmer** | Custom Engine Modules & Runtime Systems | Editor Tools & Content Pipelines | CI/CD & Build Automation | Memory/Performance Profiling Tools |
| **Lead / Staff / Principal** | Technical Vision & Architecture Decisions | Team Mentorship & Career Development | Cross-Functional Alignment (Design/Art/Prod) | Shipping at Scale (Multiple Titles) |

### Company-Specific Customization Points
- **Opening paragraph:** Reference their specific game/tech (Poppy Playtime, Spider-Man, Ratchet & Clank, Judas, etc.)
- **Hiring team address:** "Hiring Team — Systems Engineering" vs "Design Leadership" vs "Engineering Team"
- **Highlight emphasis:** Reorder/weight based on job description keywords

---

## 🎯 Application Metadata (For Tracker)

```markdown
| # | Company | Role | Portal / ATS | Status | Assets Attached |
|---|---------|------|--------------|--------|-----------------|
| 45 | Netflix | Senior Game Engineer, Gen AI - Games | Netflix Careers (Greenhouse?) | 🔄 In Progress | `Anniket_Resume.pdf`, `Anniket_Cover_Letter_Netflix_SeniorGameEngineerGenAI.pdf` |
```

### Status Values
- 🔄 **In Progress** — Form opened, filling
- ⏳ **Submitted (Pending Confirmation)** — Submitted, waiting for confirmation page
- ✅ **Submitted & Confirmed** — Confirmation page captured, URL logged
- ❌ **Failed / Blocked** — Error, captcha, login required, not remote
- 🚫 **Withdrawn** — Role filled, not remote, duplicate

---

## 🔧 Pre-Submission Checklist

### For Greenhouse / Ashby / Lever / Workable / JazzHR / Recruitee / Trakstar / Breezy HR / Gusto
- [ ] Resume PDF ready (`Anniket_Resume.pdf`)
- [ ] Cover letter PDF generated (`Anniket_Cover_Letter_{Company}_{Role}.pdf`)
- [ ] Cover letter HTML source saved
- [ ] Portfolio URL copied
- [ ] GitHub URL copied
- [ ] LinkedIn URL copied
- [ ] Target role title matches job posting exactly
- [ ] Company name matches job posting exactly
- [ ] Date updated to today
- [ ] All highlight bullets relevant to role

### For LinkedIn Easy Apply / Indeed SmartApply / External Forms
- [ ] Resume PDF ready
- [ ] Portfolio URL in profile/bio
- [ ] Cover letter text ready for copy-paste (if text box exists)
- [ ] Screening questionnaire answers prepared (if known)

---

## 📋 Role-Specific Questionnaire Prep

### Common Screening Questions (Have Answers Ready)

| Question | Prepared Answer |
|----------|-----------------|
| **Years of Unity experience** | 8+ years commercial, 50+ shipped titles |
| **VR experience** | 35+ Meta Quest titles, 90+ FPS locked, OpenXR, Meta XR SDK, hand/eye tracking |
| **Multiplayer/Networking** | Authoritative server, client prediction, lag compensation, WebSockets, TCP/UDP, Photon, 50+ CCU |
| **Shaders/Graphics** | Custom HLSL/GLSL, compute shaders, PBR, post-process, RenderDoc/PIX profiling |
| **Performance optimization** | Sub-11ms frame budgets, draw call batching, memory pooling, GPU/CPU profiling |
| **Gameplay systems** | Ability systems, inventory, progression, economy, AI behavior trees, data-driven design |
| **Leadership** | Led engineering pods, RFC design docs, code reviews, cross-disciplinary coordination |
| **Remote work** | 100% remote since 2020, async communication, timezone overlap (IST/EST/PST) |
| **Visa sponsorship** | Required for US/UK/EU; authorized India; no relocation |
| **Notice period** | Immediate / 0 notice |
| **Salary expectations** | Competitive global remote rates for Senior/Lead (8+ yr Unity/VR); open to discuss |

---

## 📁 File Organization

```
D:\Linkedin\
├── Anniket_Resume.pdf                    ← CANONICAL (never rename)
├── Anniket_Resume.html                   ← Source for resume updates
├── Anniket_Cover_Letter_{Co}_{Role}.html ← Per-application HTML source
├── Anniket_Cover_Letter_{Co}_{Role}.pdf  ← Per-application PDF (attach to ATS)
├── Application_Submission_Tracker.md     ← Append-only master log
├── Target_Jobs_Application_Kit.md        ← Job database + pitch templates
├── Anniket_Complete_Profile_Dossier.md   ← Full extracted profile
└── skills\                               ← Automation skills
    ├── greenhouse-ats-automation.md
    ├── react-select-handling.md
    ├── pdf-generation-pipeline.md
    ├── linkedin-outreach-patterns.md
    └── application-dossier-template.md   ← THIS FILE
```

---

## 🔄 Regeneration Workflow

When resume needs update:
1. Edit `Anniket_Resume.html`
2. Compile to PDF via `pdf-generation-pipeline.md` (Chrome headless)
3. **All future applications use new PDF** — old cover letters still valid

When new role type needed:
1. Add highlight set to `cover-letter-generator.js` roleContent database
2. Run generator: `node scripts/cover-letter-generator.js --company "X" --role "New Role"`
3. Attach new PDF to application

---

## 🔗 Related Skills

- `greenhouse-ats-automation.md` — Uses dossier assets for form filling
- `pdf-generation-pipeline.md` — Generates cover letter PDFs
- `linkedin-outreach-patterns.md` — Uses portfolio/GitHub/LinkedIn URLs