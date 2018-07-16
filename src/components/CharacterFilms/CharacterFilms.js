import React from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import SearchResultSquare from '../SearchResultSquare/SearchResultSquare'

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
    this.getfilms();
  }

  // If props are new - set state to new props, reset array and trigger get films in cb
  componentWillReceiveProps(nextProps) {
    this.setState({
      films: nextProps.selectedCharacter.films,
      filmTitles: []
    }, () => {
      this.getfilms();
    });
  }

  // Gets characters films appeared in. stores urls and passes to axios.all
  // stores response in array which is then set to state for mapping.
  getfilms = () => {
    const filmTitles = [];
    const axiosPromises = [];
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
          {filmTitles.map(item => <li>{item}</li>)}
        </ul>
      </SearchResultSquare>
    );
  }
}
