import React from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import MainContent from '../MainContent/MainContent';
import Loading from '../Loading/Loading';
import devCharacters from '../../devCharacters';

const styles = StyleSheet.create({
  app: {
    width: '100%',
    height: '100%',
    '@media (max-width: 720px)': {
      minHeight: '100vh',
    }
  }
});

export default class App extends React.Component {
  state = {
    characterList: [],
    characters: null,
    loading: true,
    error: null
  };

  // Starts initial get request for characters
  componentWillMount() {
    // If in development mode characters are set to local data for no loading time
    if (process.env.NODE_ENV === 'development') {
      this.setState({
        characters: devCharacters,
        loading: false
      });
    } else this.getCharacters('https://swapi.co/api/people/?page=1');
  }

  // Runs get requests for people and sends results to be saved
  getCharacters = (url) => {
    axios.get(url)
      .then((res) => {
        this.saveCharacters(res.data);
      })
      .catch((error) => {
        this.setState({ error })
      })
  };

  // Saves characters to state and sends next url to be fetched if there is one
  saveCharacters = (characters) => {
    const { characterList } = this.state

    characterList.push(...characters.results);
    if (characters.next) {
      this.getCharacters(characters.next);
    } else {
      this.setState({
        characters: characterList,
        loading: false
      });
    }
  };


  render() {
    const { characters, loading, error } = this.state
    return (
      <div className={css(styles.app)}>
        {characters && !loading && !error ? (
            <MainContent
              characters={characters}
            />
          ) : (
            <Loading />
          )
        }
      </div>
    );
  }
}
