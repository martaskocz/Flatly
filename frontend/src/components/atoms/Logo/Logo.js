import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Logo.module.scss';

const Logo = ({ to }) => {
  const classValue = classNames(styles.logo);
  return (
    <Link
      exact
      aria-label="Logo"
      className={classValue}
      to={to}
      type="button"
    />
    );
};

Logo.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Logo;
