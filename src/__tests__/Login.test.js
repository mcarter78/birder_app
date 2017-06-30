import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Components/Login';

// use later
// const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});
