import React from 'react';
import PropTypes from 'prop-types';

const ProductBox = (props) => {
  const { classes, imgurl, title, category, price } = props;

  return (
    <li className="span3">
      <div className="product-box">
        <span className="sale_tag"></span>
        <p>
          <a href="product_detail.html">
            <img src={imgurl} alt="" />
          </a>
        </p>
        <a href="product_detail.html" className="title">
          {title}
        </a>
        <br />
        <a href="products.html" className="category">
          {category}
        </a>
        <p className="price">{price}</p>
      </div>
    </li>
  );
};

ProductBox.propTypes = {
  imgurl: PropTypes.string,
  title: PropTypes.any,
  category: PropTypes.string,
  price: PropTypes.string,
};

export default ProductBox;
