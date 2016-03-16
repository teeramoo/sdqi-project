Feature: Admin

  In order to make sure Admin can see registered users, ban a user and see statistics of registered users.

  Scenario: Admin previliges.

  Admin should see users and can ban them.

    Given I am an admin
    When I visit the main page
    And I am signed in
    Then I should see a link for users
    When I click the link for the users
    Then I should see a button to ban users
    When I click the button for ban
    Then I should see the user banned