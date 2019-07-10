import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKINGS_BY_USER_ID = 'RECEIVE_BOOKINGS_BY_USER_ID';
export const RECEIVE_BOOKINGS_BY_LISTING_ID = 'RECEIVE_BOOKINGS_BY_LISTING_ID';
export const RECEIVE_BOOKING_BY_BOOKING_ID = 'RECEIVE_BOOKING_BY_BOOKING_ID';

export const REMOVE_BOOKING_BY_BOOKING_ID = 'REMOVE_BOOKING_BY_BOOKING_ID';


// Regular action creators
const receiveAllBookings = bookings => {
  return ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings: bookings
  });
} 

const receiveBookingByBookingId = booking => {
  return ({
    type: RECEIVE_BOOKING_BY_BOOKING_ID,
    booking: booking
  });
} 

const receiveBookingsByUserId = bookings => {
  return ({
    type: RECEIVE_BOOKINGS_BY_USER_ID,
    bookings: bookings
  });
} 

const receiveBookingsByListingId = bookings => {
  return ({
    type: RECEIVE_BOOKINGS_BY_LISTING_ID,
    bookings: bookings
  });
} 

const removeBookingByBookingId = booking => {
  return ({
    type: REMOVE_BOOKING_BY_BOOKING_ID,
    bookingId: booking.id
  });
} 

// Thunk action creators
export const fetchAllBookings = () => dispatch => {
  return BookingApiUtil.fetchAllBookings()
    .then(bookings => dispatch(receiveAllBookings(bookings)));
}

export const fetchBookingByBookingId = bookingId => dispatch => {
  return BookingApiUtil.fetchBookingByBookingId(bookingId)
    .then(booking => dispatch(receiveBookingByBookingId(booking)));
}

export const fetchBookingsByUserId = userId => dispatch => {
  return BookingApiUtil.fetchBookingsByUserId(userId)
    .then(bookings => dispatch(receiveBookingsByUserId(bookings)));
}

export const fetchBookingsByListingId = listingId => dispatch => {
  return BookingApiUtil.fetchBookingsByListingId(listingId)
    .then(bookings => dispatch(receiveBookingsByListingId(bookings)));
}

export const createBooking = booking => dispatch => {
  return BookingApiUtil.createBooking(booking)
    .then(booking => dispatch(receiveAllBookings(booking)));
}

export const deleteBooking = bookingId => dispatch => {
  return BookingApiUtil.deleteBooking(bookingId)
    .then(booking => dispatch(removeBookingByBookingId(booking)));
}
