import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class paymentMethod extends Page {
  /**
   * define selectors using getter methods
   */
  get transBCA() {
    return $('//span[text()="Transfer BCA"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async chooseTransBCA() {
    await super.isDisplayed(this.transBCA);
    await super.clickElement(this.transBCA);
  }
}

export default new paymentMethod();
