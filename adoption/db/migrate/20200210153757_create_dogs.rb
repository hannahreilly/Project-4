class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :age
      t.string :breed
      t.string :img
      t.string :location
      t.timestamps
    end
  end
end
