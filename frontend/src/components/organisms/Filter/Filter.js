import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import IconButton from '../../atoms/IconButton/IconButton';
import styles from './Filter.module.scss';
import {
  FETCH_ALL,
  FILTER_BY_COUNTRY,
  SORT_BY_PRICE_LOWEST,
  SORT_BY_PRICE_HIGHEST,
  SELECT_DROPDOWN_VALUE, FILTER_BY_PRICE_THRESHOLD
} from "../../../state/actions";
import { routes } from '../../../routes';
import Dropdown from "../../atoms/Dropdown/Dropdown";
import {countries, options, dropdownPlaceholder} from './constants';


/*
URL: flatly.in/country/propertyType/
 */

const Filter = () => {

    const dispatch = useDispatch();

    const changeCountry = (country) => {
      dispatch({type: FILTER_BY_COUNTRY, payload: country});
    };

    const displayAll = () => {
      dispatch({type: FETCH_ALL})
    };

    const [selectedOption, selectOption] = useState(null);
    const handleSort = (item) => {
      selectOption(item);
      dispatch({type: SELECT_DROPDOWN_VALUE, payload: item});
       switch(item.value){
         case "lowestPrice":
           dispatch({type: SORT_BY_PRICE_LOWEST});
           break;
         case 'highestPrice':
           dispatch({type: SORT_BY_PRICE_HIGHEST});
           break;
         default:
           dispatch({type: SELECT_DROPDOWN_VALUE, payload: item});
       }
    };

    const changePriceThreshold = (price) => {
      dispatch({type: FILTER_BY_PRICE_THRESHOLD, payload: price})
    };

    const {root, spain, italy, portugal, croatia} = routes;
    const {es, it, pt, hr} = countries;

    return(
        <div className={styles.wrapper}>
          <div className={styles.wrapperFirstLine}>
            <IconButton
              onClick={displayAll}
              to={root}>
              All
            </IconButton>
            <IconButton
              country={es}
              onClick={() => changeCountry(es)}
              to={spain}>
              Hiszpania
            </IconButton>
            <IconButton
              country={it}
              onClick={() => changeCountry(it)}
              to={italy}>
              Włochy
            </IconButton>
            <IconButton
              country={pt}
              onClick={() => changeCountry(pt)}
              to={portugal}>
              Portugalia
            </IconButton>
            <IconButton
              country={hr}
              onClick={() => changeCountry(hr)}
              to={croatia}>
              Chorwacja
            </IconButton>
            <Dropdown onChange={handleSort} options={options} placeholder={dropdownPlaceholder} value={selectedOption}/>
          </div>
          <div>
            <IconButton onClick={() => changePriceThreshold(300000)} to='/a'>{`< 300k €`}</IconButton>
            <IconButton onClick={() => changePriceThreshold(400000)} to='/a'>{`< 400k €`}</IconButton>
            <IconButton onClick={() => changePriceThreshold(500000)} to='/a'>{`< 500k €`}</IconButton>
          </div>
        </div>
    )
};

export default Filter;