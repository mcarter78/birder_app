import React, { Component } from 'react';
import Button from '../Input/Button';

class Login extends Component {
  render() {
    return (
      <div className="login-component">
        <h2>Login Component</h2>
        <Button
          val="Login"
        />
      </div>
    );
  }
}

export default Login;
