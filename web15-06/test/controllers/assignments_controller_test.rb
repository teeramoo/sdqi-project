require 'test_helper'

class AssignmentsControllerTest < ActionController::TestCase
  include Devise::TestHelpers
  setup do
    @assignment = assignments(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:assignments)
  end

  test "should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "should create assignment" do
    sign_in users(:one)
    assert_difference('Assignment.count') do
      post :create, assignment: { name: @assignment.name, url: @assignment.url }
    end

    assert_redirected_to assignment_path(assigns(:assignment))
  end

  test "should show assignment" do
    get :show, id: @assignment
    assert_response :success
  end

  test "should get edit" do
    sign_in users(:one)
    get :edit, id: @assignment
    assert_response :success
  end

  test "should update assignment" do
    sign_in users(:one)
    patch :update, id: @assignment, assignment: { name: @assignment.name, url: @assignment.url }
    assert_redirected_to assignment_path(assigns(:assignment))
  end

  test "should destroy assignment" do
    sign_in users(:one)
    assert_difference('Assignment.count', -1) do
      delete :destroy, id: @assignment
    end

    assert_redirected_to assignments_path
  end
end
