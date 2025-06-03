import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com//auth/login");
  }

  async addItem(item: string) {
    await this.page.getByText(item).click();
    await this.page.getByTestId("add-to-cart").click();
    await this.page.getByTestId("nav-cart").click();
  }
}
