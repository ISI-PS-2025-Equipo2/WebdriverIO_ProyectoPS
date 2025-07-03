import Page from "./page.js";

class CheckStatePage extends Page {

  get numberAccount() {
    return $('//a[normalize-space()='13344']')
  }

  async selectAccount(account) {
    await this.numberAccount.click();
  }

  open() {
    return super.open('overview');
  } 
}

export default new CheckStatePage();
