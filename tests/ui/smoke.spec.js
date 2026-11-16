const { test, expect } = require('@playwright/test');

test('INIT-01: login page opens at the application root', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  await expect(page.getByRole('heading', { name: /^sign in$/i })).toBeVisible();
});

test('INIT-02: page title identifies the application', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/QA Automation Labs/);
});
