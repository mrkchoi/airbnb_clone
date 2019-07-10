import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import NavbarDropdownContainer from '../navbar/dropdown/navbar_dropdown_container';
import BookingFormContainer from '../../components/booking/booking_modal/booking_form_container'

const Modal = ({modal, closeModal}) => {
  if (!modal) return null;

  let component;
  switch(modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'profile':
      component = <NavbarDropdownContainer />;
      break;
    case 'booking':
      component = <BookingFormContainer />;
      break;
    default:
      return null;
  }

  if (modal === 'profile') {
    return (
      <div
        className="modal__background modal__background--profile"
        onClick={closeModal}
      >
        <div className="modal__child modal__child--profile" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  } else if (modal === 'booking') {
    return (
      <div
        className="modal__background modal__background--booking"
        onClick={closeModal}
      >
        <div className="modal__child modal__child--booking" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal__background" onClick={closeModal}>
        <div className="modal__child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
};

const msp = state => {
  return ({
    modal: state.ui.modal
  });
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(Modal);

