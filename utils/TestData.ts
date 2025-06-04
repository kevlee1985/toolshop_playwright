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

  //contact form jargon
  static contactMessageTooBig =
    "We had a full-blown pixel panic after the snackbot borked the Wi-Fi again. Marketing's synergy ninjas went into full swivel-chair mode, pinging decks like boomerangs. Meanwhile, DevOps triggered a coffee-driven hotfix fiesta, and the intern rage-clicked the cloud until Jenkins had a nervous breakdown. HR started a vibesync to realign the morale matrix, but it turned into a feedback tornado. Steve tried to YOLO a rollback during a stand-nap, and now the fridge API speaks only Swedish. Long story short: the cron job ghosted us, and we’re beta-testing disaster. But hey, the donuts deployed flawlessly. Total scrumception.";

  static successContactMessage =
    "I tried cooking healthy but set off the smoke alarm. Twice. My salad ran away with the dressing, and my blender sounds like it’s summoning demons. On the bright side, I’ve invented charred quinoa. Gordon Ramsay would call it “boldly tragic.”";
}
