import { Given, When, Then, And } from '@cucumber/cucumber';

import homepage from '../pageobjects/homepage';

Given(/^Open Kitabisa homepage$/, async () => {
  await homepage.openPage('https://kitabisa.com/');
});

When(/^User go to first campaign$/, async () => {
    await homepage.clickFrstCampaign();
  }
);
