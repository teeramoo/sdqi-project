Given(/^I am a vendor$/) do
  @vendor = FactoryGirl.create(:vendor)
  @category = FactoryGirl.create(:category)
  @item = FactoryGirl.create(:item)
end

And(/^I am logged in as vendor$/) do
  visit '/users/sign_in'
  fill_in 'Email', with: @vendor.email
  fill_in 'Password', with: @vendor.password
  click_button 'Log in'
end

Then(/^I should see a link to add category button$/) do
  visit '/'
  page.find("#category")
end

Then(/^I should see a link to add item button$/) do
  #expect(page).to have_link('update item', href: item_index_path)
  page.find("#item")
end

When(/^I click the link for the add category button$/) do
  #find_link('update category', href: category_index_path).click
  page.find("#category").click
end

Then(/^I should see a list of category$/) do
  expect(page).to have_content "#{@category.name}"
  #expect(page).to have_link('Edit', href: edit_category_path(@category))
  expect(page).to have_link('New Category', new_category_path)
end

When(/^I click the new category button$/) do
  find_link('New Category', new_category_path).click
end

Then(/^I should see a form to add category$/) do
  expect(page).to have_selector('form#new_category')
  fill_in 'Name', with: @category.name
  click_button('Create Category')
end

Then(/^I should see category added$/) do
  visit '/categories'
  expect(page).to have_content "#{@category.name}"
end

When(/^I click the link for the add item button$/) do
  visit '/'
  #find_link('update item', href: item_index_path).click
  page.find("#item").click
end

Then(/^I should see a list of items$/) do
  expect(page).to have_content "#{@item.name}"
  #expect(page).to have_link('Edit', href: edit_category_path(@item))
  expect(page).to have_link('New Item', new_item_path)
end

When(/^I click the new item link$/) do
  find_link('New Item', new_item_path).click
end

Then(/^I should see a form to add items$/) do
  expect(page).to have_selector('form#new_item')
  fill_in 'Name', with: @item.name
end

When(/^I click the add button$/) do
  click_button('Create Item')
end

Then(/^I should see the item added$/) do
  visit '/items'
  expect(page).to have_content "#{@item.name}"
end