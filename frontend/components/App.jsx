import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import Header from './navbar/header';
import ListingIndexContainer from './listings/listing_index_container';
import Landing from './landing/landing';


const App = () => {
  return (
    <main className="main__container">
      <Route path="/" component={Header}/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/listings" component={ListingIndexContainer} />
      </Switch>
    </main>
  );
}

export default App;
