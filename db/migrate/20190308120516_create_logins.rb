class CreateLogins < ActiveRecord::Migration[5.2]
  def change
    create_table :logins do |t|
      t.string :id_login
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
