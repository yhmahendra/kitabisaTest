import { Given, When, Then, And } from '@cucumber/cucumber';

import paymentInstruc from '../pageobjects/paymentInstruction';

When(/^User want to go back from payment instruction page$/, async () => {
    await paymentInstruc.clickBack();
  },
);
