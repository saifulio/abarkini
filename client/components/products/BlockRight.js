import React from 'react';

const BlockRight = () => {
  return (
    <div className="span3 col">
      <div className="block">
        <ul className="nav nav-list">
          <li className="nav-header">SUB CATEGORIES</li>
          <li>
            <a href="products.html">Nullam semper elementum</a>
          </li>
          <li className="active">
            <a href="products.html">Phasellus ultricies</a>
          </li>
          <li>
            <a href="products.html">Donec laoreet dui</a>
          </li>
          <li>
            <a href="products.html">Nullam semper elementum</a>
          </li>
          <li>
            <a href="products.html">Phasellus ultricies</a>
          </li>
          <li>
            <a href="products.html">Donec laoreet dui</a>
          </li>
        </ul>
        <br />
        <ul className="nav nav-list below">
          <li className="nav-header">MANUFACTURES</li>
          <li>
            <a href="products.html">Adidas</a>
          </li>
          <li>
            <a href="products.html">Nike</a>
          </li>
          <li>
            <a href="products.html">Dunlop</a>
          </li>
          <li>
            <a href="products.html">Yamaha</a>
          </li>
        </ul>
      </div>
      <div className="block">
        <h4 className="title">
          <span className="pull-left">
            <span className="text">Randomize</span>
          </span>
          <span className="pull-right">
            <a className="left button" href="#myCarousel" data-slide="prev"></a>
            <a className="right button" href="#myCarousel" data-slide="next"></a>
          </span>
        </h4>
        <div id="myCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="active item">
              <ul className="thumbnails listing-products">
                <li className="span3">
                  <div className="product-box">
                    <span className="sale_tag"></span>
                    <img alt="" src="img/ladies/1.jpg" />
                    <br />
                    <a href="product_detail.html" className="title">
                      Fusce id molestie massa
                    </a>
                    <br />
                    <a href="#" className="category">
                      Suspendisse aliquet
                    </a>
                    <p className="price">$261</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="item">
              <ul className="thumbnails listing-products">
                <li className="span3">
                  <div className="product-box">
                    <img alt="" src="img/ladies/2.jpg" />
                    <br />
                    <a href="product_detail.html" className="title">
                      Tempor sem sodales
                    </a>
                    <br />
                    <a href="#" className="category">
                      Urna nec lectus mollis
                    </a>
                    <p className="price">$134</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <h4 className="title">
          <strong>Best</strong> Seller
        </h4>
        <ul className="small-product">
          <li>
            <a href="#" title="Praesent tempor sem sodales">
              <img src="img/ladies/3.jpg" alt="Praesent tempor sem sodales" />
            </a>
            <a href="#">Praesent tempor sem</a>
          </li>
          <li>
            <a href="#" title="Luctus quam ultrices rutrum">
              <img src="img/ladies/4.jpg" alt="Luctus quam ultrices rutrum" />
            </a>
            <a href="#">Luctus quam ultrices rutrum</a>
          </li>
          <li>
            <a href="#" title="Fusce id molestie massa">
              <img src="img/ladies/5.jpg" alt="Fusce id molestie massa" />
            </a>
            <a href="#">Fusce id molestie massa</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlockRight;
