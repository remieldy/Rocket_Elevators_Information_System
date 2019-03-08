require 'test_helper'

class TestAirtonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @test_airton = test_airtons(:one)
  end

  test "should get index" do
    get test_airtons_url
    assert_response :success
  end

  test "should get new" do
    get new_test_airton_url
    assert_response :success
  end

  test "should create test_airton" do
    assert_difference('TestAirton.count') do
      post test_airtons_url, params: { test_airton: { id: @test_airton.id, nome: @test_airton.nome } }
    end

    assert_redirected_to test_airton_url(TestAirton.last)
  end

  test "should show test_airton" do
    get test_airton_url(@test_airton)
    assert_response :success
  end

  test "should get edit" do
    get edit_test_airton_url(@test_airton)
    assert_response :success
  end

  test "should update test_airton" do
    patch test_airton_url(@test_airton), params: { test_airton: { id: @test_airton.id, nome: @test_airton.nome } }
    assert_redirected_to test_airton_url(@test_airton)
  end

  test "should destroy test_airton" do
    assert_difference('TestAirton.count', -1) do
      delete test_airton_url(@test_airton)
    end

    assert_redirected_to test_airtons_url
  end
end
