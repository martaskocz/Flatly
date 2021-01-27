import React from 'react';
import { useDispatch } from "react-redux";
import IconButton from '../../atoms/IconButton/IconButton';
import styles from './Filter.module.scss';
import { FETCH_ALL, FILTER_BY_COUNTRY, SORT_BY_PRICE_LOWEST, SORT_BY_PRICE_HIGHEST } from "../../../state/actions";
import { routes } from '../../../routes';

const countries = {
  es: 'spain',
  it: 'italy',
  pt: 'portugal',
  hr: 'croatia'
};

const Filter = () => {

    const dispatch = useDispatch();

    const changeCountry = (country) => {
      dispatch({type: FILTER_BY_COUNTRY, payload: country});
    };

    const displayAll = () => {
      dispatch({type: FETCH_ALL})
    };

    const sortByPriceLowest = () => {
      dispatch({type: SORT_BY_PRICE_LOWEST});
    };

    const sortByPriceHighest = () => {
      dispatch({type: SORT_BY_PRICE_HIGHEST});
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
          <button onClick={sortByPriceLowest} type="submit">sort by price low</button>
          <button onClick={sortByPriceHighest} type="submit">sort by price high</button>
        </div>
    )
};

export default Filter;