import React from 'react';
import FlatCard from '../../molecules/FlatCard/FlatCard';
import Flat1 from '../../../assets/images/flat1.jpeg';
import Flat2 from '../../../assets/images/flat2.jpeg';
import styles from './HouseAdv.module.scss';

const flats = [
  {
    id: 1,
    propertyType: 'Mieszkanie',
    price: '300 000 zł',
    areaLiving: '50 m2',
    rooms: '2',
    country: 'Hiszpania',
    city: 'Barcelona',
    address: 'Gaudi Street 18',
    image: Flat1
  },
  {
    id: 2,
    propertyType: 'Mieszkanie',
    price: '400 000 zł',
    areaLiving: '60 m2',
    rooms: '3',
    country: 'Hiszpania',
    city: 'Barcelona',
    address: 'Gaudi Street 20',
    image: Flat2
  },
  {
    id: 3,
    propertyType: 'Mieszkanie',
    price: '500 000 zł',
    areaLiving: '70 m2',
    rooms: '3',
    country: 'Hiszpania',
    city: 'Barcelona',
    address: 'Gaudi Street 20',
    image: Flat1
  },
  {
    id: 4,
    propertyType: 'Mieszkanie',
    price: '600 000 zł',
    areaLiving: '80 m2',
    rooms: '3',
    country: 'Hiszpania',
    city: 'Barcelona',
    address: 'Gaudi Street 20',
    image: Flat2
  },
  {
    id: 5,
    propertyType: 'Mieszkanie',
    price: '550 000 zł',
    areaLiving: '70 m2',
    rooms: '3',
    country: 'Hiszpania',
    city: 'Barcelona',
    address: 'Gaudi Street 20',
    image: Flat1
  },
  {
    id: 6,
    propertyType: 'Mieszkanie',
    price: '650 000 zł',
    areaLiving: '80 m2',
    rooms: '3',
    country: 'Hiszpania',
    city: 'Barcelona',
    address: 'Gaudi Street 20',
    image: Flat2
  }
];

const HouseAdv = () => {

  return(
    <div className={styles.wrapper}>
      {flats.map(item => (
      <FlatCard
        key={item.id}
        propertyType={item.propertyType}
        price={item.price}
        areaLiving={item.areaLiving}
        rooms={item.rooms}
        country={item.country}
        city={item.city}
        image={item.image}
      />
      ))}
    </div>
  )
};

export default HouseAdv;