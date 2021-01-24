import React from 'react';

const FooterBar = () => {
  return (
    <section id="footer-bar">
      <div className="row">
        <div className="span3">
          <h4>Navigation</h4>
          <ul className="nav">
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/cart">Your Cart</a>
            </li>
            <li>
              <a href="/register">Login</a>
            </li>
          </ul>
        </div>
        <div className="span4">
          <h4>My Account</h4>
          <ul className="nav">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Wish List</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="span5">
          <p className="logo">
            <img src="/img/logo.png" className="site_logo" alt="" />
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. the Lorem
            Ipsum has been the industry's standard dummy text ever since the you.
          </p>
          <br />
          <span className="social_icons">
            <a className="facebook" href="#">
              Facebook
            </a>
            <a className="twitter" href="#">
              Twitter
            </a>
            <a className="skype" href="#">
              Skype
            </a>
            <a className="vimeo" href="#">
              Vimeo
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FooterBar;
