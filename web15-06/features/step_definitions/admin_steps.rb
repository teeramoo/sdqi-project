Given(/^I am an admin$/) do
  #@role = FactoryGirl.create(:role_admin)
  @admin = FactoryGirl.create(:admin)
end

When(/^I visit the main page$/) do
  visit '/'
end

And(/^I am signed in$/) do
  visit '/users/sign_in'
  fill_in 'Email', with: @admin.email
  fill_in 'Password', with: @admin.password
  click_button 'Log in'
end

Then(/^I should see a link for users$/) do
  visit '/'
  page.find("#user")
end

When(/^I click the link for the users$/) do
  #page.find(:xpath, "//*[@id='container2']/button[1]/a").click
  page.find("#user").click
end

Then(/^I should see a button to ban users$/) do
  #expect(page).to have_button("Ban")
  #expect(page). to have_selector('form.button_to')
  #all(:xpath, "//*[@id='container2']/table/tbody/tr[1]/td[3]/form/input[1]").first
  all("#ban_button").first
end

When(/^I click the button for ban$/) do
  #all(:xpath, "//*[@id='container2']/table/tbody/tr[1]/td[3]/form/input[1]").first.click
  all("#ban_button").first.click
end

Then(/^I should see the user banned$/) do
  visit '/users'
  expect(page).should_not have_content "Email:#{@admin.email}"
end
