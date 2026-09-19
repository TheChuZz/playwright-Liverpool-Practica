import { test } from '@playwright/test';
import { MainPage } from '../page/MainPage';

test.describe('Search in main page a product', () => {
    test('Enter the text into the search field and validate the result', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.goto();
        await mainPage.searchForProduct('Play Station 5');
    });
});
