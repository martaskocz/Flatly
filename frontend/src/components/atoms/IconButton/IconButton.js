import React from 'react';
import classNames from 'classnames';
import styles from './IconButton.module.scss';
import SVG from 'react-inlinesvg';

const IconButton = ({country, children, hrefValue, onClick}) => {

  const classValue = classNames(styles.wrapper);
  const countryCode = country? country.toLowerCase() : '';

  return(
    <a className={classValue} onClick={onClick} href={hrefValue}>
      <SVG classNames={styles.icon} src={`assets/${countryCode}.svg`} width={28} height={14}/>
      <span>{children}</span>
    </a>
  )
};

export default IconButton;