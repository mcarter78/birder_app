import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Components/Input/Button';

// use later
// const wrapper = shallow(<Button />);

describe('Button Component tests:', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
});
