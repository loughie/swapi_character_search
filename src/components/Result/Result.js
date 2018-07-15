import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CharacterBio from '../CharacterBio/CharacterBio'
import CharacterFilms from '../CharacterFilms/CharacterFilms'
import sadVader from '../../styles/img/sadVader.png'

const styles = StyleSheet.create({
  holder: {
    width: '100%',
    height: '100%',
    color: '#fff',
    display: 'grid',
  },
  noResults: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    alignItems: 'center'
  },
  imgHolder: {
    margin: '25px 0',
    padding: '0 25px'
  },
  imgVader: {
    width: '15%',
    '@media (max-width: 720px)': {
      width: '30%',
    }
  },
  noResultsTopStrap: {
    fontSize: '1.4em',
    margin: '10px 0'
  },
  noResultsBottomStrap: {
    fontWeight: '400'
  },
  imgBank: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    marginTop: '25px'
  },
  favImg: {
    width: '30%'
  },
  results: {
    width: '100%',
    display: 'grid',
    gridGap: '1em',
    padding: '20px',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center',
    alignContent: 'center',
    '@media (max-width: 720px)': {
      gridTemplateColumns: '1fr',
    }
  }
});

const Result = (props) => {
  const { selectedCharacter } = props
  return (
    <div className={css(styles.holder)}>
      {selectedCharacter ? (
        <div className={css(styles.results)}>
          <CharacterBio
            selectedCharacter={selectedCharacter}
          />
          <CharacterFilms
            selectedCharacter={selectedCharacter}
          />
        </div>
        ) : (
          <div className={css(styles.noResults)}>
            <div className={css(styles.imgHolder)}>
              <img alt="sad vader" src={sadVader} className={css(styles.imgVader)} />
              <h2 className={css(styles.noResultsTopStrap)}>
                {"You haven't searched for a character yet!"}
              </h2>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Result
