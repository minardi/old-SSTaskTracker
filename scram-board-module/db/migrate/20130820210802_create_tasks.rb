class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :x
      t.integer :y
      t.string :text

      t.timestamps
    end
  end
end
