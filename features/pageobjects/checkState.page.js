import Page from "./page.js";

class CheckStatePage extends Page {

  get numberSavingsAccount() {
    return $("//a[normalize-space()='17784']")
  }

  get numberCheckingAccount() {
    return $("//a[normalize-space()='13899']")
  }

  get numberLoanAccount() {
    return $("//a[normalize-space()='16674']")
  }

  async selectAccount(account) {
    if (account == 17784) {
      await expect(numberSavingsAccount).toBeExisting();
      await this.numberSavingsAccount.waitForClickable();
      await this.numberSavingsAccount.click();
      
    } else if (account == 13899) {
      await expect(numberCheckingAccount).toBeExisting();
      await this.numberCheckingAccount.waitForClickable();      
      await this.numberCheckingAccount.click();
      
    } else {
      await expect(numberLoanAccount).toBeExisting();
      await this.numberLoanAccount.waitForClickable();
      await this.numberLoanAccount.click();
      
    }
  }

  async getAvailableAccounts() {
  const accounts = await $$("//table[@id='accountTable']//a");
  const accountNumbers = await Promise.all(accounts.map(acc => acc.getText()));
  console.log("📄 Cuentas disponibles actualmente:", accountNumbers);
  return accountNumbers;
}


  open () {
    return super.open('overview');
  } 
}

export default new CheckStatePage();
