import { Given, When, Then, And } from '@cucumber/cucumber';

import paymentMethod from '../pageobjects/paymentMethod';

When(/^User choose Transfer BCA as payment method$/, async () => {
    await paymentMethod.chooseTransBCA();
  },
);
