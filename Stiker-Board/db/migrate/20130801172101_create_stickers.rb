class CreateStickers < ActiveRecord::Migration
  def change
    create_table :stickers do |t|
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
