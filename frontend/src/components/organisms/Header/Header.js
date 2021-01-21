import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Link from '../../atoms/Link/Link';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5';
import styles from './Header.modules.scss';

const Header = () => {
  return(
    <header className={styles.wrapper}>
      <div className={styles.wrapperLogoDesc}>
        <Logo to="/"/>
        <Paragraph size="m" margin="top">pierwszy dedykowany portal nieruchomości za granicą</Paragraph>
      </div>
      <Paragraph size="m"><IoHeartOutline size="2.5rem" color="#00C2CB"/> Ulubione</Paragraph>
      <div>
        <IconContext.Provider value={{ color: "#4C627B", size: "2.5rem", style: { margin: "1rem"} }}>
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaLinkedin/>
        </IconContext.Provider>
      </div>
      <div>
        <Link to="/oferty" size="m">Oferty</Link>
        <Link to="/porady" size="m">Porady</Link>
        <Link to="/kontakt" size="m">Kontakt</Link>
      </div>
    </header>
  )
};

export default Header;

