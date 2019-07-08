import { connect } from 'react-redux';
import NavbarDropdown from './navbar_dropdown';
import { logOut } from "../../../actions/session_actions";
import { closeModal } from '../../../actions/modal_actions';

const msp = state => {
  return ({
    currentUserId: state.session.id
  });
}

const mdp = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(NavbarDropdown);
