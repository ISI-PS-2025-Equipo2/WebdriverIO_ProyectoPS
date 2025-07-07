import Page from './page.js';

class LoanPage extends Page {
  
  get inputLoanAmount () {
    return $("//input[@id='amount']");
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

  async requestLoan (
    loanAmount,
    downPayment,
    account
  ) {
    await this.inputLoanAmount.setValue(loanAmount);
    await this.inputDownPayment.setValue(downPayment);
    await this.inputFromAccount.setValue(account);
    await this.btnApplyNow.click();
  }

  open () {
    return super.open('requestloan');
  }
}

export default new LoanPage();
