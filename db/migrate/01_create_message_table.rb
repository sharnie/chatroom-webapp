class CreateMessageTable < ActiveRecord::Migration
  create_table :messages do |t|
    t.string :content

    t.timestamp
  end
end