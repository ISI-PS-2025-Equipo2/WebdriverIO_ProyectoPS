Feature: Para Bank Loan Feature

  Background:
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can request loans in the Para Bank Website
    Given I am on the requestloan page
    When I input a loan amount of <loanAmount>, a down payment of <downPayment> from <account> and press apply now
    Then I see a message saying <message>

  Examples:
    |   loanAmount   |   downPayment   |   account   |          message         |
    |      100       |       100       |    13344    |  Loan Request Processed  |
    |       0        |       100       |    13344    |          Error!          |
