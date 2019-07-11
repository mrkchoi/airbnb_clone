json.extract! booking, :id, :start_date, :end_date, :num_guests, :listing_id, :user_id

json.listing do
  json.partial! 'api/listings/listing', listing: booking.listing
end
