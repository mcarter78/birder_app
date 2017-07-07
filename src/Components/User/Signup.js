import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import * as sessionActions from '../../actions/sessionActions';
import FormInput from '../Input/FormInput';
import FormErrors from '../Input/FormErrors';
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
  login: {
    clear: 'both'
  }
};

class Signup extends Component {
  constructor(props) {
    super(props);
    // Set initial component state
    this.state = {
      credentials: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      formErrors: { email: '', password: '', confirmPassword: '' },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false
    };
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials },
      () => {
        this.validateField(field, credentials[field]);
      });
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
    // TODO: Sign up the user
    // If successful, call the logInUser function, passing the credentials
    this.props.actions.logInUser(this.state.credentials);
  }
  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' must be at least 6 characters';
        break;
      case 'confirmPassword':
        confirmPasswordValid = value === this.state.credentials.password;
        fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' must match password';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
      confirmPasswordValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid &&
       this.state.confirmPasswordValid });
  }
  render() {
    return (
      <Col
        md={6}
        mdOffset={3}
        style={styles.outerCol}>
        <div
          className="login-component">
          <h2>Sign Up</h2>
          <Col
            md={6}
            sm={12}
            xs={12}
            style={styles.innerCol}>
            <form>
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
              <FormInput
                inputName="confirmPassword"
                inputType="password"
                val={this.state.credentials.confirmPassword}
                keyPress={this.onEnter}
                change={this.onChange}
                req={true}
                defaultText="Confirm Password" />
              <Button
                click={this.onSubmit}
                btnDisabled={!this.state.formValid}
                val="Sign Up" />
            </form>
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
          <p style={styles.login}>
            Already have an account&#63;&#32;<Link to="/login">Log in now&#33;</Link>
          </p>
          {(this.state.formErrors.email !== '' || this.state.formErrors.password !== '' ||
            this.state.formErrors.confirmPassword) ?
            (<FormErrors formErrors={this.state.formErrors} />) : (null)
          }
        </div>
      </Col>
    );
  }
}

Signup.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Signup);
