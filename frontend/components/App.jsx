import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import Header from './navbar/header';
import Landing from './landing/landing';
import SearchContainer from './search/search_container';


const App = () => {
  return (
    <main className="main__container">
      <Route path="/" component={Header}/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <AuthRoute path="/listings" component={SearchContainer} />
      </Switch>
    </main>
  );
}

export default App;
