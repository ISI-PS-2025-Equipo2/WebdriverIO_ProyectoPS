import Page from "./page.js";

class UpdateContactInfoPage extends Page {
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

  get btnSubmit() {
    return $('//input[@value="Update Profile"]');
  }

  async updateContactInfoPage(
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone
  ) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await this.inputState.setValue(state);
    await this.inputZipCode.setValue(zipCode);
    await this.inputPhone.setValue(phone);
    await this.btnSubmit.click();
  }

  open() {
    return super.open('updateprofile');
  }
}

export default new UpdateContactInfoPage();
