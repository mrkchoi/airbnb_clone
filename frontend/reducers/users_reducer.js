export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
import { merge } from 'lodash';

const defaultState = {};

const usersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return newState[action.user.id] = action.user;
    default:
      return oldState;
  }
}

export default usersReducer;
