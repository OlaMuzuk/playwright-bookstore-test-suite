# Book Store Test Suite with Playwright

This test suite automates testing for the Book Store application on https://demoqa.com/books using Playwright. The suite includes both positive scenarios, error handling, screenshots, JSON test data management, and parallel execution.

## Features
- Automated positive and negative test scenarios:
   - Book search, add to collection, verification, and deletion
- Error handling with try-catch and screenshot capture on failure
- JSON file management for test data
- Parallel test execution

## Prerequisites
- Node.js installed
- Playwright installed (`npm install -D @playwright/test`)

## Installation
1. Clone this repository:

git clone https://github.com/OlaMuzuk/playwright-bookstore-test-suite.git  
cd playwright-bookstore-test-suite

3. Install dependencies:

npm install


## Running Tests
Run all tests in parallel with Playwright:

npx playwright test

### Run Tests in Headed Mode

npx playwright test --headed

### Run a Specific Test

npx playwright test tests/bookStore.spec.ts

### Parallel Execution

workers: 4,

### Run Tests in Specific Browser:
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

## Test Data
Test data is managed using `testData.json` file. Update this file with valid credentials:

{  
    "username": "testUser123",  
    "password": "Test123!"
}


## Screenshots
Screenshots of errors are saved in the `screenshots/` directory for debugging purposes.

## Test Reports
After execution, view the report using:

npx playwright show-report

## Git Commands
git init
git add .
git commit -m "Initial commit of Book Store Test Suite"
git remote add origin https://github.com/OlaMuzuk/playwright-bookstore-test-suite.git
git push -u origin main



