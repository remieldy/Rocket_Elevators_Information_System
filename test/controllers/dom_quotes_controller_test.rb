require 'test_helper'

class DomQuotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dom_quote = dom_quotes(:one)
  end

  test "should get index" do
    get dom_quotes_url
    assert_response :success
  end

  test "should get new" do
    get new_dom_quote_url
    assert_response :success
  end

  test "should create dom_quote" do
    assert_difference('DomQuote.count') do
      post dom_quotes_url, params: { dom_quote: { FullName: @dom_quote.FullName, HrActivity: @dom_quote.HrActivity, ID: @dom_quote.ID, MaxPersonFloor: @dom_quote.MaxPersonFloor, NumberApp: @dom_quote.NumberApp, NumberBasement: @dom_quote.NumberBasement, NumberCages: @dom_quote.NumberCages, NumberDistinct: @dom_quote.NumberDistinct, NumberFloor: @dom_quote.NumberFloor, NumberParking: @dom_quote.NumberParking, NumberTrades: @dom_quote.NumberTrades, PhoneNumber: @dom_quote.PhoneNumber } }
    end

    assert_redirected_to dom_quote_url(DomQuote.last)
  end

  test "should show dom_quote" do
    get dom_quote_url(@dom_quote)
    assert_response :success
  end

  test "should get edit" do
    get edit_dom_quote_url(@dom_quote)
    assert_response :success
  end

  test "should update dom_quote" do
    patch dom_quote_url(@dom_quote), params: { dom_quote: { FullName: @dom_quote.FullName, HrActivity: @dom_quote.HrActivity, ID: @dom_quote.ID, MaxPersonFloor: @dom_quote.MaxPersonFloor, NumberApp: @dom_quote.NumberApp, NumberBasement: @dom_quote.NumberBasement, NumberCages: @dom_quote.NumberCages, NumberDistinct: @dom_quote.NumberDistinct, NumberFloor: @dom_quote.NumberFloor, NumberParking: @dom_quote.NumberParking, NumberTrades: @dom_quote.NumberTrades, PhoneNumber: @dom_quote.PhoneNumber } }
    assert_redirected_to dom_quote_url(@dom_quote)
  end

  test "should destroy dom_quote" do
    assert_difference('DomQuote.count', -1) do
      delete dom_quote_url(@dom_quote)
    end

    assert_redirected_to dom_quotes_url
  end
end
