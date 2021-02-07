/* eslint-disable camelcase  */
import Flat01_1 from "../../assets/images/flats/01/1.jpg";
import Flat02_1 from "../../assets/images/flats/02/1.jpg";
import Flat03_1 from "../../assets/images/flats/03/1.jpg";
import Flat04_1 from "../../assets/images/flats/04/1.jpg";
import Flat05_1 from "../../assets/images/flats/05/1.jpg";
import Flat06_1 from "../../assets/images/flats/06/1.jpg";
import Flat07_1 from "../../assets/images/flats/07/1.jpg";
import Flat08_1 from "../../assets/images/flats/08/1.jpg";
import Flat09_1 from "../../assets/images/flats/09/1.jpg";
import Flat10_1 from "../../assets/images/flats/10/1.jpg";
/* eslint-enable */
import {
    FETCH_ALL,
    FILTER_BY_COUNTRY,
    SORT_BY_PRICE_LOWEST,
    SORT_BY_PRICE_HIGHEST,
    SELECT_DROPDOWN_VALUE,
    FILTER_BY_PRICE_THRESHOLD
} from "../actions";

// flat data model
// {
//      id: 1,
//      propertyType: 'Mieszkanie',     PropTypes.oneOf ['Mieszkanie', 'Dom']
//      price: 300000,                  Proptypes.Number
//      areaLiving: 50,                 PropTypes.Number
//      rooms: 2,                       PropTypes.Number
//      bathrooms: 1,                   PropTypes.Number
//      countryPL: 'Hiszpania',         PropTypes.String
//      countryEN: 'Spain',             remove
//      city: 'Barcelona',              PropTypes.String
//      addressText: 'Gaudi Street 18', PropTypes.String
//      coordinates: [41.390, 2.154],   PropTypes.arrayOf Numbers (latitude and longitude)
//      images: [Flat1, Flat2]          PropTypes.arrayOf images
//      publishedAt: "2021-02-02T12:00:00.00Z"  timestamp
// },

const initialState = {
    flats: [
        {
            id: 1,
            propertyType: 'Mieszkanie',
            price: 300000,
            areaLiving: 50,
            rooms: 2,
            bathrooms: 1,
            countryPL: 'Hiszpania',
            countryEN: 'Spain',
            city: 'Barcelona',
            addressText: 'Gaudi Street 18',
            coordinates: [41.390, 2.154],
            image: Flat01_1
        },
        {
            id: 2,
            propertyType: 'Mieszkanie',
            price: 400000,
            areaLiving: 60,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Hiszpania',
            countryEN: 'Spain',
            city: 'Madryt',
            addressText: 'Gaudi Street 20',
            coordinates: [41.392, 2.155],
            image: Flat02_1
        },
        {
            id: 3,
            propertyType: 'Mieszkanie',
            price: 500000,
            areaLiving: 70,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Hiszpania',
            countryEN: 'Spain',
            city: 'Barcelona',
            addressText: 'Gaudi Street 20',
            coordinates: [41.391, 2.149],
            image: Flat03_1
        },
        {
            id: 4,
            propertyType: 'Mieszkanie',
            price: 600000,
            areaLiving: 80,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Portugalia',
            countryEN: 'Portugal',
            city: 'Porto',
            addressText: 'Gaudi Street 20',
            coordinates: [41.149, -8.611],
            image: Flat04_1
        },
        {
            id: 5,
            propertyType: 'Mieszkanie',
            price: 550000,
            areaLiving: 70,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Włochy',
            countryEN: 'Italy',
            city: 'Rzym',
            addressText: 'Gaudi Street 20',
            coordinates: [41.892, 12.511],
            image: Flat05_1
        },
        {
            id: 6,
            propertyType: 'Mieszkanie',
            price: 650000,
            areaLiving: 80,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Włochy',
            countryEN: 'Italy',
            city: 'Neapol',
            addressText: 'Gaudi Street 20',
            coordinates: [40.856, 14.246],
            image: Flat06_1
        },
        {
            id: 7,
            propertyType: 'Mieszkanie',
            price: 150000,
            areaLiving: 63,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Chorwacja',
            countryEN: 'Croatia',
            city: 'Dubrownik',
            addressText: 'Bojana Street 20',
            coordinates: [42.648, 18.092],
            image: Flat07_1
        },
        {
            id: 8,
            propertyType: 'Mieszkanie',
            price: 180000,
            areaLiving: 63,
            rooms: 3,
            bathrooms: 1,
            countryPL: 'Chorwacja',
            countryEN: 'Croatia',
            city: 'Dubrownik',
            addressText: 'Bojana Street 20',
            coordinates: [42.628, 18.072],
            image: Flat08_1
        },
        {
            id: 9,
            propertyType: 'Mieszkanie',
            price: 150000,
            areaLiving: 40,
            rooms: 1,
            bathrooms: 1,
            countryPL: 'Chorwacja',
            countryEN: 'Croatia',
            city: 'Split',
            addressText: 'Krkicia Street 20',
            coordinates: [43.509, 16.439],
            image: Flat09_1
        },
        {
            id: 10,
            propertyType: 'Mieszkanie',
            price: 250000,
            areaLiving: 40,
            rooms: 1,
            bathrooms: 1,
            countryPL: 'Chorwacja',
            countryEN: 'Croatia',
            city: 'Split',
            addressText: 'Krkicia Street 20',
            coordinates: [43.519, 16.449],
            image: Flat10_1
        }
    ],
    filteredFlats: [],
    activeCountry: 'europe',
    all: true
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case FETCH_ALL:
            return {
                ...state,
                flats: state.flats,
                activeCountry: 'europe',
                all: true
            };
        case FILTER_BY_COUNTRY: {
            return {
                ...state,
                filteredFlats: state.flats.filter((item) => item.countryEN.toLowerCase() === payload),
                activeCountry: payload,
                all: false
            };
        }
        case FILTER_BY_PRICE_THRESHOLD: {
            return {
                ...state,
                flats: state.flats.filter(item => item.price <= payload),
                filteredFlats: state.filteredFlats.filter(item => item.price <= payload)
            }
        }
        case SORT_BY_PRICE_LOWEST: {
            console.log(state);
            return {
                ...state,
                flats: state.flats.slice().sort((a,b) => a.price - b.price),
                filteredFlats: state.filteredFlats.slice().sort((a,b) => a.price - b.price)
            };
        }
        case SORT_BY_PRICE_HIGHEST: {
            console.log(state);
            return {
                ...state,
                flats: state.flats.slice().sort((a,b) => b.price - a.price),
                filteredFlats: state.filteredFlats.slice().sort((a,b) => b.price - a.price)
            };
        }
        case SELECT_DROPDOWN_VALUE: {
            return {
                ...state,
                selectedOption: payload.value
            }
        }
        default:
            return state
    }
};

export default reducer;
