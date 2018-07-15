import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CharacterSearchForm from '../CharacterSearchForm/CharacterSearchForm';
import Result from '../Result/Result';
import grains from '../../styles/img/grains.png';

const styles = StyleSheet.create({
  holder: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '1fr 1fr',
    backgroundImage: `url(${grains}), linear-gradient(to right, #263238 0%,#455a64 100%)`,
    backgroundRepeat: 'repeat',
    '@media (max-width: 720px)': {
      gridTemplateColumns: '1fr',
      overflow: 'auto'
    }
  }
});

export default class MainContent extends React.Component {
  state = {
    selectedCharacter: null,
  }

  _selectCharacter = (character) => {
    this.setState({ selectedCharacter: character })
  }

  render() {
    const { characters } = this.props
    const { selectedCharacter } = this.state
    return (
      <div className={css(styles.holder)}>
        <CharacterSearchForm
          characters={characters}
          selectCharacter={this._selectCharacter}
        />
        <Result
          selectedCharacter={selectedCharacter}
        />
      </div>
    );
  }
}
