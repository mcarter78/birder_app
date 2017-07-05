import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../../Components/Input/FormInput';

// use later
// const wrapper = shallow(<FormInput />);

describe('FormInput Component tests:', () => {
  it('renders without crashing', () => {
    shallow(<FormInput />);
  });
});
