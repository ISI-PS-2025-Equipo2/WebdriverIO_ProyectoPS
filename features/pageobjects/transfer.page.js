import page from "./page.js";

class TransferPage extends Page {
  get inputAmount() {
    return $("//input[@id='amount']")
  }

  get inputFromAccount() {
    return $("//select[@id='fromAccountId']")
  }

  get inputToAccount() {
    return $("//select[@id='toAccountId']")
  }

  get btnTransfer () {
    return $("//input[@value='Transfer']")
  }

  async transferPage (
    amount,
    fromAccount,
    toAccount
  ) {
    await this.inputAmount.setValue(amount);
    await this.inputFromAccount.setValue(fromAccount);
    await this.inputToAccount.setValue(toAccount);
    await this.btnTransfer.click();
  }

  open() {
    return super.open('transfer');
  }
}

return default new TransferPage();
