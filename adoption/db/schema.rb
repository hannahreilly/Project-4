# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_11_201137) do

  create_table "adopts", force: :cascade do |t|
    t.integer "dog_id", null: false
    t.integer "adopts_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["adopts_id"], name: "index_adopts_on_adopts_id"
    t.index ["dog_id"], name: "index_adopts_on_dog_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "age"
    t.string "breed"
    t.string "img"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email"
  end

  add_foreign_key "adopts", "adopts", column: "adopts_id"
  add_foreign_key "adopts", "dogs"
end
