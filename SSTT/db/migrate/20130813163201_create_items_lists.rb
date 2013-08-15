class CreateItemsLists < ActiveRecord::Migration
  def change
    create_table :items_lists do |t|
      t.integer :number
      t.string :date
      t.string :random

      t.timestamps
    end
  end
end
