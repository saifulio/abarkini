import React from 'react';
import ProductGrid from './ProductGrid';
import BlockRight from './BlockRight';

const ProductsMain = () => {
  return (
    <section class="main-content">
      <div class="row">
        <ProductGrid />
        <BlockRight />
      </div>
    </section>
  );
};

export default ProductsMain;
