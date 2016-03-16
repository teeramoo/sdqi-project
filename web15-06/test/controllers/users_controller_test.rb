require 'test_helper'

#..test for the abilities of different users here....
#.admin can manage other users...
#..test for what other users cannot do.....

class UsersControllerTest < ActionController::TestCase

  include Devise::TestHelpers
  setup do
    @user = users(:two)
  end

  test "member should be able to update his  profile" do
    sign_in users(:two)
    patch :update, id: @user, user: {role_id: @user.role_id, email: @user.email, password: @user.encrypted_password}
    assert_redirected_to user_path(assigns(:user))
  end

  test "member should not be able to update other users profile" do
    sign_out users(:two)
    sign_in users(:five)
    patch :update , id: @user, user: {role_id: @user.role_id, email: @user.email, password: @user.encrypted_password}
    assert_redirected_to root_path
  end

  test "Admin should be able to update other users profile" do
    sign_in users(:one)
    patch :update, id: @user, user: {role_id: @user.role_id, email: @user.email, password: @user.encrypted_password}
    assert_redirected_to user_path(assigns(:user))
  end

  test "Admin should get index" do
    sign_in users(:one)
    get :index
    assert_response :success
    assert_not_nil assigns(:users)
  end

  test "Admin should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "Admin can see show for a user" do
    sign_in users(:one)
    get :show, id: @user
    assert_response :success
  end

  test "Admin should get edit" do
    sign_in users(:one)
    get :edit, id: @user
    assert_response :success
  end


  test "Admin destroy user" do
    sign_in users(:one)
    assert_difference('User.count', -1) do
      delete :destroy, id: @user
    end

    assert_redirected_to users_path
  end
end
