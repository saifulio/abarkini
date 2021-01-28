import React from 'react';
import ProductBox from '../products/ProductBox';

const MainContent = () => {
  return (
    <section className="main-content">
      <div className="row">
        <div className="span12">
          <div className="row">
            <div className="span12">
              <h4 className="title">
                <span className="pull-left">
                  <span className="text">
                    <span className="line">
                      Feature <strong>Products</strong>
                    </span>
                  </span>
                </span>
                <span className="pull-right">
                  <a className="left button" href="#myCarousel" data-slide="prev"></a>
                  <a className="right button" href="#myCarousel" data-slide="next"></a>
                </span>
              </h4>
              <div id="myCarousel" className="myCarousel carousel slide">
                <div className="carousel-inner">
                  <div className="active item">
                    <ul className="thumbnails">
                      <ProductBox
                        imgurl={'/img/ladies/1.jpg'}
                        title={'Ut wisi Enim Ad'}
                        category={'Commodo consequat'}
                        price={'$17.25'}
                      />
                      <ProductBox
                        imgurl={'/img/ladies/2.jpg'}
                        title={'Quis nostrud exerci tation'}
                        category={'Quis nostrud'}
                        price={'$32.50'}
                      />
                      <ProductBox
                        imgurl={'/img/ladies/3.jpg'}
                        title={'Know exactly turned'}
                        category={'Quis nostrud'}
                        price={'$14.20'}
                      />
                      <ProductBox
                        imgurl={'/img/ladies/4.jpg'}
                        title={'You think fast'}
                        category={'World once'}
                        price={'$31.45'}
                      />
                    </ul>
                  </div>
                  <div className="item">
                    <ul className="thumbnails">
                      <ProductBox
                        imgurl={'/img/ladies/5.jpg'}
                        title={'Ut wisi Enim Ad'}
                        category={'Commodo consequat'}
                        price={'$22.30'}
                      />
                      <ProductBox
                        imgurl={'/img/ladies/6.jpg'}
                        title={'Ut wisi enim ad'}
                        category={'Commodo consequat'}
                        price={'$40.25'}
                      />
                      <ProductBox
                        imgurl={'/img/ladies/7.jpg'}
                        title={'You think water'}
                        category={'World once'}
                        price={'$10.45'}
                      />
                      <ProductBox
                        imgurl={'/img/ladies/8.jpg'}
                        title={'Quis nostrud exerci'}
                        category={'Quis nostrud'}
                        price={'$35.50'}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="span12">
              <h4 className="title">
                <span className="pull-left">
                  <span className="text">
                    <span className="line">
                      Latest <strong>Products</strong>
                    </span>
                  </span>
                </span>
                <span className="pull-right">
                  <a className="left button" href="#myCarousel-2" data-slide="prev"></a>
                  <a className="right button" href="#myCarousel-2" data-slide="next"></a>
                </span>
              </h4>
              <div id="myCarousel-2" className="myCarousel carousel slide">
                <div className="carousel-inner">
                  <div className="active item">
                    <ul className="thumbnails">
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware2.jpg'}
                        title={'Ut wisi Enim Ad'}
                        category={'Commodo consequat'}
                        price={'$25.50'}
                        id={1}
                        categoryId={1}
                      />
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware1.jpg'}
                        title={'Quis nostrud exerci tation'}
                        category={'Quis nostrud'}
                        price={'$17.55'}
                        id={2}
                        categoryId={1}
                      />
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware6.jpg'}
                        title={'Know exactly turned'}
                        category={'Quis nostrud'}
                        price={'$25.30'}
                        id={3}
                        categoryId={1}
                      />
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware5.jpg'}
                        title={'You think fast'}
                        category={'World once'}
                        price={'$25.60'}
                        id={4}
                        categoryId={1}
                      />
                    </ul>
                  </div>
                  <div className="item">
                    <ul className="thumbnails">
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware4.jpg'}
                        title={'Know exactly'}
                        category={'Quis nostrud'}
                        price={'$45.50'}
                        id={5}
                        categoryId={2}
                      />
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware3.jpg'}
                        title={'Ut wisi enim ad'}
                        category={'Commodo consequat'}
                        price={'$33.50'}
                        id={6}
                        categoryId={2}
                      />
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware2.jpg'}
                        title={'You think water'}
                        category={'World once'}
                        price={'$45.30'}
                        id={7}
                        categoryId={2}
                      />
                      <ProductBox
                        imgurl={'/img/cloth/bootstrap-women-ware1.jpg'}
                        title={'Quis nostrud exerci'}
                        category={'Quis nostrud'}
                        price={'$25.20'}
                        id={8}
                        categoryId={2}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature_box">
            <div className="span4">
              <div className="service">
                <div className="responsive">
                  <img src="/img/feature_img_2.png" alt="" />
                  <h4>
                    MODERN <strong>DESIGN</strong>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and printing industry unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            <div className="span4">
              <div className="service">
                <div className="customize">
                  <img src="/img/feature_img_1.png" alt="" />
                  <h4>
                    FREE <strong>SHIPPING</strong>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and printing industry unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            <div className="span4">
              <div className="service">
                <div className="support">
                  <img src="/img/feature_img_3.png" alt="" />
                  <h4>
                    24/7 LIVE <strong>SUPPORT</strong>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and printing industry unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
