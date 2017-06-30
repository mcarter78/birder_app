import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

// use later
// const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});
