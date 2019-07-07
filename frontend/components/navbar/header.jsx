import React from 'react';
import GreetingContainer from './greeting_container';
import Modal from '../modal/modal';
import SearchBar from '../search/search_bar';

import { Link } from 'react-router-dom';

const Header = (props) => {
  let { type } = props;
  let searchBar;

  if (props.currentUser) {
    searchBar = <SearchBar />;
  } else {
    searchBar = null;
  }

  return (
    <header className={`header__container ${type}`}>
      {/* Modal */}
      <Modal />

      {/* Logo */}
      <div className="header__logo-search-container">
        <div className="header__logo-container">
          <Link className="header__logo-img" to="/"></Link>
        </div>

        {/* SearchBar (conditional rendering based on route) */}
        <div className="header__search-container">
          {searchBar}
        </div>
      </div>
      
      {/* NavBar (conditional rendering based on logged in/logged out) */}
      <GreetingContainer />
    </header>
  );
};

export default Header;
