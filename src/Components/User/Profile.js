import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import EntryApi from '../../utils/EntryApi';
import Avatar from './Avatar';
import avatar from '../../images/avatar.png';

const styles = {
  outerCol: {
    border: '2px solid rgba(119, 119, 119, 0.7)',
    padding: '20px'
  }
};

class Profile extends Component {
  getEntries() {
    return EntryApi.getAllEntries();
  }
  render() {
    return (
      <Col
        md={10}
        mdOffset={1}
        style={styles.outerCol}>
        <Col
          md={2}>
          <Avatar
            source={avatar} />
        </Col>
        <Col
          md={8}>
          <h2>Profile Component</h2>
        </Col>
      </Col>
    );
  }
}

export default Profile;
