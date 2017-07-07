import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../Components/User/Signup';

// use later
// const wrapper = shallow(<Signup />);

describe('Signup Component tests:', () => {
  it('renders without crashing', () => {
    shallow(<Signup />);
  });
});
