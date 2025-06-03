import { type Locator, type Page } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly dob: Locator;
  readonly street: Locator;
  readonly postalCode: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly country: Locator;
  readonly phone: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly registerSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByTestId("first-name");
    this.lastName = page.getByTestId("last-name");
    this.dob = page.getByTestId("dob");
    this.street = page.getByTestId("street");
    this.postalCode = page.getByTestId("postal_code");
    this.city = page.getByTestId("city");
    this.state = page.getByTestId("state");
    this.country = page.getByTestId("country");
    this.phone = page.getByTestId("phone");
    this.email = page.getByTestId("email");
    this.password = page.getByTestId("password");
    this.registerSubmit = page.getByTestId("register-submit");
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com//auth/register");
  }

  async registerAccount(email: string) {
    await this.firstName.fill("test");
    await this.lastName.fill("test");
    await this.dob.fill("2000-12-01");
    await this.street.fill("1 big street");
    await this.postalCode.fill("l18 6gh");
    await this.city.fill("liverpool");
    await this.state.fill("merseyside");
    await this.country.selectOption("AE");
    await this.phone.fill("070000000000");
    await this.email.fill(email);
    await this.password.fill("Pa55wordstreet@");
    await this.registerSubmit.click();
  }
}
