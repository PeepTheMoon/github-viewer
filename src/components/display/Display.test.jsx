import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Display name="Rachel Donahue" username="PeepTheMoon" followerCount={4} followingCount={5} profileLink="https://github.com/peepthemoon" />);
    expect(wrapper).toMatchSnapshot();
  });
});
