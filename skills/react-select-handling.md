# Skill: React-Select Component Handling

**Purpose:** Master interaction with React-Select dropdown components across all ATS platforms (Greenhouse, Ashby, Lever, Workable, etc.).

**Core Problem:** React-Select is a custom combobox component that:
- Does NOT respond to standard `input.fill()` or `select.selectOption()`
- Requires keyboard interaction to open the menu
- Requires explicit option click (not keyboard Enter)
- Needs `onBlur` event to trigger validation

---

## 🎯 Universal React-Select Interaction Pattern

```javascript
/**
 * Select an option in a React-Select dropdown by label text and option text
 * @param {Page} page - Playwright page
 * @param {string} labelText - The label text (e.g., "Country", "Race", "Gender")
 * @param {string} optionText - The exact option text to select (e.g., "India", "Asian", "Male")
 */
async function selectReactSelectOption(page, labelText, optionText) {
  // Strategy 1: Find combobox by associated label
  const combobox = page.locator(`label:has-text("${labelText}") >> xpath=following-sibling::div[1]//*[@role="combobox"]`).first();
  
  // Fallback: Find by aria-label containing label text
  const comboboxAlt = page.locator(`[role="combobox"][aria-label*="${labelText}"]`).first();
  
  const target = await combobox.count() > 0 ? combobox : comboboxAlt;
  
  // 1. Focus the combobox
  await target.focus();
  await page.waitForTimeout(100);
  
  // 2. Open dropdown with ArrowDown
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(300); // Wait for menu render
  
  // 3. Find and click the option (use exact text match)
  const option = page.locator(`[role="option"]:has-text("${optionText}")`).first();
  await option.click();
  await page.waitForTimeout(100);
  
  // 4. CRITICAL: Press Tab to trigger onBlur validation
  await page.keyboard.press('Tab');
  await page.waitForTimeout(200);
}
```

---

## 🔧 Platform-Specific Selectors

### Greenhouse
```javascript
// Standard pattern works for:
// - Country
// - Race / Ethnicity  
// - Gender
// - Veteran Status
// - Disability Status
// - EEO questions

// LinkedIn Profile field (text input with validation)
await page.fill('[name="linkedin_profile"], #linkedin_profile', 'https://linkedin.com/in/anniket1912');
await page.keyboard.press('Tab');
```

### Ashby
```javascript
// Ashby uses similar React-Select but different DOM structure
const combobox = page.locator('[data-testid="select-input"]').first();
// Or by label:
const combobox = page.locator('label:has-text("Country") + div [role="combobox"]').first();
```

### Lever
```javascript
// Lever custom dropdown
await page.click('[data-qa="dropdown-trigger"]');
await page.click(`[data-qa="dropdown-option"]:has-text("${optionText}")`);
```

### Workable
```javascript
// Workable uses native select mostly, but some React-Select
await page.selectOption('select[name="country"]', 'IN'); // ISO code
```

---

## 🛠️ Debugging Utilities

```javascript
// List all comboboxes on page with their labels
async function debugReactSelects(page) {
  const comboboxes = await page.locator('[role="combobox"]').all();
  for (const cb of comboboxes) {
    const ariaLabel = await cb.getAttribute('aria-label');
    const id = await cb.getAttribute('id');
    // Find associated label
    const label = await page.locator(`label[for="${id}"]`).textContent().catch(() => 'none');
    console.log(`Combobox: id="${id}", aria-label="${ariaLabel}", label="${label}"`);
  }
}

// List all options in currently open dropdown
async function debugOpenOptions(page) {
  const options = await page.locator('[role="option"]').all();
  for (const opt of options) {
    console.log(`Option: "${await opt.textContent()}"`);
  }
}
```

---

## 📋 Common Game Dev ATS Dropdown Values

| Field | Value to Select | Notes |
|-------|-----------------|-------|
| **Country** | "India" | ISO: IN |
| **Race/Ethnicity** | "Asian" | Conditional: select "Hispanic or Latino" first |
| **Gender** | "Male" | |
| **Veteran Status** | "I am not a protected veteran" | Exact text |
| **Disability** | "No, I don't have a disability" | Exact text |
| **Pronouns** | "He/Him" | Text input or dropdown |
| **Authorization (US)** | "No" | Radio or dropdown |
| **Sponsorship Required** | "Yes" | Radio or dropdown |
| **Relocation** | "No" | Radio or dropdown (100% remote) |

---

## ⚠️ Anti-Patterns to Avoid

| ❌ Wrong | ✅ Correct |
|----------|------------|
| `await page.fill('#country', 'India')` | Use `selectReactSelectOption(page, 'Country', 'India')` |
| `await page.selectOption('#country', 'India')` | React-Select is not a native `<select>` |
| `await page.keyboard.press('Enter')` after ArrowDown | Click the option element; Enter often doesn't work |
| Skip `Tab` after selection | **Always** press Tab to trigger validation |
| Use `#123456` numeric ID selector | Use `role="combobox"` + `aria-label` or label association |

---

## 🔄 Race Dropdown Conditional Visibility (Greenhouse Specific)

```javascript
async function handleRaceDropdown(page) {
  // Greenhouse shows "Asian" ONLY after "Hispanic or Latino" is selected once
  // This is a known quirk in their EEO form
  
  // Step 1: Select Hispanic or Latino (opens the full list)
  await selectReactSelectOption(page, 'Race', 'Hispanic or Latino');
  await page.waitForTimeout(500);
  
  // Step 2: Now select Asian (the actual desired value)
  await selectReactSelectOption(page, 'Race', 'Asian');
}
```

---

## 🧪 Testing Checklist

Before deploying automation:
- [ ] Combobox found by label/aria-label
- [ ] ArrowDown opens menu (verify visually with `page.screenshot()`)
- [ ] Option text matches EXACTLY (case-sensitive)
- [ ] Option click succeeds (no "element not attached" errors)
- [ ] Tab press triggers validation (field loses red border / error text)
- [ ] Form submits without "This field is required" errors

---

## 🔗 Related Skills

- `greenhouse-ats-automation.md` — Full Greenhouse flow using this pattern
- `application-dossier-template.md` — What data goes into each field