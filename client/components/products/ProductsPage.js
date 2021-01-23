import React from 'react';
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';
import HeaderText from '../common/header/HeaderText';
import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <HeaderText />
        <OurClients />
        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

export default LandingPage;
