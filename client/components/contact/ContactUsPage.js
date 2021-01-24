import React from 'react';
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';
import GoogleMap from './GoogleMap';
import HeaderText from '../common/header/HeaderText';
import ContactUsMain from './ContactUsMain';

import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

const ContactUsPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <GoogleMap />
        <section className="header_text sub">
          <img className="pageBanner" src="/img/pageBanner.png" alt="New products" />
          <h4>
            <span>Contact Us</span>
          </h4>
        </section>
        <ContactUsMain />

        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

export default ContactUsPage;
