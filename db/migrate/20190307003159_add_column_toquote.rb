class AddColumnToquote < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :full_name ,:string
    add_column :quotes, :business_name ,:string
    add_column :quotes, :project_description ,:string
    add_column :quotes, :Message ,:string
    add_column :quotes, :building_type, :string
    add_column :quotes, :elevator_price ,:float
    add_column :quotes, :installation_price ,:float
    add_column :quotes, :total_price ,:float
    add_column :quotes, :number_of_trade_market, :float
    #####  Peut-être simplement faire une seule column pour certaines données afin d'éviter la surchage 
    add_column :quotes, :number_floor, :integer
    add_column :quotes, :number_basement, :float
    add_column :quotes, :number_parking_space, :integer
    add_column :quotes, :number_occupant_per_floor, :integer
    add_column :quotes, :maximum_occupant_per_floor, :integer
    add_column :quotes, :hour_of_activity, :integer
    add_column :quotes, :estimated_number_of_elevatirs_cage, :integer



 
  end
end
