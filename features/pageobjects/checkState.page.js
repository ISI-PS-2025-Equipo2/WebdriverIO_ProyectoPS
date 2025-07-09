import Page from "./page.js";

class CheckStatePage extends Page {
  /**
   * Retorna el array de números de cuenta visibles en la tabla
   */
  async getAvailableAccounts() {
    const accounts = await $$("//table[@id='accountTable']//a");
    const accountNumbers = await Promise.all(accounts.map(acc => acc.getText()));
    console.log("📄 Cuentas disponibles actualmente:", accountNumbers);
    return accountNumbers;
  }

  /**
   * Intenta seleccionar la cuenta si está visible en la tabla
   */
  async selectAccount(account) {
    const available = await this.getAvailableAccounts();
    const accountStr = String(account);

    if (!available.includes(accountStr)) {
      throw new Error(`❌ La cuenta ${accountStr} no está disponible en este momento.`);
    }

    const selector = `//a[normalize-space()='${accountStr}']`;
    const accountElement = await $(selector);

    await accountElement.waitForClickable({ timeout: 5000 });
    await accountElement.click();
  }

  open () {
    return super.open('overview');
  } 
}

export default new CheckStatePage();
