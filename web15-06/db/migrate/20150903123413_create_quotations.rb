class CreateQuotations < ActiveRecord::Migration
  def change
    create_table :quotations do |t|
      t.string :author_name
      t.string :category
      t.text :quote

      t.timestamps null: false
    end
  end
end
