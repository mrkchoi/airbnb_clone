import React from 'react';
import SearchBarLandingContainer from '../search/search_bar_landing_container';

const Landing = props => {
  return (
    <div className="header__container-outer">
      {/* <Header /> */}
      <div className="header__search-wrapper">
        <h1 className="header__search-header">
          Book unique places to stay and things to do.
        </h1>
        <div className="header__search-form-wrapper">
          <SearchBarLandingContainer />
        </div>
      </div>
      <div className="header__desc-container">
        <p className="header__desc-content">
          Introducing Aerbnb Luxe<br />
          Extraordinary homes<br />
          with five–star everything
          </p>
      </div>
    </div>
  );
}


export default Landing;

