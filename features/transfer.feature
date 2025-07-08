Feature: Para Bank Transfer Feature

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can make transactions from one account to another
    Given I am on the transfer page
    When I write the <amount> to transfer from the account <fromAccount> to the account <toAccount> and press transfer
    Then I see <message>
    And I log out

  Examples:
  |   amount   |   fromAccount   |   toAccount   |         message          |
  |    100     |      13344      |     12456     |    Transfer Complete!    | 
  |            |      13344      |     12456     |          Error!          |
