import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    textTransform: 'capitalize',
    fontSize: '1.4em',
    borderRadius: '0 0 3px 3px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '@media (max-width: 720px)': {
      fontSize: '0.8em',
    }
  },
  titleBar: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#2979FF',
    borderRadius: '3px 3px 0 0'
  },
  main: {
    backgroundColor: '#fff',
    color: '#263238',
    flexGrow: 1,
    alignItems: 'center',
  }
});

const SearchResultSquare = (props) => {
  const { title, children } = props
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.titleBar)}>
        <h1>{title}</h1>
      </div>
      <div className={css(styles.main)}>
        {children}
      </div>
    </div>
  );
}

export default SearchResultSquare
