json.array! @bookings do |booking|
  json.partial! 'booking', booking: booking
end