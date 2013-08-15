class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.integer :number
      t.string :date
      t.string :random

      t.timestamps
    end
  end
end
