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
  readonly addToCart: Locator;
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
    this.addToCart = page.getByTestId("add-to-cart");
  }

  async goto(): Promise<void> {
    await this.page.goto("https://practicesoftwaretesting.com/");
  }

  async addItem(item: string): Promise<void> {
    await this.page.getByText(item).click();
    await this.addToCart.click();
    const isMobile = await this.hamburgerMenu.isVisible();
    if (isMobile) {
      await this.hamburgerMenu.click();
    }
    await expect(this.navCart).toBeVisible();
    await this.navCart.click();
  }

  async signOut() {
    await this.navMenu.click();
    await expect(this.signOutButton).toBeVisible();
    await this.signOutButton.click();
  }

  async search(item: string): Promise<void> {
    try {
      if (await this.mobileFilter.isVisible()) {
        await this.mobileFilter.click();
      } else {
        await expect(this.searchBox).toBeVisible();
      }
      await this.searchBox.fill(item);
      await this.searchSubmit.click();
    } catch (error) {
      console.error(`Search failed for item: ${item}`, error);
      throw error;
    }
  }
}
