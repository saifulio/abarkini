import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';

import RegisterMain from './RegisterMain';

import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';

// Import custom components
import renderText from '../common/form/renderText';

const styles = {
  root: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  card: {
    padding: 20,
    overflow: 'auto',
  },
  cardHeader: {
    textAlign: 'center',
  },
  btnDiv: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 21,
  },
};

const RegisterForm = (props) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <Navigation />
        <section className="header_text sub">
          <img className="pageBanner" src="/img/pageBanner.png" alt="Login or Register" />
          <h4>
            <span>Login or Register</span>
          </h4>
        </section>
        <RegisterMain />
        <FooterBar />
        <Copyright />
      </div>
    </div>
  );
};

const validateRegister = (values) => {
  const errors = {};

  const requiredFields = ['first_name', 'last_name', 'email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '(Invalid email address.)';
  }
  return errors;
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
  validate: validateRegister, // ←Callback function for client-side validation
})(withStyles(styles)(RegisterForm));
