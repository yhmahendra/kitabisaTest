import { Given, When, Then, And } from '@cucumber/cucumber';

import contributePage from '../pageobjects/contributePage';

When(/^User create the donation transaction$/, async () => {
    await contributePage.checkAmount();
    await contributePage.checkTransBCAMethod();
    await contributePage.inpFullName();
    await contributePage.inpPhoneEmail();
    await contributePage.subPayment();
  },
);
