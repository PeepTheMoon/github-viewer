import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';

describe('InputForm component', () => {
  it('renders App', () => {
    const wrapper = shallow(<InputForm username="PeepTheMoon" onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
