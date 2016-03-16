require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "should validate the presence of name" do
    item = Item.new
    assert !item.valid?, "item name is not present"
    assert_equal ["can't be blank"], item.errors[:name]
  end

  test "should validate the uniqueness of name" do
    old_item = items(:one)
    item = Item.new(name: old_item.name)
    assert !item.valid?, "item name not unique"
    assert_equal ['has already been taken'], item.errors[:name]
  end

  test "should validate the presence of price" do
    item = Item.new(name: "samosa")
    assert !item.valid?, "price field is blank"
    assert_equal ["can't be blank"], item.errors[:price]
  end

  test "should validate the presence of description" do
    item = Item.new(name: "samosa")
    assert !item.valid?, "description field is blank"
    assert_equal ["can't be blank"], item.errors[:price]
  end

end
