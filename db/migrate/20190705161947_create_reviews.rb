class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.text :review
      t.integer :rating
      t.integer :accuracy
      t.integer :communication
      t.integer :cleanliness
      t.integer :location
      t.integer :check_in
      t.integer :value

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :listing_id
  end
end
