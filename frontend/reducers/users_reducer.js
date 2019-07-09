import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_HOST } from '../actions/user_actions';
import { merge } from 'lodash';

const defaultState = {};

const usersReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  debugger
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_HOST:
      newState[action.host.id] = action.host;
      return newState;
    default:
      return oldState;
  }
}

export default usersReducer;
