import React from 'react';
import ReactDOM from 'react-dom';

// import { signUp, logIn, logOut } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <h1>Yassssss</h1>,
    root  
  );
});

