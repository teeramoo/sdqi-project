require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should validate the presence of comment" do
    comment = Comment.new
    assert !comment.valid?
    assert_equal ["can't be blank", "is too short (minimum is 10 characters)"], comment.errors[:comment_text]
  end

  test "should validate the length comment" do
    comment = Comment.new(comment_text: "hello")
    assert !comment.valid?
    assert_equal ["is too short (minimum is 10 characters)"], comment.errors[:comment_text]
  end

end
