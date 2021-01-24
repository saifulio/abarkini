import React from 'react';
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';
import ProductGrid from './ProductGrid';
import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

const ProductsPage = () => {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <section className="header_text">
          <h4>
            <span>New products</span>
          </h4>
        </section>
        <ProductGrid />
        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

export default ProductsPage;
