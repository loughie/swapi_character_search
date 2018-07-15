import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

const wrapper = shallow(<Loading />);

describe('Loading', () => {

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
