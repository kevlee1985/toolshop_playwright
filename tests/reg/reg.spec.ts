import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../../pages/login/registrationPage";

test("register", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.registerAccount("test@test.com");
  await page.waitForTimeout(2000);
  const errorMsg = page.locator("div.help-block", {
    hasText: "A customer with this email address already exists.",
  });

  if (await errorMsg.isVisible()) {
    console.log("Duplicate customer error displayed.");
    // Handle the error (e.g., skip test, show alert, etc.)
  } else {
    console.log("No duplicate customer error. Proceeding with test.");
    // Continue with test flow
  }
});
