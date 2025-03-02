// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: true,
        screenshot: 'on',
        trace: 'on',
    },
    retries: 1,
    workers: 4, // Enable parallel execution with 4 workers
    reporter: [['list'], ['html', { outputFolder: 'report' }]],
    outputDir: 'screenshots',
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        }
    ],
});