import { test, expect } from "@playwright/test";

test("register", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.getByTestId("nav-sign-in").click();
  await page.getByTestId("register-link").click();
  await page.getByTestId("first-name").fill("test");
  await page.getByTestId("last-name").fill("test");
  await page.getByTestId("dob").fill("2000-12-01");
  await page.getByTestId("street").fill("1 big street");
  await page.getByTestId("postal_code").fill("l18 6gh");
  await page.getByTestId("city").fill("liverpool");
  await page.getByTestId("state").fill("merseyside");
  await page.getByTestId("country").selectOption("AE");
  await page.getByTestId("phone").fill("070000000000");
  await page.getByTestId("email").fill("test@test.com");
  await page.getByTestId("password").fill("Pa55wordstreet@");
  await page.getByTestId("register-submit").click();
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
