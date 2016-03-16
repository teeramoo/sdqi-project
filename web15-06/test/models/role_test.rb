require 'test_helper'

class RoleTest < ActiveSupport::TestCase
  test "should validate presence of name" do
    role = Role.new
    assert !role.valid?
    assert_equal ["can't be blank"], role.errors[:name]
  end

  test "should validate the uniqueness of role" do
    old_role = roles(:one)
    role = Role.new(name: old_role.name)
    assert !role.valid?, "role not unique"
    assert_equal ["has already been taken"], role.errors[:name]
  end
end
