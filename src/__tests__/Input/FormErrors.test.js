import React from 'react';
import { shallow } from 'enzyme';
import FormErrors from '../../Components/Input/FormErrors';

// use later
// const wrapper = shallow(<FormErrors />);

describe('FormErrors Component tests:', () => {
  it('renders without crashing', () => {
    shallow(<FormErrors />);
  });
});
