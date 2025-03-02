# Book Store Test Suite with Playwright

This test suite automates testing for the Book Store application on [https://demoqa.com/books](https://demoqa.com/books) using Playwright. The suite includes features such as error handling, screenshots, JSON test data management, and parallel execution.

## Features
- Automated book search, add to collection, verification, and deletion tests
- Error handling with try-catch and screenshot capture on failure
- JSON file management for test data
- Parallel test execution

## Prerequisites
- Node.js installed
- Playwright installed (`npm install -D @playwright/test`)

## Installation
1. Clone this repository:
```bash
git clone <your-repo-url>
```
2. Navigate to the project directory:
```bash
cd bookstore-test-suite
```
3. Install dependencies:
```bash
npm install
```

## Running Tests
Run all tests in parallel with Playwright:
```bash
npx playwright test
```

## Test Data
Test data is managed using `testData.json` file. Update this file with valid credentials:
```json
{
    "username": "your_username",
    "password": "your_password"
}
```

## Screenshots
Screenshots of errors are saved in the `screenshots/` directory for debugging purposes.

## Test Reports
After execution, view the report using:
```bash
npx playwright show-report
```

## Git Commands
```bash
git init
git add .
git commit -m "Initial commit of Book Store Test Suite"
git remote add origin <your-repo-url>
git push -u origin main
```
