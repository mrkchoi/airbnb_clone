import SessionForm from './session_form';
import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Log in'
  });
};

const mdp = dispatch => {
  return ({
    processForm: user => dispatch(logIn(user))
  });
};

export default connect(msp, mdp)(SessionForm);