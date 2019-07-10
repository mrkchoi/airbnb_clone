import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKINGS_BY_USER_ID,
  RECEIVE_BOOKINGS_BY_LISTING_ID,
  RECEIVE_BOOKING_BY_BOOKING_ID,
  REMOVE_BOOKING_BY_BOOKING_ID
} from '../actions/listing_actions';
import { merge } from 'lodash';

const bookingReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKINGS_BY_USER_ID:
      return action.bookings;
    case RECEIVE_BOOKINGS_BY_LISTING_ID:
      return action.bookings;
    case RECEIVE_BOOKING_BY_BOOKING_ID:
      return action.bookings;
    case REMOVE_BOOKING_BY_BOOKING_ID:
      delete newState[action.bookingId];
      return newState;
    default:
      return oldState;
  }
}

export default bookingReducer;
