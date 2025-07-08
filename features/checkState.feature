Feature: Para Bank Check State Feature

  Background: 
    Given I am on the login page
    When I login with john and demo

  Scenario Outline: As a user, I can check the state of my accounts in the Para Bank Website
    Given I am on the checkState page
    When I click on an <account>
    Then I can see the <details> as <account>, <accountType>, <balance> and <available>
    And I log out

    Examples:
      |        details        |   balance   |   account   |   accountType   |   available   |
      |     Account Details   |   $104.00   |    25221    |     SAVINGS     |    $104.00    |
      |     Account Details   |   $311.50   |    22113    |    CHECKING     |    $311.50    |
      |     Account Details   |  	$100.00   |    25332    |      LOAN       |    $100.00    |
