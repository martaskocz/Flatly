import React from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { BiBed } from 'react-icons/bi';
import { BsHouseDoor } from 'react-icons/bs';
import { IoPricetagsOutline, IoHeartOutline } from 'react-icons/io5';
import styles from './FlatCard.module.scss';

const FlatCard = ({propertyType, price, areaLiving, rooms, country, city, image}) => {
  return(
    <div className={styles.wrapper}>
      <img alt="flat" src={image}/>
      <IoHeartOutline size="2.5rem" color="#00C2CB"/>
      <div className={styles.content}>
        <div>
          <Paragraph>{propertyType}</Paragraph>
          <Paragraph>{country}, {city}</Paragraph>
          <Paragraph size="l" margin="top"><IoPricetagsOutline/>  {price}</Paragraph>
        </div>
        <div>
          <Paragraph><BsHouseDoor/>  {areaLiving}</Paragraph>
          <Paragraph><BiBed/>  {rooms} pokoje</Paragraph>
        </div>
      </div>

    </div>
  )
};

export default FlatCard;