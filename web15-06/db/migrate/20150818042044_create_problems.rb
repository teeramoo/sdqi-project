class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.integer :problemid
      t.string :name
      t.references :assignment, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
