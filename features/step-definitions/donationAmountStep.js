import { Given, When, Then, And } from '@cucumber/cucumber';

import donationAmount from '../pageobjects/donationAmount';

When(/^User want to donate 10000$/, async () => {
    await donationAmount.tenThouDonation();
  },
);
