# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  start_date :date
#  end_date   :date
#  num_guests :integer
#  listing_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: 'Listing'
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

    
end
