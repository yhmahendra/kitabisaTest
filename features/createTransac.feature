Feature: Donation transaction in Kitabisa.com
  
  Background: Open Kitabisa.com homepage
    Given Open Kitabisa homepage
  
  Scenario: Creating a donation transaction with custom donation value in Kitabisa.com
  When User go to first campaign
  And User want to create donation transaction from detail page
  And User want to donate 10000
  And User choose Transfer BCA as payment method
  And User create the donation transaction
  And User want to go back from payment instruction page
  Then User want to go back from detail page

    