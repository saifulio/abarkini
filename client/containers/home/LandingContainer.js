import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import LandingPage from '../../components/home/LandingPage';

class LandingContainer extends Component {
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
    return <LandingPage />;
  }
}

export default LandingContainer;
