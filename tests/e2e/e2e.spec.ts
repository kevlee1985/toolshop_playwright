import { test, expect } from "@playwright/test";
import { CheckoutPage } from "../../pages/login/checkoutPage";
import { HomePage } from "../../pages/login/homePage";
import { TestData } from "../../utils/TestData";
import { RegistrationPage } from "../../pages/login/registrationPage";
import { LoginPage } from "../../pages/login/loginPage";

test("@e2e e2e", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const checkoutPage = new CheckoutPage(page);
  await registrationPage.goto();
  await registrationPage.registerAccount(TestData.loginEmail);
  await page.waitForTimeout(2000);
  const errorMsg = page.locator("div.help-block", {
    hasText: "A customer with this email address already exists.",
  });

  if (await errorMsg.isVisible()) {
    console.log("Duplicate customer error displayed.");
    await loginPage.goto();
  } else {
    console.log("No duplicate customer error. Proceeding with test.");
    // Continue with test flow
  }
  await expect(loginPage.emailInput).toBeVisible();
  await loginPage.login(TestData.loginEmail, TestData.loginPassword);
  console.log("customer logged in succesfully");
  await expect(page.getByTestId("nav-menu")).toContainText(
    TestData.firstName + " " + TestData.lastName
  );
  await homePage.goto();
  await homePage.addItem("Thor Hammer");
  console.log("item added to basket");
  await checkoutPage.checkoutflow("Buy Now Pay Later");
  await checkoutPage.installmentDropdown.selectOption("6 Monthly Installments");
  await checkoutPage.confirmButton.click();
  await expect(page.locator(".help-block")).toHaveText(
    "Payment was successful"
  );
  console.log("Checkout succesful");
  await homePage.signOut();
  console.log("player logged out succesfully");
});
