import { useMap } from 'react-leaflet';

const SetView = ({center, zoom}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default SetView;