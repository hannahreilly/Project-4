class CreateAdopts < ActiveRecord::Migration[6.0]
  def change
    create_table :adopts do |t|
      t.references :dog, null: false, foreign_key: true
      t.references :adopts, null: false, foreign_key: true
      t.timestamps
    end
  end
end
