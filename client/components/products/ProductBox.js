import React from 'react';
import PropTypes from 'prop-types';

const ProductBox = (props) => {
  const { imgurl, title, category, price, id, categoryId } = props;

  let productDetailUrl = '/products/' + id;
  let categoryUrl = '/category/' + categoryId;

  console.log(id);
  console.log(productDetailUrl);

  return (
    <li className="span3">
      <div className="product-box">
        <span className="sale_tag"></span>
        <p>
          <a href={productDetailUrl}>
            <img src={imgurl} alt="" />
          </a>
        </p>
        <a href={productDetailUrl} className="title">
          {title}
        </a>
        <br />
        <a href={categoryUrl} className="category">
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
  id: PropTypes.number,
  categoryId: PropTypes.number,
};

export default ProductBox;
