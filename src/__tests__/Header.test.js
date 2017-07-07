import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header';

// use later
// const wrapper = shallow(<Header />);

describe('Header Component tests:', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
