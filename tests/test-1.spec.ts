import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/contact");
  await page.locator('[data-test="attachment"]').click();
  await page.locator('[data-test="attachment"]').setInputFiles("Untitled.txt");
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill("hhjf");
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill("jkgkjg");
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill("kjgkj@test.com");
  await page.locator('[data-test="subject"]').selectOption("return");
  await page.locator('[data-test="contact-submit"]').click();
  await page.locator('[data-test="message"]').click();
  await page.locator('[data-test="message"]').fill("hgdhgd");
  await page.locator('[data-test="contact-submit"]').click();
  await page.locator('[data-test="message"]').click();
  await page
    .locator('[data-test="message"]')
    .fill("hgdhgdhdhshfsgfsfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsgfsg");
  await page.locator('[data-test="contact-submit"]').click();
});
