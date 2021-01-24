import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import CheckoutPage from '../../components/checkout/CheckoutPage';

class CheckoutContainer extends Component {
  constructor(props) {
    super(props);

    // this.submitForm = this.submitForm.bind(this);
  }

  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  /*submitForm(formProps) {
    this.props.actions.login(formProps);
  }*/

  render() {
    return <CheckoutPage />;
  }
}

export default CheckoutContainer;
