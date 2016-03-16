Given(/^I am a member$/) do
  @member = FactoryGirl.create(:user)
  @category = FactoryGirl.create(:category)
  @item = FactoryGirl.create(:item)
  @comment = FactoryGirl.create(:comment)
  @vote = FactoryGirl.create(:vote)
end

Given(/^I am logged in$/) do
  visit '/users/sign_in'
  fill_in 'Email', with: @member.email
  fill_in 'Password', with: @member.password
  click_button 'Log in'
end

Then(/^I should see a link for the project$/) do
  visit '/'
  page.find("#project")
end

When(/^I click the link for the project$/) do
 page.find("#project").click
end

Then(/^I should visit the project page$/) do
  #expect(page).to have_content "category name: #{@category.name}"
  expect(page).to have_content "#{@item.name}"
end

Then(/^I should see a table with itemname,price and description$/) do
  expect(page).to have_content "#{@item.name}"
  expect(page).to have_content "#{@item.price}"
  expect(page).to have_content "#{@item.description}"
end

Then(/^I should see a link for more$/) do
  expect(page).to have_link('More Info', href: item_path(@item))
end

When(/^I click on the link for the more$/) do
  find_link('More Info', href: item_path(@item)).click
end

Then(/^I should be able to see details of an Item$/) do
  expect(page).to have_content "#{@item.name}"
  expect(page).to have_content "#{@item.price}"
  expect(page).to have_content "#{@item.description}"

end

Then(/^I should see a button for upvote$/) do
  expect(page).to have_button('Upvote')
  #expect(page).to have_button("Downvote")
end

Then(/^I should see a comment box$/) do
  expect(page).to have_content "Comments: "
end

When(/^I click button for the upvote$/) do
    click_button('Upvote')
end

Then(/^I should see increase in upvote count$/) do
  visit '/items/1'
  expect(page).to have_content "Total Upvotes: 1"
  #expect(page).to have_conent "#{@item.upvoted_users.count}"
end

When(/^I enter certain text inside comment box$/) do
  fill_in 'Comment text', with: @comment.comment_text
  click_button('Create Comment')
end

Then(/^I should see my text updated in the comment list$/) do
  visit '/items/1'
  expect(page).to have_content "#{@comment.comment_text}"
end
