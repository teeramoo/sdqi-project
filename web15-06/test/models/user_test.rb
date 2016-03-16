require 'test_helper'
#...should validate the presence of username ..make sure in the form for sign up to add the field for username
#..make sure the input has correct role_id selected..
class UserTest < ActiveSupport::TestCase

  test "should validate the presence of email" do
    user = User.new
    assert !user.valid?, "email can not be empty"
    assert_equal ["can't be blank"], user.errors[:email]
    #assert_equal ["can't be blank"], user.errors[:name]------------may be .errors[:email]
  end

  test "should validate uniqueness of email" do
    old_user = users(:one)
    user = User.new(email: old_user.email)
    assert !user.valid?, "email is not unique"
    assert_equal ["has already been taken"], user.errors[:email]
  end

  test "should validate the presence of password" do
    user = User.new email: "testemail@gmail.com"
    assert !user.valid?
    assert_equal ["can't be blank"], user.errors[:password]
  end

  test "should validate the length of password" do
    user = User.new(email: "testagain@gmail.com", password: "abc")
    assert !user.valid?, "password too short"
    assert_equal ["is too short (minimum is 8 characters)"], user.errors[:password]
  end

  test "should find if the current user is banned" do
    user = User.new(email: "banuser@gmail.com", password: "banneduser123")
    assert !user.banned?
  end

end
