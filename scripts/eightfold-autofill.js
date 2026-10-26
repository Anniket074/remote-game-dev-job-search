/**
 * Eightfold AI Career Portal Automation Script for Anniket Prajapati
 *
 * Usage:
 *   node scripts/eightfold-autofill.js <job_apply_url> <cover_letter_pdf>
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const CANDIDATE = {
  firstName: 'Anniket',
  lastName: 'Prajapati',
  email: 'anniket19121995@gmail.com',
  phone: '8003273794',
  portfolio: 'https://portfolio-web-pi-inky.vercel.app/',
  github: 'https://github.com/Anniket074',
  linkedin: 'https://linkedin.com/in/anniket1912',
  location: 'Lucknow, Uttar Pradesh, India',
  city: 'Lucknow',
  resumePath: path.resolve(__dirname, '../Anniket_Resume.pdf'),
};

async function run() {
  const applyUrl = process.argv[2];
  const coverLetterFile = process.argv[3];

  if (!applyUrl) {
    console.error('Usage: node scripts/eightfold-autofill.js <apply_url> [cover_letter_pdf]');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Navigating to ${applyUrl}...`);
  await page.goto(applyUrl, { waitUntil: 'networkidle' });

  // 1. Upload Resume & Cover Letter
  const fileInputs = await page.$$('input[type="file"]');
  if (fileInputs.length >= 1) {
    console.log('Uploading Resume...');
    await fileInputs[0].setInputFiles(CANDIDATE.resumePath);
  }

  // Handle privacy acknowledgement modal if appears
  await page.waitForTimeout(1500);
  const ackBtn = page.locator('button:has-text("I Acknowledge")').first();
  if (await ackBtn.count() > 0) {
    console.log('Acknowledging privacy policy...');
    await ackBtn.click();
  }

  // Upload Cover Letter to work samples if exists
  if (coverLetterFile && fileInputs.length >= 2) {
    const clPath = path.resolve(__dirname, '../', coverLetterFile);
    if (fs.existsSync(clPath)) {
      console.log(`Uploading Cover Letter: ${clPath}`);
      await fileInputs[1].setInputFiles(clPath);
    }
  }

  // Wait for resume parsing
  console.log('Waiting for resume parsing...');
  await page.waitForTimeout(4000);

  // 2. Verify / Correct Contact Fields
  console.log('Updating contact details...');
  await page.fill('#Contact_Information_firstname, input[aria-label="First name"]', CANDIDATE.firstName);
  await page.fill('#Contact_Information_lastname, input[aria-label="Last name"]', CANDIDATE.lastName);
  await page.fill('#Contact_Information_email, input[aria-label="Email"]', CANDIDATE.email);
  await page.fill('#Contact_Information_phone, input[aria-label="Phone Number"]', CANDIDATE.phone);
  await page.fill('#Contact_Information_city, input[aria-label="City"]', CANDIDATE.city);

  const portfolioInput = page.locator('#Additional_Documents_candidate_portfolio_url, input[aria-label*="URL"]').first();
  if (await portfolioInput.count() > 0) {
    await portfolioInput.fill(CANDIDATE.portfolio);
  }

  // 3. Self-ID Checkboxes
  const manBox = page.locator('input[type="checkbox"][aria-label="Man"]').first();
  if (await manBox.count() > 0 && !(await manBox.isChecked())) await manBox.check();

  const asianBox = page.locator('input[type="checkbox"][aria-label="Asian"]').first();
  if (await asianBox.count() > 0 && !(await asianBox.isChecked())) await asianBox.check();

  const heteroBox = page.locator('input[type="checkbox"][aria-label="Heterosexual"]').first();
  if (await heteroBox.count() > 0 && !(await heteroBox.isChecked())) await heteroBox.check();

  console.log('Eightfold AI form configured. Ready for submission.');
}

run().catch(console.error);