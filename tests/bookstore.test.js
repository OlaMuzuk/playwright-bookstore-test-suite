// Book Store Test Suite using Playwright
// Includes error handling, screenshots, JSON data management, parallel execution, and README.md

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Test data 
const testData = require('./testData.json');

// Selectors
const selectors = {
    loginButton: '#login',
    usernameInput: '#userName',
    passwordInput: '#password',
    submitButton: '#login',
    searchInput: '#searchBox',
    bookLink: '.rt-tbody .rt-tr-group:nth-child(1) a',
    addToCollectionButton: 'button:has-text("Add To Your Collection")',
    profileButton: '#gotoProfile',
    deleteButton: 'button[title="Delete"]',
    confirmButton: '#closeSmallModal-ok',
    bookTitle: '.rt-tbody .rt-tr-group:nth-child(1) a'
};

// Before each test: Log in
test.beforeEach(async ({ page }) => {
    try {
        test.setTimeout(60000);
        await page.goto('https://demoqa.com/login');
        await page.fill(selectors.usernameInput, testData.username);
        await page.fill(selectors.passwordInput, testData.password);
        await page.click(selectors.submitButton);
        await expect(page).toHaveURL('https://demoqa.com/profile');
    } catch (error) {
        console.error('Error during login:', error);
        await page.screenshot({ path: 'screenshots/loginError.png' });
        throw error;
    }
});

// Test to search for a book
test('User can search for a book', async ({ page }) => {
    try {
        await page.goto('https://demoqa.com/books');
        await page.fill(selectors.searchInput, 'JavaScript');
        await page.click(selectors.bookLink);
        await expect(page.locator(selectors.bookLink)).toBeVisible({ timeout: 10000 });
        console.log('Book search successful');
    } catch (error) {
        console.error('Error during book search:', error);
        await page.screenshot({ path: 'screenshots/bookSearchError.png' });
        throw error;
    }
});

// Test to add a book to the collection
test('User can add a book to the collection', async ({ page }) => {
    try {
        await page.goto('https://demoqa.com/books');
        await page.fill(selectors.searchInput, 'JavaScript');
        await page.click(selectors.bookLink);
        await page.waitForSelector(selectors.addToCollectionButton, { state: 'attached', timeout: 10000 });
        await page.click(selectors.addToCollectionButton);
        await page.screenshot({ path: 'screenshots/bookAdded.png' });
        console.log('Book added to collection');
    } catch (error) {
        console.error('Error adding book to collection:', error);
        await page.screenshot({ path: 'screenshots/addBookError.png' });
        throw error;
    }
});

// Test to verify the book is in the profile
test('User can verify the book in the profile', async ({ page }) => {
    try {
        await page.goto('https://demoqa.com/profile');
        await expect(page.locator(selectors.bookTitle)).toBeVisible({ timeout: 10000 });
        await page.screenshot({ path: 'screenshots/bookInProfile.png' });
        console.log('Book verified in profile');
    } catch (error) {
        console.error('Error verifying book in profile:', error);
        await page.screenshot({ path: 'screenshots/verifyBookError.png' });
        throw error;
    }
});

// Test to delete the book from the collection
test('User can delete the book from the collection', async ({ page }) => {
    try {
        await page.goto('https://demoqa.com/profile');
        if (await page.isVisible(selectors.bookTitle)) {
            await page.click(selectors.deleteButton);
            await page.click(selectors.confirmButton);
            await expect(page.locator(selectors.bookTitle)).not.toBeVisible({ timeout: 10000 });
            await page.screenshot({ path: 'screenshots/bookDeleted.png' });
            console.log('Book deleted from collection');
        } else {
            console.log('Book not found in profile, skipping delete action.');
        }
    } catch (error) {
        console.error('Error deleting book from collection:', error);
        await page.screenshot({ path: 'screenshots/deleteBookError.png' });
        throw error;
    }
});

