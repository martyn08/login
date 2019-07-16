@Login@Test
Feature: i want to verify login details on Google mail
  As a Google mail user
  i want to verify user name and password match


  @Ignore
 Scenario: Validate username and password on Google mail account
   Given i'm on Google mail web
   When i enter valid "username" with "automationfunworld@gmail.com"
   And I invalid "password" with "automation2016"
   Then Error message should be displayed

  Scenario: Search result page contains search query
    Given I am on google search page
    When I search for "Cucumber"
    Then the page title should contain "cucumber"

  Scenario: Google first result description contains searched query
    Given I am on google search page
    When I search for "Java"
    Then the first line on the result page should contain "Java"






