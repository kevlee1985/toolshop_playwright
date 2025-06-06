import { type Locator, type Page } from "@playwright/test";
import {HomePage} from "../../pages/login/homePage"

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly signInButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId("email");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-submit");
    this.signInButton = page.getByTestId("nav-sign-in");
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com//auth/login");
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
