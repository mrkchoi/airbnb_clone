import { RECEIVE_REVIEWS_BY_LISTING_ID } from '../actions/review_actions';
import { merge } from 'lodash';

let defaultState = {};

const reviewsReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_REVIEWS_BY_LISTING_ID:
      return action.reviews;
    default:
      return oldState;
  }
};

export default reviewsReducer;
