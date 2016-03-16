Feature: Vendor

  In order to make sure that a vendor can login and add the category and item.

  Scenario: Vendor should be able to add items and categories

    Vendor should be able to change item and category

    Given I am a vendor
    And I am logged in as vendor
    Then I should see a link to add category button
    Then I should see a link to add item button
    When I click the link for the add category button
    Then I should see a list of category
    When I click the new category button
    Then I should see a form to add category
    Then I should see category added
    When I click the link for the add item button
    Then I should see a list of items
    When I click the new item link
    Then I should see a form to add items
    When I click the add button
    Then I should see the item added
