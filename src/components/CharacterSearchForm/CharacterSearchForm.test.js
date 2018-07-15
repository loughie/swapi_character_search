import React from 'react';
import { shallow } from 'enzyme';
import CharacterSearchForm from './CharacterSearchForm';
import devCharacters from '../../devCharacters'

describe('CharacterSearchForm', () => {

  const wrapper = shallow(
    <CharacterSearchForm
      characters={devCharacters}
      selectCharacter={() => { }}
    />
  );

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render with no results', () => {
    expect(wrapper.find('#result').exists()).toEqual(false);
  })

  it('should show name of a character on the page when searched', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Lu' } })
    expect(wrapper.find('#result').first().text()).toMatch('Luke Skywalker')
  });

  it('should show name of a character on the page when searched regardless of case', () => {
    wrapper.find('input').simulate('change', { target: { value: 'lU' } })
    expect(wrapper.find('#result').first().text()).toMatch('Luke Skywalker')
  });

  it('should clear the search results when a character is selected', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Lu' } })
    wrapper.find('#result').first().simulate('click');
    expect(wrapper.find('#result').exists()).toEqual(false);
  });
});
