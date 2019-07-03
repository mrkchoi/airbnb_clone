import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign up'
  });
};

const mdp = dispatch => {
  return ({
    processForm: user => dispatch(signUp(user)),
    otherForm: (
      <a 
        href="#"
        className="modal__btn-other-form"
        onClick={() => dispatch(openModal('login'))}>
        Log in
      </a>
    ),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(msp, mdp)(SessionForm);