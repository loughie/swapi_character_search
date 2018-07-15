import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../../styles/img/logo.png';
import search from '../../styles/icons/search.svg';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '100px 0',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    '@media (max-width: 720px)': {
      padding: '50px 0',
    }
  },
  logo: {
    width: '60%'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 0 0',
    width: '70%'
  },
  input: {
    padding: '15px 10px',
    flex: 1,
    fontSize: '1.2em',
    backgroundColor: '#fff',
    outline: 'none',
    color: '#263238',
    borderRadius: '0 3px 3px 0',
    borderWidth: '4px',
    borderColor: '#2979FF',
    borderStyle: 'solid',
    borderLeft: 'none',
    '@media (max-width: 720px)': {
      borderLeft: '4px solid #2979FF',
    }
  },
  resultsHolder: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listItem: {
    width: '100%'
  },
  button: {
    width: '100%',
    border: 'none',
    fontSize: '1.2em',
    textAlign: 'left',
    padding: '10px 15px',
    cursor: 'pointer',
    backgroundColor: '#9E9E9E'
  },
  focus: {
    backgroundColor: '#2979FF',
    color: '#fff',
    '@media (max-width: 720px)': {
      backgroundColor: '#9E9E9E',
      color: 'initial'
    }
  },
  icon: {
    backgroundColor: '#fff',
    padding: '0 0 0 5px',
    borderRadius: '3px 0 0 3px',
    borderWidth: '4px',
    borderColor: '#2979FF',
    borderStyle: 'solid',
    borderRight: 'none',
    '@media (max-width: 720px)': {
      display: 'none'
    }
  }
});


export default class CharacterSearchForm extends React.Component {
  state = {
    results: [],
    selectedIndex: 0,
    noResults: false
  }

  // Triggered when text is input.
  // TODO: Turn into switch statement
  _handleInput = (e, characters) => {
    // Filters through list of characters, see's if characters name contains text input
    // and returns array with each characters object that was found.
    const foundNames = characters.filter((character) => {
      return character.name.toUpperCase().includes(e.target.value.toUpperCase());
    });
    if (e.target.value.length >= 2 && foundNames.length === 0) {
      this.setState({ results: [], noResults: true });
    } else if (e.target.value.length >= 2) {
      this.setState({ results: foundNames, noResults: false });
    } else {
      this.setState({ results: [], noResults: false });
    }
  };

  // When user clicks or keys down on a character this function is called.
  // Takes characters obj as param.
  _selectCharacter = (character) => {
    const { selectCharacter } = this.props;
    this.setState({
      results: [],
      selectedIndex: 0
    });
    // Passes character obj to props
    selectCharacter(character);
  };

  // Handles users keyboard activity when navigating and selecting characters.
  // TODO: Turn into switch statement
  _handleKeyDown = (e) => {
    const { results, selectedIndex } = this.state
    if (results.length > 0) {
      if (e.keyCode === 40 && selectedIndex < this.list.childNodes.length - 1) {
        this.setState(prevState => ({ selectedIndex: prevState.selectedIndex + 1 }));
      } else if (e.keyCode === 38 && selectedIndex > 0) {
        this.setState(prevState => ({ selectedIndex: prevState.selectedIndex - 1 }));
      } else if (e.keyCode === 13) {
        this.simulateClick.click()
      }
    }
  };

  render() {
    const { characters } = this.props;
    const { results, selectedIndex, noResults } = this.state;
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.imgHolder)}>
          <img className={css(styles.logo)} alt="logo" src={logo} />
        </div>
        <div className={css(styles.inputContainer)}>
          <img className={css(styles.icon)} alt="search" src={search} />
          <input
            placeholder="Enter search term"
            className={css(styles.input)}
            type="text"
            onChange={(e) => { this._handleInput(e, characters) }}
            onKeyDown={(e) => { this._handleKeyDown(e) }}
          />
        </div>
        <ol ref={(ref) => { this.list = ref; }} className={css(styles.resultsHolder)}>
          {(noResults) && (
            <li>No Results</li>
          )}
          {results && (
            results.map((result, index) => {
              if (index < 10) {
                return (
                  <li key={result.name} className={css(styles.listItem)}>
                    <button
                      type="button"
                      id="result"
                      ref={selectedIndex === index ? (ref) => { this.simulateClick = ref; } : null}
                      className={css(styles.button, selectedIndex === index ? styles.focus : null)}
                      onClick={() => { this._selectCharacter(result) }}
                    >
                      {result.name}
                    </button>
                  </li>
                )
              } return null
            })
          )}
        </ol>
      </div>
    );
  }
}
