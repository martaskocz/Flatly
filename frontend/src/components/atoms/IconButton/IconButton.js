import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import styles from './IconButton.module.scss';

const IconButton = ({country, children, to, onClick}) => {

  const classNavLink = classNames([styles.wrapper, styles.m]);

  return(
    <NavLink exact activeClassName={styles.active} className={classNavLink} onClick={onClick} to={{pathname: to}} type="button">
      <SVG classNames={styles.icon} height={14} src={`assets/${country}.svg`} width={28} />
      <span>{children}</span>
    </NavLink>
  )
};

IconButton.propTypes = {
  children: PropTypes.string.isRequired,
  country: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

IconButton.defaultProps = {
  country: "none"
};

export default IconButton;