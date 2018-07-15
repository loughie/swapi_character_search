import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

const wrapper = shallow(<MainContent />);

describe('MainContent', () => {
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
