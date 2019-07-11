import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleTripClick = this.handleTripClick.bind(this);
  }

  handleLogout() {
    this.props.logOut();
    this.props.closeModal();
  }

  handleTripClick(e) {
    e.preventDefault();
    this.props.history.push(`/trips/${this.props.currentUserId}`);
  }

  render() {
    return (
      <div className="navbar__dropdown-container">
        <ul className="navbar__dropdown-list">
          <li className="navbar__dropdown-listitem">
            <a
              href="#"
              className="navbar__dropdown-link"
              onClick={this.handleTripClick}
            >
              Trips
            </a>
          </li>
          <li className="navbar__dropdown-listitem">
            <a
              className="navbar__dropdown-link"
              onClick={this.handleLogout}
            >
              Log Out
            </a>
          </li>
          <li className="navbar__dropdown-listitem">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kenneth-choi-42502a35/"
              className="navbar__dropdown-link navbar__dropdown-link--special"
            >
              LinkedIn
            </a>
          </li>
          <li className="navbar__dropdown-listitem">
            <a
              target="_blank"
              href="https://github.com/mrkchoi"
              className="navbar__dropdown-link navbar__dropdown-link--special"
            >
              Github
            </a>
          </li>
          <li className="navbar__dropdown-listitem">
            <a
              target="_blank"
              href="http://kchoi.io/"
              className="navbar__dropdown-link navbar__dropdown-link--special"
            >
              Website
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavbarDropdown);