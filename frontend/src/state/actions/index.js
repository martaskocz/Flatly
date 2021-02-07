export const FETCH_ALL = 'FETCH_ALL';
export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';
export const SORT_BY_PRICE_LOWEST = 'SORT_BY_PRICE_LOWEST';
export const SORT_BY_PRICE_HIGHEST = 'SORT_BY_PRICE_HIGHEST';
export const SELECT_DROPDOWN_VALUE = 'SELECT_DROPDOWN_VALUE';
export const FILTER_BY_PRICE_THRESHOLD = 'FILTER_BY_PRICE_THRESHOLD';

export const fetchAll = () => (
  {
    type: FETCH_ALL
  }
);

export const filterByCountry = (country) => (
  {
    type: FILTER_BY_COUNTRY,
    payload: country
  }
);

export const filterByPriceThreshold = (price) => (
  {
    type: FILTER_BY_PRICE_THRESHOLD,
    payload: price
  }
);

export const sortByPriceLowest = () => (
  {
    type: SORT_BY_PRICE_LOWEST
  }
);

export const sortByPriceHighest = () => (
  {
    type: SORT_BY_PRICE_HIGHEST
  }
);

export const selectDropdownValue = (selectedOption) => (
  {
    type: SELECT_DROPDOWN_VALUE,
    payload: selectedOption
  }
);