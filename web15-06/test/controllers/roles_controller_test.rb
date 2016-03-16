require 'test_helper'


#....admin should be able to create, read, update and destroy role.
# member, vendor and unsigned users
# shouldnot be able to see and create role


class RolesControllerTest < ActionController::TestCase
  include Devise::TestHelpers
  setup do
    @role = roles(:one)
  end

  test "Admin should get index" do
    sign_in users(:one)
    get :index
    assert_response :success
    assert_not_nil assigns(:roles)
  end

  test "Admin should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "Admin should create role" do
    sign_in users(:one)
    assert_difference('Role.count') do
      post :create, role: { name: "test" }
    end

    assert_redirected_to role_path(assigns(:role))
  end

  test "should show role" do
    sign_in users(:one)
    get :show, id: @role
    assert_response :success
  end

  test "Admin should be able to get edit" do
    sign_in users(:one)
    get :edit, id: @role
    assert_response :success
  end

  test "Admin should be able to update role" do
    sign_in users(:one)
    patch :update, id: @role, role: { name: @role.name }
    assert_redirected_to role_path(assigns(:role))
  end

  test "Admin should be able to destroy role" do
    sign_in users(:one)
    assert_difference('Role.count', -1) do
      delete :destroy, id: @role
    end

    assert_redirected_to roles_path
  end

  #............TESTING THE ROLES OF MEMBER....................

  test "member should  get index" do
    sign_in users(:two)
    get :index
    assert_response :success
  end

  test "member should not get new" do
    sign_in users(:two)
    get :new
    assert_redirected_to root_path
  end

  test "member  should not be able to create role" do
    sign_in users(:two)
    assert_no_difference('Role.count') do
      post :create, role: { name: @role.name }
    end

    #assert_redirected_to role_path(assigns(:role))
    assert_redirected_to root_path
  end

  test "Member should be able to show role" do
    sign_in users(:two)
    get :show, id: @role
    assert_response :success
  end

  test "member should not be able to get edit" do
    sign_in users(:two)
    get :edit, id: @role
    assert_redirected_to root_path
  end

  test "member should not be able to update role" do
    sign_in users(:two)
    patch :update, id: @role, role: { name: @role.name }
    #assert_redirected_to role_path(assigns(:role))
    assert_redirected_to root_path
  end

  test "member should not be able to destroy role" do
    sign_in users(:two)
    assert_no_difference('Role.count') do
      delete :destroy, id: @role
    end

    #assert_redirected_to roles_path
    assert_redirected_to root_path

  end

  #............TESTING THE ROLES OF Vendor....................

  test "vendor should  get index" do
    sign_in users(:three)
    get :index
    assert_response :success
  end

  test "vendor should not get new" do
    sign_in users(:three)
    get :new
    assert_redirected_to root_path
  end

  test "vendor should not be able to create role" do
    sign_in users(:three)
    assert_no_difference('Role.count') do
      post :create, role: { name: @role.name }
    end

    #assert_redirected_to role_path(assigns(:role))
    assert_redirected_to root_path
  end

  test "vendor should be able to show role" do
    sign_in users(:three)
    get :show, id: @role
    assert_response :success
  end

  test "vendor should not be able to get edit" do
    sign_in users(:three)
    get :edit, id: @role
    assert_redirected_to root_path
  end

  test "vendor should not be able to update role" do
    sign_in users(:three)
    patch :update, id: @role, role: { name: @role.name }
    #assert_redirected_to role_path(assigns(:role))
    assert_redirected_to root_path
  end

  test "vendor should not be able to destroy role" do
    sign_in users(:three)
    assert_no_difference('Role.count') do
      delete :destroy, id: @role
    end

    #assert_redirected_to roles_path
    assert_redirected_to root_path

  end

end