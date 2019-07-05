import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import Header from './navbar/header';
import ListingIndexContainer from './listings/listing_index_container';


const App = () => {
  return (
    <main className="main__container">
      <div className="header__container-outer">
        <Header />
        <div className="header__desc-container">
          <p className="header__desc-content">
            Introducing Airbnb Luxe<br />
            Extraordinary homes<br />
            with five–star everything
          </p>
        </div>
      </div>

      <ListingIndexContainer />
    </main>
  );
}

export default App;
