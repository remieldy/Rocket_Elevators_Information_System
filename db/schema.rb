# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2019_03_07_005454) do
=======
ActiveRecord::Schema.define(version: 2019_03_06_213431) do
>>>>>>> 1b29a5219cbadbf69dc6e44a5bc6c89a99b33ea8

  create_table "admins", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "last_name"
    t.string "title"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "quotes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
<<<<<<< HEAD
    t.string "full_name"
    t.string "business_name"
    t.string "project_description"
    t.string "Message"
    t.string "building_type"
    t.float "elevator_price"
    t.float "installation_price"
    t.float "total_price"
    t.float "number_of_trade_market"
    t.integer "number_floor"
    t.integer "number_basement"
    t.integer "number_parking_space"
    t.integer "number_occupant_per_floor"
    t.integer "maximum_occupant_per_floor"
    t.integer "hour_of_activity"
    t.integer "estimated_number_of_elevatirs_cage"
=======
>>>>>>> 1b29a5219cbadbf69dc6e44a5bc6c89a99b33ea8
  end

end
