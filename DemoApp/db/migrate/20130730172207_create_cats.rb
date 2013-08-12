class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      t.integer :weight

      t.timestamps
    end
  end
end
