import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LandingMain from './landing/landing_main';
import SearchContainer from './search/search_container';


const App = () => {
  return (
    <main className="main__container">
      <Switch>
        <AuthRoute exact path="/" component={LandingMain} />
        {/* <Route exact path="/" component={Landing} /> */}
        <ProtectedRoute path="/listings" component={SearchContainer} />
      </Switch>
    </main>
  );
}

export default App;
