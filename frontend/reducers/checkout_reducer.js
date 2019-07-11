import { receiveCheckoutInfo } from '../actions/checkout_actions';
import { RECEIVE_CHECKOUT_INFO } from '../actions/checkout_actions';

import { merge } from 'lodash';

const checkoutReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CHECKOUT_INFO:
      return action.bookingParams;
    default:
      return oldState;
  }
}

export default checkoutReducer;


