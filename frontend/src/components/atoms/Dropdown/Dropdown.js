import React from 'react';
import Select from 'react-select';
import styles from './Dropdown.module.scss';

const options = [
  {value: 'lowestPrice', label: 'najniższa cena'},
  {value: 'highestPrice', label: 'najwyzsza cena'}
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


const Dropdown = () => {
  return (
    <Select
      className={styles.select}
      options={options}
      placeholder="sortuj"
      styles={customStyles}
    />
  )
};

export default Dropdown;