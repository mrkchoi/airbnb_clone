import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { logIn, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Log in'
  });
};

const mdp = dispatch => {
  return ({
    processForm: user => dispatch(logIn(user)),
    processDemoForm: user => dispatch(logIn(user)),
    otherForm: (
      <a
        href="#"
        className="modal__btn-other-form"
        onClick={() => dispatch(openModal('signup'))}>
        Sign up
      </a>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(msp, mdp)(SessionForm);