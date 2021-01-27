import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Paragraph.module.scss';

const sizeClasses = {
  xs: styles.xs,
  s: styles.s,
  m: styles.m,
  l: styles.l
};

const marginClasses = {
  default: styles.default,
  top: styles.top
};

const Paragraph = ({children, margin, size}) => {

  const classValue = classNames(sizeClasses[size], marginClasses[margin]);

  return <p className={classValue}>{children}</p>
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  margin: PropTypes.string,
  size: PropTypes.string
};

Paragraph.defaultProps = {
  margin: "default",
  size: "m"
};

export default Paragraph;