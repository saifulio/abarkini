import React from 'react';

const Navigation = () => {
  return (
    <section className="navbar main-menu">
      <div className="navbar-inner main-menu">
        <a href="/" className="logo pull-left">
          <img src="/img/logo.png" className="site_logo" alt="" />
        </a>
        <nav id="menu" className="pull-right">
          <ul>
            <li>
              <a href="/products">Woman</a>
              <ul>
                <li>
                  <a href="/products">Lacinia nibh</a>
                </li>
                <li>
                  <a href="/products">Eget molestie</a>
                </li>
                <li>
                  <a href="/products">Varius purus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/products">Man</a>
            </li>
            <li>
              <a href="/products">Sport</a>
              <ul>
                <li>
                  <a href="/products">Gifts and Tech</a>
                </li>
                <li>
                  <a href="/products">Ties and Hats</a>
                </li>
                <li>
                  <a href="/products">Cold Weather</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/products">Hangbag</a>
            </li>
            <li>
              <a href="/products">Best Seller</a>
            </li>
            <li>
              <a href="/products">Top Seller</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
