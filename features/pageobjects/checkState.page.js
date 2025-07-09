import Page from "./page.js";

class CheckStatePage extends Page {

  get numberSavingsAccount() {
    return $("//a[normalize-space()='13344']")
  }

  get numberCheckingAccount() {
    return $("//a[normalize-space()='12345']")
  }

  get numberLoanAccount() {
    return $("//a[normalize-space()='13899']")
  }

  async selectAccount(account) {
    if (account == 13344) {
      await expect(this.numberSavingsAccount).toBeExisting();
      await this.numberSavingsAccount.waitForClickable();
      await this.numberSavingsAccount.click();
      
    } else if (account == 12345) {
      await expect(this.numberCheckingAccount).toBeExisting();
      await this.numberCheckingAccount.waitForClickable();      
      await this.numberCheckingAccount.click();
      
    } else {
      await expect(this.numberLoanAccount).toBeExisting();
      await this.numberLoanAccount.waitForClickable();
      await this.numberLoanAccount.click();
      
    }
  }

  open () {
    return super.open('overview');
  } 
}

export default new CheckStatePage();
