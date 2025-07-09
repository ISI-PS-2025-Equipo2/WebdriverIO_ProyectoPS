import Page from "./page.js";

class CheckStatePage extends Page {

  get numberSavingsAccount() {
    return $("a[href='activity.htm?id=17784']")
  }

  get numberCheckingAccount() {
    return $("a[href='activity.htm?id=13899']")
  }

  get numberLoanAccount() {
    return $("a[href='activity.htm?id=16674']")
  }

  async selectAccount(account) {
    if (account == 17784) {
      await this.numberSavingsAccount.click();
    } else if (account == 13899) {
      await this.numberCheckingAccount.click();
    } else {
      await this.numberLoanAccount.click();
    }
  }

  open () {
    return super.open('overview');
  } 
}

export default new CheckStatePage();
