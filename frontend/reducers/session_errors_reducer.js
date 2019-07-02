import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
const defaultState = [];

const sessionErrorsReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return defaultState;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;