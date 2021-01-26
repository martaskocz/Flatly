import Flat1 from "../../assets/images/flat1.jpeg";
import Flat2 from "../../assets/images/flat2.jpeg";
import {
    FETCH_ALL,
    FILTER_BY_COUNTRY
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
            coordinates: [41.190, 2.150],
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
            coordinates: [41.590, 2.153],
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
    activeCountry: 'europe',
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
        default:
            return state
    }
};

export default reducer;
