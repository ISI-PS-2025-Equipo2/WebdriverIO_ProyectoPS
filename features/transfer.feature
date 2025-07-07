Feature: Para Bank Transfer Feature

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can make transactions from one account to another
    Given I am on the transfer page
    When I write the <amount> to transfer from the <account1> to <account2> and press transfer
    Then I see <message>

  Examples:
  |   amount   |   account1   |   account2   |         message          |
  |    100     |    13344     |    13455     |    Transfer Complete!    | 
  |            |    13344     |    13455     |          Error!          |
