import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logOut();
  }

  handleOpenModal(type) {
    this.props.openModal(type);
  }

  render() {
    let { currentUser } = this.props;
    let profilePic;
    if (currentUser && currentUser.photoUrl) {
      profilePic = (
        <img
          className="header__navbar-profile-photo" 
          src={currentUser.photoUrl}
          alt="profile photo"
        />
      );
    } else {
      profilePic = (
        <img
          className="header__navbar-profile-photo"
          src={userPhoto}
          alt="profile photo"
        />
      );
    }

    

    if (currentUser) {
      return (
        <div className="header__navbar-container header__navbar-container--logged-in">
          <p className="header__navbar-welcome-msg">
            Welcome back, {currentUser.username}!
          </p>
          <button
            className="header__navbar-profile"
            onClick={() => this.handleOpenModal("profile")}
          >
            <div className="header__navbar-profile-photo-container">
              {profilePic}
            </div>
          </button>
          {/* <a
            className="header__navbar-link header__navbar-link--logout"
            href="#"
            onClick={this.handleLogout}
          >
            Logout
          </a> */}
        </div>
      );
    } else {
      return (
        <div className="header__navbar-container header__navbar-container--logged-out">
          <a 
            className="header__navbar-link header__navbar-link--signup" 
            href="#" 
            onClick={() => this.handleOpenModal('signup')}>
              Sign up
          </a>
          <a 
            className="header__navbar-link header__navbar-link--login" 
            href="#" 
            onClick={() => this.handleOpenModal('login')}>
              Log in
          </a>
        </div>
      );
    }
  }
}

export default Greeting;
