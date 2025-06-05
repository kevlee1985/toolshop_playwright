import { expect, type Locator, type Page } from "@playwright/test";
import { TestData } from "../../utils/TestData";

export class ContactUsPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly emailField: Locator;
  readonly subjectField: Locator;
  readonly messageField: Locator;
  readonly chooseFile: Locator;
  readonly submit: Locator;
  readonly largeMessageError: Locator;
  readonly successMessage: Locator;
  readonly firstNameError: Locator;
  readonly secondNameError: Locator;
  readonly emailError: Locator;
  readonly subjectError: Locator;
  readonly messageError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByTestId("first-name");
    this.lastName = page.getByTestId("last-name");
    this.emailField = page.getByTestId("email");
    this.subjectField = page.getByTestId("subject");
    this.messageField = page.getByTestId("message");
    this.chooseFile = page.getByTestId("attachment");
    this.submit = page.getByTestId("contact-submit");
    this.largeMessageError = page.locator(".help-block", {
      hasText: "The message field must not be greater than 250 characters",
    });
    this.successMessage = page.getByText(
      "Thanks for your message! We will contact you shortly."
    );
    this.messageError = page.getByTestId("message-error");
    this.subjectError = page.getByTestId("subject-error");
    this.emailError = page.getByTestId("email-error");
    this.firstNameError = page.getByTestId("last-name-error");
    this.secondNameError = page.getByTestId("first-name-error");
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/contact");
  }

  async contactFormMessage(message: string) {
    await this.firstName.fill(TestData.firstName);
    await this.lastName.fill(TestData.lastName);
    await this.emailField.fill(TestData.loginEmail);
    await this.subjectField.selectOption("Payments");
    await this.messageField.fill(message);
    await this.chooseFile.setInputFiles("Untitled.txt");
    await this.submit.click();
  }

  
}
