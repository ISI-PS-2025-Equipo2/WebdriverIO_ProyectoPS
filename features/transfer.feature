Feature: Para Bank Transfer Feature

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can make transactions from one account to another
    Given I am on the transfer page
    When I write the <amount> to transfer from the account <fromAccount> to the account <toAccount> and press transfer
    Then I see <message>

  Examples:
  |   amount   |   fromAccount   |   toAccount   |                              message                                    |
  |    100     |      13344      |     12345     |  $100.00 has been transferred from account #13344 to account #12345.    | 
  |            |      13344      |     12345     |         An internal error has occurred and has been logged              |
