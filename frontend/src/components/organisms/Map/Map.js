import React from 'react';
import { useSelector } from "react-redux";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import SetView from './SetView';
import styles from './Map.module.scss';

const greatBritain = [51.505, -0.09];
const europe = [52.577, 17.106];
const spain = [40.416, -3.703];
const italy = [41.903, 12.496];
const portugal = [39.557, -7.853];
const croatia = [44.474, 16.469];

const flatlyIcon = new L.Icon ({
  iconUrl: './assets/favicon.svg',
  iconSize: [38, 55],
});

const Map = () => {

  const flats = useSelector(state => state.filteredFlats && !state.all ? state.filteredFlats : state.flats);
  const activeCountry = useSelector(state => state.activeCountry);

  const location = {
    'europe': europe,
    'spain': spain,
    'italy': italy,
    'portugal': portugal,
    'croatia': croatia
  };

  const zoom = {
    'europe': 4,
    'spain': 6,
    'italy': 6,
    'portugal': 7,
    'croatia': 7
  };

  return(
    <div className={styles.wrapper}>
    <MapContainer center={spain} className={styles.map} scrollWheelZoom={false} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetView center={location[activeCountry]} zoom={zoom[activeCountry]}/>
      {flats.map(flat => (
        <Marker icon={flatlyIcon} position={flat.coordinates}>
          <Tooltip>
            {flat.price}
          </Tooltip>
          <Popup>{flat.propertyType}</Popup>
        </Marker>
      ))}
      <Marker icon={flatlyIcon} position={[51.505, -0.09]}>
        <Popup>
          London flat <br /> Select to see more.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )
};

export default Map;