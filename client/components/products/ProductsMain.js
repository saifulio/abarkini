import React from 'react';
import ProductGrid from './ProductGrid';
import BlockRight from './BlockRight';

const ProductsMain = () => {
  return (
    <section className="main-content">
      <div className="row">
        <ProductGrid />
        <BlockRight />
      </div>
    </section>
  );
};

export default ProductsMain;
