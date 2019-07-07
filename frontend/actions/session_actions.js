import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

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
  });
};

const receiveSessionErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON,
  })
};

export const clearErrors = () => {
  return ({
    type: CLEAR_SESSION_ERRORS,
  });
}

export const signUp = user => dispatch => {
  return SessionApiUtil.signUp(user)
    .then(
      user => dispatch(receiveCurrentUser(user)), 
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const logIn = user => dispatch => {
  return SessionApiUtil.logIn(user)
    .then(
      user => dispatch(receiveCurrentUser(user)), 
      errors => dispatch(receiveSessionErrors(errors))
    );
};

export const logOut = () => dispatch => {
  return SessionApiUtil.logOut()
    .then(
      () => dispatch(logoutCurrentUser())
    );
};
