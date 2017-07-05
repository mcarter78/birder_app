import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    border: '2px solid rgba(119, 119, 119, 0.7)',
    fontFamily: '"EB Garamond", serif',
    fontSize: '1.2em',
    width: '90%',
    height: '40px',
    marginBottom: '10px'
  }
};

class Button extends Component {
  render() {
    return (
      <input
        className="button"
        type="submit"
        style={styles.button}
        onClick={this.props.click}
        value={this.props.val}
      />
    );
  }
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired
};

export default Button;
