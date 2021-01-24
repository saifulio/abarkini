import React from 'react';
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';

import CheckoutMain from './CheckoutMain';

import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

const CheckoutPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />

        <section className="header_text sub">
          <img className="pageBanner" src="/img/pageBanner.png" alt="New products" />
          <h4>
            <span>Check out</span>
          </h4>
        </section>
        <CheckoutMain />

        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

export default CheckoutPage;
