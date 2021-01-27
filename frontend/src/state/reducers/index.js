import Flat1 from "../../assets/images/flat1.jpeg";
import Flat2 from "../../assets/images/flat2.jpeg";
import {
    FETCH_ALL,
    FILTER_BY_COUNTRY,
    SORT_BY_PRICE_LOWEST,
    SORT_BY_PRICE_HIGHEST
} from "../actions";

const initialState = {
    flats: [
        {
            id: 1,
            propertyType: 'Mieszkanie',
            price: 300000,
            areaLiving: 50,
            rooms: 2,
            countryPL: 'Hiszpania',
            countryEN: 'Spain',
            city: 'Barcelona',
            address: 'Gaudi Street 18',
            coordinates: [41.390, 2.154],
            image: Flat1
        },
        {
            id: 2,
            propertyType: 'Mieszkanie',
            price: 400000,
            areaLiving: 60,
            rooms: 3,
            countryPL: 'Hiszpania',
            countryEN: 'Spain',
            city: 'Madryt',
            address: 'Gaudi Street 20',
            coordinates: [41.392, 2.155],
            image: Flat2
        },
        {
            id: 3,
            propertyType: 'Mieszkanie',
            price: 500000,
            areaLiving: 70,
            rooms: 3,
            countryPL: 'Hiszpania',
            countryEN: 'Spain',
            city: 'Barcelona',
            address: 'Gaudi Street 20',
            coordinates: [41.391, 2.149],
            image: Flat1
        },
        {
            id: 4,
            propertyType: 'Mieszkanie',
            price: 600000,
            areaLiving: 80,
            rooms: 3,
            countryPL: 'Portugalia',
            countryEN: 'Portugal',
            city: 'Porto',
            address: 'Gaudi Street 20',
            coordinates: [41.392, 2.151],
            image: Flat2
        },
        {
            id: 5,
            propertyType: 'Mieszkanie',
            price: 550000,
            areaLiving: 70,
            rooms: 3,
            countryPL: 'Włochy',
            countryEN: 'Italy',
            city: 'Rzym',
            address: 'Gaudi Street 20',
            coordinates: [41.892, 12.511],
            image: Flat1
        },
        {
            id: 6,
            propertyType: 'Mieszkanie',
            price: 650000,
            areaLiving: 80,
            rooms: 3,
            countryPL: 'Włochy',
            countryEN: 'Italy',
            city: 'Neapol',
            address: 'Gaudi Street 20',
            coordinates: [40.856, 14.246],
            image: Flat2
        },
        {
            id: 8,
            propertyType: 'Mieszkanie',
            price: 150000,
            areaLiving: 63,
            rooms: 3,
            countryPL: 'Chorwacja',
            countryEN: 'Croatia',
            city: 'Dubrownik',
            address: 'Bojana Street 20',
            coordinates: [42.648, 18.092],
            image: Flat1
        },
        {
            id: 9,
            propertyType: 'Mieszkanie',
            price: 150000,
            areaLiving: 40,
            rooms: 1,
            countryPL: 'Chorwacja',
            countryEN: 'Croatia',
            city: 'Split',
            address: 'Krkicia Street 20',
            coordinates: [43.509, 16.439],
            image: Flat2
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
        default:
            return state
    }
};

export default reducer;
