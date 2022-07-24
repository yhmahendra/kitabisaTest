import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homepage extends Page {
  /**
   * define selectors using getter methods
   */
  get firstCampaign() {
    return $('//h3[text()="Penggalangan Dana Mendesak"]/parent::div[@id="template_horizontal-wide-card-slider"]//a[contains(@class, "style__CardLink")][1]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickFrstCampaign() {
    await super.isDisplayed(this.firstCampaign);
    await super.clickElement(this.firstCampaign);
  }
}

export default new homepage();
