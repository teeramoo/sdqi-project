require 'test_helper'

class VotesControllerTest < ActionController::TestCase

  include Devise::TestHelpers

  setup do
    @vote = votes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:votes)
  end

  test "should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "should create vote" do
    sign_in users(:one)
    assert_difference('Vote.count') do
      post :create, vote: { downvote: @vote.downvote, item_id: @vote.item_id, upvote: @vote.upvote, user_id: @vote.user_id }
    end

    assert_redirected_to vote_path(assigns(:vote))
  end

  test "should show vote" do
    get :show, id: @vote
    assert_response :success
  end

  test "should get edit" do
    sign_in users(:one)
    get :edit, id: @vote
    assert_response :success
  end

  test "should update vote" do
    sign_in users(:one)
    patch :update, id: @vote, vote: { downvote: @vote.downvote, item_id: @vote.item_id, upvote: @vote.upvote, user_id: @vote.user_id }
    assert_redirected_to vote_path(assigns(:vote))
  end

  test "should destroy vote" do
    sign_in users(:one)
    assert_difference('Vote.count', -1) do
      delete :destroy, id: @vote
    end

    assert_redirected_to votes_path
  end
end
