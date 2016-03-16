Feature: User

  In order to know if new users can sign up and login or not we need to make sure that the new user can sign up
  and login.

  Scenario: User sign up and Login.

   A user should be able to signup and login.

    Given I am a guest
    When I visit the project page
    Then I should see a link for the signup
    When I click the link for the signup
    Then I should see a form for signup
    When I click the button for signup
    Then I should see the user logged in