import { 
  RECEIVE_ALL_LISTINGS, 
  RECEIVE_LISTING, 
  REMOVE_LISTING 
} from '../actions/listing_actions';
import { merge } from 'lodash';

const listingReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      newState[action.listing.id] = action.listing;
      return newState;
    case REMOVE_LISTING:
      delete newState[action.listingId];
      return newState;
    default:
      return oldState;
  }
};

export default listingReducer;
