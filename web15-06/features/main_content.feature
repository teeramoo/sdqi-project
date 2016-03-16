Feature: Content

  In order to make sure the member can see the full content of the site

  Scenario: content flow for the website

   Member should be able to see the items, price, more for the item and should be able to
    comment, upvote or downvote.

    Given I am a member
    And I am logged in
    Then I should see a link for the project
    When I click the link for the project
    Then I should visit the project page
    Then I should see a table with itemname,price and description
    Then I should see a link for more
    When I click on the link for the more
    Then I should be able to see details of an Item
    Then I should see a button for upvote
    Then I should see a comment box
    When I click button for the upvote
    Then I should see increase in upvote count
    When I enter certain text inside comment box
    Then I should see my text updated in the comment list