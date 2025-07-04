import { Given, When, Then } from '@wdio/cucumber-framework';
import RegisterPage from '../pageobjects/register.page.js';
import LoginPage from '../pageobjects/login.page.js';
import UpdateContactInfoPage from '../pageobjects/updateContactInfo.page.js';
import CheckState from '../pageobjects/checkState.page.js'

const pages = {
  login: LoginPage,
  register: RegisterPage,
  checkState: CheckState
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

//LOGIN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a text saying (.*)$/, async (message) => {
  if (message == "Error!") {
    // invalid username or password
    await expect($(".title")).toBeExisting();
    await expect($(".title")).toHaveTextContaining(message);
  } else {
    // valid username or password
    await expect($(".title")).toBeExisting();
    await expect($(".title")).toHaveTextContaining(message);
  }
});

//REGISTER
When(
  /^I register with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword
  ) => {
    await RegisterPage.register(
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone,
      ssn,
      username,
      password,
      confirmPassword
    );
  }
);

Then(
  /^I should see a text on the Register result saying (.*)$/,
  async (message) => {
    if (message == "Passwords did not match.") {
      // incorrect password and confirmed password
      await expect($("span[id='repeatedPassword.errors']")).toBeExisting();
      await expect(
        $("span[id='repeatedPassword.errors']")
      ).toHaveTextContaining(message);
    } else if (message == "This username already exists.") {
      //username already exist
      await expect($(".error")).toBeExisting();
      await expect($(".error")).toHaveTextContaining(message);
    } else {
      // valid data
      await expect($(".title")).toBeExisting();
      await expect($(".title")).toHaveTextContaining(message);
    }
  }
);

//CHECK ACCOUNT STATE
When(/^I click on an (.*)$/,
     async (account) => {
       await CheckState.selectAccount(account);
});

Then(/^I can see the (.*) as (.*), (.*), (.*) and (.*)$/,
     async (details, balance, account, accountType, available) => {
        if (balance == "$9721.93" && account == 13344 && accountType === "CHECKING" && available == "$9721.93") {
          await expect($(".title")).toBeExisting();
          await expect($(".title")).toHaveTextContaining(details);
       } else {
          await expect($(".title")).toBeExisting();
       }
});
