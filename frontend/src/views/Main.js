import React from 'react';
import Header from '../components/organisms/Header/Header';
import Filter from '../components/organisms/Filter/Filter';
import HouseAdv from '../components/organisms/HouseAdv/HouseAdv';
import Map from '../components/organisms/Map/Map';
import styles from './Main.module.scss';

const Main = () => (
  <>
    <div className={styles.headerWrapper}>
      <Header/>
      <Filter/>
    </div>
    <div className={styles.adsWrapper}>
      <HouseAdv/>
      <Map/>
    </div>
  </>
);

export default Main;