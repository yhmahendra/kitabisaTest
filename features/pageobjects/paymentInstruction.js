import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class paymentInstruc extends Page {
  /**
   * define selectors using getter methods
   */
  get btnBack() {
    return $('//button[contains(@class, "style__Arrow-sc")]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickBack() {
    await super.isDisplayed(this.btnBack);
    await super.clickElement(this.btnBack);
  }
}

export default new paymentInstruc();
