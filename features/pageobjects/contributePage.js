import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class contributePage extends Page {
  /**
   * define selectors using getter methods
   */
  get amount() {
    return $('//input[@id="contribute_inputfield_amount-donation"]');
  }

  get transMethod() {
    return $('//span[contains(@class,"style__VendorName")]');
  }

  get inputName() {
    return $('//input[@placeholder="Nama Lengkap"]');
  }

  get inputPhoneEmail() {
    return $('//input[@placeholder="Nomor Ponsel atau Email"]');
  }

  get submitPayment() {
    return $('//button[@id="contribute_button_lanjutkan-pembayaran"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async checkAmount() {
    await super.isDisplayed(this.amount);
    await super.getTextElement(this.transBCA, '10.000');
  }

  async checkTransBCAMethod() {
    await super.isDisplayed(this.transMethod);
    await super.getTextElement(this.transMethod, 'Transfer BCA');
  }

  async inpFullName() {
    await super.isDisplayed(this.inputName);
    await super.inputEventValue(this.inputName, 'MahendraTesting');
  }

  async inpPhoneEmail() {
    await super.isDisplayed(this.inputPhoneEmail);
    await super.inputEventValue(this.inputPhoneEmail, 'mahetesting@mail.com');
  }

  async subPayment() {
    await super.isDisplayed(this.submitPayment);
    await super.clickElement(this.subPayment);
  }
}

export default new contributePage();
