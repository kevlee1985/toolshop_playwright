// utils/TestData.ts

export class TestData {
  // Login Credentials
  static loginEmail = "test1@test.com";
  static loginPassword = "Pa55wordstreet@";

  static defaultAddress = {
    state: "Downtown",
    postalCode: "L18 6GH",
    street: "1 big street",
    city: "dubai",
    countryCode: "AE", // ISO 3166-1 Alpha-2 country code
  };

  // Contact Info
  static phoneNumber = "070000000000";

  // Gift Card Details (if used in future)
  static giftCard = {
    number: "123456789012B456",
    validationCode: "ABC123",
  };

  // Personal Info
  static firstName = "test";
  static lastName = "test";
  static dateOfBirth = "2000-12-01";
}
