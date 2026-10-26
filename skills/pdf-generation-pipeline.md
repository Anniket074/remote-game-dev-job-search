# Skill: HTML → PDF Cover Letter Generation Pipeline

**Purpose:** Compile tailored HTML cover letters into ATS-safe PDFs using Chrome/Chromium headless printing.

**Why HTML → PDF?** 
- Full CSS control (fonts, margins, layout)
- `@page` rule for precise print margins
- ATS parsers read text-layer PDFs reliably
- Single source of truth (HTML) for both preview and PDF

---

## 🎯 Pipeline Overview

```
HTML Template (with {{placeholders}})
    ↓ [Template Engine]
Filled HTML (company/role specific)
    ↓ [Chrome Headless --print-to-pdf]
PDF Output (text-layer, ATS-parseable)
    ↓ [Attach to ATS form]
Application Submission
```

---

## 📄 HTML Template Structure (ATS-Safe)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cover Letter - {{candidateName}} - {{company}} {{role}}</title>
  <style>
    @page {
      size: letter;
      margin: 0.75in 0.8in;  /* ATS-safe margins */
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.55;
      font-size: 10.5pt;
      margin: 0;
      padding: 0;
    }
    /* No external fonts, no flexbox/grid that breaks in print */
    .header { border-bottom: 2px solid #0284c7; padding-bottom: 14px; margin-bottom: 20px; }
    .name { font-size: 20pt; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; }
    .title { font-size: 11pt; font-weight: 600; color: #0284c7; margin-bottom: 8px; }
    .contact { font-size: 9pt; color: #475569; display: block; line-height: 1.8; }
    .subject { font-size: 11pt; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 14px; }
    p { margin: 0 0 12px 0; }
    ul { margin: 0 0 12px 0; padding-left: 20px; }
    li { margin-bottom: 6px; }
    .highlight { font-weight: 600; color: #0f172a; }
    .signoff { margin-top: 20px; }
    /* Print-only: hide any screen-only elements */
    @media print { .no-print { display: none !important; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">{{candidateName}}</div>
    <div class="title">{{targetTitle}}</div>
    <div class="contact">
      <strong>Email:</strong> {{email}}<br>
      <strong>Phone:</strong> {{phone}}<br>
      <strong>Location:</strong> {{location}}<br>
      <strong>Portfolio:</strong> {{portfolio}}<br>
      <strong>GitHub:</strong> {{github}}<br>
      <strong>LinkedIn:</strong> {{linkedin}}
    </div>
  </div>

  <div class="date-recipient">
    <div>{{date}}</div>
    <div style="margin-top: 8px;" class="to">{{hiringTeam}}</div>
    <div>{{company}}</div>
  </div>

  <div class="subject">Application for {{role}}</div>

  <p>Dear {{hiringTeam}},</p>

  <p>{{openingParagraph}}</p>

  <p>{{bodyParagraph}}</p>

  <ul>
    {{#each highlights}}
    <li><span class="highlight">{{title}}:</span> {{description}}</li>
    {{/each}}
  </ul>

  <p>{{closingParagraph}} <strong>{{portfolio}}</strong>.</p>

  <div class="signoff">
    <p>Sincerely,</p>
    <p><strong>{{candidateName}}</strong><br>
    {{degree}}<br>
    {{phone}} | {{email}}<br>
    Portfolio: {{portfolio}}<br>
    LinkedIn: {{linkedin}}</p>
  </div>
</body>
</html>
```

---

## 🛠️ Compilation Commands

### Option 1: Chrome/Chromium CLI (Recommended)
```bash
# Windows (Chrome)
chrome.exe --headless --disable-gpu --print-to-pdf="D:\Linkedin\Anniket_Cover_Letter_Company_Role.pdf" "D:\Linkedin\Anniket_Cover_Letter_Company_Role.html"

# Windows (Chromium/Edge)
msedge.exe --headless --disable-gpu --print-to-pdf="D:\Linkedin\Anniket_Cover_Letter_Company_Role.pdf" "D:\Linkedin\Anniket_Cover_Letter_Company_Role.html"

# Linux/Mac
google-chrome --headless --disable-gpu --print-to-pdf=output.pdf input.html
chromium-browser --headless --disable-gpu --print-to-pdf=output.pdf input.html
```

### Option 2: Node.js (Puppeteer) — For Automation Scripts
```javascript
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function htmlToPdf(htmlPath, pdfPath) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Load local HTML file
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  // Print to PDF with @page margins respected
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,  // Critical: includes CSS backgrounds/borders
    margin: { top: '0.75in', right: '0.8in', bottom: '0.75in', left: '0.8in' },
    preferCSSPageSize: true  // Respects @page size
  });
  
  await browser.close();
  console.log(`✅ PDF generated: ${pdfPath}`);
}

// Usage
await htmlToPdf(
  'D:\\Linkedin\\Anniket_Cover_Letter_MobEntertainment.html',
  'D:\\Linkedin\\Anniket_Cover_Letter_MobEntertainment.pdf'
);
```

### Option 3: Playwright (If Already Using for Form Automation)
```javascript
const { chromium } = require('playwright');
const fs = require('fs');

async function htmlToPdfPlaywright(htmlPath, pdfPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  await page.setContent(htmlContent);
  
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.75in', right: '0.8in', bottom: '0.75in', left: '0.8in' }
  });
  
  await browser.close();
}
```

---

## 🎨 Template Variables (Standard Set)

| Variable | Example Value | Source |
|----------|---------------|--------|
| `{{candidateName}}` | Anniket Prajapati | Profile |
| `{{targetTitle}}` | Senior Systems Engineer & Technical Game Architect | Role-specific |
| `{{email}}` | anniket19121995@gmail.com | Profile |
| `{{phone}}` | +91 80032 73794 | Profile |
| `{{location}}` | Remote / Lucknow, India | Profile |
| `{{portfolio}}` | https://portfolio-web-pi-inky.vercel.app/ | Profile |
| `{{github}}` | github.com/Anniket074 | Profile |
| `{{linkedin}}` | linkedin.com/in/anniket1912 | Profile |
| `{{date}}` | October 25, 2026 | Auto-generated |
| `{{hiringTeam}}` | Hiring Team — Systems Engineering | Company-specific |
| `{{company}}` | Mob Entertainment | Target |
| `{{role}}` | Senior Systems Engineer (Unreal Engine / Multiplayer) | Target |
| `{{degree}}` | B.Tech in Computer Science | Profile |
| `{{openingParagraph}}` | Custom per company | Template |
| `{{bodyParagraph}}` | Custom per company | Template |
| `{{highlights}}` | Array of {title, description} | Role-specific |
| `{{closingParagraph}}` | Custom per company | Template |

---

## 🔧 Generation Script: `scripts/cover-letter-generator.js`

```javascript
#!/usr/bin/env node
// Usage: node cover-letter-generator.js --company "Mob Entertainment" --role "Senior Systems Engineer" --ats "greenhouse"

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Parse args
const args = process.argv.slice(2).reduce((acc, arg) => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.split('=');
    acc[key.slice(2)] = value;
  }
  return acc;
}, {});

const { company, role, ats } = args;
if (!company || !role) {
  console.error('Usage: --company "Name" --role "Title" [--ats "greenhouse"]');
  process.exit(1);
}

// Slugify for filename
const slug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '');
const companySlug = slug(company);
const roleSlug = slug(role);

