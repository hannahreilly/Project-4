class AddCreatedByToDogs < ActiveRecord::Migration[6.0]
  def change
    add_column :dogs, :created_by, :string
  end
end
