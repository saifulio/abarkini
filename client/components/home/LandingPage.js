import React from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';
import HomePageSlider from './HomePageSlider';
import HeaderText from './HeaderText';
import Copyright from './Copyright';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <HomePageSlider />
        <HeaderText />
      </div>
      <Copyright />
    </div>
  );
};

export default LandingPage;
