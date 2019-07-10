class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :start_date
      t.date :end_date
      t.integer :num_guests
      t.integer :listing_id
      t.integer :user_id

      t.timestamps
    end

    add_index :bookings, :listing_id
    add_index :bookings, :user_id
  end
end
