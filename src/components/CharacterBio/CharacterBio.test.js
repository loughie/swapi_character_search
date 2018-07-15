import React from 'react';
import { shallow } from 'enzyme';
import CharacterBio from './CharacterBio';

const dummyData = {
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/'
  ],
}

const wrapper = shallow(<CharacterBio selectedCharacter={dummyData} />);

describe('CharacterBio', () => {
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
