import React from 'react';
import GreetingContainer from './greeting_container';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header__container">
      {/* Modal */}
      <Modal />

      {/* Logo */}
      <div className="header__logo-container">
        <Link className="header__logo-img" to="/"></Link>
      </div>

      {/* Navbar */}
      <GreetingContainer />
    </header>
  );
};

export default Header;