const templatePath = 'D:\\Linkedin\\cover-letter-template.html';
const htmlPath = `D:\\Linkedin\\Anniket_Cover_Letter_${companySlug}_${roleSlug}.html`;
const pdfPath = `D:\\Linkedin\\Anniket_Cover_Letter_${companySlug}_${roleSlug}.pdf`;

// Role-specific content database
const roleContent = {
  'Senior Systems Engineer': {
    targetTitle: 'Senior Systems Engineer & Technical Game Architect',
    hiringTeam: 'Hiring Team — Systems Engineering',
    openingParagraph: `I am writing to express my enthusiastic interest in the <strong>${role}</strong> position at ${company}. ${company}'s reputation for ${company === 'Mob Entertainment' ? 'atmospheric horror experiences like <em>Poppy Playtime</em>' : 'technical excellence'} aligns perfectly with my background delivering <strong>50+ commercial game titles</strong> and <strong>35+ high-fidelity VR experiences</strong>.`,
    bodyParagraph: 'My technical leadership and systems engineering background includes:',
    highlights: [
      { title: 'Core Gameplay Frameworks & Extensible Architecture', description: 'Designed modular, data-driven gameplay systems (ability systems, inventory, progression, AI behavior trees) that scale across titles without engine rewrites.' },
      { title: 'Multiplayer Replication & RPC Architecture', description: 'Built authoritative server frameworks with client-side prediction, lag compensation, and bandwidth optimization for 50+ concurrent players using WebSockets, TCP/UDP sockets, and Photon Engine.' },
      { title: 'Performance Profiling & 90+ FPS Optimization', description: 'Expert in Unreal Insights, RenderDoc, and PIX — consistently delivering sub-11ms frame budgets on Meta Quest standalone hardware through draw call batching, shader optimization, and memory pooling.' },
      { title: 'Technical Leadership & Mentorship', description: 'Led engineering pods through full lifecycle: RFC design docs, code reviews, milestone planning, and cross-disciplinary coordination with design, art, and production.' }
    ],
    closingParagraph: 'I welcome the opportunity to bring my passion for scalable gameplay architecture and performance-driven engineering to'
  },
  // Add more role templates...
};

