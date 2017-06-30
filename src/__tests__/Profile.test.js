import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../Components/Profile';

// Use later
// const wrapper = shallow(<Profile />);

describe('Profile Component tests:', () => {
  it('renders without crashing', () => {
    shallow(<Profile />);
  });
});
