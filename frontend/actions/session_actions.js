import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

// Regular actions
const receiveCurrentUser = user => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  })
};

const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
    id: null
  });
};

const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  })
};

// Thunk actions
export const signUp = user => dispatch => {
  return SessionApiUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const logIn = user => dispatch => {
  return SessionApiUtil.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const logOut = () => dispatch => {
  return SessionApiUtil.logOut()
    .then(res => dispatch(logoutCurrentUser()));
};

