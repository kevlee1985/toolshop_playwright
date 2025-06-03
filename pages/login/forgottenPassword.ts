import { type Locator, type Page } from "@playwright/test";

export class ForgottenPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly forgotPasswordSubmit: Locator;
  readonly emptyEmail: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId("email");
    this.forgotPasswordSubmit = page.getByTestId("forgot-password-submit");
    this.emptyEmail = page.getByTestId("email-error");
  }

  async goto() {
    await this.page.goto(
      "https://practicesoftwaretesting.com//auth/forgot-password"
    );
  }

  async resetPassword(email: string) {
    await this.emailInput.fill(email);
    await this.forgotPasswordSubmit.click();
  }
}
