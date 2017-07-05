import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import FormInput from '../Input/FormInput';
import Button from '../Input/Button';

const styles = {
  outerCol: {
    border: '2px solid rgba(119, 119, 119, 0.7)',
    padding: '0'
  },
  innerCol: {
  },
  fbLogin: {
    margin: '10px auto 0 auto',
    height: '40px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)'
  },
  googleLogin: {
    margin: '10px auto 0 auto',
    height: '40px'
  },
  signup: {
    clear: 'both'
  }
};

class Login extends Component {
  render() {
    return (
      <Col
        md={6}
        mdOffset={3}
        style={styles.outerCol}
      >
        <div
          className="login-component"
          style={styles.login}
        >
          <h2>Log In</h2>
          <Col
            md={6}
            sm={12}
            xs={12}
            style={styles.innerCol}
          >
            <FormInput
              inputType="email"
              defaultText="Email"
            />
            <FormInput
              inputType="password"
              defaultText="Password"
            />
            <Button
              val="Log In"
            />
          </Col>
          <Col
            md={6}
            sm={12}
            xs={12}
            style={styles.innerCol}
          >
            <div
              style={styles.fbLogin}
              className="fb-login-button"
              data-max-rows="1"
              data-width="254"
              data-size="large"
              data-button-type="login_with"
              data-show-faces="false"
              data-auto-logout-link="false"
              data-use-continue-as="true"
            />
            <div
              style={styles.googleLogin}
              className="g-signin2"
              data-width="254"
              data-theme="dark"
              data-longtitle="true"
              data-onsuccess="onSignIn"
            />
          </Col>
          <p style={styles.signup}>
            Don&#39;t have an account&#63;&#32;<Link to="/signup">Sign up now&#33;</Link>
          </p>
        </div>
      </Col>
    );
  }
}

export default Login;
