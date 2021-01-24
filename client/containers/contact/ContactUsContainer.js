import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import ContactUsPage from '../../components/contact/ContactUsPage';

class ContactUsContainer extends Component {
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
    return <ContactUsPage />;
  }
}

export default ContactUsContainer;
