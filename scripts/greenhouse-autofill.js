/**
 * Greenhouse ATS Form Automation Script for Anniket Prajapati
 *
 * Usage:
 *   node scripts/greenhouse-autofill.js <job_url> <role_slug>
 *
 * Example:
 *   node scripts/greenhouse-autofill.js "https://job-boards.greenhouse.io/mobentertainment/jobs/6965983004" "MobEntertainment_Systems"
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
  country: 'India',
  resumePath: path.resolve(__dirname, '../Anniket_Resume.pdf'),
};

async function selectReactSelect(page, labelText, optionText) {
  try {
    const combobox = page.locator(`label:has-text("${labelText}") + div [role="combobox"], [role="combobox"][aria-label*="${labelText}"]`).first();
    if (await combobox.count() === 0) return false;

    await combobox.focus();
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(300);

    const option = page.locator(`[role="option"]:has-text("${optionText}")`).first();
    if (await option.count() > 0) {
      await option.click();
      await page.keyboard.press('Tab');
      return true;
    }
  } catch (e) {
    console.error(`Error selecting ${labelText} -> ${optionText}:`, e.message);
  }
  return false;
}

async function run() {
  const jobUrl = process.argv[2];
  const coverLetterFile = process.argv[3];

  if (!jobUrl) {
    console.error('Please provide a job URL as the first argument.');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Navigating to ${jobUrl}...`);
  await page.goto(jobUrl, { waitUntil: 'networkidle' });

  // 1. Attach Resume
  const resumeInput = page.locator('input[type="file"]#resume, input[name="resume"], input[type="file"]').first();
  if (await resumeInput.count() > 0) {
    console.log('Attaching Resume...');
    await resumeInput.setInputFiles(CANDIDATE.resumePath);
  }

  // 2. Attach Cover Letter if specified
  if (coverLetterFile) {
    const clPath = path.resolve(__dirname, '../', coverLetterFile);
    if (fs.existsSync(clPath)) {
      const clInput = page.locator('input[type="file"]#cover_letter, input[name="cover_letter"]').first();
      if (await clInput.count() > 0) {
        console.log(`Attaching Cover Letter: ${clPath}`);
        await clInput.setInputFiles(clPath);
      }
    }
  }

  // 3. Fill Basic Fields
  console.log('Filling contact fields...');
  await page.fill('#first_name, input[name="first_name"]', CANDIDATE.firstName);
  await page.fill('#last_name, input[name="last_name"]', CANDIDATE.lastName);
  await page.fill('#email, input[name="email"]', CANDIDATE.email);
  await page.fill('#phone, input[name="phone"]', CANDIDATE.phone);

  // Clear autofill corruption if happened
  await page.click('#first_name');
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  await page.fill('#first_name', CANDIDATE.firstName);

  // 4. LinkedIn & Portfolio
  const linkedinInput = page.locator('input[name*="linkedin"], #linkedin_profile, input[aria-label*="LinkedIn"]').first();
  if (await linkedinInput.count() > 0) {
    await linkedinInput.fill(CANDIDATE.linkedin);
    await page.keyboard.press('Tab');
  }

  const websiteInput = page.locator('input[name*="website"], #website, input[aria-label*="Website"], input[aria-label*="Portfolio"]').first();
  if (await websiteInput.count() > 0) {
    await websiteInput.fill(CANDIDATE.portfolio);
    await page.keyboard.press('Tab');
  }

  // 5. Select Country & Demographics
  console.log('Selecting demographics...');
  await selectReactSelect(page, 'Country', 'India');
  await selectReactSelect(page, 'Gender', 'Male');
  await selectReactSelect(page, 'Race', 'Hispanic or Latino'); // opens Asian
  await page.waitForTimeout(400);
  await selectReactSelect(page, 'Race', 'Asian');
  await selectReactSelect(page, 'Veteran', 'I am not a protected veteran');
  await selectReactSelect(page, 'Disability', "No, I don't have a disability");

  console.log('Form populated. Ready for final review and submission.');
}

run().catch(console.error);