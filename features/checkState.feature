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
      |     Account Details   |   $1194.00  |    15675    |     SAVINGS     |    $1194.00   |
      |     Account Details   |  -$1036.50  |    14121    |    CHECKINGS    |     $0.00     |
      |     Account Details   |  -$980.00   |    15786    |      LOAN       |     $0.00     |
