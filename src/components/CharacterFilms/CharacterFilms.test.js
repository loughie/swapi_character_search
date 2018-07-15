import React from 'react';
import { shallow } from 'enzyme';
import CharacterFilms from './CharacterFilms';

const dummyData = {
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/'
  ],
}

const wrapper = shallow(<CharacterFilms selectedCharacter={dummyData} />);

describe('CharacterFilms', () => {
  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
