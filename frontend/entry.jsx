import React from 'react';
import ReactDOM from 'react-dom';

import { signUp, logIn, logOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;

  ReactDOM.render(
    <h1>Yassssss</h1>,
    root  
  );
});

