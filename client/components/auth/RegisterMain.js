import React from 'react';
// import BlockRight from '../products/BlockRight';

class RegisterMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', password2: '' };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password, this.state.password2);
    fetch(`/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error('Error:', err));
  };

  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  password2ChangeHandler = (event) => {
    this.setState({ password2: event.target.value });
  };

  render() {
    return (
      <section className="main-content">
        <div className="row">
          <div className="span3"></div>
          <div className="span6">
            <h4 className="title">
              <span className="text">
                <strong>Register</strong> Form
              </span>
            </h4>
            <form onSubmit={this.submitHandler}>
              <fieldset>
                <div className="control-group">
                  <label className="control-label">Email:</label>
                  <div className="controls">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="input-xlarge"
                      name="email"
                      onChange={this.emailChangeHandler}
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Password:</label>
                  <div className="controls">
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="input-xlarge"
                      onChange={this.passwordChangeHandler}
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Password Again:</label>
                  <div className="controls">
                    <input
                      name="password2"
                      type="password"
                      placeholder="Enter your password again"
                      className="input-xlarge"
                      onChange={this.password2ChangeHandler}
                    />
                  </div>
                </div>
                <div className="control-group">
                  <p></p>
                </div>
                <hr />
                <div className="actions">
                  <input
                    tabIndex="9"
                    className="btn btn-inverse large"
                    type="submit"
                    value="Create your account"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterMain;
