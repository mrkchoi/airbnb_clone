import { connect } from 'react-redux';
import Greeting from './greeting';
import { signUp, logIn, logOut } from '../../actions/session_actions';

const msp = ({ entities, session }) => {
  return ({
    currentUser: entities.users[session.id]
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
