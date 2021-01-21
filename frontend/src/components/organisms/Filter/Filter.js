import React from 'react';
import IconButton from '../../atoms/IconButton/IconButton';
import styles from './Filter.module.scss';

const Filter = () => {
  return(
    <div className={styles.wrapper}>
      <IconButton>All</IconButton>
      <IconButton country="Spain">Hiszpania</IconButton>
      <IconButton country="Italy">Włochy</IconButton>
      <IconButton country="Portugal">Portugalia</IconButton>
      <IconButton country="Croatia">Chorwacja</IconButton>
    </div>
  )
};

export default Filter;