import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly navMenu: Locator;
  readonly signOutButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.navMenu = page.getByTestId("nav-menu");
    this.signOutButton = page.getByTestId("nav-sign-out");
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/");
  }

  async addItem(item: string) {
    await this.page.getByText(item).click();
    await this.page.getByTestId("add-to-cart").click();
    await this.page.getByTestId("nav-cart").click();
  }

  async signOut() {
    await this.navMenu.click();
    await expect(this.signOutButton).toBeVisible();
    await this.signOutButton.click();
    

}
}
