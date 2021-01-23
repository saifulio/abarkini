import React from 'react';

const ProductBox = () => {
  return (
    <li className="span3">
      <div className="product-box">
        <span className="sale_tag"></span>
        <p>
          <a href="product_detail.html">
            <img src="img/ladies/1.jpg" alt="" />
          </a>
        </p>
        <a href="product_detail.html" className="title">
          Ut wisi enim ad
        </a>
        <br />
        <a href="products.html" className="category">
          Commodo consequat
        </a>
        <p className="price">$17.25</p>
      </div>
    </li>
  );
};
export default ProductBox;
