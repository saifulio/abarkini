import React from 'react';
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';
import HomePageSlider from './HomePageSlider';
import HeaderText from '../common/header/HeaderText';
import MainContent from './MainContent';
import OurClients from './OurClients';
import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <HomePageSlider />
        <section className="header_text">
          We stand for top quality templates. Our genuine developers always optimized bootstrap
          commercial templates.
          <br />, Don't miss to use our cheap abd best bootstrap templates.,
        </section>
        <MainContent />
        <OurClients />
        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

export default LandingPage;
