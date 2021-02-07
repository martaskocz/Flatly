import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './Dropdown.module.scss';

const customStyles = {
  placeholder: () => ({
    color: '#4c627b'
  }),
  option: (provided, state) => ({
    ...provided,
    color: '#4c627b',
    backgroundColor: state.isSelected ? '#e6e6e6' : 'white',
    padding: 10,
  }),
  control: () => ({
    display: 'flex',
    color: '#4c627b',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 800ms',
    color: '#4c627b'
  })
};

const Dropdown = ({onChange, options, placeholder, value}) => (
    <Select
      className={styles.select}
      isSearchable={false}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      value={value}
    />
);

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Dropdown.defaultProps = {
  placeholder: 'sort',
  value: null
};

export default Dropdown;