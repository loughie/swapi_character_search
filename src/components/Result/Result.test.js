import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

const wrapper = shallow(<Result />);

describe('Result', () => {
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
