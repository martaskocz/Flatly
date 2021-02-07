import React from 'react';
import PropTypes from 'prop-types';
import { BiBed } from 'react-icons/bi';
import { BsHouseDoor } from 'react-icons/bs';
import { IoPricetagsOutline, IoHeartOutline } from 'react-icons/io5';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import styles from './FlatCard.module.scss';

const FlatCard = ({areaLiving, city, countryPL, image, price, propertyType, rooms}) => {

  const priceTag = price.toLocaleString();

  return(
    <div className={styles.wrapper}>
      <img alt="flat" src={image}/>
      <IoHeartOutline color="#00C2CB" size="2.5rem" />
      <div className={styles.content}>
        <div>
          <Paragraph>{propertyType}</Paragraph>
          <Paragraph size="s">{countryPL}, {city}</Paragraph>
          <Paragraph margin="top" size="l"><IoPricetagsOutline/>  {priceTag} €</Paragraph>
        </div>
        <div>
          <Paragraph size="s"><BsHouseDoor/>  {areaLiving} m2</Paragraph>
          <Paragraph size="s"><BiBed/>  {rooms} pokoje</Paragraph>
        </div>
      </div>

    </div>
  )
};

FlatCard.propTypes = {
  propertyType: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  areaLiving: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  countryPL: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired
};

export default FlatCard;