// Default fallback
const content = roleContent[role] || {
  targetTitle: `${role} & Gameplay Engineer`,
  hiringTeam: 'Hiring Team',
  openingParagraph: `I am writing to apply for the <strong>${role}</strong> position at ${company}. With <strong>50+ shipped Unity titles</strong> and <strong>35+ Quest VR titles at 90+ FPS</strong>, I bring deep expertise in gameplay systems, multiplayer networking, and performance optimization.`,
  bodyParagraph: 'My background includes:',
  highlights: [
    { title: 'Gameplay Systems & Architecture', description: 'Modular, data-driven frameworks for abilities, progression, inventory, and AI.' },
    { title: 'Real-Time Multiplayer Networking', description: 'WebSockets, TCP/UDP, Photon — authoritative server with client prediction.' },
    { title: 'VR/AR Performance Optimization', description: '35+ Quest titles locked at 90+ FPS; sub-11ms frame budgets via profiling.' },
    { title: 'Custom Shaders & Graphics Programming', description: 'HLSL/GLSL for lighting, post-process, and compute workflows.' }
  ],
  closingParagraph: 'I would be thrilled to contribute to'
};

// Read template
let template = fs.readFileSync(templatePath, 'utf-8');

// Replace variables
const vars = {
  candidateName: 'Anniket Prajapati',
  targetTitle: content.targetTitle,
  email: 'anniket19121995@gmail.com',
  phone: '+91 80032 73794',
  location: 'Remote / Lucknow, India',
  portfolio: 'https://portfolio-web-pi-inky.vercel.app/',
  github: 'github.com/Anniket074',
  linkedin: 'linkedin.com/in/anniket1912',
  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  hiringTeam: content.hiringTeam,
  company,
  role,
  degree: 'B.Tech in Computer Science',
  openingParagraph: content.openingParagraph,
  bodyParagraph: content.bodyParagraph,
  closingParagraph: content.closingParagraph
};

// Simple template replacement (supports {{var}} and {{#each highlights}})
template = template.replace(/\{\{candidateName\}\}/g, vars.candidateName);
template = template.replace(/\{\{targetTitle\}\}/g, vars.targetTitle);
template = template.replace(/\{\{email\}\}/g, vars.email);
template = template.replace(/\{\{phone\}\}/g, vars.phone);
template = template.replace(/\{\{location\}\}/g, vars.location);
template = template.replace(/\{\{portfolio\}\}/g, vars.portfolio);
template = template.replace(/\{\{github\}\}/g, vars.github);
template = template.replace(/\{\{linkedin\}\}/g, vars.linkedin);
template = template.replace(/\{\{date\}\}/g, vars.date);
template = template.replace(/\{\{hiringTeam\}\}/g, vars.hiringTeam);
template = template.replace(/\{\{company\}\}/g, vars.company);
template = template.replace(/\{\{role\}\}/g, vars.role);
template = template.replace(/\{\{degree\}\}/g, vars.degree);
template = template.replace(/\{\{openingParagraph\}\}/g, vars.openingParagraph);
template = template.replace(/\{\{bodyParagraph\}\}/g, vars.bodyParagraph);
template = template.replace(/\{\{closingParagraph\}\}/g, vars.closingParagraph);

// Handle highlights loop
const highlightsHtml = content.highlights.map(h => `    <li><span class="highlight">${h.title}:</span> ${h.description}</li>`).join('\n');
template = template.replace(/\{\{#each highlights\}\}[\s\S]*?\{\{\/each\}\}/, highlightsHtml);

// Write HTML
fs.writeFileSync(htmlPath, template);
console.log(`✅ HTML written: ${htmlPath}`);

// Compile to PDF via Chrome headless
try {
  // Try Chrome first
  execSync(`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --print-to-pdf="${pdfPath}" "${htmlPath}"`, { stdio: 'inherit' });
  console.log(`✅ PDF generated: ${pdfPath}`);
} catch (e) {
  try {
    // Fallback to Edge
    execSync(`"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu --print-to-pdf="${pdfPath}" "${htmlPath}"`, { stdio: 'inherit' });
    console.log(`✅ PDF generated via Edge: ${pdfPath}`);
  } catch (e2) {
    console.error('❌ Chrome/Edge not found. Install Puppeteer: npm install puppeteer');
    console.error('Then run: node -e "require(\'./scripts/cover-letter-generator-puppeteer.js\')(\'' + htmlPath + '\', \'' + pdfPath + '\')"');
  }
}
```

---

## ✅ ATS-Safe PDF Checklist

- [ ] Text is selectable (not rasterized image)
- [ ] Fonts are standard system fonts (no @font-face)
- [ ] No transparency/opacity on text
- [ ] Single column layout (no complex grids)
- [ ] Standard margins (0.75in+)
- [ ] No headers/footers with page numbers (ATS may parse as content)
- [ ] File size < 500KB (Greenhouse limit varies)
- [ ] Filename: `Anniket_Cover_Letter_{Company}_{Role}.pdf`

---

## 🔗 Related Skills

- `greenhouse-ats-automation.md` — Attaches generated PDFs
- `application-dossier-template.md` — Standard packet including cover letter