class AddFieldToCreateTestAirtons < ActiveRecord::Migration[5.2]
  def change
    add_column :create_test_airtons, :newField, :string
  end
end
