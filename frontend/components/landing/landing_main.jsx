import React from 'react';
import Header from '../navbar/header';
import Landing from '../landing/landing';

class LandingMain extends React.Component {
  render () {
    return (
      <div className="landing__container-main">
        <Header type={"header__landing"}/>
        <Landing />
      </div>
    );
  }
}

export default LandingMain;