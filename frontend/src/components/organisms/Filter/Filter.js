import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import IconButton from '../../atoms/IconButton/IconButton';
import styles from './Filter.module.scss';
import {
  FETCH_ALL,
  FILTER_BY_COUNTRY,
  SORT_BY_PRICE_LOWEST,
  SORT_BY_PRICE_HIGHEST,
  SELECT_DROPDOWN_VALUE
} from "../../../state/actions";
import { routes } from '../../../routes';
import Dropdown from "../../atoms/Dropdown/Dropdown";
import {countries, options, dropdownPlaceholder} from './constants';

const Filter = () => {

    const dispatch = useDispatch();

    const changeCountry = (country) => {
      dispatch({type: FILTER_BY_COUNTRY, payload: country});
    };

    const displayAll = () => {
      dispatch({type: FETCH_ALL})
    };

    const [selectedOption, selectOption] = useState(null);
    const handleChange = (item) => {
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

    const {root, spain, italy, portugal, croatia} = routes;
    const {es, it, pt, hr} = countries;

    return(
        <div className={styles.wrapper}>
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
          <Dropdown onChange={handleChange} options={options} placeholder={dropdownPlaceholder} value={selectedOption}/>
        </div>
    )
};

export default Filter;