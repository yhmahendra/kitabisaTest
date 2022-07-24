import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class donationAmount extends Page {
  /**
   * define selectors using getter methods
   */
  get boxOtherDonation() {
    return $('//input[@id="contribute_inputfield_amount-donation"]');
  }

  get contPayment() {
    return $('//button[@id="contribute_button_lanjutkan-pembayaran"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async tenThouDonation() {
    await super.isDisplayed(this.boxOtherDonation);
    await super.isDisplayed(this.contPayment);
    await super.clickElement(this.boxOtherDonation);
    await super.inputEventValue(this.boxOtherDonation, '10.000');
    await super.clickElement(this.contPayment);
  }
}

export default new donationAmount();
