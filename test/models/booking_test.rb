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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
