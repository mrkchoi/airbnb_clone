import { connect } from 'react-redux';
import Greeting from './greeting';
import { signUp, logIn, logOut } from '../../actions/session_actions';

const msp = state => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
}

const mdp = dispatch => {
  return ({
    signUp: user => dispatch(signUp(user)),
    logIn: user => dispatch(logIn(user)),
    logOut: () => dispatch(logOut())
  });
}

export default connect(
  msp, 
  mdp
)(Greeting);
