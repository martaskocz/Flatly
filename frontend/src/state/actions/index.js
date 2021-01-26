export const FETCH_ALL = 'FETCH_ALL';
export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';

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