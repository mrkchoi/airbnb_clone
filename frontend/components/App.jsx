import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './NavBar/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SignupFormContainer from './SessionForm/signup_form_container';


const App = () => {
  return (
    <div>
      <header>
        <h1>airbnb...</h1>
        <GreetingContainer />      
        <br/>
        <AuthRoute path='/login' component={LoginFormContainer}/>
        <AuthRoute path='/signup' component={SignupFormContainer}/>
      </header>
    </div>
  );
}

export default App;