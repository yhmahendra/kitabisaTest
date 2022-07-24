import { Given, When, Then, And } from '@cucumber/cucumber';

import campaignDetail from '../pageobjects/campaignDetail';

When(/^User want to create donation transaction from detail page$/, async () => {
    await campaignDetail.clickDonation();
  },
);

When(/^User want to go back from detail page$/, async () => {
    await campaignDetail.clickBack();
  }  
);
