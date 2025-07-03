import { Given, When, Then } from "@wdio/cucumber-framework";
import UpdateContactInfoPage from "../pageobjects/updateContactInfo.page.js";
import { sleep } from "../pageobjects/page.js";

// UPDATE CONTACT INFO - LISTO

Given(/^I am on the update contact info page$/, async () => {
  await sleep(2000);
  await UpdateContactInfoPage.open();
  await sleep(2000);
});

When(
  /^I update my contact info with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (firstName, lastName, address, city, state, zipCode, phone) => {
    await UpdateContactInfoPage.updateContactInfoPage(
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone
    );
  }
);

Then(
  /^I should see a text on the Update result saying (.*)$/,
  async (message) => {
    if (message == "Profile Updated") {
      // valid update
      await expect($('//*[@id="updateProfileResult"]/h1')).toBeExisting();
      await expect($('//*[@id="updateProfileResult"]/h1')).toHaveTextContaining(
        message
      );
    } else {
      // invalid update
      await expect($('//*[@id="updateProfileResult"]/h1')).toBeExisting();
      await expect($('//*[@id="updateProfileResult"]/h1')).toHaveTextContaining(
        message
      );
    }
  }
);
