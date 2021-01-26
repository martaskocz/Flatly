import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import styles from './IconButton.module.scss';

const IconButton = ({country, children, to, onClick}) => {

  const classValue = classNames([styles.wrapper, styles.m]);
  const countryCode = country? country.toLowerCase() : '';

  return(
    <NavLink activeClassName={styles.active} className={classValue} exact onClick={onClick} to={{pathname: to}} type="submit">
      <SVG classNames={styles.icon} src={`assets/${countryCode}.svg`} width={28} height={14}/>
      <span>{children}</span>
    </NavLink>
  )
};

export default IconButton;