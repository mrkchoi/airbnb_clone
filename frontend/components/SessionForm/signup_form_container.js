import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign up'
  });
};

const mdp = dispatch => {
  return ({
    processForm: user => dispatch(signUp(user))
  });
};

export default connect(msp, mdp)(SessionForm);