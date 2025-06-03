import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly proceedToCheckoutButton1: Locator;
  readonly proceedToCheckoutButton2: Locator;
  readonly proceedToCheckoutButton3: Locator;
  readonly stateField: Locator;
  readonly postCode: Locator;
  readonly paymentDropdown: Locator;
  readonly installmentDropdown: Locator;
  readonly confirmButton: Locator;
  readonly giftCardNumber: Locator;
  readonly validationCode: Locator;
  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutButton1 = page.getByTestId("proceed-1");
    this.proceedToCheckoutButton2 = page.getByTestId("proceed-2");
    this.proceedToCheckoutButton3 = page.getByTestId("proceed-3");
    this.stateField = page.getByTestId("state");
    this.postCode = page.getByTestId("postal_code");
    this.paymentDropdown = page.getByTestId("payment-method");
    this.installmentDropdown = page.getByTestId("monthly_installments");
    this.confirmButton = page.getByTestId("finish");
    this.giftCardNumber = page.getByTestId("gift_card_number");
    this.validationCode = page.getByTestId("validation_code");
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/checkout");
  }

  async checkoutflow(paymentMethod: string) {
    await this.proceedToCheckoutButton1.click();
    await this.proceedToCheckoutButton2.click();
    await this.stateField.fill("Mountains");
    await this.postCode.fill("L16 4PW");
    await this.proceedToCheckoutButton3.click();
    await this.paymentDropdown.selectOption(paymentMethod);
  }
}


