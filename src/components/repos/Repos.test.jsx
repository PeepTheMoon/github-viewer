import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Repos repos={['https://github.com/peepthemoon/repos']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
