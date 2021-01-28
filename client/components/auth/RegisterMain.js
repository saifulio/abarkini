import React from 'react';
import BlockRight from '../products/BlockRight';

const RegisterMain = () => {
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
          <form action="#" method="post" className="form-stacked">
            <fieldset>
              <div className="control-group">
                <label className="control-label">Username</label>
                <div className="controls">
                  <input type="text" placeholder="Enter your username" className="input-xlarge" />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Email address:</label>
                <div className="controls">
                  <input type="password" placeholder="Enter your email" className="input-xlarge" />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Password:</label>
                <div className="controls">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input-xlarge"
                  />
                </div>
              </div>
              <div className="control-group">
                <p>
                  Now that we know who you are. I'm not a mistake! In a comic, you know how you can
                  tell who the arch-villain's going to be?
                </p>
              </div>
              <hr />
              <div className="actions">
                <input
                  tabindex="9"
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
};

export default RegisterMain;
