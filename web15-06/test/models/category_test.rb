require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "should validate the presence of name" do
    category = Category.new
    assert !category.valid?, "category name is not present"
    assert_equal ["can't be blank"], category.errors[:name]
  end

  test "should validate the uniqueness of name" do
    old_category = categories(:one)
    category = Category.new(name: old_category.name)
    assert !category.valid?, "category name not unique"
    assert_equal ["has already been taken"], category.errors[:name]
  end
end
