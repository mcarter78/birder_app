import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  avatar: {
    width: '80px',
    borderRadius: '50%'
  }
};

class Avatar extends Component {
  render() {
    return (
      <img
        alt="Avatar"
        style={styles.avatar}
        src={this.props.source} />
    );
  }
}

Avatar.propTypes = {
  source: PropTypes.string.isRequired
};

export default Avatar;
