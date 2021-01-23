import React from 'react';

const TopBar = () => {
  return (
    <div id="top-bar" className="container">
      <div className="row">
        <div className="span4">
          <form method="POST" className="search_form">
            <input
              type="text"
              className="input-block-level search-query"
              placeholder="eg. T-sirt"
            />
          </form>
        </div>
        <div className="span8">
          <div className="account pull-right">
            <ul className="user-menu">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="cart.html">Your Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="register.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
