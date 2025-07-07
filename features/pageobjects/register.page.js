import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */

   get registBtn() {
    
    return $('//*[@id="loginPanel"]/p[2]/a');
  }
   get inputFirstName() {
    return $('//*[@id="customer.firstName"]');
  }

   get inputLastName() {
    return $('//*[@id="customer.lastName"]');
  }

   get inputAddress() {
    return $('//*[@id="customer.address.street"]');
  }

   get inputCity() {
    return $('//*[@id="customer.address.city"]');
  }

   get inputState() {
    return $('//*[@id="customer.address.state"]');
  }

   get inputZipCode() {
    return $('//*[@id="customer.address.zipCode"]');
  }

   get inputPhone() {
    return $('//*[@id="customer.phoneNumber"]');
  }

   get inputSsn() {
    return $('//*[@id="customer.ssn"]');
  }

   get inputUsername() {
    return $('//*[@id="customer.username"]');
  }

   get inputPassword() {
    return $('input[name="customer.password"]');
  }

   get inputConfirm() {
    return $('//*[@id="repeatedPassword"]');
  }

   get btnSubmit() {
    return $(
      "//input[@value='Register']"
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to register using fistName, lastName, address, city, state, zipCode, phone, ssn,
   *                        username, password and confirmPassword
   */
   async register(
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
  ) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await this.inputState.setValue(state);
    await this.inputZipCode.setValue(zipCode);
    await this.inputPhone.setValue(phone);
    await this.inputSsn.setValue(ssn);

    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.inputConfirm.setValue(confirmPassword);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
   open() {
    return super.open('register');
  }
}

export default new RegisterPage();
