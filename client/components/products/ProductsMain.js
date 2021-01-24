import React from 'react';
import ProductGrid from './ProductGrid';

const ProductsMain = () => {
  return (
    <div id="wrapper" class="container">
      <section class="main-content">
        <div class="row">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
};

export default ProductsMain;
