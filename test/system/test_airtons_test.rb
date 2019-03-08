require "application_system_test_case"

class TestAirtonsTest < ApplicationSystemTestCase
  setup do
    @test_airton = test_airtons(:one)
  end

  test "visiting the index" do
    visit test_airtons_url
    assert_selector "h1", text: "Test Airtons"
  end

  test "creating a Test airton" do
    visit test_airtons_url
    click_on "New Test Airton"

    fill_in "Id", with: @test_airton.id
    fill_in "Nome", with: @test_airton.nome
    click_on "Create Test airton"

    assert_text "Test airton was successfully created"
    click_on "Back"
  end

  test "updating a Test airton" do
    visit test_airtons_url
    click_on "Edit", match: :first

    fill_in "Id", with: @test_airton.id
    fill_in "Nome", with: @test_airton.nome
    click_on "Update Test airton"

    assert_text "Test airton was successfully updated"
    click_on "Back"
  end

  test "destroying a Test airton" do
    visit test_airtons_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Test airton was successfully destroyed"
  end
end
