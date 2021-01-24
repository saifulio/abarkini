import React from 'react';
import BlockRight from '../products/BlockRight';

const CartMain = () => {
  return (
    <section className="main-content">
      <div className="row">
        <div className="span9">
          <h4 className="title">
            <span className="text">
              <strong>Your</strong> Cart
            </span>
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" value="option1" />
                </td>
                <td>
                  <a href="product_detail.html">
                    <img alt="" src="/img/ladies/9.jpg" />
                  </a>
                </td>
                <td>Fusce id molestie massa</td>
                <td>
                  <input type="text" placeholder="1" className="input-mini" />
                </td>
                <td>$2,350.00</td>
                <td>$2,350.00</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" value="option1" />
                </td>
                <td>
                  <a href="product_detail.html">
                    <img alt="" src="/img/ladies/1.jpg" />
                  </a>
                </td>
                <td>Luctus quam ultrices rutrum</td>
                <td>
                  <input type="text" placeholder="2" className="input-mini" />
                </td>
                <td>$1,150.00</td>
                <td>$2,450.00</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" value="option1" />
                </td>
                <td>
                  <a href="product_detail.html">
                    <img alt="" src="/img/ladies/3.jpg" />
                  </a>
                </td>
                <td>Wuam ultrices rutrum</td>
                <td>
                  <input type="text" placeholder="1" className="input-mini" />
                </td>
                <td>$1,210.00</td>
                <td>$1,123.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  <strong>$3,600.00</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <h4>What would you like to do next?</h4>
          <p>
            Choose if you have a discount code or reward points you want to use or would like to
            estimate your delivery cost.
          </p>
          <label className="radio">
            <input
              type="radio"
              name="optionsRadios"
              id="optionsRadios1"
              value="option1"
              checked=""
            />
            Use Coupon Code
          </label>
          <label className="radio">
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
            Estimate Shipping &amp; Taxes
          </label>
          <hr />
          <p className="cart-total right">
            <strong>Sub-Total</strong>: $100.00
            <br />
            <strong>Eco Tax (-2.00)</strong>: $2.00
            <br />
            <strong>VAT (17.5%)</strong>: $17.50
            <br />
            <strong>Total</strong>: $119.50
            <br />
          </p>
          <hr />
          <p className="buttons center">
            <button className="btn" type="button">
              Update
            </button>
            <button className="btn" type="button">
              Continue
            </button>
            <button className="btn btn-inverse" type="submit" id="checkout">
              Checkout
            </button>
          </p>
        </div>
        <BlockRight />
      </div>
    </section>
  );
};

export default CartMain;
