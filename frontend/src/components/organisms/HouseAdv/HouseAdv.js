import React from 'react';
import { useSelector } from "react-redux";
import FlatCard from '../../molecules/FlatCard/FlatCard';
import styles from './HouseAdv.module.scss';

const HouseAdv = () => {

  const flats = useSelector(state => state.filteredFlats && !state.all ? state.filteredFlats : state.flats);

  return(
    <div className={styles.wrapper}>
      {flats.map(item => (
      <FlatCard
        areaLiving={item.areaLiving}
        city={item.city}
        countryPL={item.countryPL}
        image={item.image}
        key={item.id}
        price={item.price}
        propertyType={item.propertyType}
        rooms={item.rooms}
      />
      ))}
    </div>
  )
};

export default HouseAdv;