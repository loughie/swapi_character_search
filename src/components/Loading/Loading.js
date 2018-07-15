import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import bgImg from '../../styles/img/stars_bg.jpg';
import logo from '../../styles/img/logo.png';

const styles = StyleSheet.create({
  holder: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImg})`,
    backgroundColor: '#000',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  logo: {
    width: '40%',
    marginBottom: '20px'
  },
  strapline: {
    fontSize: 30,
    color: '#fff'
  }
});

export default class Loading extends React.Component {
  state = {
    loadingDots: '',
    intervalId: null,
  }

  componentWillMount() {
    const intervalId = setInterval(() => {
      if (this.state.loadingDots.length < 3) {
        this.setState({ loadingDots: this.state.loadingDots += '.' })
      } else this.state.loadingDots = ''
    }, 600);
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const { loadingDots } = this.state
    return (
      <div className={css(styles.holder)}>
        <img className={css(styles.logo)} alt="logo" src={logo} />
        <h1 className={css(styles.strapline)}>
          {`CHARGING BLASTERS${loadingDots}`}
        </h1>
      </div>
    )
  }
}
