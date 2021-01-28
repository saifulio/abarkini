import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

// Import custom components
import TopBar from '../common/header/TopBar';
import Navigation from '../common/header/Navigation';
import FooterBar from '../common/footer/FooterBar';
import Copyright from '../common/footer/Copyright';
// import renderText from '../common/form/renderText';
// import CustomizedSnackbar from '../common/snakebar/CustomizedSnackbar';

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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', redirect: false };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
    fetch(`/api/v1/session`, {
      method: 'POST',
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      })
      .catch((err) => console.error('Error:', err))
      .then(() => this.setState({ redirect: true }));
  };

  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <TopBar />
        <div id="wrapper" className="container">
          <Navigation />
          <section className="header_text sub">
            <img className="pageBanner" src="/img/pageBanner.png" alt="Login or Register" />
            <h4>
              <span>Login</span>
            </h4>
          </section>
          <section className="main-content">
            <div className="row">
              <div className="span3"></div>
              <div className="span6">
                <h4 className="title">
                  <span className="text">
                    <strong>Login</strong> Form
                  </span>
                </h4>
                <form onSubmit={this.submitHandler}>
                  <input type="hidden" name="next" value="/" />
                  <fieldset>
                    <div className="control-group">
                      <label className="control-label">Email</label>
                      <div className="controls">
                        <input
                          type="text"
                          placeholder="Enter your email"
                          id="email"
                          className="input-xlarge"
                          name="email"
                          onChange={this.emailChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <label className="control-label">Email</label>
                      <div className="controls">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          id="password"
                          className="input-xlarge"
                          name="password"
                          onChange={this.passwordChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="control-group">
                      <input
                        tabIndex="3"
                        className="btn btn-inverse large"
                        type="submit"
                        value="Sign into your account"
                      />
                      <hr />
                      <p className="reset">
                        Recover your{' '}
                        <a tabIndex="4" href="#" title="Recover your username or password">
                          username or password
                        </a>
                      </p>
                      <p>
                        Don't have an account? <Link to={'/register'}>Create one</Link>.
                      </p>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </section>
          <FooterBar />
          <Copyright />
        </div>
      </div>
    );
  }
}

/*
<div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Login" />
        {errorMessage && (
          <CustomizedSnackbar variant="error" className={classes.margin} message={errorMessage} />
        )}
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Field type="text" name="email" component={renderText} label="Username" />
            <br />
            <Field type="password" name="password" component={renderText} label="Password" />
            <br />
            <div className={classes.btnDiv}>
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Login
              </Button>
              <p>
                Don't have an account? <Link to={'/signup'}>Create one</Link>.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
*/
const validateLogin = (values) => {
  const errors = {};

  const requiredFields = ['email', 'password'];
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
  validate: validateLogin, // ←Callback function for client-side validation
})(withStyles(styles)(LoginForm));
