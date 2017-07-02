import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {

  }
};

class Button extends Component {
  render() {
    return (
      <input
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
