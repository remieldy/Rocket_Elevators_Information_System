require "application_system_test_case"

class DomQuotesTest < ApplicationSystemTestCase
  setup do
    @dom_quote = dom_quotes(:one)
  end

  test "visiting the index" do
    visit dom_quotes_url
    assert_selector "h1", text: "Dom Quotes"
  end

  test "creating a Dom quote" do
    visit dom_quotes_url
    click_on "New Dom Quote"

    fill_in "Fullname", with: @dom_quote.FullName
    fill_in "Hractivity", with: @dom_quote.HrActivity
    fill_in "Id", with: @dom_quote.ID
    fill_in "Maxpersonfloor", with: @dom_quote.MaxPersonFloor
    fill_in "Numberapp", with: @dom_quote.NumberApp
    fill_in "Numberbasement", with: @dom_quote.NumberBasement
    fill_in "Numbercages", with: @dom_quote.NumberCages
    fill_in "Numberdistinct", with: @dom_quote.NumberDistinct
    fill_in "Numberfloor", with: @dom_quote.NumberFloor
    fill_in "Numberparking", with: @dom_quote.NumberParking
    fill_in "Numbertrades", with: @dom_quote.NumberTrades
    fill_in "Phonenumber", with: @dom_quote.PhoneNumber
    click_on "Create Dom quote"

    assert_text "Dom quote was successfully created"
    click_on "Back"
  end

  test "updating a Dom quote" do
    visit dom_quotes_url
    click_on "Edit", match: :first

    fill_in "Fullname", with: @dom_quote.FullName
    fill_in "Hractivity", with: @dom_quote.HrActivity
    fill_in "Id", with: @dom_quote.ID
    fill_in "Maxpersonfloor", with: @dom_quote.MaxPersonFloor
    fill_in "Numberapp", with: @dom_quote.NumberApp
    fill_in "Numberbasement", with: @dom_quote.NumberBasement
    fill_in "Numbercages", with: @dom_quote.NumberCages
    fill_in "Numberdistinct", with: @dom_quote.NumberDistinct
    fill_in "Numberfloor", with: @dom_quote.NumberFloor
    fill_in "Numberparking", with: @dom_quote.NumberParking
    fill_in "Numbertrades", with: @dom_quote.NumberTrades
    fill_in "Phonenumber", with: @dom_quote.PhoneNumber
    click_on "Update Dom quote"

    assert_text "Dom quote was successfully updated"
    click_on "Back"
  end

  test "destroying a Dom quote" do
    visit dom_quotes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Dom quote was successfully destroyed"
  end
end
