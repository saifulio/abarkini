import React from 'react';
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';
import ProductsMain from './ProductsMain';
import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

const ProductsPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <section className="header_text">
          <img className="pageBanner" src="img/pageBanner.png" alt="New products" />
          <h4>
            <span>New products</span>
          </h4>
        </section>
        <ProductsMain />
        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

export default ProductsPage;
