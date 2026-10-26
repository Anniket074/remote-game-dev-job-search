# Skill: Greenhouse ATS Form Automation

**Purpose:** End-to-end automation of Greenhouse ATS job application forms for remote game developer roles.

**Applies to:** Mob Entertainment, Insomniac Games, teamLFG, Ghost Story Games, Rushdown Studios, Escape Velocity, Miris, ALTEN, Patronus AI, and any Greenhouse-hosted career page.

---

## 🎯 Core Automation Flow

```javascript
// 1. Open job posting URL
await page.goto('https://job-boards.greenhouse.io/{company}/jobs/{job_id}');

// 2. Click "Apply for this job" if needed
await page.click('a:has-text("Apply for this job")');

// 3. Fill basic fields (FIRST - before dropdowns)
await fillBasicFields(page);

// 4. Attach resume + cover letter
await attachDocuments(page);

// 5. Handle React-Select dropdowns (country, race, gender, veteran, disability)
await handleDemographics(page);

// 6. Handle company-specific custom questions
await handleCustomQuestions(page, company);

// 7. Submit & verify confirmation
await submitAndVerify(page);
```

---

## 🔧 Critical Gotchas & Fixes

### 1. Browser Autofill Corruption (ALWAYS HAPPENS)
**Problem:** Browser auto-fills First Name = "NightAnniket", Last Name = "Charcha"
**Fix:** After ALL other fields filled, explicitly clear & refill:
```javascript
// First Name
await page.click('#first_name');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');
await page.fill('#first_name', 'Anniket');

// Last Name
await page.click('#last_name');
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.press('Backspace');
await page.fill('#last_name', 'Prajapati');
```

### 2. React-Select Dropdowns (Country, Race, Gender, Veteran, Disability)
**Problem:** Standard `.fill()` doesn't work; validation not triggered
**Pattern:** Focus → ArrowDown → evaluate → click option → Tab to trigger onBlur
```javascript
async function selectReactSelect(page, labelText, optionText) {
  // Find the combobox by its label
  const combobox = await page.locator(`label:has-text("${labelText}") + div [role="combobox"]`).first();
  await combobox.focus();
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(300);
  
  // Find and click the option
  const option = await page.locator(`[role="option"]:has-text("${optionText}")`).first();
  await option.click();
  
  // Trigger validation with Tab
  await page.keyboard.press('Tab');
}
```

**Dropdown Values Used:**
| Field | Value |
|-------|-------|
| Country | "India" |
| Race | "Asian" (appears after Hispanic/Latino selected) |
| Gender | "Male" |
| Veteran Status | "I am not a protected veteran" |
| Disability | "No, I don't have a disability" |

### 3. Numeric CSS ID Selectors (INVALID)
**Problem:** `page.focus('#4001506004')` throws `SyntaxError` — CSS IDs can't start with digits
**Fix:** Use role/aria-label based selectors:
```javascript
// Instead of: await page.focus('#4001506004')
// Use:
const combobox = await page.locator('[role="combobox"][aria-label="LinkedIn Profile"]').first();
await combobox.focus();
```

### 4. LinkedIn Profile Field Validation
**Problem:** Shows `[invalid]` "This field is required" after `.fill()`
**Fix:** Use `pressSequentially` + Tab:
```javascript
await page.fill('#linkedin_profile', 'https://linkedin.com/in/anniket1912');
await page.keyboard.press('Tab'); // Triggers onBlur validation
```

### 5. Conditional Race Dropdown Visibility
**Problem:** "Asian" option only renders AFTER "Hispanic or Latino" is selected
**Fix:** Explicit two-step:
```javascript
await selectReactSelect(page, 'Race', 'Hispanic or Latino');
await page.waitForTimeout(500);
await selectReactSelect(page, 'Race', 'Asian');
```

---

## 📎 File Attachment Pattern

```javascript
// Resume (required)
await page.setInputFiles('#resume', 'D:\\Linkedin\\Anniket_Resume.pdf');

// Cover Letter (optional but recommended)
await page.setInputFiles('#cover_letter', 'D:\\Linkedin\\Anniket_Cover_Letter_{Company}_{Role}.pdf');
```

**Note:** Greenhouse uses `#resume` and `#cover_letter` as consistent input IDs.

---

## 🏢 Company-Specific Custom Questions

### Mob Entertainment (job IDs: 6965983004, 6965985004, 5027083004)
| Question ID Pattern | Question | Answer |
|---------------------|----------|--------|
| `{prefix}003` | LinkedIn Profile | `https://linkedin.com/in/anniket1912` |
| `{prefix}004` | Portfolio/Website | `https://portfolio-web-pi-inky.vercel.app/` |
| `{prefix}005` | GitHub | `https://github.com/Anniket074` |
| `{prefix}006` | Are you legally authorized to work in the US? | No (requires sponsorship) |
| `{prefix}007` | Will you now or in future require visa sponsorship? | Yes |
| `{prefix}008` | Preferred Pronouns | He/Him |

*Prefix varies per job: 4001506, 4001507, 4001508*

### Insomniac Games / PlayStation Studios (job IDs: 4297686005, 4297688005)
| Question | Answer |
|----------|--------|
| Have you previously worked for Sony? | No |
| Are you legally authorized to work in the US? | No |
| Will you require sponsorship? | Yes |
| Are you willing to relocate? | No (100% remote only) |
| Do you have a relationship with SIE employee? | No |
| Certification of truthfulness | Yes (checkbox) |
| US Location preference | N/A - Remote |

### teamLFG / Ghost Story Games / Rushdown Studios
Similar pattern: US authorization, sponsorship, relocation, LinkedIn, portfolio, GitHub.

---

## ✅ Confirmation Verification

```javascript
// Wait for navigation to confirmation page
await page.waitForURL('**/thankyou**', { timeout: 10000 });

// Verify success text
const successText = await page.locator('text=/thank you for applying|application has been received/i').first();
await expect(successText).toBeVisible();

// Capture confirmation URL for tracker
const confirmationUrl = page.url();
console.log(`✅ Confirmed: ${confirmationUrl}`);
```

---

## 📝 Tracker Update Pattern

After each successful submission, append to `Application_Submission_Tracker.md`:

```markdown
| {num} | **{Company}** | {Role} | Greenhouse | ✅ **Submitted & Confirmed** | `Anniket_Resume.pdf`, `Anniket_Cover_Letter_{Company}_{Role}.pdf` |
```

Also update `memory/job-applications-submitted-oct-2026.md` and `memory/MEMORY.md` tally.

---

## 🚀 Quick Reference: Complete Working Script

See `scripts/greenhouse-autofill.js` for a complete, parameterized Playwright script.

**Usage:**
```bash
node scripts/greenhouse-autofill.js \
  --company "mobentertainment" \
  --job-id "6965983004" \
  --role "Senior Systems Engineer" \
  --cover-letter "Anniket_Cover_Letter_MobEntertainment.pdf"
```

---

## 🔗 Related Skills

- `react-select-handling.md` — Deep dive on React-Select patterns
- `pdf-generation-pipeline.md` — Cover letter HTML → PDF compilation
- `application-dossier-template.md` — Standard packet structure