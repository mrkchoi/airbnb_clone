import usersReducer from './users_reducer';
import listingReducer from './listing_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingReducer
});

export default entitiesReducer;
