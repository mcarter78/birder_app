import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  input: {
    border: '2px solid rgba(119, 119, 119, 0.7)',
    paddingLeft: '10px',
    fontFamily: '"EB Garamond", serif',
    fontSize: '1.2em',
    height: '50px',
    width: '90%',
    display: 'block',
    margin: '10px auto'
  }
};

class FormInput extends Component {
  render() {
    return (
      <input
        name={this.props.inputName}
        type={this.props.inputType}
        style={styles.input}
        onChange={this.props.change}
        onKeyPress={this.props.keyPress}
        value={this.props.val}
        placeholder={this.props.defaultText} />
    );
  }
}

FormInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
  keyPress: PropTypes.func.isRequired
};

export default FormInput;
