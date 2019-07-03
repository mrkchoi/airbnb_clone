import React from 'react';
import { Route } from 'react-router-dom';

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
        <Route path='/login' component={LoginFormContainer}/>
        <Route path='/signup' component={SignupFormContainer}/>
      </header>
    </div>
  );
}

export default App;