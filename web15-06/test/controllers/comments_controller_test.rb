require 'test_helper'

class CommentsControllerTest < ActionController::TestCase

  include Devise::TestHelpers

  setup do
    @comment = comments(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:comments)
  end

  test "should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "should create comment" do
    sign_in users(:one)
    assert_difference('Comment.count') do
      post :create, comment: { comment_text: @comment.comment_text,
                               item_id: @comment.item_id, user_id: @comment.user_id }
    end


    assert_redirected_to 'http://test.host/items/1'
    #assert_response :success
  end

  test "should show comment" do
    get :show, id: @comment
    assert_response :success
  end

  test "should get edit" do
    sign_in users(:one)
    get :edit, id: @comment
    assert_response :success
  end

  test "should update comment" do
    sign_in users(:one)
    patch :update, id: @comment, comment: { comment_text: @comment.comment_text,
                                            item_id: @comment.item_id, user_id: @comment.user_id }
    assert_redirected_to comment_path(assigns(:comment))
    #assert_response :success
  end

  test "should destroy comment" do
    sign_in users(:one)
    assert_difference('Comment.count', -1) do
      delete :destroy, id: @comment
    end

    assert_redirected_to comments_path
  end
end
