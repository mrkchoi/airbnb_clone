class AddNumroomsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :num_rooms, :integer
  end
end
