import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly navMenu: Locator;
  readonly signOutButton: Locator;
  readonly navCart: Locator;
  readonly hamburgerMenu: Locator;
  readonly searchBox: Locator;
  readonly searchSubmit: Locator;
  readonly mobileFilter: Locator;
  constructor(page: Page) {
    this.page = page;
    this.navMenu = page.getByTestId("nav-menu");
    this.signOutButton = page.getByTestId("nav-sign-out");
    this.navCart = page.getByTestId("nav-cart");
    this.hamburgerMenu = page.getByRole("button", {
      name: "Toggle navigation",
    });
    this.searchBox = page.getByTestId("search-query");
    this.searchSubmit = page.getByTestId("search-submit");
    this.mobileFilter = page.getByRole("button", { name: "Filters" });
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/");
  }

  async addItem(item: string) {
    await this.page.getByText(item).click();
    await this.page.getByTestId("add-to-cart").click();
    if (await this.hamburgerMenu.isVisible()) {
      await this.hamburgerMenu.click();
    } else {
      await this.navCart.isVisible();
    }
    await this.navCart.click();
  }

  async signOut() {
    await this.navMenu.click();
    await expect(this.signOutButton).toBeVisible();
    await this.signOutButton.click();
  }

  async search(item: string) {
    if (await this.mobileFilter.isVisible()) {
      await this.mobileFilter.click();
    } else {
      await expect(this.searchBox).toBeVisible();
    }
    await this.searchBox.fill(item);
    await this.searchSubmit.click();
  }
}
