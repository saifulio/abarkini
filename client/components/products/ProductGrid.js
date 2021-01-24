import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from './ProductBox';
import Pagination from './Pagination';

const ProductGrid = () => {
  let rows = [
    {
      url: 'img/ladies/9.jpg',
      title: 'Fusce id molestie massa',
      category: 'Phasellus consequat',
      price: '$341',
    },
    {
      url: 'img/ladies/8.jpg',
      title: 'Fusce id molestie massa',
      category: 'Phasellus consequat',
      price: '$341',
    },
    {
      url: 'img/ladies/7.jpg',
      title: 'Wuam ultrices rutrum',
      category: 'PSuspendisse aliquet',
      price: '$341',
    },
    {
      url: 'img/ladies/6.jpg',
      title: 'Praesent tempor sem sodales',
      category: 'Nam imperdiet',
      price: '$49',
    },

    {
      url: 'img/ladies/1.jpg',
      title: 'Fusce id molestie massa',
      category: 'Phasellus consequat',
      price: '$35',
    },
    {
      url: 'img/ladies/2.jpg',
      title: 'Tempor sem sodales',
      category: 'Gravida placerat',
      price: '$61',
    },
    {
      url: 'img/ladies/3.jpg',
      title: 'Quam ultrices rutrum',
      category: 'Orci et nisl iaculis',
      price: '$233',
    },
    {
      url: 'img/ladies/4.jpg',
      title: 'Tempor sem sodales',
      category: 'Urna nec lectus mollis',
      price: '$134',
    },
    {
      url: 'img/ladies/5.jpg',
      title: 'Luctus quam ultrices',
      category: 'Suspendisse aliquet',
      price: '$261',
    },
  ];

  let products = [];

  for (var i = 0; i < rows.length; i++) {
    products.push(
      <ProductBox
        imgurl={rows[i].url}
        title={rows[i].title}
        category={rows[i].category}
        price={rows[i].price}
        key={i}
      />
    );
  }

  return (
    <div className="span9">
      <ul className="thumbnails listing-products">{products}</ul>
      <hr />
      <Pagination />
    </div>
  );
};

export default ProductGrid;
