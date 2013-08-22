class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.integer :stage
      t.string :text

      t.timestamps
    end
  end
end
