import React from 'react';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5';
import Logo from '../../atoms/Logo/Logo';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Link from '../../atoms/Link/Link';
import styles from './Header.modules.scss';
import { routes } from '../../../routes';

const Header = () => {
  return(
    <header className={styles.wrapper}>
      <div className={styles.wrapperLogoDesc}>
        <Logo to={routes.root} />
        <Paragraph margin="top" size="m" >zamieszkaj w dowolnym miejscu na świecie</Paragraph>
      </div>
      <Paragraph size="m"><IoHeartOutline color="#00C2CB" size="2.5rem"/> Ulubione</Paragraph>
      <div>
        <IconContext.Provider value={{ color: "#4C627B", size: "2.5rem", style: { margin: "1rem"} }}>
          <FaFacebookSquare/>
          <FaInstagram/>
          <FaLinkedin/>
        </IconContext.Provider>
      </div>
      <div>
        <Link size="m" to="/oferty">Oferty</Link>
        <Link size="m" to="/porady">Porady</Link>
        <Link size="m" to="/kontakt">Kontakt</Link>
      </div>
    </header>
  )
};

export default Header;

