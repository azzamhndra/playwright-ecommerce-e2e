require('dotenv').config({ quiet: true });

const { defineConfig, devices } = require('@playwright/test');

if (!process.env.BASE_URL) {
  throw new Error(
    'BASE_URL is not set. Copy .env.example to .env and fill in the value.'
  );
}

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
