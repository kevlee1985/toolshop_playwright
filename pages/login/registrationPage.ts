import { type Locator, type Page } from "@playwright/test";
import { TestData } from "../../utils/TestData";

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
    await this.firstName.fill(TestData.firstName);
    await this.lastName.fill(TestData.lastName);
    await this.dob.fill(TestData.dateOfBirth);
    await this.street.fill(TestData.defaultAddress.street);
    await this.postalCode.fill(TestData.defaultAddress.postalCode);
    await this.city.fill(TestData.defaultAddress.city);
    await this.state.fill(TestData.defaultAddress.state);
    await this.country.selectOption(TestData.defaultAddress.countryCode);
    await this.phone.fill(TestData.phoneNumber);
    await this.email.fill(email);
    await this.password.fill(TestData.loginPassword);
    await this.registerSubmit.click();
  }
}
