/**
 * Tailored Cover Letter Generator for Anniket Prajapati
 *
 * Usage:
 *   node scripts/cover-letter-generator.js "Company Name" "Exact Role Title" "Unique Hook / Specific Context"
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CANDIDATE = {
  name: 'Anniket Prajapati',
  degree: 'B.Tech in Computer Science',
  phone: '+91 80032 73794',
  email: 'anniket19121995@gmail.com',
  portfolio: 'https://portfolio-web-pi-inky.vercel.app/',
  github: 'https://github.com/Anniket074',
  linkedin: 'https://linkedin.com/in/anniket1912',
  location: 'Remote / Lucknow, India'
};

const company = process.argv[2] || 'Target Studio';
const role = process.argv[3] || 'Senior Game Developer';
const context = process.argv[4] || 'delivering high-performance real-time gameplay experiences';

const slug = `${company.replace(/[^a-zA-Z0-9]/g, '_')}_${role.replace(/[^a-zA-Z0-9]/g, '_')}`;
const htmlPath = path.resolve(__dirname, `../Anniket_Cover_Letter_${slug}.html`);
const pdfPath = path.resolve(__dirname, `../Anniket_Cover_Letter_${slug}.pdf`);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cover Letter - ${CANDIDATE.name} - ${company} ${role}</title>
  <style>
    @page { size: letter; margin: 0.75in 0.8in; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.55;
      font-size: 10.5pt;
      margin: 0;
      padding: 0;
    }
    .header { border-bottom: 2px solid #2563eb; padding-bottom: 14px; margin-bottom: 20px; }
    .name { font-size: 20pt; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; margin: 0 0 4px 0; }
    .title { font-size: 11pt; font-weight: 600; color: #2563eb; margin-bottom: 8px; }
    .contact { font-size: 9pt; color: #475569; display: flex; flex-wrap: wrap; gap: 14px; }
    .date-recipient { margin-bottom: 18px; font-size: 9.5pt; color: #334155; }
    .date-recipient .to { font-weight: 600; color: #0f172a; }
    .subject { font-size: 11pt; font-weight: 700; color: #0f172a; margin-bottom: 14px; padding-bottom: 4px; border-bottom: 1px solid #e2e8f0; }
    p { margin: 0 0 12px 0; }
    ul { margin: 0 0 12px 0; padding-left: 20px; }
    li { margin-bottom: 6px; }
    .highlight { font-weight: 600; color: #0f172a; }
    .signoff { margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">${CANDIDATE.name}</div>
    <div class="title">${role} | Unity & VR Systems Architect</div>
    <div class="contact">
      <span><strong>Email:</strong> ${CANDIDATE.email}</span>
      <span><strong>Phone:</strong> ${CANDIDATE.phone}</span>
      <span><strong>Location:</strong> ${CANDIDATE.location}</span>
      <span><strong>Portfolio:</strong> ${CANDIDATE.portfolio}</span>
      <span><strong>GitHub:</strong> ${CANDIDATE.github}</span>
      <span><strong>LinkedIn:</strong> ${CANDIDATE.linkedin}</span>
    </div>
  </div>

  <div class="date-recipient">
    <div>October 26, 2026</div>
    <div style="margin-top: 8px;" class="to">Hiring Team & Leadership</div>
    <div>${company}</div>
  </div>

  <div class="subject">Application for ${role}</div>

  <p>Dear ${company} Hiring Team,</p>

  <p>
    I am writing with great enthusiasm to apply for the <strong>${role}</strong> role at ${company}. Having architected and shipped over <strong>50+ commercial game titles</strong> and <strong>35+ high-fidelity Meta Quest VR experiences</strong>, I specialize in ${context}.
  </p>

  <p>My technical background directly aligns with ${company}'s expectations:</p>

  <ul>
    <li>
      <span class="highlight">Extensible Core Gameplay Frameworks:</span> Architected clean, modular player controllers, ability frameworks, and procedural systems across C# and C++ with strict adherence to SOLID principles and data-driven patterns.
    </li>
    <li>
      <span class="highlight">Rock-Solid 90+ FPS Performance & Profiling:</span> Deep experience profiling CPU/GPU performance (RenderDoc, Unreal Insights, Unity Profiler), optimizing draw calls, shader complexity, and memory allocations for sub-11ms frame budgets.
    </li>
    <li>
      <span class="highlight">Multiplayer Networking & Real-Time Netcode:</span> Built authoritative multiplayer systems with client prediction, lag compensation, and packet optimization across WebSockets, TCP/UDP sockets, and Photon Engine.
    </li>
    <li>
      <span class="highlight">Technical Leadership & Cross-Functional Bridge:</span> Proven track record partnering with game designers, 3D artists, and audio engineers to deliver polished player game feel and rapid prototypes.
    </li>
  </ul>

  <p>
    I would welcome the opportunity to contribute my technical rigor, rapid execution, and passion for interactive systems to ${company}. Shipped games and interactive demos are available at <strong>${CANDIDATE.portfolio}</strong>.
  </p>

  <div class="signoff">
    <p>Sincerely,</p>
    <p><strong>${CANDIDATE.name}</strong><br>
    ${CANDIDATE.degree}<br>
    ${CANDIDATE.phone} | ${CANDIDATE.email}<br>
    Portfolio: ${CANDIDATE.portfolio}<br>
    LinkedIn: ${CANDIDATE.linkedin}</p>
  </div>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log(`Generated HTML: ${htmlPath}`);

try {
  execSync(`"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --print-to-pdf="${pdfPath}" "${htmlPath}"`, { stdio: 'inherit' });
  console.log(`Compiled PDF: ${pdfPath}`);
} catch (e) {
  try {
    execSync(`"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu --print-to-pdf="${pdfPath}" "${htmlPath}"`, { stdio: 'inherit' });
    console.log(`Compiled PDF via Edge: ${pdfPath}`);
  } catch (err) {
    console.error('PDF compilation failed. Use Chrome or Edge headless.');
  }
}
