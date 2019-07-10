json.extract! booking, :id, :start_date, :end_date, :num_guests, :listing_id, :user_id

json.user booking.user if booking.user
json.listing booking.listing if booking.listing