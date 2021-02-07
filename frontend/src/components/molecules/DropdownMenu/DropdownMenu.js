import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import styles from './DropdownMenu.module.scss';

const DropdownMenu = ({navLinks}) => {

  const menuRef = useRef(null);
  const [isActive, setActive] = useState(false);

  const onClick = () => setActive(!isActive);

  const wrapperButton=classNames([
    styles.hamburger,
    isActive ? styles.active : ''
  ]);

  const wrapperList=classNames([
    styles.list,
    isActive ? styles.activeList : ''
  ]);

  return(
    <div className={styles.container}>
      <button
        className={wrapperButton}
        onClick={onClick}
        type="button"
      >
        <span className={styles.all}>
          <span className={styles.first}/>
        </span>
      </button>
      <nav className={wrapperList} ref={menuRef}>
        <ul>
          {navLinks.map(item=> (
            <NavLink exact className={styles.link} to={item.to}>{item.label}</NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

DropdownMenu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string
    })).isRequired
};

export default DropdownMenu;