import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../../pages/login/contactUsPage";
import { TestData } from "../../utils/TestData";

test.describe("Checkout challenge", async () => {

  test("contact form message too big", async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();
    await contactUsPage.contactFormMessage(TestData.contactMessageTooBig);
    await expect(contactUsPage.largeMessageError).toBeVisible();
  });

  test("successful contact us message sent", async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.goto();
    await contactUsPage.contactFormMessage(TestData.successContactMessage);
    await expect(contactUsPage.successMessage).toBeVisible();
  });
});
