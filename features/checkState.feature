Feature: Para Bank Check State Feature

  Background: 
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can check the state of my accounts in the Para Bank Website
    Given I am on the overview page and see the <balance> in my account
    When I click on an <account>
    Then I can see the details as <account>, <accountType>, <balance> and <available>

    Examples:
      |   balance   |   account   |   accountType   |   available   |
      |   $5022.93  |    13344    |    CHECKING     |    $5022.93   |
