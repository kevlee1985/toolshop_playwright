import { test, expect } from "@playwright/test";
import { CheckoutPage } from "../../pages/login/checkoutPage";
import { HomePage } from "../../pages/login/homePage";
import { TestData } from "../../utils/TestData";

test.describe("checkout scenarios", async () => {
  test.use({ storageState: ".auth/customer01.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com");
  });

  test("@smoke buy now pay later", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addItem("Thor Hammer");
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.checkoutflow("Buy Now Pay Later");
    await checkoutPage.installmentDropdown.selectOption(
      "6 Monthly Installments"
    );
    await checkoutPage.confirmButton.click();
    await expect(page.locator(".help-block")).toHaveText(
      "Payment was successful"
    );
  });

  test("cash on delivery", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addItem("Thor Hammer");
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.checkoutflow("Cash on Delivery");
    await checkoutPage.confirmButton.click();
    await expect(page.locator(".help-block")).toHaveText(
      "Payment was successful"
    );
  });

  test("Gift Card", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addItem("Thor Hammer");
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.checkoutflow("Gift Card");
    await checkoutPage.giftCardNumber.fill(TestData.giftCard.number);
    await checkoutPage.validationCode.fill(TestData.giftCard.validationCode);
    await checkoutPage.confirmButton.click();
    await expect(page.locator(".help-block")).toHaveText(
      "Payment was successful"
    );
  });
});
