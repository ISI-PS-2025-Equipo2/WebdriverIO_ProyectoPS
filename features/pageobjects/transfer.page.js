import Page from "./page.js";

class TransferPage extends Page {
  get inputAmount() {
    return $("//input[@id='amount']");
  }

  get inputFromAccount() {
    return $("//select[@id='fromAccountId']");
  }

  get inputToAccount() {
    return $("//select[@id='toAccountId']");
  }

  get btnTransfer() {
    return $("//input[@value='Transfer']");
  }

  get btnLogout() {
    return $("//a[normalize-space()='Log Out']");
  }

  async transfer(amount, fromAccount, toAccount) {
    await this.inputAmount.waitForEnabled();
    await this.inputAmount.setValue(amount);

    // Esperar a que los select estén listos
    await this.inputFromAccount.waitForDisplayed();
    await this.inputToAccount.waitForDisplayed();

    // Obtener opciones disponibles
    const fromOptions = await this.inputFromAccount.$$('option');
    const toOptions = await this.inputToAccount.$$('option');

    const fromValues = await Promise.all(fromOptions.map(opt => opt.getAttribute('value')));
    const toValues = await Promise.all(toOptions.map(opt => opt.getAttribute('value')));

    // Verificar existencia y seleccionar, si no existe usar el primero disponible
    const validFrom = fromValues.includes(fromAccount) ? fromAccount : fromValues[0];
    const validTo = toValues.includes(toAccount) ? toAccount : toValues.find(v => v !== validFrom) || toValues[0];

    if (validFrom !== fromAccount || validTo !== toAccount) {
      console.warn(`⚠️ Cuenta(s) no disponible(s). Usando cuentas válidas: from=${validFrom}, to=${validTo}`);
    }

    await this.inputFromAccount.selectByAttribute('value', validFrom);
    await this.inputToAccount.selectByAttribute('value', validTo);

    await this.btnTransfer.click();
  }

  async logout() {
    await this.btnLogout.waitForClickable();
    await this.btnLogout.click();
  }

  open() {
    return super.open('transfer');
  }
}

export default new TransferPage();
