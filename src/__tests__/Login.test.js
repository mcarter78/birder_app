import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Components/Login';

// use later
// const wrapper = shallow(<Login />);

describe('Login Component tests:', () => {

  it('renders without crashing', () => {
    shallow(<Login />);
  });

});