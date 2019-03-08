class CreateDomQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :dom_quotes do |t|
      t.string :FullName
      t.integer :PhoneNumber
      t.integer :NumberApp
      t.integer :NumberFloor
      t.integer :NumberBasement
      t.integer :NumberDistinct
      t.integer :NumberParking
      t.integet :MaxPersonFloor
      t.integer :NumberTrades
      t.integer :NumberCages
      t.integer :HrActivity
      t.string :ID

      t.timestamps
    end
  end
end
