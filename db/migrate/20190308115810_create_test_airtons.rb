class CreateTestAirtons < ActiveRecord::Migration[5.2]
  def change
    create_table :test_airtons do |t|
      t.string :id
      t.string :nome

      t.timestamps
    end
  end
end
