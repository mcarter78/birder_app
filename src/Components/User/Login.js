import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import * as sessionActions from '../../actions/sessionActions';
import FormInput from '../Input/FormInput';
import Button from '../Input/Button';
import btnGoogleSignin from '../../images/btn-google-signin.png';
import btnFacebookSignin from '../../images/btn-facebook-signin.png';

const styles = {
  outerCol: {
    border: '2px solid rgba(119, 119, 119, 0.7)',
    padding: '0'
  },
  innerCol: {
  },
  oauthBtn: {
    display: 'block',
    margin: '10px auto 0 auto',
    width: '254px',
    height: '50px'
  },
  signup: {
    clear: 'both'
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    // Set initial component state
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials });
  }
  onEnter(event) {
    // If enter key pressed
    if (event.charCode === 13) {
      // Call the submit function
      this.onSubmit(event);
    }
  }
  onSubmit(event) {
    // Prevent reload on submit
    event.preventDefault();
    // call the logInUser function, passing the credentials
    this.props.actions.logInUser(this.state.credentials);
  }
  render() {
    return (
      <Col
        md={6}
        mdOffset={3}
        style={styles.outerCol}>
        <div
          className="login-component"
          style={styles.login}>
          <h2>Log In</h2>
          <Col
            md={6}
            sm={12}
            xs={12}
            style={styles.innerCol}>
            <FormInput
              inputName="email"
              inputType="email"
              val={this.state.credentials.email}
              keyPress={this.onEnter}
              change={this.onChange}
              defaultText="Email" />
            <FormInput
              inputName="password"
              inputType="password"
              val={this.state.credentials.password}
              keyPress={this.onEnter}
              change={this.onChange}
              defaultText="Password" />
            <Button
              click={this.onSubmit}
              val="Log In" />
          </Col>
          <Col
            md={6}
            sm={12}
            xs={12}
            style={styles.innerCol}>
            <img
              style={styles.oauthBtn}
              alt="Facebook Sign In"
              onClick={this.facebookLogin}
              src={btnFacebookSignin} />
            <img
              style={styles.oauthBtn}
              alt="Google Sign In"
              onClick={this.googleLogin}
              src={btnGoogleSignin} />
            {/* <div
              style={styles.fbLogin}
              className="fb-login-button"
              data-max-rows="1"
              data-width="254"
              data-size="large"
              data-button-type="login_with"
              data-show-faces="false"
              data-auto-logout-link="false"
              data-use-continue-as="true" />
            <div
              style={styles.googleLogin}
              className="g-signin2"
              data-width="254"
              data-theme="dark"
              data-longtitle="true"
              data-onsuccess="onSignIn" /> */}
          </Col>
          <p style={styles.signup}>
            Don&#39;t have an account&#63;&#32;<Link to="/signup">Sign up now&#33;</Link>
          </p>
        </div>
      </Col>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);
