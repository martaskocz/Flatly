import { useMap } from 'react-leaflet';

export const SetView = ({center, zoom}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

// country zoom & GPS coordinates
const europe = [52.577, 14.500];
const spain = [40.416, -3.703];
const italy = [41.903, 12.496];
const portugal = [39.557, -7.853];
const croatia = [44.474, 16.469];

export const location = {
  'europe': europe,
  'spain': spain,
  'italy': italy,
  'portugal': portugal,
  'croatia': croatia
};

export const zoom = {
  'europe': 4,
  'spain': 6,
  'italy': 6,
  'portugal': 7,
  'croatia': 7
};