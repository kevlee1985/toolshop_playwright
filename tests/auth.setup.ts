import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/login/loginPage";
import { RegistrationPage } from "../pages/login/registrationPage";
import { TestData } from "../utils/TestData";

setup("Create customer 01 auth", async ({ page, context }) => {
  const email = TestData.loginEmail;
  const password = TestData.loginPassword;
  const fullname = TestData.firstName + " " + TestData.lastName;
  const customer01AuthFile = ".auth/customer01.json";
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(email, password);
  await page.waitForTimeout(2000);

  const errorMsg = page.locator("div.help-block", {
    hasText: "Invalid email or password",
  });
  if (await errorMsg.isVisible()) {
    console.log("No user found");
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.registerAccount(TestData.loginEmail);
    await page.waitForTimeout(2000);
  } else {
    await expect(page.getByTestId("nav-menu")).toContainText(fullname);
    await context.storageState({ path: customer01AuthFile });
  }
});
