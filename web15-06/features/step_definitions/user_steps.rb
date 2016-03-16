Given(/^I am a guest$/) do
  @user = FactoryGirl.create(:user)
end

When(/^I visit the project page$/) do
  visit '/'
end

Then(/^I should see a link for the signup$/) do
  expect(page).to have_link('Sign up', href: new_user_registration_path)
end

When(/^I click the link for the signup$/) do
  find_link('Sign up', href: new_user_registration_path).click
end

Then(/^I should see a form for signup$/) do
  visit '/users/sign_up'
  expect(page).to have_selector('form#new_user.new_user')
  #expect(page).to have_content "Email: #{@user.email}"
  #expect(page).to have_content "Password: #{@user.password}"

end

When(/^I click the button for signup$/) do
  #expect(page).to have_selector('form#Sign up')
  expect(page).to have_button('Sign up')
  fill_in 'Email', with: @user.email
  fill_in 'Password', with: @user.password
  click_button('Sign up')
end

Then(/^I should see the user logged in$/) do
  visit '/'
  #expect(page).to have_button('manage account')
end
