import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { currentUser, logOut } = this.props;

    if (currentUser) {
      return (
        <div>
          Welcome, {currentUser.username}!
        <button onClick={() => logOut()} className="ui button basic">Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign up</Link>
          <br />
          <Link to="/login">Log in</Link>
          <br/>
          {/* <button onClick={() => logOut()}>Logout</button> */}
        </div>
      );
    }
  }
}

export default Greeting;
