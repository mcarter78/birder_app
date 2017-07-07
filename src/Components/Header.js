import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';

const styles = {
  header: {
    height: '150px'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }
  render() {
    if (this.props.logged_in) {
      return (
        <nav style={styles.header}>
          <IndexLink
            to="/"
            activeClassName="active">
            Home
          </IndexLink>
          {' | '}
          <Link
            to="/profile"
            activeClassName="active">
            Profile
          </Link>
          {' | '}
          <a
            href="/logout"
            onClick={this.logOut}>
            Log Out
          </a>
        </nav>
      );
    } else {
      return (
        <nav style={styles.header}>
          <IndexLink
            to="/"
            activeClassName="active">
            Home
          </IndexLink>
          {' | '}
          <Link
            to="/login"
            activeClassName="active">
            Log In
          </Link>
        </nav>
      );
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  logged_in: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return { logged_in: state.session };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
