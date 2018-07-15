import React from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import SearchResultSquare from '../SearchResultSquare/SearchResultSquare'

export default class CharacterFilms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      films: props.selectedCharacter.films,
      filmTitles: [],
      error: null
    };
  }

  componentDidMount() {
    this.getfilms()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      films: nextProps.selectedCharacter.films,
      filmTitles: []
    }, () => {
      this.getfilms()
    })
  }

  getfilms = () => {
    const filmTitles = []
    const axiosPromises = []
    this.state.films.forEach((url) => {
      axiosPromises.push(axios.get(url))
    })
    axios.all(axiosPromises).then((results) => {
      results.forEach((res) => {
        filmTitles.push(res.data.title)
      })
    })
    .then(() => {
      this.setState({ filmTitles: filmTitles })
    })
    .catch((err) => {
      this.setState({ error: err })
    })
  }

  render() {
    const { filmTitles } = this.state
    return (
      <SearchResultSquare title="Features In...">
        <ul className={css(styles.list)}>
          {filmTitles.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </SearchResultSquare>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    gridTemplateColumns: '1fr',
    gridGap: '15px',
    padding: '20px',
  }
});
