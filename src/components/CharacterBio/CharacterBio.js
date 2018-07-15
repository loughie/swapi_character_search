import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchResultSquare from '../SearchResultSquare/SearchResultSquare'

const styles = StyleSheet.create({
  list: {
    display: 'grid',
    alignContent: 'center',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '15px',
    padding: '20px',
  }
});

const CharacterBio = (props) => {
  const { selectedCharacter } = props
  return (
    <SearchResultSquare title="Bio">
      <ul className={css(styles.list)}>
        <li>Name:</li>
        <li>{selectedCharacter.name}</li>
        <li>Gender:</li>
        <li>{selectedCharacter.gender}</li>
        <li>Birth Year:</li>
        <li>{selectedCharacter.birth_year}</li>
        <li>Height:</li>
        <li>{selectedCharacter.height}</li>
        <li>Weight:</li>
        <li>{selectedCharacter.mass}</li>
        <li>Skin Color:</li>
        <li>{selectedCharacter.skin_color}</li>
        <li>Eye Color:</li>
        <li>{selectedCharacter.eye_color}</li>
        <li>Hair Color:</li>
        <li>{selectedCharacter.hair_color}</li>
      </ul>
    </SearchResultSquare>
  );
}

export default CharacterBio;
