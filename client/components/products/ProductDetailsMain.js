import React from 'react';
import BlockRight from './BlockRight';

const ProductDetailsMain = () => {
  return (
    <section className="main-content">
      <div className="row">
        <div className="span9">
          <div className="row">
            <div className="span4">
              <a
                href="/img/ladies/1.jpg"
                className="thumbnail"
                data-fancybox-group="group1"
                title="Description 1"
              >
                <img alt="" src="/img/ladies/1.jpg" />
              </a>
              <ul className="thumbnails small">
                <li className="span1">
                  <a
                    href="/img/ladies/2.jpg"
                    className="thumbnail"
                    data-fancybox-group="group1"
                    title="Description 2"
                  >
                    <img src="/img/ladies/2.jpg" alt="" />
                  </a>
                </li>
                <li className="span1">
                  <a
                    href="/img/ladies/3.jpg"
                    className="thumbnail"
                    data-fancybox-group="group1"
                    title="Description 3"
                  >
                    <img src="/img/ladies/3.jpg" alt="" />
                  </a>
                </li>
                <li className="span1">
                  <a
                    href="/img/ladies/4.jpg"
                    className="thumbnail"
                    data-fancybox-group="group1"
                    title="Description 4"
                  >
                    <img src="/img/ladies/4.jpg" alt="" />
                  </a>
                </li>
                <li className="span1">
                  <a
                    href="/img/ladies/5.jpg"
                    className="thumbnail"
                    data-fancybox-group="group1"
                    title="Description 5"
                  >
                    <img src="/img/ladies/5.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="span5">
              <address>
                <strong>Brand:</strong> <span>Apple</span>
                <br />
                <strong>Product Code:</strong> <span>Product 14</span>
                <br />
                <strong>Reward Points:</strong> <span>0</span>
                <br />
                <strong>Availability:</strong> <span>Out Of Stock</span>
                <br />
              </address>
              <h4>
                <strong>Price: $587.50</strong>
              </h4>
            </div>
            <div className="span5">
              <form className="form-inline">
                <label className="checkbox">
                  <input type="checkbox" value="" /> Option one is this and that
                </label>
                <br />
                <label className="checkbox">
                  <input type="checkbox" value="" /> Be sure to include why it's great
                </label>
                <p>&nbsp;</p>
                <label>Qty:</label>
                <input type="text" className="span1" placeholder="1" />
                <button className="btn btn-inverse" type="submit">
                  Add to cart
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="span9">
              <ul className="nav nav-tabs" id="myTab">
                <li className="active">
                  <a href="#home">Description</a>
                </li>
                <li className="">
                  <a href="#profile">Additional Information</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem
                </div>
                <div className="tab-pane" id="profile">
                  <table className="table table-striped shop_attributes">
                    <tbody>
                      <tr className="">
                        <th>Size</th>
                        <td>Large, Medium, Small, X-Large</td>
                      </tr>
                      <tr className="alt">
                        <th>Colour</th>
                        <td>Orange, Yellow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="span9">
              <br />
              <h4 className="title">
                <span className="pull-left">
                  <span className="text">
                    <strong>Related</strong> Products
                  </span>
                </span>
                <span className="pull-right">
                  <a className="left button" href="#myCarousel-1" data-slide="prev"></a>
                  <a className="right button" href="#myCarousel-1" data-slide="next"></a>
                </span>
              </h4>
              <div id="myCarousel-1" className="carousel slide">
                <div className="carousel-inner">
                  <div className="active item">
                    <ul className="thumbnails listing-products">
                      <li className="span3">
                        <div className="product-box">
                          <span className="sale_tag"></span>
                          <a href="product_detail.html">
                            <img alt="" src="/img/ladies/6.jpg" />
                          </a>
                          <br />
                          <a href="product_detail.html" className="title">
                            Wuam ultrices rutrum
                          </a>
                          <br />
                          <a href="#" className="category">
                            Suspendisse aliquet
                          </a>
                          <p className="price">$341</p>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="product-box">
                          <span className="sale_tag"></span>
                          <a href="product_detail.html">
                            <img alt="" src="/img/ladies/5.jpg" />
                          </a>
                          <br />
                          <a href="product_detail.html" className="title">
                            Fusce id molestie massa
                          </a>
                          <br />
                          <a href="#" className="category">
                            Phasellus consequat
                          </a>
                          <p className="price">$341</p>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="product-box">
                          <a href="product_detail.html">
                            <img alt="" src="/img/ladies/4.jpg" />
                          </a>
                          <br />
                          <a href="product_detail.html" className="title">
                            Praesent tempor sem
                          </a>
                          <br />
                          <a href="#" className="category">
                            Erat gravida
                          </a>
                          <p className="price">$28</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul className="thumbnails listing-products">
                      <li className="span3">
                        <div className="product-box">
                          <span className="sale_tag"></span>
                          <a href="product_detail.html">
                            <img alt="" src="/img/ladies/1.jpg" />
                          </a>
                          <br />
                          <a href="product_detail.html" className="title">
                            Fusce id molestie massa
                          </a>
                          <br />
                          <a href="#" className="category">
                            Phasellus consequat
                          </a>
                          <p className="price">$341</p>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="product-box">
                          <a href="product_detail.html">
                            <img alt="" src="/img/ladies/2.jpg" />
                          </a>
                          <br />
                          <a href="product_detail.html">Praesent tempor sem</a>
                          <br />
                          <a href="#" className="category">
                            Erat gravida
                          </a>
                          <p className="price">$28</p>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="product-box">
                          <span className="sale_tag"></span>
                          <a href="product_detail.html">
                            <img alt="" src="/img/ladies/3.jpg" />
                          </a>
                          <br />
                          <a href="product_detail.html" className="title">
                            Wuam ultrices rutrum
                          </a>
                          <br />
                          <a href="#" className="category">
                            Suspendisse aliquet
                          </a>
                          <p className="price">$341</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlockRight />
      </div>
    </section>
  );
};

export default ProductDetailsMain;
