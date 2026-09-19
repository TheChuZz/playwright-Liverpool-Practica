import {Page, Locator, expect} from "@playwright/test";

export class MainPage {
    readonly page: Page;
    readonly searchBar: Locator;
    readonly titlePoduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.getByPlaceholder(/Buscar por producto/).filter({ visible: true });
        this.titlePoduct = page.getByTestId('plp-page-heading-title-title');
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