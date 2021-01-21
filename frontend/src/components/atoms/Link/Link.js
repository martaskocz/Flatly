import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Link.module.scss';

const sizeClasses = {
  xs: styles.xs,
  s: styles.s,
  m: styles.m,
  l: styles.l
};

const Link = ({to, exact, children, size}) => {

  const classValue = classNames(sizeClasses[size]);

  return(
    <NavLink className={classValue} to={to} exact={exact}>{children}</NavLink>
  )
};

export default Link;