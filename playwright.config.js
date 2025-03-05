// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: true,
        screenshot: 'only-on-failure', // Capture screenshots only when a test fails
        trace: 'retain-on-failure', // Retain trace files for failed tests
    },
    retries: 2, // Retry failed tests twice before considering them as failed
    workers: 4, // Enable parallel execution with 4 workers
    reporter: [['list'], ['html', { outputFolder: 'report' }]], // Output report configuration
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