require 'test_helper'

class ItemsListsControllerTest < ActionController::TestCase
  setup do
    @items_list = items_lists(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:items_lists)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create items_list" do
    assert_difference('ItemsList.count') do
      post :create, items_list: { date: @items_list.date, number: @items_list.number, random: @items_list.random }
    end

    assert_redirected_to items_list_path(assigns(:items_list))
  end

  test "should show items_list" do
    get :show, id: @items_list
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @items_list
    assert_response :success
  end

  test "should update items_list" do
    patch :update, id: @items_list, items_list: { date: @items_list.date, number: @items_list.number, random: @items_list.random }
    assert_redirected_to items_list_path(assigns(:items_list))
  end

  test "should destroy items_list" do
    assert_difference('ItemsList.count', -1) do
      delete :destroy, id: @items_list
    end

    assert_redirected_to items_lists_path
  end
end
