import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class campaignDetail extends Page {
  /**
   * define selectors using getter methods
   */
  get btnDonation() {
    return $('//button[@id="campaign-detail_button_donasi-sekarang"]');
  }

  get btnBack() {
    return $('//*[@id="plain-header"]/*[@data-icon="arrow-left"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickDonation() {
    await super.isDisplayed(this.btnDonation);
    await super.clickElement(this.btnDonation);
  }

  async clickBack() {
    await super.isDisplayed(this.btnBack);
    await super.clickElement(this.btnBack);
  }
}

export default new campaignDetail();
