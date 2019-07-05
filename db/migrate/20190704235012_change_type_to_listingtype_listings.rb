class ChangeTypeToListingtypeListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :type
    add_column :listings, :listing_type, :string
  end
end
