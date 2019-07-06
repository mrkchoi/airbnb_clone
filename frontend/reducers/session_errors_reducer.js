import { merge } from 'lodash';
import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS 
} from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const defaultState = [];

const sessionErrorsReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return defaultState;
    case RECEIVE_CURRENT_USER:
      return defaultState;
    case CLOSE_MODAL:
      return defaultState;
    default:
      return [];
  }
};

export default sessionErrorsReducer;
