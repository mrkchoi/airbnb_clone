import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

import { signUp, logIn, logOut } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;

  // TESTING END

  ReactDOM.render(
    <Root store={store} />,
    root  
  );
});

