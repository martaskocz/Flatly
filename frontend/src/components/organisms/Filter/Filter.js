import React from 'react';
import { useDispatch } from "react-redux";
import IconButton from '../../atoms/IconButton/IconButton';
import styles from './Filter.module.scss';
import { FETCH_ALL, FILTER_BY_COUNTRY } from "../../../state/actions";
import { routes } from '../../../routes';

const countries = {
  sp: 'spain',
  it: 'italy',
  pt: 'portugal',
  cr: 'croatia'
};

const Filter = () => {

    const dispatch = useDispatch();

    const changeCountry = (country) => {
      dispatch({type: FILTER_BY_COUNTRY, payload: country});
    };

    const displayAll = () => {
      dispatch({type: FETCH_ALL})
    };

    const {root, spain, italy, portugal, croatia} = routes;

    return(
        <div className={styles.wrapper}>
            <IconButton
              onClick={displayAll}
              to={root}>
                All
            </IconButton>
            <IconButton
              country="Spain"
              onClick={() => changeCountry(countries.sp)}
              to={spain}>
                Hiszpania
            </IconButton>
            <IconButton
              country="Italy"
              onClick={() => changeCountry(countries.it)}
              to={italy}>
                Włochy
            </IconButton>
            <IconButton
              country="Portugal"
              onClick={() => changeCountry(countries.pt)}
              to={portugal}>
                Portugalia
            </IconButton>
            <IconButton
              country="Croatia"
              onClick={() => changeCountry(countries.cr)}
              to={croatia}>
                Chorwacja
            </IconButton>
        </div>
    )
};

export default Filter;