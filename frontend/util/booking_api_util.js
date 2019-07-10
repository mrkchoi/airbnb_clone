
export const fetchAllBookings = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings`
  })
}

export const fetchBookingByBookingId = bookingId => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings/${bookingId}`
  })
}

export const fetchBookingsByUserId = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings?userId=${userId}`
  })
}

export const fetchBookingsByListingId = listingId => {
  return $.ajax({
    method: 'GET',
    url: `/api/bookings?listingId=${listingId}`
  });
}

export const createBooking = booking => {
  return $.ajax({
    method: 'POST',
    url: `/api/bookings`,
    data: { booking }
  })
}

export const deleteBooking = bookingId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${bookingId}`
  });
}

