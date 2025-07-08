import Page from './page.js';

class LoanPage extends Page {
  
  get inputLoanAmount () {
    return $('//input[@id="amount"]');
  }

  get inputDownPayment () {
    return $("//input[@id='downPayment']")
  }

  get inputFromAccount () {
    return $("//select[@id='fromAccountId']")
  }

  get btnApplyNow () {
    return $("//input[@value='Apply Now']")
  }

  get btnLogout () {
    return $("//a[normalize-space()='Log Out']");
  }

  async requestLoan (
    loanAmount,
    downPayment,
    account
  ) {
    await this.inputLoanAmount.waitForEnabled();
    await this.inputLoanAmount.setValue(loanAmount);

    await this.inputDownPayment.waitForEnabled();
    await this.inputDownPayment.setValue(downPayment);

    await this.inputFromAccount.waitForEnabled();
    await this.inputFromAccount.selectByAttribute('value', account);
    
    await this.btnApplyNow.click();
  }

  open () {
    return super.open('requestloan');
  }
}

export default new LoanPage();
