import usersReducer from './users_reducer';
import listingReducer from './listing_reducer';
import reviewsReducer from './reviews_reducer';
import bookingReducer from './bookings_reducer';

import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingReducer,
  reviews: reviewsReducer,
  bookings: bookingReducer
});

export default entitiesReducer;
