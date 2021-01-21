import React from 'react';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';

const sizeClasses = {
  xs: styles.xs,
  s: styles.s,
  m: styles.m,
  l: styles.l
};

const marginClasses = {
  top: styles.top
};

const Paragraph = ({children, size, margin}) => {

  const classValue = classNames(sizeClasses[size], marginClasses[margin]);

  return <p className={classValue}>{children}</p>
};

export default Paragraph;