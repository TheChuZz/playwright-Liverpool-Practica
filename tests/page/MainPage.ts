import {Page, Locator, expect} from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly searchBar: Locator;
    readonly titlePoduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titlePoduct = page.locator('plp-page-heading-title-title').first();
        this.searchBar = page.getByTestId('blt26617d4f2e17657d-header-search-input').first();
    }
    async goto() {
        await this.page.goto('https://www.liverpool.com.mx/tienda/home');
    }
    async searchForProduct(productName: string) {
        await this.searchBar.fill(productName);
        await this.searchBar.press('Enter');
        await this.titlePoduct.waitFor({ state: 'visible' });
    }

}