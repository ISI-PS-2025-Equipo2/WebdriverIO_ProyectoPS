Feature: Para Bank Update Contact Info Feature

  Background:
    Given I am on the login page
    When I login with john and demo
    
  Scenario Outline: As a user, I can update my contact info into the Para Bank Website
    Given I am on the update contact info page
    When I update my contact info with <firstName> and <lastName> and <address> and <city> and <state> and <zipCode> and <phone>
    Then I should see a text on the Update result saying <message>

    Examples:
      | firstName | lastName | address  | city     | state     | zipCode | phone | message         |
      | Juan      | Calle    | provenza | medellin | antioquia |   35155 |   123 | Profile Updated |
